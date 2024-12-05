import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SocialCard from "../components/SocialCard";
import Footer from "../components/Footer";

const HomePage = () => {
  const scrollToCards = () => {
    const cardsSection = document.getElementById("super-app-section");
    if (cardsSection) {
      cardsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gradient-to-b from-dark via-darkest to-dark text-lightest min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-darkest via-purple-900 to-dark opacity-80"></div>
        <motion.div
          className="text-center z-10 px-6 py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mb-4 text-lighter drop-shadow-xl">
            EduForge
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-lightest">
            Forging Ideas into Reality
          </p>
          <p className="text-base md:text-lg mb-10 text-lightest">
            Transforming educational ideas into projects with seamless grant financing, incubation support, and funding.
          </p>
          <button
            onClick={scrollToCards}
            className="inline-block px-10 py-4 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg text-lg text-lightest hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            Explore Opportunities
          </button>
        </motion.div>
      </section>

      {/* About EduForge */}
      <section className="py-24 bg-darkest text-lightest">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            What is EduForge?
          </motion.h2>
          <motion.p
            className="mb-12 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <strong>EduForge</strong> is a platform where educational ideas are forged and transformed into fully realized products.
            From idea generation to incubation and fundraising, we support developers and innovators every step of the way.
          </motion.p>
          <motion.p
            className="text-lg mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4 }}
          >
            We provide a marketplace for grants, a comprehensive incubation dashboard to track project progress, and support for fundraising. 
            At <strong>EduForge</strong>, we showcase the full lifecycle of your project — from concept to real-world impact.
          </motion.p>
        </div>
      </section>

      {/* Super-App Cards */}
      <section id="super-app-section" className="py-24 bg-gradient-to-b from-dark via-darkest to-dark text-lightest">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Your Educational Journey, Empowered
          </motion.h2>
          <motion.p
            className="mb-12 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            From micro-grants to incubation, EduForge is your partner in building and scaling impactful educational projects.
          </motion.p>
          <div className="flex justify-center gap-8">
            <motion.div
              className="w-full md:w-1/3 p-8 bg-gradient-to-r from-purple-900 to-purple-600 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-xl font-semibold mb-4">Grant Marketplace</h3>
              <p>
                Submit your ideas or browse grants from organizations looking to support innovative projects. Receive micro-grants to start building.
              </p>
              <Link
                to="/grants/explore"
                className="block mt-6 text-lg font-semibold text-lightest hover:text-light hover:underline flex items-center justify-between"
              >
                Explore Grants <span>&#8594;</span>
              </Link>
            </motion.div>

            <motion.div
              className="w-full md:w-1/3 p-8 bg-gradient-to-r from-blue-900 to-blue-600 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-xl font-semibold mb-4">Incubation Dashboard</h3>
              <p>
                Track milestones, metrics, and progress through our advanced incubation tools. Collaborate with mentors and stakeholders in real-time.
              </p>
              <Link
                to="/incubation"
                className="block mt-6 text-lg font-semibold text-lightest hover:text-light hover:underline flex items-center justify-between"
              >
                Learn More <span>&#8594;</span>
              </Link>
            </motion.div>

            <motion.div
              className="w-full md:w-1/3 p-8 bg-gradient-to-r from-green-900 to-green-600 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-xl font-semibold mb-4">Fundraising Support</h3>
              <p>
                Scale your project with the help of EduForge’s fundraising platform, connecting you with investors and showcasing your progress.
              </p>
              <Link
                to="/fundraising"
                className="block mt-6 text-lg font-semibold text-lightest hover:text-light hover:underline flex items-center justify-between"
              >
                Start Scaling <span>&#8594;</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="bg-gradient-to-b from-darkest via-dark to-dark text-lightest py-16">
        <div className="container mx-auto">
          <div className="relative max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Join the EduForge Community</h2>
            <div className="flex justify-center gap-4">
            <img
          className="w-[48%] rounded-2xl"
          alt="background image 1"
          src={'./community/Image-1.jpg'}
        />
        <img
          className="w-[29%] rounded-2xl"
          alt="background image 2"
          src={'./community/Image-2.jpg'}
        />
        <div className="w-[23%] flex flex-col gap-2 md:gap-3">
          <img
            className="w-full h-1/2 rounded-2xl"
            alt="background image 3"
            src={'./community/Image-3.jpg'}
          />
          <img
            className="w-full h-1/2 rounded-2xl"
            alt="background image 4"
            src={'./community/Image-4.jpg'}
          /> 
        </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Cards */}
      <section className="bg-dark py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Connect with Us</h2>
          <div className="flex justify-center gap-8">
            <SocialCard
              socialIconUrl="./social/twitterIcon.webp"
              linkUrl="/"
              text="Twitter"
              hoverColor="#03A9F4"
            />
            <SocialCard
              socialIconUrl="./social/telegramIcon.webp"
              linkUrl="/"
              text="Telegram"
              hoverColor="#28A8EA"
            />
            <SocialCard
              socialIconUrl="./social/discordIcon.webp"
              linkUrl="/"
              text="Discord"
              hoverColor="#5765EC"
            />
            <SocialCard
              socialIconUrl="./social/githubIcon.webp"
              linkUrl="/"
              text="GitHub"
              hoverColor="#000000"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
