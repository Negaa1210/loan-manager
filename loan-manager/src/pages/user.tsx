import React, { useEffect, useState } from "react";
import AppliedLoansTable from "../components/AppliedLoans";
import {
  FiBell,
  FiMessageSquare,
  FiUser,
  FiChevronDown,
  FiMenu,
} from "react-icons/fi";

const LoanDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Borrow Cash");
  const [role, setRole] = useState("User");

  const tabs = ["Borrow Cash", "Transact", "Deposit Cash"];

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    if (storedRole) setRole(storedRole);
  }, []);

  return (
    <>
      {/* Top Navigation Bar */}
      <div className="fixed top-0 left-0 w-full z-10 bg-gradient-to-r from-gray-100 to-white shadow px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <FiMenu className="text-xl" />
          <span className="font-bold text-green-900 text-lg">CREDIT APP</span>
        </div>
        <div className="flex items-center gap-4 text-green-900">
          <FiBell className="text-xl" />
          <FiMessageSquare className="text-xl" />
          <FiUser className="text-xl" />
          <span className="font-semibold">{role}</span>
          <FiChevronDown className="text-sm" />
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-24 min-h-screen bg-gray-100 flex justify-center pt-24 p-6 w-full">
        <div className="w-full max-w-6xl flex flex-col">
          {/* Header Section */}
          <div className=" mx-auto flex items-center space-between space-x-96 justify-between  mb-4">
            <div className="flex items-center space-x-4">
              <div className="bg-green-200 p-3 rounded">
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/money.png"
                  alt="money"
                  className="h-6 w-6"
                />
              </div>
              <div>
                <p className="text-xs text-green-700 font-semibold">DEFICIT</p>
                <p className="text-green-700 text-2xl font-bold">₦ 0.0</p>
              </div>
            </div>

            <button className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded shadow">
              Get A Loan
            </button>
          </div>

          {/* Tabs */}
          <div className="mx-auto w-[759px] flex bg-white rounded shadow-md overflow-hidden w-full mb-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 px-4 text-center font-semibold transition ${
                  activeTab === tab
                    ? "bg-green-100 text-black"
                    : "bg-white text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="w-[759px] mx-auto mb-6">
            <div className="flex items-center bg-white rounded shadow px-4 py-2">
              <svg
                className="h-5 w-5 text-gray-400 mr-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M16 10a6 6 0 11-12 0 6 6 0 0112 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search for loans"
                className="w-full focus:outline-none text-gray-700"
              />
            </div>
          </div>

          {/* Applied Loans Table */}
          <div className="mx-auto w-full">
            <AppliedLoansTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoanDashboard;
