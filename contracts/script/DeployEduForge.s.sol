// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "forge-std/Script.sol";
import "../src/EduForge.sol";

contract DeployEduForge is Script {
    function run() external {
        // Start the broadcast to deploy the contract
        vm.startBroadcast(5000_000_000);

        // Deploy the EduForge contract
        EduForge eduForge = new EduForge();

        // Log the deployed contract address
        console.log("EduForge Contract Deployed at:", address(eduForge));

        // End the broadcast
        vm.stopBroadcast();
    }
}
