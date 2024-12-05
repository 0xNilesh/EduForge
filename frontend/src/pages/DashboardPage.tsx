import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import MainContentGrant from "../components/MainContentGrant";

const DashboardPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  return (
    <div className="min-h-screen text-white bg-gradient-to-r from-purple-900 via-gray-900 to-black">
      <div className="flex mx-16 mt-10 border border-purple-800 rounded-lg p-6 shadow-lg">
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <MainContentGrant selectedCategory={selectedCategory} />
      </div>
    </div>
  );
};

export default DashboardPage;
