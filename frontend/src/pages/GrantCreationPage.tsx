import React, { useState } from "react";
import { useAccount, useWriteContract, useSimulateContract } from "wagmi";
import { ethers } from "ethers";
import EduForgeABI from "../abi/EduForgeABI.json";

const CONTRACT_ADDRESS = "0xCebe72A311e0C11aCcc00ca33383ff91A5F0F1cc";

const categories = [
  "AI",
  "Content",
  "DAOs and Communities",
  "DeFi",
  "Developer Tooling",
  "Gaming",
  "Infrastructure",
  "Mobile",
  "NFTs",
  "Other",
  "Payments",
  "ReFi",
  "Web3 Social",
  "xNFTs",
  "Consumer dApps",
  "DePIN",
  "Learn",
];

const GrantCreationPage = () => {
  const { address } = useAccount();
  const [formData, setFormData] = useState({
    title: "",
    problem: "",
    solution: "",
    resources: "",
    categories: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCategorySelection = (category) => {
    const updatedCategories = formData.categories.includes(category)
      ? formData.categories.filter((cat) => cat !== category)
      : [...formData.categories, category];
    setFormData({ ...formData, categories: updatedCategories });
  };

  // Simulate Contract Call
  // const { data: simulateData, isError: simulateError, isSuccess: simulateSuccess } = useSimulateContract({
  //   address: CONTRACT_ADDRESS,
  //   abi: EduForgeABI,
  //   functionName: "createGrant",
  //   args: [
  //     address || ethers.constants.AddressZero,
  //     formData.title,
  //     formData.problem,
  //     formData.categories.join(", "),
  //   ],
  //   enabled: !!address && !!formData.title && !!formData.problem && formData.categories.length > 0,
  // });

  // Write Contract Call
  // const { write: createGrant, isLoading, isError, isSuccess } = useWriteContract({
  //   request: simulateData?.request,
  // });

  const { writeContract, isLoading, isSuccess } = useWriteContract();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!address) {
      alert("Wallet not connected.");
      return;
    }

    try {
      console.log("Transaction arguments:", [
        address,
        formData.title,
        formData.problem,
        formData.categories.join(", "),
      ]);

      const tx = await writeContract({
        address: CONTRACT_ADDRESS,
        abi: EduForgeABI,
        functionName: "createGrant",
        args: [
          address,
          formData.title,
          formData.problem,
          formData.categories.join(", "),
        ],
      });

      console.log("Transaction sent:", tx);

      // const receipt = await tx.wait();
      // console.log("Transaction successful:", receipt);
      // alert("Grant successfully created!");
    } catch (error) {
      console.error("Error executing transaction:", error);
      // alert("Transaction failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-gray-900 to-black text-white p-10">
      <div className="max-w-4xl mx-auto bg-purple-800 bg-opacity-20 rounded-lg p-8 shadow-lg">
        <h1 className="text-3xl font-bold mb-6">List a Grant on EduForge</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Idea Title */}
          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="title">
              Idea Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder='Example: "ONDC Gateway on EduChain"'
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-purple-700 text-white rounded-lg focus:outline-none"
              required
            />
          </div>

          {/* Problem */}
          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="problem">
              What problem does the idea aim to solve? *
            </label>
            <textarea
              id="problem"
              name="problem"
              placeholder="Please be as detailed as possible."
              value={formData.problem}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-purple-700 text-white rounded-lg focus:outline-none"
              rows={5}
              required
            ></textarea>
          </div>

          {/* Categories */}
          <div>
            <label className="block text-lg font-semibold mb-2">
              Select the categories that best fit your idea *
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className={`px-4 py-2 rounded-lg cursor-pointer text-center border border-purple-800 ${
                    formData.categories.includes(category)
                      ? "bg-purple-600 text-white"
                      : "bg-transparent text-gray-300"
                  }`}
                  onClick={() => handleCategorySelection(category)}
                >
                  {category}
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold"
              disabled={isLoading}
            >
              {"Submit Grant"}
            </button>
          </div>
        </form>

        {isSuccess && <p className="text-green-500 mt-4">Grant successfully created!</p>}
      </div>
    </div>
  );
};

export default GrantCreationPage;
