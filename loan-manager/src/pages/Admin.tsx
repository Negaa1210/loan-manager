


import React, { useEffect, useState } from "react";
import {
  FiBell,
  FiMessageSquare,
  FiUser,
  FiChevronDown,
  FiMenu,
} from "react-icons/fi";
import SidebarMenu from "../components/Dashboard";
import AppliedLoansTable from "../components/AppliedLoans";
import IconStar from "../components/IconStar";
import IconPage from "../components/IconPage";

const Verifier: React.FC = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [role, setRole] = useState("User");

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    if (storedRole) setRole(storedRole);
  }, []);

  const renderContent = () => {
    const commonImages = (
      <div className="space-y-6 mt-6">
        <img
          src="/images/photo-1.png"
          alt="Dashboard"
          className="w-[1134px] h-[453px] rounded-md border"
        />
        <img
          src="/images/photo-2.png"
          alt="Dashboard"
          className="w-[1134px] h-[453px] rounded-md border"
        />
        <img
          src="/images/photo-3.png"
          alt="Dashboard"
          className="w-[1134px] h-[453px] rounded-md border"
        />
      </div>
    );

    if (role === "Verifier" && activeItem === "Dashboard") {
      return (
        <>
          <h2 className="text-xl font-semibold text-green-800 mb-4">
            Loans Pending Verification
          </h2>
          <AppliedLoansTable />
        </>
      );
    }

    if (activeItem === "Dashboard") {
      return (
        <>
          <IconStar />
          <AppliedLoansTable />
          {commonImages}
        </>
      );
    }

    if (activeItem === "Loans") {
      return (
        <>
          <IconPage />
          <AppliedLoansTable />
          {commonImages}
        </>
      );
    }

    return (
      <div className="text-2xl font-semibold text-gray-500">
        {activeItem} section is under construction...
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Top Navbar */}
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

      {/* Layout */}
      <div className="flex pt-16 min-h-[3000px]">
        {/* Sidebar */}
        <SidebarMenu activeItem={activeItem} onMenuClick={setActiveItem} />

        {/* Main Content */}
        <div className="flex flex-col w-full">
          <div className="px-6 py-2 text-sm text-gray-600">
            Dashboard &gt;{" "}
            <span className="text-green-700 font-medium">{activeItem}</span>
          </div>
          <div className="flex p-8 space-x-10">
            <div className="w-full flex flex-col space-y-10">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verifier;

