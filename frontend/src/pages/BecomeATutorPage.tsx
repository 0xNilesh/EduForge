import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BecomeATutorPage = () => {
  return (
    <div className="bg-dark text-lightest min-h-screen">
      {/* Ensure enough margin to account for navbar height */}
      <div className="mt-16">
        {/* Hero Section */}
        <section className="py-16 bg-lightest text-darkest text-center">
          <motion.h1
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Become a Tutor on Eduverse
          </motion.h1>
          <motion.p
            className="text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Share your expertise and help others learn! Start by creating your
            first course or, if you're already a tutor, access your dashboard to
            manage your courses and progress.
          </motion.p>
        </section>

        {/* Options Section */}
        <section className="py-24">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Create Course Option */}
            <motion.div
              className="bg-darkest text-lightest rounded-lg shadow-lg p-8 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-semibold mb-4">Create a Course</h2>
              <p className="text-lg mb-6">
                Ready to share your knowledge? Publish a course and start
                helping students grow. Set your price and let your expertise shine.
              </p>
              <Link
                to="/courses/create"
                className="px-6 py-3 bg-lightest text-darkest rounded-md hover:bg-lighter hover:text-dark transition-all"
              >
                Create a Course →
              </Link>
            </motion.div>

            {/* Already a Tutor? Go to Dashboard Option */}
            <motion.div
              className="bg-darkest text-lightest rounded-lg shadow-lg p-8 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-3xl font-semibold mb-4">Already a Tutor?</h2>
              <p className="text-lg mb-6">
                If you've already joined as a tutor, you can manage your courses,
                track your progress, and adjust your repayment percentage from your
                dashboard.
              </p>
              <Link
                to="/tutor-dashboard"
                className="px-6 py-3 bg-lightest text-darkest rounded-md hover:bg-lighter hover:text-dark transition-all"
              >
                Go to Dashboard →
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BecomeATutorPage;
