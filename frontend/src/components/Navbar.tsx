// Navbar Component (Navbar.js)
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAccount } from "wagmi";

const Navbar = () => {
  const { address } = useAccount();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-4 px-10 bg-purple-900 bg-opacity-50">
      {/* Logo */}
      <div className="text-2xl font-bold"><Link to="/">EduForge</Link></div>

      {/* Navigation Links */}
      <ul className="flex space-x-6 items-center">
        <li className="hover:text-purple-400 cursor-pointer">
          <Link to="/bonds">Ideas</Link>
        </li>
        <li className="hover:text-purple-400 cursor-pointer">Resources</li>

        {/* Grants Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <li className="hover:text-purple-400 cursor-pointer">Grants</li>
          {isDropdownOpen && (
            <ul className="absolute z-10 left-0 bg-purple-800 text-white rounded-lg shadow-lg w-40">
              <li className="px-4 py-2 hover:bg-purple-700 hover:rounded-lg cursor-pointer">
                <Link to="/grants/explor">Explore Grants</Link>
              </li>
              <li className="px-4 py-2 hover:bg-purple-700 hover:rounded-lg cursor-pointer">
                <Link to="/grants/create">Create Grant</Link>
              </li>
            </ul>
          )}
        </div>
      </ul>

      {/* Connect Wallet Button */}
      <ConnectButton />
    </nav>
  );
};

export default Navbar;

