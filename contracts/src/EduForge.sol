// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract EduForge is Ownable {
    // Struct to represent a Grant
    struct Grant {
        address granteeAddress; // Grantee's wallet address
        string name; // Name of the grant
        string description; // Description of the grant
        uint256 amount; // Amount of the grant
        address assigneeAddress; // Address of the assignee
        bool open; // Whether the grant is open or closed
        uint256 milestoneFunds; // Funds reserved for milestone-based disbursements
        string category; // Category of project
    }

    // Struct to represent a Proposal for a grant
    struct Proposal {
        uint256 grantId; // Associated grant ID
        address proposerAddress; // Address of the proposer
        string proposalName; // Name of the proposal
        string proposalDescription; // Description of the proposal
        uint256 proposedAmount; // Amount proposed
        bool accepted; // Whether the proposal was accepted
    }

    // Milestone Proof mapping
    mapping(uint256 => mapping(uint256 => string)) public milestoneUpdates; // grantId => (milestoneId => updateProof)

    // Mappings to store grants by ID and proposals by ID
    mapping(uint256 => Grant) public grants;
    mapping(uint256 => Proposal) public proposals;
    uint256 public grantCounter; // Counter to generate unique grant IDs
    uint256 public proposalCounter; // Counter to generate unique proposal IDs

    // Event to emit when a grant is created
    event GrantCreated(uint256 grantId, address indexed grantee, bool open);
    // Event to emit when a proposal is created
    event ProposalCreated(
        uint256 indexed proposalId,
        uint256 indexed grantId,
        address indexed proposer,
        uint256 proposedAmount
    );
    // Event to emit when a proposal is accepted
    event ProposalAccepted(
        uint256 indexed proposalId,
        uint256 indexed grantId,
        address indexed grantee,
        uint256 amount
    );
    event MilestoneFundsReleased(
        uint256 indexed grantId,
        uint256 indexed amount,
        address indexed assignee
    );
    event MilestoneUpdated(
        uint256 indexed grantId,
        uint256 indexed milestoneId,
        string updateProof
    );

    // Modifier to check if the caller is the grantee of the grant
    modifier onlyGrantee(uint256 _grantId) {
        require(
            grants[_grantId].granteeAddress == msg.sender,
            "Not the grantee of the grant"
        );
        _;
    }

    // Modifier to check if the caller is the assignee of the grant
    modifier onlyAssignee(uint256 _grantId) {
        require(
            grants[_grantId].assigneeAddress == msg.sender,
            "Not the assignee of the grant"
        );
        _;
    }

    // Modifier to check if the grant is open
    modifier onlyIfOpen(uint256 _grantId) {
        require(grants[_grantId].open, "Grant is not open");
        _;
    }

    // Constructor
    constructor() Ownable(msg.sender) {}

    // Create a new grant
    function createGrant(
        address _granteeAddress,
        string memory _name,
        string memory _description,
        string memory _category
    ) external {
        grantCounter++; // Increment grant counter for a new ID

        grants[grantCounter] = Grant({
            granteeAddress: _granteeAddress,
            name: _name,
            description: _description,
            amount: 0,
            assigneeAddress: address(0),
            open: true, // New grants are open by default
            milestoneFunds: 0, // Initially no milestone funds
            category: _category
        });

        emit GrantCreated(grantCounter, _granteeAddress, true);
    }

    // Create a proposal for a grant
    function createProposal(
        uint256 _grantId,
        string memory _proposalName,
        string memory _proposalDescription,
        uint256 _proposedAmount
    ) external onlyIfOpen(_grantId) {
        proposalCounter++; // Increment proposal counter for a new ID
        proposals[proposalCounter] = Proposal({
            grantId: _grantId,
            proposerAddress: msg.sender,
            proposalName: _proposalName,
            proposalDescription: _proposalDescription,
            proposedAmount: _proposedAmount,
            accepted: false // Initially set to false
        });
        emit ProposalCreated(
            proposalCounter,
            _grantId,
            msg.sender,
            _proposedAmount
        );
    }

    // Accept a proposal
    function acceptProposal(
        uint256 _proposalId,
        uint256 grantId
    ) external payable onlyGrantee(grantId) {
        Proposal storage proposal = proposals[_proposalId];
        require(!proposal.accepted, "Proposal already accepted");
        require(
            msg.value >= proposal.proposedAmount,
            "Sent value less than grant amount"
        );

        // Mark the proposal as accepted
        proposal.accepted = true;

        // Calculate 30% of the proposed amount for the proposer
        uint256 proposerAmount = (proposal.proposedAmount * 30) / 100;

        // Update the remaining balance for milestone-based disbursement
        uint256 remainingAmount = proposal.proposedAmount - proposerAmount;

        grants[grantId].milestoneFunds = remainingAmount;
        grants[grantId].amount = proposal.proposedAmount;
        grants[grantId].assigneeAddress = proposal.proposerAddress;

        // Transfer 30% of the proposed amount to the proposer
        payable(proposal.proposerAddress).call{value: proposerAmount}("");

        emit ProposalAccepted(_proposalId, grantId, msg.sender, proposerAmount);
    }

    // Update milestone proof
    function updateMilestoneProof(
        uint256 grantId,
        uint256 milestoneId,
        string memory updateProof
    ) external onlyAssignee(grantId) {
        require(bytes(updateProof).length > 0, "Update proof cannot be empty");

        milestoneUpdates[grantId][milestoneId] = updateProof;

        emit MilestoneUpdated(grantId, milestoneId, updateProof);
    }

    // Release milestone funds
    function releaseMilestoneFunds(
        uint256 grantId,
        uint256 amount
    ) external payable onlyGrantee(grantId) {
        require(
            amount <= grants[grantId].milestoneFunds,
            "Amount exceeds funds remaining"
        );

        // Reduce the milestone funds by the released amount
        grants[grantId].milestoneFunds -= amount;

        // Transfer the funds to the assignee
        payable(grants[grantId].assigneeAddress).call{value: amount}("");

        // Emit the event after funds are released
        emit MilestoneFundsReleased(
            grantId,
            amount,
            grants[grantId].assigneeAddress
        );
    }

    // Get details of a grant
    function getGrant(uint256 _grantId) external view returns (Grant memory) {
        return grants[_grantId];
    }

    // Get milestone proof for a grant
    function getMilestoneProof(
        uint256 grantId,
        uint256 milestoneId
    ) external view returns (string memory) {
        return milestoneUpdates[grantId][milestoneId];
    }
}
