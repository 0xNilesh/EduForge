import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useReadContract, useWriteContract } from "wagmi";
import { ethers } from "ethers";
import EduForgeABI from "../abi/EduForgeABI.json";
import { useAccount } from "wagmi";

const CONTRACT_ADDRESS = "0xCebe72A311e0C11aCcc00ca33383ff91A5F0F1cc";

const ProposalPage = () => {
  const { id, proposalId } = useParams();
  const { address } = useAccount();
  const [grant, setGrant] = useState(null);
  const [proposal, setProposal] = useState(null);
  const [milestoneProofs, setMilestoneProofs] = useState([]);
  const [showProofForm, setShowProofForm] = useState(false);
  const [proofText, setProofText] = useState("");
  const [milestoneId, setMilestoneId] = useState(1);

  const { data: fetchedGrant } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: EduForgeABI,
    functionName: "getGrant",
    args: [id],
  });

  const { data: fetchedProposal } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: EduForgeABI,
    functionName: "proposals",
    args: [proposalId],
  });

  const { data: fetchedMilestoneProof } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: EduForgeABI,
    functionName: "getMilestoneProof",
    args: [id, milestoneId],
    watch: true, // Ensure updates reflect
  });

  useEffect(() => {
    if (fetchedGrant) {
      setGrant({
        title: fetchedGrant.name,
        author: fetchedGrant.granteeAddress,
        description: fetchedGrant.description,
        category: fetchedGrant.category,
        status: fetchedGrant.open ? "Open" : "Closed",
        milestoneFunds: ethers.utils.formatEther(fetchedGrant.milestoneFunds),
      });
    }

    if (fetchedProposal) {
      setProposal({
        grantId: fetchedProposal[0].toString(),
        proposer: fetchedProposal[1],
        name: fetchedProposal[2],
        description: fetchedProposal[3],
        amount: ethers.utils.formatEther(fetchedProposal[4]),
        accepted: fetchedProposal[5],
      });
    }

    if (fetchedMilestoneProof) {
      setMilestoneProofs((prev) => [
        ...prev,
        { milestoneId, proof: fetchedMilestoneProof },
      ]);
    }
  }, [fetchedGrant, fetchedProposal, fetchedMilestoneProof, milestoneId]);

  const { write: acceptProposal } = useWriteContract({
    address: CONTRACT_ADDRESS,
    abi: EduForgeABI,
    functionName: "acceptProposal",
    args: [proposalId, id],
    overrides: {
        value: proposal && proposal.amount ? ethers.utils.parseEther(proposal.amount) : "0",
      },
    onSuccess() {
      alert("Proposal accepted successfully!");
    },
    onError(error) {
      console.error("Error accepting proposal:", error);
      alert("Failed to accept proposal.");
    },
  });

  const { write: releaseMilestoneFunds } = useWriteContract({
    address: CONTRACT_ADDRESS,
    abi: EduForgeABI,
    functionName: "releaseMilestoneFunds",
    onSuccess() {
      alert("Milestone funds released successfully!");
    },
    onError(error) {
      console.error("Error releasing funds:", error);
      alert("Failed to release funds.");
    },
  });

  const { write: submitProof } = useWriteContract({
    address: CONTRACT_ADDRESS,
    abi: EduForgeABI,
    functionName: "updateMilestoneProof",
    args: [id, milestoneId, proofText],
    onSuccess() {
      alert("Milestone proof submitted successfully!");
      setShowProofForm(false);
      setProofText("");
    },
    onError(error) {
      console.error("Error submitting proof:", error);
      alert("Failed to submit proof.");
    },
  });

  console.log(grant);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-gray-900 to-black text-white p-10">
      {/* Grant Details */}
      {grant && grant?.author &&  (
        <div className="max-w-4xl mx-auto border border-purple-800 rounded-lg px-6 py-6 bg-opacity-20 bg-purple-800">
          <h1 className="text-3xl font-bold mb-4">{grant.title}</h1>
          <p>
            <strong>Author:</strong> {grant.author}
          </p>
          <p>
            <strong>Status:</strong> {grant.status}
          </p>
          <p>
          <strong>Description:</strong> 
          {grant.description}
          </p>
          <p>
            <strong>Funds:</strong> {grant.milestoneFunds} EDU
          </p>
        </div>
      )}

      {/* Proposal Details */}
      {proposal && (
        <div className="max-w-4xl mx-auto mt-8 border border-purple-800 rounded-lg px-6 py-6 bg-opacity-20 bg-purple-800">
          <h2 className="text-2xl font-bold mb-4">Proposal: {proposal.name}</h2>
          <p>
            <strong>Proposed by:</strong> {proposal.proposer}
          </p>
          <p>
            <strong>Requested Amount:</strong> {proposal.amount} EDU
          </p>
          <p>
          <strong>Description:</strong> 
          {proposal.description}
          </p>
          <p>
            <strong>Status:</strong> {proposal.accepted ? "Accepted" : "Pending"}
          </p>

          {!proposal.accepted && address === grant.author && (
            <button
              onClick={acceptProposal}
              className="mt-4 px-4 py-2 bg-green-600 rounded-lg"
            >
              Accept Proposal
            </button>
          )}

          {proposal.accepted && address === grant.author && (
            <button
              onClick={() => {
                const amount = prompt("Enter amount to release (EDU):");
                if (amount) {
                  releaseMilestoneFunds({
                    args: [id, ethers.utils.parseEther(amount)],
                  });
                }
              }}
              className="mt-4 px-4 py-2 bg-blue-600 rounded-lg"
            >
              Release Funds
            </button>
          )}

          {proposal.accepted && address === proposal.proposer && (
            <div>
              <button
                onClick={() => setShowProofForm(!showProofForm)}
                className="mt-4 px-4 py-2 bg-yellow-600 rounded-lg"
              >
                {showProofForm ? "Hide Proof Form" : "Add Proof"}
              </button>
              {showProofForm && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    submitProof();
                  }}
                >
                  <textarea
                    className="w-full mt-4 px-4 py-2 bg-gray-800 rounded-lg"
                    value={proofText}
                    onChange={(e) => setProofText(e.target.value)}
                    placeholder="Enter proof description"
                    required
                  />
                  <button
                    type="submit"
                    className="mt-2 px-4 py-2 bg-green-600 rounded-lg"
                  >
                    Submit Proof
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      )}

      {/* Milestone Proofs */}
      <div className="max-w-4xl mx-auto mt-8 border border-purple-800 rounded-lg px-6 py-6 bg-opacity-20 bg-purple-800">
        <h2 className="text-2xl font-bold mb-4">Milestone Proofs</h2>
        {milestoneProofs.length === 0 ? (
          <p>No milestone proofs submitted yet.</p>
        ) : (
          <ul>
            {milestoneProofs.map((proof, index) => (
              <li key={index} className="mb-2">
                <strong>Milestone {index + 1}:</strong> {proof.proof}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProposalPage;
