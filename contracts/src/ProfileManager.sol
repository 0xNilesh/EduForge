// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract ProfileManager is Ownable {

    // Structs for different profiles
    struct GranteeProfile {
        address granteeAddress;    // Grantee's wallet address
        string name;               // Name of the grantee (company or individual)
        string bio;                // A short bio or description of the grantee
        string website;            // Optional link to website or project
        bool isVerified;           // Whether the profile has been verified by an admin
        uint256 createdAt;         // Timestamp of profile creation
        uint256 updatedAt;         // Timestamp of last profile update
    }

    struct DeveloperProfile {
        address developerAddress;  // Developer's wallet address
        string name;               // Developer's name or alias
        string skills;             // A short description of the developer's skills
        string portfolio;          // Portfolio link
        uint256 createdAt;         // Timestamp of profile creation
        uint256 updatedAt;         // Timestamp of last profile update
    }

    struct ProductProfile {
        address productOwner;      // Wallet address of the product owner (developer or contract)
        string productName;        // Name of the product
        string productDescription; // Description of the product
        string status;             // Status of the product (e.g., "Micro-grant", "Incubation", "Fundraising")
        uint256 createdAt;         // Timestamp of profile creation
        uint256 updatedAt;         // Timestamp of last profile update
        address[] miniGrantProviders;  // Addresses of those who provided mini-grants
        address[] incubators;      // Addresses of those who incubated the product
        address[] funders;         // Addresses of those who funded the product
    }

    // Mappings to store profiles
    mapping(address => GranteeProfile) public granteeProfiles;
    mapping(address => DeveloperProfile) public developerProfiles;
    mapping(address => ProductProfile) public productProfiles;

    modifier onlyUniqueGranteeProfile() {
        require(granteeProfiles[msg.sender].granteeAddress == address(0), "Grantee profile already exists");
        _;
    }

    modifier onlyUniqueDeveloperProfile() {
        require(developerProfiles[msg.sender].developerAddress == address(0), "Developer profile already exists");
        _;
    }

    constructor() Ownable(msg.sender) { }

    // Grantee Profile Functions

    // Create or update a grantee profile
    function createGranteeProfile(string memory _name, string memory _bio, string memory _website) external onlyUniqueGranteeProfile {
        GranteeProfile storage profile = granteeProfiles[msg.sender];
        profile.granteeAddress = msg.sender;
        profile.name = _name;
        profile.bio = _bio;
        profile.website = _website;
        if (profile.createdAt == 0) {  // If profile is being created for the first time
            profile.createdAt = block.timestamp;
        }
        profile.updatedAt = block.timestamp;
    }

    // Update a grantee profile
    function updateGranteeProfile(string memory _name, string memory _bio, string memory _website) external {
        GranteeProfile storage profile = granteeProfiles[msg.sender];
        require(profile.granteeAddress == msg.sender, "Not the profile owner");
        profile.name = _name;
        profile.bio = _bio;
        profile.website = _website;
        profile.updatedAt = block.timestamp;
    }

    // Verify a grantee profile (admin only)
    function verifyGranteeProfile(address _grantee) external onlyOwner {
        GranteeProfile storage profile = granteeProfiles[_grantee];
        profile.isVerified = true;
    }

    // Developer Profile Functions

    // Create or update a developer profile
    function createDeveloperProfile(string memory _name, string memory _skills, string memory _portfolio) external onlyUniqueDeveloperProfile {
        DeveloperProfile storage profile = developerProfiles[msg.sender];
        profile.developerAddress = msg.sender;
        profile.name = _name;
        profile.skills = _skills;
        profile.portfolio = _portfolio;
        if (profile.createdAt == 0) {  // If profile is being created for the first time
            profile.createdAt = block.timestamp;
        }
        profile.updatedAt = block.timestamp;
    }

    // Update a developer profile
    function updateDeveloperProfile(string memory _name, string memory _skills, string memory _portfolio) external {
        DeveloperProfile storage profile = developerProfiles[msg.sender];
        require(profile.developerAddress == msg.sender, "Not the profile owner");
        profile.name = _name;
        profile.skills = _skills;
        profile.portfolio = _portfolio;
        profile.updatedAt = block.timestamp;
    }

    // Product Profile Functions

    // Create or update a product profile (can be done by smart contracts as well)
    function createProductProfile(address _productOwner, string memory _productName, string memory _productDescription) external {
        ProductProfile storage profile = productProfiles[_productOwner];
        profile.productOwner = _productOwner;
        profile.productName = _productName;
        profile.productDescription = _productDescription;
        profile.status = "Micro-grant"; // Initially status is "Micro-grant"
        if (profile.createdAt == 0) {  // If profile is being created for the first time
            profile.createdAt = block.timestamp;
        }
        profile.updatedAt = block.timestamp;
    }

    // Update product profile status (for transitioning between stages)
    function updateProductProfileStatus(string memory _status) external {
        ProductProfile storage profile = productProfiles[msg.sender];
        require(profile.productOwner == msg.sender, "Not the profile owner");
        profile.status = _status;
        profile.updatedAt = block.timestamp;
    }

    // Add a mini-grant provider
    function addMiniGrantProvider(address _provider) external {
        ProductProfile storage profile = productProfiles[msg.sender];
        require(profile.productOwner == msg.sender, "Not the profile owner");
        profile.miniGrantProviders.push(_provider);
    }

    // Add an incubator
    function addIncubator(address _incubator) external {
        ProductProfile storage profile = productProfiles[msg.sender];
        require(profile.productOwner == msg.sender, "Not the profile owner");
        profile.incubators.push(_incubator);
    }

    // Add a funder
    function addFunder(address _funder) external {
        ProductProfile storage profile = productProfiles[msg.sender];
        require(profile.productOwner == msg.sender, "Not the profile owner");
        profile.funders.push(_funder);
    }

    // Getter Functions

    // Get grantee profile by address
    function getGranteeProfile(address _grantee) external view returns (GranteeProfile memory) {
        return granteeProfiles[_grantee];
    }

    // Get developer profile by address
    function getDeveloperProfile(address _developer) external view returns (DeveloperProfile memory) {
        return developerProfiles[_developer];
    }

    // Get product profile by address
    function getProductProfile(address _productOwner) external view returns (ProductProfile memory) {
        return productProfiles[_productOwner];
    }
}
