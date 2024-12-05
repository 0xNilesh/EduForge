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
    <div className="bg-dark text-lightest">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
        // style={{ backgroundImage: 'url(/images/hero-background.jpg)' }}
      >
        <div className="absolute inset-0 bg-darkest opacity-60"></div>
        <motion.div
          className="text-center z-10 px-6 py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 text-lighter drop-shadow-lg">
            Eduverse
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-lightest">
            Empowering Education with DeFi Financing
          </p>
          <p className="text-base md:text-xl mb-8 text-lightest">
            Unlock a world of knowledge, showcase your talents, and access zero-collateral financing with Eduverse.
          </p>
          <button
            onClick={scrollToCards}
            className="inline-block px-8 py-4 bg-dark rounded-lg text-lg text-lightest hover:bg-lightest hover:text-darkest transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </button>
        </motion.div>
      </section>

      {/* About Eduverse */}
      <section className="py-24 bg-lightest text-dark">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            About Eduverse
          </motion.h2>
          <motion.p
            className="mb-12 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <strong>Eduverse</strong> is a revolutionary platform that connects education, freelancing, and decentralized finance (DeFi). 
            Whether you are a student looking to learn, an educator ready to teach, or a freelancer seeking opportunities, we’ve got you covered.
          </motion.p>
          <motion.p
            className="text-lg mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4 }}
          >
            With DeFi-powered bonds, educators can finance their courses, freelancers can secure project funding, and students can 
            pay for education through future earnings. <strong>No collateral</strong> needed, just your skills and ambitions.
          </motion.p>
        </div>
      </section>

      {/* Super-App Concept and Cards */}
      <section id="super-app-section" className="py-24 bg-light text-darkest">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            A Super-App for Decentralized Education
          </motion.h2>
          <motion.p
            className="mb-12 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <strong>Eduverse</strong> isn’t just an app — it’s a super-powered ecosystem that connects all aspects of education, freelancing, 
            and decentralized finance (DeFi). Imagine a world where educators, students, and freelancers all work in harmony, with each 
            part of the platform supporting the other through <strong>DeFi-enabled financing</strong>.
          </motion.p>
          
          <div className="flex justify-center gap-12">
            {/* Card 1 */}
            <motion.div
              className="w-full md:w-1/3 p-10 bg-gradient-mid rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-xl font-semibold mb-4">Zero-Collateral DeFi Financing</h3>
              <p>
                Access DeFi financing with no collateral. Use your skills and future earnings to unlock loans or financing for courses and projects.
              </p>
              <Link
                to="/bonds"
                className="block mt-6 text-lg font-semibold text-darkest hover:text-lightest hover:underline flex items-center justify-between"
              >
                Explore <span>&#8594;</span>
              </Link>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="w-full md:w-1/3 p-10 bg-gradient-mid rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-xl font-semibold mb-4">Freelancer Marketplace</h3>
              <p>
                Build your portfolio and find work through Eduverse. Students and businesses can find the perfect talent, and freelancers can earn by showcasing their skills.
              </p>
              <Link
                to="/freelance"
                className="block mt-6 text-lg font-semibold text-darkest hover:text-lightest hover:underline flex items-center justify-between"
              >
                Find Work <span>&#8594;</span>
              </Link>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="w-full md:w-1/3 p-10 bg-gradient-mid rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-xl font-semibold mb-4">Learn & Teach with DeFi Support</h3>
              <p>
                Teachers and learners can access a new way to finance courses. Unlock learning opportunities and create courses with DeFi-powered bonds.
              </p>
              <Link
                to="/courses"
                className="block mt-6 text-lg font-semibold text-darkest hover:text-lightest hover:underline flex items-center justify-between"
              >
                Start Learning <span>&#8594;</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-darkest" data-aos="fade-up" id="jointhecommunity">
      <div className="relative max-w-[1440px] ml-auto mr-auto">
        <div
        className="absolute w-full h-full bg-gradient-to-t from-dark via-dark via-5% to-transparent pointer-events-none"
      />
      <div className="absolute left-1/2 transform -translate-x-1/2 uppercase text-white font-bold text-2xl sm:text-4xl md:text-5xl lg:text-[54px] bottom-[15%] text-center">
        Join the Community
      </div>
      <div className="px-5 py-3 md:px-3 flex gap-2 md:gap-3 bg-dark bg-gradient-to-t from-dark to-dark ">
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
    </section>

      {/* Join the Community */}
      <section className="bg-dark">
    <div className="max-w-[1440px] ml-auto mr-auto lg:px-20 md:px-10 px-5 pb-16 md:pb-32 flex flex-col items-start gap-24 z-10" data-aos="fade-up">
      <div className="max-w-[400px] md:w-full md:max-w-none mr-auto ml-auto flex flex-wrap gap-6 justify-center">
        <SocialCard
            socialIconUrl={'./social/twitterIcon.webp'}
            linkUrl="/"
            text="Twitter"
            hoverColor="#03A9F4"
        />
        <SocialCard
            socialIconUrl={'./social/telegramIcon.webp'}
            linkUrl="/"
            text="Telegram"
            hoverColor="#28A8EA"
        />
        <SocialCard
            socialIconUrl={'./social/discordIcon.webp'}
            linkUrl="/"
            text="Discord"
            hoverColor="#5765EC"
        />
        <SocialCard
            socialIconUrl={'./social/githubIcon.webp'}
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
