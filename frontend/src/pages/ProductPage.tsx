import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import EduForgeABI from "../abi/EduForgeABI.json";

const CONTRACT_ADDRESS = "0xCebe72A311e0C11aCcc00ca33383ff91A5F0F1cc";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [grant, setGrant] = useState(null);
  const [proposals, setProposals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isProposalsLoading, setIsProposalsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    proposalName: "",
    proposalDescription: "",
    proposedAmount: "",
  });

  useEffect(() => {
    const fetchGrant = async () => {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(CONTRACT_ADDRESS, EduForgeABI, provider);

        const grantData = await contract.getGrant(id);

        setGrant({
          title: grantData.name,
          author: grantData.granteeAddress,
          problem: grantData.description,
          category: grantData.category,
          open: grantData.open,
        });
      } catch (error) {
        console.error("Error fetching grant:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchProposals = async () => {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(CONTRACT_ADDRESS, EduForgeABI, provider);

        const proposalCount = await contract.proposalCounter();
        const fetchedProposals = [];

        for (let i = 1; i <= proposalCount.toNumber(); i++) {
          const proposal = await contract.proposals(i);
          if (proposal.grantId.toString() === id) {
            fetchedProposals.push({
              id: i,
              name: proposal.proposalName,
              description: proposal.proposalDescription,
              amount: ethers.utils.formatEther(proposal.proposedAmount),
              proposer: proposal.proposerAddress,
              accepted: proposal.accepted,
            });
          }
        }

        setProposals(fetchedProposals);
      } catch (error) {
        console.error("Error fetching proposals:", error);
      } finally {
        setIsProposalsLoading(false);
      }
    };

    fetchGrant();
    fetchProposals();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitProposal = async (e) => {
    e.preventDefault();

    if (!grant.open) {
      alert("Grant is closed. Proposals cannot be created.");
      return;
    }

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, EduForgeABI, signer);

      const tx = await contract.createProposal(
        id,
        formData.proposalName,
        formData.proposalDescription,
        ethers.utils.parseEther(formData.proposedAmount)
      );

      await tx.wait();
      alert("Proposal submitted successfully!");
      setFormData({
        proposalName: "",
        proposalDescription: "",
        proposedAmount: "",
      });
      setShowForm(false);
    } catch (error) {
      console.error("Error submitting proposal:", error);
      alert("Failed to submit proposal.");
    }
  };

  if (isLoading) {
    return <div className="text-center text-white">Loading grant details...</div>;
  }

  if (!grant) {
    return <div className="text-center text-white">Grant not found!</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-gray-900 to-black text-white p-10">
      <div className="max-w-4xl mx-auto border border-purple-800 rounded-lg px-6 py-6 bg-opacity-20 bg-purple-800">
        {/* Title and Author */}
        <h1 className="text-4xl font-bold mb-2">{grant.title}</h1>
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-8 h-8 rounded-full bg-purple-500"></div>
          <span className="text-lg">Author: {grant.author}</span>
        </div>

        {/* Problem Section */}
        <h2 className="text-2xl font-bold mb-4">Problem to Solve</h2>
        <p className="text-gray-300 mb-8">{grant.problem}</p>

        {/* Category */}
        <h2 className="text-2xl font-bold mb-4">Category</h2>
        <p className="text-gray-300 mb-8">{grant.category}</p>

        {/* Status */}
        <h2 className="text-2xl font-bold mb-4">Status</h2>
        <p className={`text-lg font-medium ${grant.open ? "text-green-500" : "text-red-500"}`}>
          {grant.open ? "Open" : "Closed"}
        </p>

        {/* Toggle Proposal Form */}
        <button
          onClick={() => setShowForm(!showForm)}
          className="mt-4 px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold"
        >
          {showForm ? "Cancel" : "Add Proposal"}
        </button>

        {showForm && (
          <form onSubmit={handleSubmitProposal} className="mt-6 space-y-4">
            <div>
              <label className="block text-lg font-semibold mb-2" htmlFor="proposalName">
                Proposal Name
              </label>
              <input
                type="text"
                id="proposalName"
                name="proposalName"
                value={formData.proposalName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-purple-700 text-white rounded-lg focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2" htmlFor="proposalDescription">
                Proposal Description
              </label>
              <textarea
                id="proposalDescription"
                name="proposalDescription"
                value={formData.proposalDescription}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-purple-700 text-white rounded-lg focus:outline-none"
                rows={4}
                required
              ></textarea>
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2" htmlFor="proposedAmount">
                Proposed Amount (EDU)
              </label>
              <input
                type="text"
                id="proposedAmount"
                name="proposedAmount"
                value={formData.proposedAmount}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-purple-700 text-white rounded-lg focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold"
            >
              Submit Proposal
            </button>
          </form>
        )}
      </div>

      {/* Proposals Section */}
      <div className="max-w-4xl mx-auto mt-10 border border-purple-800 rounded-lg px-6 py-6 bg-opacity-20 bg-purple-800">
        <h2 className="text-3xl font-bold mb-6">Proposals</h2>
        {isProposalsLoading ? (
          <p className="text-center text-gray-300">Loading proposals...</p>
        ) : proposals.length === 0 ? (
          <p className="text-center text-gray-300">No proposals found for this grant.</p>
        ) : (
          <div className="space-y-4">
            {proposals.map((proposal) => (
              <div
                key={proposal.id}
                onClick={() => navigate(`/grant/${id}/proposal/${proposal.id}`)}
                className="p-4 border border-purple-800 rounded-lg bg-purple-700 cursor-pointer hover:bg-purple-600 transition"
              >
                <h3 className="text-xl font-semibold">{proposal.name}</h3>
                <p className="text-gray-300 line-clamp-2">{proposal.description}</p>

                <div className="mt-2 text-sm text-gray-400">
                  <span>Proposed by: {proposal.proposer}</span>
                  <br />
                  <span>Requested Amount: {proposal.amount} EDU</span>
                  <br />
                  <span>Status: {proposal.accepted ? "Accepted" : "Pending"}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
