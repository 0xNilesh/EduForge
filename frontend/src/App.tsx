import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import Navbar from "./components/Navbar";
import { WalletProvider } from "./components/RainbowKit/WalletProvider";
import ProductPage from "./pages/ProductPage";
import GrantCreationPage from "./pages/GrantCreationPage";
import ProposalPage from "./pages/ProposalPage";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-gray-900 to-black min-h-screen text-white">
      <WalletProvider>
      <Navbar />
        <Routes>
          {/* Home page with simple Navbar */}
          <Route
            path="/"
            element={
              <>
                
                <HomePage />
              </>
            }
          />
          {/* Other pages with Sidebar and Navbar */}
          <Route
            path="/micro-grants"
            element={<DashboardPage />}
          />
          <Route
            path="/grants/create"
            element={<GrantCreationPage />}
          />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/grant/:id/proposal/:proposalId" element={<ProposalPage />} />
        </Routes>
      </WalletProvider>
    </div>
  );
};

export default App;
