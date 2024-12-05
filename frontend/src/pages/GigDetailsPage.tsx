import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const GigDetailsPage = () => {
  const { gigId } = useParams();
  const [gig, setGig] = useState(null);
  const [submissions, setSubmissions] = useState([]);
  const [walletAddress, setWalletAddress] = useState("0xabcdef1234567890abcdef1234567890abcdef12"); // Mock wallet address
  const [newSubmission, setNewSubmission] = useState("");

  // Dummy gig data
  const dummyGigs = [
    {
        id: 1,
        title: "Web Developer for E-commerce Site",
        poster: "0x1234567890abcdef1234567890abcdef12345678",
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
        poster: "0xabcdef1234567890abcdef1234567890abcdef12",
        budget: 500,
        timeline: "1 month",
        deadline: "2024-12-10T00:00",
      },
  ];

  // Dummy direct submissions data
  const dummySubmissions = [
    {
      worker: "0xabcdef1234567890abcdef1234567890abcdef12",
      description: "https://github.com/0xanon/random",
      status: "Rejected",
    },
    {
      worker: "0x1234567890abcdef1234567890abcdef12345678",
      description: "https://github.com/0xanon2/random",
      status: "Accepted",
    },
  ];

  useEffect(() => {
    // Fetch gig details based on gigId
    const selectedGig = dummyGigs.find(gig => gig.id === parseInt(gigId));
    setGig(selectedGig);

    // Fetch submissions (dummy for now)
    setSubmissions(dummySubmissions);
  }, [gigId]);

  const handleSubmitForm = () => {
    // Simulate submitting a new submission
    const newSubmissionData = {
      worker: walletAddress,
      description: newSubmission,
      status: "Pending",
    };
    setSubmissions([...submissions, newSubmissionData]);
    setNewSubmission("");
  };

  const handleCompleteSubmission = (index) => {
    const updatedSubmissions = [...submissions];
    updatedSubmissions[index].status = "Completed";
    setSubmissions(updatedSubmissions);
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <div className="mt-16">
        {gig ? (
          <div className="container mx-auto py-16 px-4 lg:flex gap-8">
            {/* Left Section: Gig Details */}
            <div className="lg:w-2/3 bg-gray-800 rounded-lg p-8">
              <h1 className="text-3xl font-bold mb-6">{gig.description}</h1>
              <p><strong>Poster:</strong> {gig.poster}</p>
              <p><strong>Budget:</strong> {gig.budget} EDU</p>
              <p><strong>Deadline:</strong> {gig.deadline}</p>
            </div>

            {/* Right Section: Actions */}
            <div className="lg:w-1/3 bg-gray-800 rounded-lg p-8">
              {/* If wallet is not connected */}
              {!walletAddress ? (
                <button
                  disabled
                  className="w-full px-6 py-3 bg-gray-600 rounded-md text-gray-400 cursor-not-allowed"
                >
                  Connect Wallet to Submit Work
                </button>
              ) : walletAddress.toLowerCase() !== gig.poster.toLowerCase() ? (
                // If wallet is not the gig poster, show a submission form
                <>
                  <textarea
                    value={newSubmission}
                    onChange={(e) => setNewSubmission(e.target.value)}
                    placeholder="Any links for work. e.g. GitHub Repo, Deployed URL, etc."
                    className="w-full h-32 p-4 bg-gray-700 rounded-md text-gray-100 mb-4"
                  />
                  <button
                    onClick={handleSubmitForm}
                    className="w-full px-6 py-3 bg-blue-600 rounded-md text-white hover:bg-blue-700 transition-all"
                  >
                    Submit Your Work
                  </button>
                </>
              ) : (
                // If wallet is the gig poster, don't show form, just show submissions
                <p className="text-gray-400 text-center">You are the poster of this gig.</p>
              )}
            </div>
          </div>
        ) : (
          <p className="text-center py-16">Loading gig details...</p>
        )}

        {/* Direct Submissions Section (at the bottom of the page) */}
        <div className="container mx-auto py-8 px-4">
          <h3 className="text-xl font-bold mb-4">Direct Submissions</h3>
          <div className="space-y-4">
            {submissions.map((submission, index) => (
              <div
                key={index}
                className="bg-gray-700 text-white p-4 rounded-lg flex justify-between items-center"
              >
                <div>
                  <p><strong>Worker:</strong> {submission.worker}</p>
                  <p><strong>Description:</strong> {submission.description}</p>
                </div>
                <div className="flex space-x-4">
                  <span>{submission.status}</span>
                  {submission.status !== "Completed" && (
                    <button
                      onClick={() => handleCompleteSubmission(index)}
                      className="px-4 py-2 bg-green-600 rounded-md text-white hover:bg-green-700"
                    >
                      Mark as Completed
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GigDetailsPage;
