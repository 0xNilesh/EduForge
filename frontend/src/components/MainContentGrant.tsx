import { useContractRead } from "wagmi";
import { ethers } from "ethers";
import EduForgeABI from "../abi/EduForgeABI.json";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const CONTRACT_ADDRESS = "0xCebe72A311e0C11aCcc00ca33383ff91A5F0F1cc";

const IdeaCard = ({ idea }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${idea.id}`)}
      className="bg-purple-800 bg-opacity-20 rounded-lg p-6 shadow-md space-y-4 border border-purple-800 cursor-pointer hover:shadow-lg transition-shadow duration-300"
    >
      <h3 className="text-lg font-semibold line-clamp-2">{idea.title}</h3>
      <p className="text-gray-400 text-sm line-clamp-2">{idea.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-gray-300 text-sm">{idea.category}</span>
        <span
          className={`px-2 py-1 text-xs font-medium rounded-full ${
            idea.open ? "bg-green-500 text-white" : "bg-red-500 text-white"
          }`}
        >
          {idea.open ? "Open" : "Closed"}
        </span>
      </div>
    </div>
  );
};

const MainContentGrant = ({ selectedCategory }) => {
  const [grants, setGrants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { data: grantCounter } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: EduForgeABI,
    functionName: "grantCounter",
  });

  useEffect(() => {
    const fetchGrants = async () => {
      if (!grantCounter) return;
      setIsLoading(true);

      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(CONTRACT_ADDRESS, EduForgeABI, provider);

        const grantCount = Number(grantCounter); // Convert BigInt to number
        const fetchedGrants = await Promise.all(
          Array.from({ length: grantCount }, (_, i) =>
            contract.getGrant(i + 1).then((grant) => ({
              id: i + 1,
              title: grant.name,
              description: grant.description,
              category: grant.category,
              open: grant.open,
            }))
          )
        );

        setGrants(fetchedGrants);
      } catch (error) {
        console.error("Error fetching grants:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGrants();
  }, [grantCounter]);

  if (isLoading) {
    return <p className="text-center text-gray-300">Loading grants...</p>;
  }

  if (grants.length === 0) {
    return <p className="text-center text-gray-300">No grants found.</p>;
  }

  return (
    <div className="flex-1 border border-purple-800 rounded-lg p-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">{selectedCategory}</h1>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 h-[calc(70vh-50px)] gap-4 overflow-y-auto">
        {grants.map((grant) => (
          <IdeaCard key={grant.id} idea={grant} />
        ))}
      </div>
    </div>
  );
};

export default MainContentGrant;
