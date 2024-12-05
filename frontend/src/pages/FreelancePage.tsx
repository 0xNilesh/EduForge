import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FreelancePage = () => {
  return (
    <div className="bg-dark text-lightest min-h-screen">
      {/* Ensure enough margin to account for navbar height */}
      <div className="mt-16">
        {" "}
        {/* Adjust 'mt-16' as needed */}
        {/* Hero Section */}
        <section className="py-16 bg-lightest text-darkest text-center">
          <motion.h1
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Where Skills Meet Opportunities
          </motion.h1>
          <motion.p
            className="text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Eduverse connects talented individuals with projects that need their
            expertise. Whether you're looking to offer your skills or find the
            perfect match for your next job, our platform empowers you to
            collaborate and grow.
          </motion.p>
        </section>
        {/* Cards Section */}
        <section className="py-24">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Publish a Gig Card */}
            <motion.div
              className="bg-darkest text-lightest rounded-lg shadow-lg p-8 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-semibold mb-4">Publish a Gig</h2>
              <p className="text-lg mb-6">
                Need help with a project or task? Publish your gig and find the
                right talent to complete the work. Whether it's tech, creative,
                or any other field, Eduverse makes it easy to connect with
                freelancers.
              </p>
              <Link
                to="/freelance/create"
                className="px-6 py-3 bg-lightest text-darkest rounded-md hover:bg-lighter hover:text-dark transition-all"
              >
                Publish a Gig →
              </Link>
            </motion.div>

            {/* Explore Gigs Card */}
            <motion.div
              className="bg-darkest text-lightest rounded-lg shadow-lg p-8 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-3xl font-semibold mb-4">Explore Gigs</h2>
              <p className="text-lg mb-6">
                Looking for work? Browse a wide variety of gigs posted by people
                and apply for the ones that match your skills. Whether you're a
                designer, developer, or writer, there's something for everyone.
              </p>
              <Link
                to="/freelance/explore"
                className="px-6 py-3 bg-lightest text-darkest rounded-md hover:bg-lighter hover:text-dark transition-all"
              >
                Explore Gigs →
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FreelancePage;
