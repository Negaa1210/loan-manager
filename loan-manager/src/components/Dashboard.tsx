// // import React from "react";
// // import {
// //   FiHome,
// //   FiUsers,
// //   FiDollarSign,
// //   FiRefreshCcw,
// //   FiSliders,
// //   FiFileText,
// //   FiBarChart2,
// //   FiLayers,
// //   FiShield,
// //   FiArchive,
// //   FiEdit,
// //   FiUserCheck,
// //   FiCalendar,
// //   FiSettings,
// //   FiLogOut,
// // } from "react-icons/fi";

// // // Define the props type
// // type SidebarMenuProps = {
// //   activeItem: string;
// //   onMenuClick: (itemName: string) => void;
// // };

// // const menuItems = [
// //   { name: "Dashboard", icon: <FiHome /> },
// //   { name: "Borrowers", icon: <FiUsers /> },
// //   { name: "Loans", icon: <FiDollarSign /> },
// //   { name: "Repayments", icon: <FiRefreshCcw /> },
// //   { name: "Loan Parameters", icon: <FiSliders /> },
// //   { name: "Accounting", icon: <FiFileText /> },
// //   { name: "Reports", icon: <FiBarChart2 /> },
// //   { name: "Collateral", icon: <FiLayers /> },
// //   { name: "Access Configuration", icon: <FiShield /> },
// //   { name: "Savings", icon: <FiArchive /> },
// //   { name: "Expenses", icon: <FiEdit /> },
// //   { name: "E-signature", icon: <FiUserCheck /> },
// //   { name: "Investor Accounts", icon: <FiUsers /> },
// //   { name: "Calendar", icon: <FiCalendar /> },
// //   { name: "Settings", icon: <FiSettings /> },
// //   { name: "Sign Out", icon: <FiLogOut /> },
// // ];

// // const SidebarMenu: React.FC<SidebarMenuProps> = ({ activeItem, onMenuClick }) => {
// //   return (
// //     <div
// //       className="bg-green-950 text-white shadow-lg flex flex-col"
// //       style={{ width: "231px", height: "2932px" }} // Apply custom width and height
// //     >
      

// //       <div className="flex flex-col items-center py-4 border-b border-green-800">
// //         <div className="w-12 h-12 rounded-full bg-green-800 flex items-center justify-center text-lg font-bold">
// //           J
// //         </div>
// //         <p className="mt-2 text-sm font-semibold">John Okoh</p>
// //       </div>

// //       <ul className="mt-2 flex flex-col">
// //         {menuItems.map((item, idx) => (
// //           <li
// //             key={idx}
// //             onClick={() => onMenuClick(item.name)}
// //             className={`flex items-center px-4 py-3 text-sm font-bold cursor-pointer transition-all duration-200 ${
// //               activeItem === item.name
// //                 ? "bg-green-800 shadow-inner"
// //                 : "bg-green-900"
// //             } hover:bg-green-800`}
// //           >
// //             <span className="mr-3 text-lg">{item.icon}</span>
// //             {item.name}
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default SidebarMenu;














// import React, { useEffect, useState } from "react";
// import {
//   FiHome,
//   FiUsers,
//   FiDollarSign,
//   FiRefreshCcw,
//   FiSliders,
//   FiFileText,
//   FiBarChart2,
//   FiLayers,
//   FiShield,
//   FiArchive,
//   FiEdit,
//   FiUserCheck,
//   FiCalendar,
//   FiSettings,
//   FiLogOut,
// } from "react-icons/fi";

// // Props type
// type SidebarMenuProps = {
//   activeItem: string;
//   onMenuClick: (itemName: string) => void;
// };

// // Menu items
// const menuItems = [
//   { name: "Dashboard", icon: <FiHome /> },
//   { name: "Borrowers", icon: <FiUsers /> },
//   { name: "Loans", icon: <FiDollarSign /> },
//   { name: "Repayments", icon: <FiRefreshCcw /> },
//   { name: "Loan Parameters", icon: <FiSliders /> },
//   { name: "Accounting", icon: <FiFileText /> },
//   { name: "Reports", icon: <FiBarChart2 /> },
//   { name: "Collateral", icon: <FiLayers /> },
//   { name: "Access Configuration", icon: <FiShield /> },
//   { name: "Savings", icon: <FiArchive /> },
//   { name: "Expenses", icon: <FiEdit /> },
//   { name: "E-signature", icon: <FiUserCheck /> },
//   { name: "Investor Accounts", icon: <FiUsers /> },
//   { name: "Calendar", icon: <FiCalendar /> },
//   { name: "Settings", icon: <FiSettings /> },
//   { name: "Sign Out", icon: <FiLogOut /> },
// ];

