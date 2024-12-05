import React, { useState } from "react";

const GigCreationPage = () => {
  const [gigDetails, setGigDetails] = useState({
    title: "",
    description: "",
    skillsRequired: "",
    budget: "",
    timeline: "",
    projectScope: "",
    clientExpectations: ""
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Collect all data into JSON object
    const gigData = {
      ...gigDetails,
    };

    console.log("Gig Created: ", gigData);

    // Call the submission logic, for example, pushing the gig data to a server or IPFS
    setIsLoading(false);
  };

  return (
    <div className="bg-darkest text-lightest min-h-screen py-16">
      <div className="mt-16">
        <div className="container mx-auto px-4 lg:w-1/2">
          <h1 className="text-3xl font-bold mb-6">Create a New Gig</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Gig Title */}
            <div>
              <label className="block text-lg font-semibold mb-2">Gig Title</label>
              <input
                type="text"
                value={gigDetails.title}
                onChange={(e) =>
                  setGigDetails({ ...gigDetails, title: e.target.value })
                }
                className="w-full p-3 rounded-lg bg-lightest text-darkest"
                placeholder="Enter a title for your gig"
                required
              />
            </div>

            {/* Gig Description */}
            <div>
              <label className="block text-lg font-semibold mb-2">Description</label>
              <textarea
                value={gigDetails.description}
                onChange={(e) =>
                  setGigDetails({ ...gigDetails, description: e.target.value })
                }
                className="w-full p-3 rounded-lg bg-lightest text-darkest"
                placeholder="Provide a detailed description of the gig"
                rows="4"
                required
              />
            </div>

            {/* Skills Required */}
            <div>
              <label className="block text-lg font-semibold mb-2">Skills Required</label>
              <input
                type="text"
                value={gigDetails.skillsRequired}
                onChange={(e) =>
                  setGigDetails({ ...gigDetails, skillsRequired: e.target.value })
                }
                className="w-full p-3 rounded-lg bg-lightest text-darkest"
                placeholder="e.g., Web Development, Graphic Design"
                required
              />
            </div>

            {/* Budget */}
            <div>
              <label className="block text-lg font-semibold mb-2">Budget</label>
              <input
                type="number"
                value={gigDetails.budget}
                onChange={(e) =>
                  setGigDetails({ ...gigDetails, budget: e.target.value })
                }
                className="w-full p-3 rounded-lg bg-lightest text-darkest"
                placeholder="Enter your budget for this gig"
                required
              />
            </div>

            {/* Timeline */}
            <div>
              <label className="block text-lg font-semibold mb-2">Timeline</label>
              <input
                type="text"
                value={gigDetails.timeline}
                onChange={(e) =>
                  setGigDetails({ ...gigDetails, timeline: e.target.value })
                }
                className="w-full p-3 rounded-lg bg-lightest text-darkest"
                placeholder="e.g., 1 week, 2 months"
                required
              />
            </div>

            {/* Project Scope */}
            <div>
              <label className="block text-lg font-semibold mb-2">Project Scope</label>
              <textarea
                value={gigDetails.projectScope}
                onChange={(e) =>
                  setGigDetails({ ...gigDetails, projectScope: e.target.value })
                }
                className="w-full p-3 rounded-lg bg-lightest text-darkest"
                placeholder="Describe the scope and deliverables for the project"
                rows="4"
                required
              />
            </div>

            {/* Client Expectations */}
            <div>
              <label className="block text-lg font-semibold mb-2">Client Expectations</label>
              <textarea
                value={gigDetails.clientExpectations}
                onChange={(e) =>
                  setGigDetails({ ...gigDetails, clientExpectations: e.target.value })
                }
                className="w-full p-3 rounded-lg bg-lightest text-darkest"
                placeholder="Describe the expectations and standards for the freelancer"
                rows="4"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 px-6 text-lg font-semibold rounded-md ${
                  isLoading
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-mid hover:bg-dark hover:text-lightest"
                }`}
              >
                {isLoading ? "Creating Gig..." : "Create Gig"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GigCreationPage;
