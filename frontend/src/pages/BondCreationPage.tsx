import React, { useState } from "react";

const BondCreationPage = () => {
  const [bondDescription, setBondDescription] = useState({
    title: "",
    reason: "",
    fitForBond: "",
    documents: "",
    marketAnalysis: "",
    futurePlans: "",
    teamBackground: "",
    useOfFunds: "",
    subject: "",
    targetAgeGroup: "",
    courseDescription: "",
    courseGoals: "",
  });

  const [fundAmount, setFundAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isTutor, setIsTutor] = useState(false); // Switch for tutor or student

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Collect all data into JSON object
    const bondData = {
      ...bondDescription,
      fundAmount,
      interestRate,
      isTutor, // Include whether it's a tutor or student
    };

    console.log("Bond Created: ", bondData);

    // Call the submission logic, for example, pushing the bond data to IPFS
    setIsLoading(false);
  };

  return (
    <div className="bg-darkest text-lightest min-h-screen py-16">
      <div className="mt-16">
        <div className="container mx-auto px-4 lg:w-1/2">
          <h1 className="text-3xl font-bold mb-6">Create a New Bond</h1>

          {/* Toggle Switch for Tutor or Student */}
          <div className="flex items-center mb-6">
            <label className="mr-4 text-lg font-semibold">
              Are you a Tutor?
            </label>
            <label className="switch">
              <input
                type="checkbox"
                checked={isTutor}
                onChange={() => setIsTutor(!isTutor)}
              />
              <span className="slider round"></span>
            </label>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Fund Amount */}
            <div>
              <label className="block text-lg font-semibold mb-2">
                Fund Amount (EDU)
              </label>
              <input
                type="number"
                value={fundAmount}
                onChange={(e) => setFundAmount(e.target.value)}
                className="w-full p-3 rounded-lg bg-lightest text-darkest"
                placeholder="Enter the fund amount"
                required
              />
            </div>

            {/* Interest Rate */}
            <div>
              <label className="block text-lg font-semibold mb-2">
                Interest Rate (%)
              </label>
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="w-full p-3 rounded-lg bg-lightest text-darkest"
                placeholder="Enter the interest rate"
                required
              />
            </div>

            {/* Common Questions for Both Tutor and Student */}
            <div>
              <label className="block text-lg font-semibold mb-2">
                Why are you a great fit for this bond?
              </label>
              <textarea
                value={bondDescription.fitForBond}
                onChange={(e) =>
                  setBondDescription({
                    ...bondDescription,
                    fitForBond: e.target.value,
                  })
                }
                className="w-full p-3 rounded-lg bg-lightest text-darkest"
                placeholder="Describe why you're the right fit."
                rows="4"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-semibold mb-2">
                How are you going to use the loan amount? Detailed plan
              </label>
              <textarea
                value={bondDescription.useOfFunds}
                onChange={(e) =>
                  setBondDescription({
                    ...bondDescription,
                    useOfFunds: e.target.value,
                  })
                }
                className="w-full p-3 rounded-lg bg-lightest text-darkest"
                placeholder="Explain how the funds will be used."
                rows="4"
                required
              />
            </div>

            {/* Dynamic Fields Based on Tutor or Student */}
            {isTutor ? (
              <>
                <div>
                  <label className="block text-lg font-semibold mb-2">
                    What are your plans to repay the loan?
                  </label>
                  <textarea
                    value={bondDescription.reason}
                    onChange={(e) =>
                      setBondDescription({
                        ...bondDescription,
                        reason: e.target.value,
                      })
                    }
                    className="w-full p-3 rounded-lg bg-lightest text-darkest"
                    placeholder="Describe how you plan to repay the loan."
                    rows="4"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold mb-2">
                    How much are you seeking in financing for the creation of
                    your content?
                  </label>
                  <input
                    type="number"
                    value={fundAmount}
                    onChange={(e) => setFundAmount(e.target.value)}
                    className="w-full p-3 rounded-lg bg-lightest text-darkest"
                    placeholder="Enter the financing amount"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold mb-2">
                    What is the topic or title for your Educational Content?
                  </label>
                  <input
                    type="text"
                    value={bondDescription.title}
                    onChange={(e) =>
                      setBondDescription({
                        ...bondDescription,
                        title: e.target.value,
                      })
                    }
                    className="w-full p-3 rounded-lg bg-lightest text-darkest"
                    placeholder="Enter content topic or title"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold mb-2">
                    What Subject/s does your Educational Content Cover?
                  </label>
                  <input
                    type="text"
                    value={bondDescription.subject}
                    onChange={(e) =>
                      setBondDescription({
                        ...bondDescription,
                        subject: e.target.value,
                      })
                    }
                    className="w-full p-3 rounded-lg bg-lightest text-darkest"
                    placeholder="e.g., Math, English, Science"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold mb-2">
                    Course Target Age Group
                  </label>
                  <input
                    type="text"
                    value={bondDescription.targetAgeGroup}
                    onChange={(e) =>
                      setBondDescription({
                        ...bondDescription,
                        targetAgeGroup: e.target.value,
                      })
                    }
                    className="w-full p-3 rounded-lg bg-lightest text-darkest"
                    placeholder="e.g., 18-25, 12-16"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold mb-2">
                    Please share a thorough description of your proposed
                    Educational Content
                  </label>
                  <textarea
                    value={bondDescription.courseDescription}
                    onChange={(e) =>
                      setBondDescription({
                        ...bondDescription,
                        courseDescription: e.target.value,
                      })
                    }
                    className="w-full p-3 rounded-lg bg-lightest text-darkest"
                    placeholder="Provide a description of your educational content"
                    rows="4"
                    required
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold mb-2">
                    Please highlight 3 main goals your Educational Content
                    targets amongst the age group you've selected.
                  </label>
                  <textarea
                    value={bondDescription.courseGoals}
                    onChange={(e) =>
                      setBondDescription({
                        ...bondDescription,
                        courseGoals: e.target.value,
                      })
                    }
                    className="w-full p-3 rounded-lg bg-lightest text-darkest"
                    placeholder="Highlight 3 main goals."
                    rows="4"
                    required
                  />
                </div>
              </>
            ) : (
              <>
                <div>
                  <label className="block text-lg font-semibold mb-2">
                    What are your career goals?
                  </label>
                  <textarea
                    value={bondDescription.reason}
                    onChange={(e) =>
                      setBondDescription({
                        ...bondDescription,
                        reason: e.target.value,
                      })
                    }
                    className="w-full p-3 rounded-lg bg-lightest text-darkest"
                    placeholder="Describe your career goals."
                    rows="4"
                    required
                  />
                </div>
              </>
            )}

            {/* Supporting Documents */}
            <div>
              <label className="block text-lg font-semibold mb-2">
                You may upload additional material to support your application.
              </label>
              <input
                type="file"
                className="w-full p-3 rounded-lg bg-lightest text-darkest"
                onChange={(e) =>
                  setBondDescription({
                    ...bondDescription,
                    documents: e.target.files,
                  })
                }
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
                {isLoading ? "Creating Bond..." : "Create Bond"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BondCreationPage;
