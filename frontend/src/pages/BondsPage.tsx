import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BondsPage = () => {
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
            Fueling Ambitions with Collateral-Free Bonds
          </motion.h1>
          <motion.p
            className="text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            At Eduverse, we’re transforming the way you invest. Say
            goodbye to traditional barriers and hello to innovative,
            collateral-free bonds designed to empower talent and drive growth.
            Whether you’re an investor seeking impactful opportunities or a bond
            issuer ready to showcase your skills, our platform bridges the gap
            between ambition and achievement.
          </motion.p>
        </section>
        {/* Cards Section */}
        <section className="py-24">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Investor Card */}
            <motion.div
              className="bg-darkest text-lightest rounded-lg shadow-lg p-8 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-semibold mb-4">
                Are You an Investor?
              </h2>
              <p className="text-lg mb-6">
                Discover new opportunities to invest in zero-collateral bonds.
                Support education, fund talent, and grow your portfolio while
                empowering the future of learning and freelancing.
              </p>
              <Link
                to="/bonds/invest"
                className="px-6 py-3 bg-lightest text-darkest rounded-md hover:bg-lighter hover:text-dark transition-all"
              >
                Explore Investment Opportunities →
              </Link>
            </motion.div>

            {/* Bond Issuer Card */}
            <motion.div
              className="bg-darkest text-lightest rounded-lg shadow-lg p-8 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-3xl font-semibold mb-4">
                Are You a Bond Issuer?
              </h2>
              <p className="text-lg mb-6">
                Are you a tutor or student looking for financing? Create your
                bond on Eduverse and unlock funding for your courses or
                educational journey with ease.
              </p>
              <Link
                to="/bonds/create"
                className="px-6 py-3 bg-lightest text-darkest rounded-md hover:bg-lighter hover:text-dark transition-all"
              >
                Create a Bond →
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BondsPage;
