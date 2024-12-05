import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BondsListingPage = () => {
  const [bonds, setBonds] = useState([]);
  const [filteredBonds, setFilteredBonds] = useState([]);
  const [searchAddress, setSearchAddress] = useState("");

  // Dummy bond data
  const dummyBonds = [
    {
      description: "Bond A",
      issuer: "0x1234567890abcdef1234567890abcdef12345678",
      interestRate: 5.0,
      fundAmount: 100,
      fundsRaised: 40,
      startTime: "2024-01-01",
      repaid: false,
    },
    {
      description: "Bond B",
      issuer: "0xabcdef1234567890abcdef1234567890abcdef12",
      interestRate: 3.5,
      fundAmount: 50,
      fundsRaised: 50,
      startTime: "2024-02-15",
      repaid: true,
    },
    {
      description: "Bond C",
      issuer: "0x567890abcdef1234567890abcdef123456789012",
      interestRate: 4.2,
      fundAmount: 150,
      fundsRaised: 75,
      startTime: "2024-03-10",
      repaid: false,
    },
  ];

  useEffect(() => {
    setBonds(dummyBonds);
    setFilteredBonds(dummyBonds);
  }, []);

  // Filter bonds by issuer address
  const handleFilterChange = (event) => {
    const address = event.target.value;
    setSearchAddress(address);

    if (address === "") {
      setFilteredBonds(bonds);
    } else {
      const filtered = bonds.filter((bond) =>
        bond.issuer.toLowerCase().includes(address.toLowerCase())
      );
      setFilteredBonds(filtered);
    }
  };

  // Abbreviate address: 0xabcd...abcd
  const abbreviateAddress = (address) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <div className="mt-16">
        {/* Hero Section */}
        <section className="py-16 bg-gray-800 text-center text-white">
          <motion.h1
            className="text-4xl font-bold leading-tight mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Explore Bonds with Great Yields
          </motion.h1>
          <motion.p
            className="text-lg max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Find bonds that meet your investment criteria. Use the filter below to search by issuer address.
          </motion.p>

          {/* Simple Filter */}
          <div className="max-w-sm mx-auto mb-8">
            <input
              type="text"
              placeholder="Search by Issuer Address"
              value={searchAddress}
              onChange={handleFilterChange}
              className="px-4 py-2 rounded-md w-full text-gray-900"
            />
          </div>
        </section>

        {/* Bonds List Section */}
        <section className="py-24">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredBonds.length === 0 ? (
              <motion.p
                className="text-lg text-center col-span-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                {searchAddress
                  ? "No bonds found for the entered address."
                  : "Currently, there are no bonds available."}
              </motion.p>
            ) : (
              filteredBonds.map((bond, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 text-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="text-2xl font-semibold mb-4">{bond.description}</h3>
                  <p>
                    <strong>Issuer:</strong> {abbreviateAddress(bond.issuer)}
                  </p>
                  <p><strong>Interest Rate:</strong> {bond.interestRate}%</p>
                  <p><strong>Total Fund Amount:</strong> {bond.fundAmount} ETH</p>
                  <p><strong>Funds Raised:</strong> {bond.fundsRaised} ETH</p>
                  <p><strong>Start Time:</strong> {bond.startTime}</p>
                  <p><strong>Repaid:</strong> {bond.repaid ? "Yes" : "No"}</p>
                  
                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="h-2 w-full bg-gray-700 rounded-md">
                      <div
                        className="h-2 bg-green-500 rounded-md"
                        style={{
                          width: `${(bond.fundsRaised / bond.fundAmount) * 100}%`,
                        }}
                      ></div>
                    </div>
                    <p className="text-sm mt-1 text-gray-400">
                      {((bond.fundsRaised / bond.fundAmount) * 100).toFixed(2)}% Raised
                    </p>
                  </div>

                  <Link
                    to={`/bonds/invest/${index}`}
                    className="inline-block mt-4 px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-all"
                  >
                    View Details →
                  </Link>
                </motion.div>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BondsListingPage;
