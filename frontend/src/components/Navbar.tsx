// Navbar Component (Navbar.js)
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAccount } from "wagmi";

// const Navbar = () => {
//   const { address } = useAccount();

//   return (
//     <nav className="bg-dark text-lightest py-4 px-6 fixed w-full top-0 z-50 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo and Links */}
//         <Link to="/" className="text-2xl font-bold">
//           Eduverse
//         </Link>

//         {/* Wallet and Profile Section */}
//         <div className="flex items-center gap-4">
//           <button className="px-4 py-2 bg-lightest text-darkest rounded-lg font-bold hover:bg-darkest hover:text-lightest">
//             <Link to="/courses" className="block">
//               Learn
//             </Link>
//           </button>
//           <button className="px-4 py-2 bg-lightest text-darkest rounded-lg font-bold hover:bg-darkest hover:text-lightest">
//             <Link to="/freelance" className="block">
//               Earn
//             </Link>
//           </button>
//           <button className="px-4 py-2 bg-lightest text-darkest rounded-lg font-bold hover:bg-darkest hover:text-lightest">
//             <Link to="/bonds" className="block">
//               Invest/Loan
//             </Link>
//           </button>
//           <ConnectButton />
//           {address && (
//             <button className="px-4 py-2 bg-lightest text-darkest rounded-lg font-bold hover:bg-darkest hover:text-lightest">
//               Verify KYC
//             </button>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
// import { useAccount } from "wagmi";

const Navbar = () => {
  const { address } = useAccount();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-4 px-10 bg-purple-900 bg-opacity-50">
      {/* Logo */}
      <div className="text-2xl font-bold">EduForge</div>

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
            <ul className="absolute left-0 bg-purple-800 text-white rounded-lg shadow-lg w-40">
              <li className="px-4 py-2 hover:bg-purple-700 hover:rounded-lg cursor-pointer">
                <Link to="/micro-grants">Explore Grants</Link>
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

