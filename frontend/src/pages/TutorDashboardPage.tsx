import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const TutorDashboardPage = () => {
  // Sample data for the tutor's courses (can be fetched from an API or database)
  const courses = [
    { id: 1, title: "Introduction to Programming", price: "$49", students: 10 },
    { id: 2, title: "Web Development Bootcamp", price: "$199", students: 20 },
    { id: 3, title: "Digital Marketing 101", price: "$29", students: 5 },
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
            Welcome to Your Dashboard, Tutor!
          </motion.h1>
          <motion.p
            className="text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Manage your courses, track students, and improve your teaching experience. 
            You are making a difference in students' lives!
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
              Your Courses
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
                  <p className="text-lg mb-4">Price: {course.price}</p>
                  <p className="text-lg mb-4">Enrolled Students: {course.students}</p>
                  <Link
                    to={`/courses/manage/${course.id}`}
                    className="px-6 py-3 bg-lightest text-darkest rounded-md hover:bg-lighter hover:text-dark transition-all"
                  >
                    Manage Course
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
                to="/courses/create"
                className="px-6 py-3 bg-primary text-lightest rounded-md hover:bg-lighter hover:text-dark transition-all"
              >
                Create New Course
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="py-16 bg-darkest text-lightest">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-semibold mb-6">What’s Next?</h3>
            <p className="text-lg">
              Once your course is ready, you can upload course materials such as videos, quizzes, and assignments from here.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TutorDashboardPage;
