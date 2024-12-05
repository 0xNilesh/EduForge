import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const CourseCreationPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !price) {
      alert("Please fill out all fields.");
      return;
    }

    setIsSubmitting(true);

    // Simulate course creation logic (you would call your smart contract here)
    // You can call your contract's `createCourse` function here

    // Example: await createCourseContract(title, description, price);

    // After successful creation, redirect to tutor dashboard or show a success message
    setIsSubmitting(false);
    alert("Course created successfully! You can now upload materials from your Tutor Dashboard.");
    navigate("/tutor-dashboard");
  };

  return (
    <div className="bg-dark text-lightest min-h-screen">
      <div className="mt-16">
        <section className="py-16 bg-lightest text-darkest text-center">
          <motion.h1
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Create a New Course
          </motion.h1>
          <motion.p
            className="text-lg max-w-3xl mx-auto mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Fill in the details below to create your course. After your course is
            created, you can upload materials and manage the course from your Tutor
            Dashboard.
          </motion.p>
        </section>

        <section className="py-8">
          <div className="container mx-auto max-w-xl">
            <motion.form
              className="bg-darkest text-lightest rounded-lg p-8 shadow-lg space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="title" className="block text-lg font-semibold mb-2">
                  Course Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-3 bg-lightest text-darkest border-2 border-darkest rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-lg font-semibold mb-2">
                  Course Description
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows="5"
                  className="w-full p-3 bg-lightest text-darkest border-2 border-darkest rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="price" className="block text-lg font-semibold mb-2">
                  Course Price (in EDU)
                </label>
                <input
                  type="number"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full p-3 bg-lightest text-darkest border-2 border-darkest rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                  min="0.01"
                  step="0.01"
                />
              </div>

              <p className="text-sm text-center text-gray-400 mt-4">
                Once your course is created, you can upload materials from your
                Tutor Dashboard.
              </p>

              <button
                type="submit"
                className={`w-full py-3 bg-primary text-lightest rounded-lg font-semibold mt-6 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Creating..." : "Create Course"}
              </button>
            </motion.form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CourseCreationPage;