// const SidebarMenu: React.FC<SidebarMenuProps> = ({ activeItem, onMenuClick }) => {
//   const [userName, setUserName] = useState("User"); // Default fallback

//   useEffect(() => {
//     const nameFromStorage = localStorage.getItem("name");
//     if (nameFromStorage) {
//       setUserName(nameFromStorage);
//     }
//   }, []);

//   return (
//     <div
//       className="bg-green-950 text-white shadow-lg flex flex-col"
//       style={{ width: "231px", height: "100vh" }}
//     >
//       {/* User Avatar + Name */}
//       <div className="flex flex-col items-center py-4 border-b border-green-800">
//         <div className="w-12 h-12 rounded-full bg-green-800 flex items-center justify-center text-lg font-bold">
//           {userName.charAt(0).toUpperCase()}
//         </div>
//         <p className="mt-2 text-sm font-semibold">{userName}</p>
//       </div>

//       {/* Menu Items */}
//       <ul className="mt-2 flex flex-col">
//         {menuItems.map((item, idx) => (
//           <li
//             key={idx}
//             onClick={() => onMenuClick(item.name)}
//             className={`flex items-center px-4 py-3 text-sm font-bold cursor-pointer transition-all duration-200 ${
//               activeItem === item.name ? "bg-green-800 shadow-inner" : "bg-green-900"
//             } hover:bg-green-800`}
//           >
//             <span className="mr-3 text-lg">{item.icon}</span>
//             {item.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SidebarMenu;



























import React, { useEffect, useState } from "react";
import {
  FiHome,
  FiUsers,
  FiDollarSign,
  FiRefreshCcw,
  FiSliders,
  FiFileText,
  FiBarChart2,
  FiLayers,
  FiShield,
  FiArchive,
  FiEdit,
  FiUserCheck,
  FiCalendar,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

type SidebarMenuProps = {
  activeItem: string;
  onMenuClick: (itemName: string) => void;
};

const menuItems = [
  { name: "Dashboard", icon: <FiHome /> },
  { name: "Borrowers", icon: <FiUsers /> },
  { name: "Loans", icon: <FiDollarSign /> },
  { name: "Admins", icon: <FiUsers /> }, // 👈 ADDED Admins tab here
  { name: "Repayments", icon: <FiRefreshCcw /> },
  { name: "Loan Parameters", icon: <FiSliders /> },
  { name: "Accounting", icon: <FiFileText /> },
  { name: "Reports", icon: <FiBarChart2 /> },
  { name: "Collateral", icon: <FiLayers /> },
  { name: "Access Configuration", icon: <FiShield /> },
  { name: "Savings", icon: <FiArchive /> },
  { name: "Expenses", icon: <FiEdit /> },
  { name: "E-signature", icon: <FiUserCheck /> },
  { name: "Investor Accounts", icon: <FiUsers /> },
  { name: "Calendar", icon: <FiCalendar /> },
  { name: "Settings", icon: <FiSettings /> },
  { name: "Sign Out", icon: <FiLogOut /> },
];

const SidebarMenu: React.FC<SidebarMenuProps> = ({ activeItem, onMenuClick }) => {
  const [fullName, setFullName] = useState("User");

  useEffect(() => {
    const nameFromStorage = localStorage.getItem("fullName");
    if (nameFromStorage) {
      setFullName(nameFromStorage);
    }
  }, []);

  return (
    <div
      className="bg-green-950 text-white shadow-lg flex flex-col"
      style={{ width: "231px", height: "2932px" }}
    >
      <div className="flex flex-col items-center py-4 border-b border-green-800">
        <div className="w-12 h-12 rounded-full bg-green-800 flex items-center justify-center text-lg font-bold">
          {fullName.charAt(0).toUpperCase()}
        </div>
        <p className="mt-2 text-sm font-semibold">{fullName}</p>
      </div>

      <ul className="mt-2 flex flex-col">
        {menuItems.map((item, idx) => (
          <li
            key={idx}
            onClick={() => onMenuClick(item.name)}
            className={`flex items-center px-4 py-3 text-sm font-bold cursor-pointer transition-all duration-200 ${
              activeItem === item.name ? "bg-green-800 shadow-inner" : "bg-green-900"
            } hover:bg-green-800`}
          >
            <span className="mr-3 text-lg">{item.icon}</span>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarMenu;
