import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const CourseDetailPage = () => {
  // Sample data for a specific course (can be fetched from an API or database)
  const { id } = useParams(); // Use React Router to fetch the course ID from the URL

  // Sample courses data, can be replaced with API data fetching logic
  const courses = [
    { id: 1, title: "Introduction to Programming", description: "Learn the basics of programming with Python.", price: "49 EDU" },
    { id: 2, title: "Web Development Bootcamp", description: "Become a full-stack web developer in 12 weeks.", price: "199 EDU" },
    { id: 3, title: "Digital Marketing 101", description: "Learn the fundamentals of digital marketing and SEO.", price: "29 EDU" },
    { id: 4, title: "Graphic Design for Beginners", description: "Create stunning visuals with design software like Photoshop.", price: "59 EDU" },
  ];

  // Find the course by its ID
  const course = courses.find((course) => course.id === parseInt(id));

  if (!course) {
    return (
      <div className="bg-dark text-lightest min-h-screen">
        <div className="mt-16 text-center">
          <h1 className="text-4xl text-red-500">Course not found</h1>
        </div>
      </div>
    );
  }

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
            {course.title}
          </motion.h1>
          <motion.p
            className="text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {course.description}
          </motion.p>
        </section>

        {/* Course Details Section */}
        <section className="py-24">
          <div className="container mx-auto text-center">
            <p className="text-xl font-semibold mb-6">Price: {course.price}</p>
            <motion.button
              className="px-6 py-3 bg-primary text-lightest rounded-md hover:bg-lighter hover:text-dark transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Enroll Now
            </motion.button>
            <p className="mt-8 text-lg text-lightest">
              Once enrolled, you'll have access to all the course materials, including videos, assignments, and quizzes. Get started today!
            </p>
          </div>
        </section>

        {/* Additional Information Section */}
        <section className="py-16 bg-darkest text-lightest">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-semibold mb-6">What You'll Learn</h3>
            <p className="text-lg">
              This course will cover all the essential topics you need to get started with programming:
            </p>
            <ul className="list-disc list-inside mt-6">
              <li>Basic syntax and structures</li>
              <li>Data types and variables</li>
              <li>Control flow (if-else, loops)</li>
              <li>Functions and modules</li>
              <li>Introduction to object-oriented programming</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CourseDetailPage;
