import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const GigExplorerPage = () => {
  // Sample data for gigs (replace with actual data from your backend or smart contract)
  const sampleGigs = [
    {
      id: 1,
      title: "Web Developer for E-commerce Site",
      description: "Build a complete e-commerce platform for a clothing brand.",
      skillsRequired: "Web Development, JavaScript, React",
      budget: 1000,
      timeline: "2 months",
      deadline: "2024-12-15T00:00",
    },
    {
      id: 2,
      title: "Graphic Designer for Marketing Materials",
      description: "Design marketing materials for social media and ads.",
      skillsRequired: "Graphic Design, Photoshop, Illustrator",
      budget: 500,
      timeline: "1 month",
      deadline: "2024-12-10T00:00",
    },
    // Add more gigs as needed
  ];

  const [gigs, setGigs] = useState(sampleGigs); // State to hold the list of gigs
  const [filter, setFilter] = useState({
    title: "",
    skills: "",
    budget: "",
  });

  const [sortBy, setSortBy] = useState("deadline"); // Default sorting by deadline

  // Handle filter input change
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  // Handle sorting selection
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  // Filter gigs based on search criteria
  const filteredGigs = gigs.filter((gig) => {
    return (
      (filter.title === "" ||
        gig.title.toLowerCase().includes(filter.title.toLowerCase())) &&
      (filter.skills === "" ||
        gig.skillsRequired
          .toLowerCase()
          .includes(filter.skills.toLowerCase())) &&
      (filter.budget === "" || gig.budget <= filter.budget)
    );
  });

  // Sort gigs based on selected criteria
  const sortedGigs = filteredGigs.sort((a, b) => {
    if (sortBy === "deadline") {
      return new Date(a.deadline) - new Date(b.deadline);
    } else if (sortBy === "budget") {
      return a.budget - b.budget;
    } else {
      return 0;
    }
  });

  return (
    <div className="bg-darkest text-lightest min-h-screen py-16">
      <div className="mt-16">
        <div className="container mx-auto px-4 lg:w-3/4">
          <h1 className="text-3xl font-bold mb-6">Explore Gigs</h1>

          {/* Filter Section */}
          <div className="space-y-4 mb-8">
            <div className="flex gap-4">
              <input
                type="text"
                name="title"
                value={filter.title}
                onChange={handleFilterChange}
                className="w-full p-3 rounded-lg bg-lightest text-darkest"
                placeholder="Search by title"
              />
              <input
                type="text"
                name="skills"
                value={filter.skills}
                onChange={handleFilterChange}
                className="w-full p-3 rounded-lg bg-lightest text-darkest"
                placeholder="Search by skills"
              />
              <input
                type="number"
                name="budget"
                value={filter.budget}
                onChange={handleFilterChange}
                className="w-full p-3 rounded-lg bg-lightest text-darkest"
                placeholder="Max Budget"
              />
            </div>

            <div className="flex justify-between">
              <label className="font-semibold">Sort By:</label>
              <select
                value={sortBy}
                onChange={handleSortChange}
                className="p-3 rounded-lg bg-lightest text-darkest"
              >
                <option value="deadline">Deadline</option>
                <option value="budget">Budget</option>
              </select>
            </div>
          </div>

          {/* Gigs List */}
          <div className="space-y-6">
            {sortedGigs.map((gig) => (
              <div
                key={gig.id}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h2 className="text-xl font-semibold text-lightest">
                  {gig.title}
                </h2>
                <p className="text-sm text-gray-500">
                  Deadline: {new Date(gig.deadline).toLocaleDateString()}
                </p>
                <p className="mt-2 text-lightest">{gig.description}</p>
                <div className="mt-4">
                  <strong className="text-lightest">Skills Required:</strong>{" "}
                  {gig.skillsRequired}
                </div>
                <div className="mt-2 text-lightest">
                  <strong>Budget:</strong> ${gig.budget}
                </div>
                <div className="mt-4">
                  <Link
                  to={`/freelance/explore/${gig.id}`} className="bg-mid text-lightest py-2 px-4 rounded-lg hover:bg-dark">
                    View Details
                  </Link>
                </div>
                {/* </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GigExplorerPage;
