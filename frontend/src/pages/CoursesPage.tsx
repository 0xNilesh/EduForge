import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CoursesPage = () => {
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
            Unlock Knowledge, Empower the Future
          </motion.h1>
          <motion.p
            className="text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Whether you're sharing your expertise or learning something new,
            our platform connects tutors and students, making education more
            accessible and empowering both sides to grow and succeed.
          </motion.p>
        </section>

        {/* Cards Section */}
        <section className="py-24">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Are you a Tutor Card */}
            <motion.div
              className="bg-darkest text-lightest rounded-lg shadow-lg p-8 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-semibold mb-4">Are You a Tutor?</h2>
              <p className="text-lg mb-6">
                Share your knowledge and help others succeed. Whether you're
                teaching academic subjects, skills, or hobbies, our platform
                makes it easy for tutors to connect with eager students looking
                to learn.
              </p>
              <Link
                to="/courses/become-a-tutor"
                className="px-6 py-3 bg-lightest text-darkest rounded-md hover:bg-lighter hover:text-dark transition-all"
              >
                Become a Tutor →
              </Link>
            </motion.div>

            {/* Are you a Student Card */}
            <motion.div
              className="bg-darkest text-lightest rounded-lg shadow-lg p-8 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-3xl font-semibold mb-4">Are You a Student?</h2>
              <p className="text-lg mb-6">
                Ready to learn something new? If you're a new student, explore
                a wide range of courses from expert tutors. If you're already a
                student, go directly to your dashboard to manage your courses and progress.
              </p>
              <div className="flex flex-col gap-4">
                <Link
                  to="/courses/explore"
                  className="px-6 py-3 bg-lightest text-darkest rounded-md hover:bg-lighter hover:text-dark transition-all"
                >
                  Explore Courses →
                </Link>
                <Link
                  to="/student-dashboard"
                  className="px-6 py-3 bg-primary text-lightest rounded-md hover:bg-lighter hover:text-dark transition-all"
                >
                  Go to Student Dashboard →
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CoursesPage;
