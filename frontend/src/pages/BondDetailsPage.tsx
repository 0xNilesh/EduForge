import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BondDetailsPage = () => {
  const { bondId } = useParams();
  const [bond, setBond] = useState(null);
  const [proposals, setProposals] = useState([]);
  const [votedProposals, setVotedProposals] = useState(new Set()); // To track which proposals have been voted by the connected wallet
  const walletAddress = "0xabcdef1234567890abcdef1234567890abcdef12"; // Constant wallet address

  // Dummy bond data
  const dummyBonds = [
    {
      description: "Bond A",
      issuer: "0x1234567890abcdef1234567890abcdef12345678",
      interestRate: 5.0,
      fundAmount: 100,
      fundsRaised: 40,
      startTime: "2024-01-01",
      repaid: false,
    },
    {
      description: "Bond B",
      issuer: "0xabcdef1234567890abcdef1234567890abcdef12",
      interestRate: 3.5,
      fundAmount: 50,
      fundsRaised: 50,
      startTime: "2024-02-15",
      repaid: true,
    },
    {
      description: "Bond C",
      issuer: "0x567890abcdef1234567890abcdef123456789012",
      interestRate: 4.2,
      fundAmount: 150,
      fundsRaised: 75,
      startTime: "2024-03-10",
      repaid: false,
    },
  ];

  // Dummy proposals data
  const dummyProposals = [
    {
      title: "Proposal 1",
      description: "Description of proposal 1",
      status: "Pending",
      deadline: "2024-12-15", // Add deadline to the proposal
      executed: false, // Add execution flag
    },
    {
      title: "Proposal 2",
      description: "Description of proposal 2",
      status: "Approved",
      deadline: "2024-12-10",
      executed: true,
    },
    {
      title: "Proposal 3",
      description: "Description of proposal 3",
      status: "Rejected",
      deadline: "2024-11-30",
      executed: false,
    },
  ];

  useEffect(() => {
    // Fetch bond details based on bondId
    const selectedBond = dummyBonds[bondId];
    setBond(selectedBond);

    // Fetch proposals (dummy for now)
    setProposals(dummyProposals);
  }, [bondId]);

  const handleCreateProposal = () => {
    alert("Create Proposal functionality coming soon!");
  };

  const handleWithdrawInitialFunds = () => {
    alert("Withdraw 20% functionality coming soon!");
  };

  const handleApproveProposal = (index) => {
    alert(`Approved Proposal ${index + 1}`);
    setVotedProposals(new Set(votedProposals.add(index)));
  };

  const handleRejectProposal = (index) => {
    alert(`Rejected Proposal ${index + 1}`);
    setVotedProposals(new Set(votedProposals.add(index)));
  };

  const handleExecuteProposal = (index) => {
    alert(`Executed Proposal ${index + 1}`);
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <div className="mt-16">
        {bond ? (
          <div className="container mx-auto py-16 px-4 lg:flex gap-8">
            {/* Left Section: Bond Details */}
            <div className="lg:w-2/3 bg-gray-800 rounded-lg p-8">
              <h1 className="text-3xl font-bold mb-6">{bond.description}</h1>
              <p>
                <strong>Issuer:</strong> {bond.issuer}
              </p>
              <p>
                <strong>Interest Rate:</strong> {bond.interestRate}%
              </p>
              <p>
                <strong>Total Fund Amount:</strong> {bond.fundAmount} ETH
              </p>
              <p>
                <strong>Funds Raised:</strong> {bond.fundsRaised} ETH
              </p>
              <p>
                <strong>Start Time:</strong> {bond.startTime}
              </p>
              <p>
                <strong>Repaid:</strong> {bond.repaid ? "Yes" : "No"}
              </p>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="h-2 w-full bg-gray-700 rounded-md">
                  <div
                    className="h-2 bg-green-500 rounded-md"
                    style={{
                      width: `${(bond.fundsRaised / bond.fundAmount) * 100}%`,
                    }}
                  ></div>
                </div>
                <p className="text-sm mt-1 text-gray-400">
                  {((bond.fundsRaised / bond.fundAmount) * 100).toFixed(2)}% Raised
                </p>
              </div>
            </div>

            {/* Right Section: Wallet Actions */}
            <div className="lg:w-1/3 bg-gray-800 rounded-lg p-8">
              {!walletAddress ? (
                <button
                  disabled
                  className="w-full px-6 py-3 bg-gray-600 rounded-md text-gray-400 cursor-not-allowed"
                >
                  Connect Wallet to Invest
                </button>
              ) : walletAddress.toLowerCase() === bond.issuer.toLowerCase() ? (
                <>
                  <button
                    onClick={handleCreateProposal}
                    className="w-full px-6 py-3 bg-blue-600 rounded-md text-white hover:bg-blue-700 transition-all mb-4"
                  >
                    Create Proposal
                  </button>
                  <button
                    onClick={handleWithdrawInitialFunds}
                    disabled={
                      bond.fundsRaised >= bond.fundAmount * 0.2 && !bond.repaid
                        ? false
                        : true
                    }
                    className={`w-full px-6 py-3 ${
                      bond.fundsRaised >= bond.fundAmount * 0.2 && !bond.repaid
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-gray-600 cursor-not-allowed"
                    } rounded-md text-white transition-all`}
                  >
                    Withdraw 20% Funds
                  </button>
                </>
              ) : (
                <button
                  className="w-full px-6 py-3 bg-blue-600 rounded-md text-white hover:bg-blue-700 transition-all"
                >
                  Invest
                </button>
              )}
            </div>
          </div>
        ) : (
          <p className="text-center py-16">Loading bond details...</p>
        )}

        {/* Bottom Section: Proposals */}
        <div className="container mx-auto py-16 px-4">
          <h2 className="text-2xl font-bold mb-8">Proposals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proposals.length === 0 ? (
              <p className="col-span-full text-center text-gray-400">
                No proposals available.
              </p>
            ) : (
              proposals.map((proposal, index) => {
                const deadlinePassed = new Date() > new Date(proposal.deadline);
                const alreadyVoted = votedProposals.has(index);

                return (
                  <div
                    key={index}
                    className="bg-gray-800 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all"
                  >
                    <h3 className="text-xl font-semibold mb-4">
                      Proposal #{index + 1}
                    </h3>
                    <p><strong>Title:</strong> {proposal.title}</p>
                    <p><strong>Description:</strong> {proposal.description}</p>
                    <p><strong>Status:</strong> {proposal.status}</p>

                    {walletAddress.toLowerCase() !== bond.issuer.toLowerCase() && !alreadyVoted && !deadlinePassed && (
                      <div className="mt-4 flex space-x-4">
                        <button
                          onClick={() => handleApproveProposal(index)}
                          className="px-4 py-2 bg-green-600 rounded-md text-white hover:bg-green-700"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleRejectProposal(index)}
                          className="px-4 py-2 bg-red-600 rounded-md text-white hover:bg-red-700"
                        >
                          Reject
                        </button>
                      </div>
                    )}
                    {alreadyVoted && <span className="text-green-400 mt-2 inline-block">Voted</span>}

                    {deadlinePassed && !proposal.executed && (
                      <div className="mt-4">
                        <button
                          onClick={() => handleExecuteProposal(index)}
                          className="px-4 py-2 bg-purple-600 rounded-md text-white hover:bg-purple-700"
                        >
                          Execute Proposal
                        </button>
                      </div>
                    )}
                    {proposal.executed && (
                      <span className="text-gray-400 mt-2 inline-block">Executed</span>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BondDetailsPage;
