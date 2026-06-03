import React, { createContext, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Button } from "./ui/button";
import toast from "react-hot-toast";
import axios from "axios";

import "./home.css";
import Dashboard from "./Dashboard";
import Sidebar from "./sidebar/Sidebar";

const MyContext = createContext();

const Home = () => {
  const [sidebardrop, setSidebardrop] = useState(false);
  const navigate = useNavigate();

  const values = {
    sidebardrop,
    setSidebardrop,
  };

  const handleLogout = async () => {
    try {
      console.log("Inside logout");

      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/v1/users/logout`,
        {
          withCredentials: true,
        },
      );
      console.log("Inside logout after res");
      console.log(`Res is ${res}`);

      navigate("/login");
      toast.success(res.data.message);
      dispatch(logout(null));
      console.log("User loged out succesfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <MyContext.Provider value={values}>
        <div className="min-h-screen bg-[#f5f5f5] font-sans">
          {/* Navbar */}
          <header className="bg-[#2f3796] text-white flex items-center justify-around">
            {/* Logo */}
            <div className="text-5xl font-bold tracking-tight my-2">
              Alt<span className="text-cyan-400">i</span>us
            </div>

            {/* Nav Links */}
            <nav className="flex gap-8 text-[18px] font-light">
              <Link to="/" className="hover:text-cyan-300 transition">
                About Us
              </Link>
              <Link to="/" className="hover:text-cyan-300 transition">
                Solutions
              </Link>
              <Link to="/" className="hover:text-cyan-300 transition">
                Newsroom
              </Link>

              <Link to="/" className="hover:text-cyan-300 transition">
                Contact us
              </Link>
              <Link className="hover:text-cyan-300 transition">
                <Button
                  variant="ghost"
                  className="justify-start w-full"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </Link>
            </nav>
          </header>

          {/* Main Section */}
          <div className="section-container">
            <div className={`sidebar ${sidebardrop === true ? "toggle" : ""}`}>
              <Sidebar />
            </div>
            <div
              className={`page-content ${sidebardrop === true ? "toggle" : ""}`}
            >
              <Outlet />
              <Routes>
                <Route path="/" element={<Dashboard />} />
              </Routes>
            </div>
          </div>

          {/* Footer */}
          <footer className="bg-[#2f3796] text-white py-8">
            <div className="flex items-center justify-around flex-wrap gap-12 px-16">
              {/* Logo + About */}
              <div className="flex-2">
                <div className="text-5xl font-bold">
                  Alt<span className="text-cyan-400">i</span>us
                </div>

                <p className="text-[16px] leading-8 text-gray-200 font-light">
                  India’s leading telecom & digital infrastructure platform,
                  delivering seamless connectivity solutions across the nation.
                </p>
              </div>

              {/* Company */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Company</h3>

                <ul className="space-y-4 text-gray-200 font-light">
                  <li>
                    <a href="#" className="hover:text-cyan-300 transition">
                      About Us
                    </a>
                  </li>

                  <li>
                    <a href="#" className="hover:text-cyan-300 transition">
                      Solutions
                    </a>
                  </li>

                  <li>
                    <a href="#" className="hover:text-cyan-300 transition">
                      Newsroom
                    </a>
                  </li>

                  <li>
                    <a href="#" className="hover:text-cyan-300 transition">
                      Investors
                    </a>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Services</h3>

                <ul className="space-y-4 text-gray-200 font-light">
                  <li>Telecom Infrastructure</li>
                  <li>Network Solutions</li>
                  <li>Digital Connectivity</li>
                  <li>Green Energy Solutions</li>
                </ul>
              </div>

              {/* Contact */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Contact Us</h3>

                <ul className="space-y-4 text-gray-200 font-light">
                  <li>Gurugram, Haryana, India</li>
                  <li>+91 9876543210</li>
                  <li>info@altius.com</li>
                </ul>
              </div>
            </div>

            {/* Bottom Line */}
            <div className="border-t border-gray-400 py-4 text-center text-gray-300 text-sm font-light">
              © 2026 Altius Infrastructure. All Rights Reserved.
            </div>
          </footer>
        </div>
      </MyContext.Provider>
    </>
  );
};

export default Home;
export { MyContext };
