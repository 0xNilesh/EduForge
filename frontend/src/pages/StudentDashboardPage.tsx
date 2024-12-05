import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const StudentDashboardPage = () => {
  // Sample data for the student's enrolled courses (can be fetched from an API or database)
  const courses = [
    { id: 1, title: "Introduction to Programming", progress: "50%", status: "In Progress" },
    { id: 2, title: "Web Development Bootcamp", progress: "20%", status: "Not Started" },
    { id: 3, title: "Digital Marketing 101", progress: "75%", status: "In Progress" },
  ];

  return (
    <div className="bg-dark text-lightest min-h-screen">
      <div className="mt-16">
        {/* Hero Section */}
        <section className="py-16 bg-lightest text-darkest text-center">
          <motion.h1
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to Your Dashboard, Student!
          </motion.h1>
          <motion.p
            className="text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Track your learning progress, manage your enrolled courses, and continue to grow your skills.
            Stay focused and achieve your goals!
          </motion.p>
        </section>

        {/* Dashboard Section */}
        <section className="py-24">
          <div className="container mx-auto text-center">
            <motion.h2
              className="text-3xl font-semibold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Your Enrolled Courses
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {courses.map((course) => (
                <motion.div
                  key={course.id}
                  className="bg-darkest text-lightest rounded-lg shadow-lg p-8 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="text-2xl font-semibold mb-4">{course.title}</h3>
                  <p className="text-lg mb-4">Progress: {course.progress}</p>
                  <p className="text-lg mb-4">Status: {course.status}</p>
                  <Link
                    to={`/courses/${course.id}`}
                    className="px-6 py-3 bg-lightest text-darkest rounded-md hover:bg-lighter hover:text-dark transition-all"
                  >
                    Continue Learning
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Link
                to="/courses/explore"
                className="px-6 py-3 bg-primary text-lightest rounded-md hover:bg-lighter hover:text-dark transition-all"
              >
                Explore More Courses
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="py-16 bg-darkest text-lightest">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-semibold mb-6">What's Next?</h3>
            <p className="text-lg">
              Continue progressing with your courses, or explore more learning opportunities to expand your knowledge.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StudentDashboardPage;
