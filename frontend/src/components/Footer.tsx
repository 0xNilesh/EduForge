import { Link } from "react-router-dom";

// Footer Component
const Footer = () => {
    return (
      <footer className="bg-dark text-lightest py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 EduForge. All Rights Reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
            <Link to="/terms" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  