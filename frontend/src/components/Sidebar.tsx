import React from "react";

const categories = [
  "All Categories",
  "Payments",
  "Learn",
  "Consumer dApps",
  "NFTs",
  "Mobile",
  "DeFi",
  "DePIN",
  "Infrastructure",
  "Developer Tooling",
  "Web3 Social",
  "DAOs and Communities",
  "Gaming",
  "ReFi",
  "AI",
];

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <aside className="w-64  bg-opacity-25 p-6 rounded-lg mr-6 h-[calc(80vh-40px)] overflow-y-auto">
      <h2 className="text-xl font-bold mb-6">Categories</h2>
      <ul className="space-y-4">
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`cursor-pointer px-3 py-2 rounded-lg ${
              selectedCategory === category
                ? "bg-purple-800 text-white font-semibold"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
