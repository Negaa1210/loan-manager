// import React from "react";
// import {
//   FiBell,
//   FiMessageSquare,
//   FiUser,
//   FiChevronDown,
//   FiMenu,
// } from "react-icons/fi";

// // Define prop type
// interface TopNavbarProps {
//   role?: string; // Can be "Admin", "Verifier", etc.
// }

// const TopNavbar: React.FC<TopNavbarProps> = ({ role = "Verifier" }) => {
//   return (
//     <div className="flex items-center justify-between h-16 bg-gradient-to-r from-white to-gray-100 px-6 shadow-sm border-b">
//       {/* Left: Logo + Menu Icon */}
//       <div className="flex items-center space-x-4">
//         <span className="text-green-900 font-bold text-lg">CREDIT APP</span>
//         <FiMenu className="text-green-900 text-xl cursor-pointer" />
//       </div>

//       {/* Right: Notification, Chat, Profile */}
//       <div className="flex items-center space-x-6 text-green-900">
//         <div className="relative">
//           <FiBell className="text-xl cursor-pointer" />
//           <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] px-[5px] py-[1px] rounded-full font-semibold">
//             4
//           </span>
//         </div>
//         <FiMessageSquare className="text-xl cursor-pointer" />
//         <FiUser className="text-xl" />
//         <span className="font-semibold">{role}</span>
//         <FiChevronDown className="text-sm" />
//       </div>
//     </div>
//   );
// };

// export default TopNavbar;











import React from "react";
import {
  FiBell,
  FiMessageSquare,
  FiUser,
  FiChevronDown,
  FiMenu,
} from "react-icons/fi";

interface TopNavbarProps {
  fullName?: string; // Example: "Admin John", "Verifier Mary", "Alice"
}

const TopNavbar: React.FC<TopNavbarProps> = ({ fullName = "" }) => {
  let role = "User";

  if (fullName.startsWith("Admin")) {
    role = "Admin";
  } else if (fullName.startsWith("Verifier")) {
    role = "Verifier";
  }

  return (
    <div className="flex items-center justify-between h-16 bg-gradient-to-r from-white to-gray-100 px-6 shadow-sm border-b">
      {/* Left: Logo + Menu Icon */}
      <div className="flex items-center space-x-4">
        <span className="text-green-900 font-bold text-lg">CREDIT APP</span>
        <FiMenu className="text-green-900 text-xl cursor-pointer" />
      </div>

      {/* Right: Notification, Chat, Profile */}
      <div className="flex items-center space-x-6 text-green-900">
        <div className="relative">
          <FiBell className="text-xl cursor-pointer" />
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] px-[5px] py-[1px] rounded-full font-semibold">
            4
          </span>
        </div>
        <FiMessageSquare className="text-xl cursor-pointer" />
        <FiUser className="text-xl" />
        <span className="font-semibold">{role}</span>
        <FiChevronDown className="text-sm" />
      </div>
    </div>
  );
};

export default TopNavbar;


