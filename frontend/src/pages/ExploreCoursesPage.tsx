import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ExploreCoursesPage = () => {
  // Sample data for courses (can be fetched from an API or database in a real-world app)
  const courses = [
    { id: 1, title: "Introduction to Programming", description: "Learn the basics of programming with Python.", price: "49 EDU" },
    { id: 2, title: "Web Development Bootcamp", description: "Become a full-stack web developer in 12 weeks.", price: "199 EDU" },
    { id: 3, title: "Digital Marketing 101", description: "Learn the fundamentals of digital marketing and SEO.", price: "29 EDU" },
    { id: 4, title: "Graphic Design for Beginners", description: "Create stunning visuals with design software like Photoshop.", price: "59 EDU" },
  ];

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
            Explore Our Courses
          </motion.h1>
          <motion.p
            className="text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Browse through a wide variety of courses designed to help you learn and grow in your chosen field. Start your learning journey today!
          </motion.p>
        </section>

        {/* Courses List Section */}
        <section className="py-24">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
                <p className="text-lg mb-4">{course.description}</p>
                <p className="text-xl font-bold mb-6">{course.price}</p>
                <Link
                  to={`/courses/explore/${course.id}`}
                  className="px-6 py-3 bg-primary text-lightest rounded-md hover:bg-lighter hover:text-dark transition-all"
                >
                  View Course →
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ExploreCoursesPage;
