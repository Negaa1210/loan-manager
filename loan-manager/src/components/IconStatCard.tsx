import React from "react";

interface IconStatCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  className?: string; // optional override
}

const IconStatCard: React.FC<IconStatCardProps> = ({
  icon,
  value,
  label,
  className = "w-[272px] h-[100px]", // default size
}) => {
  return (
    <div className={`flex items-center shadow-md bg-white rounded-md overflow-hidden ${className}`}>
      {/* Left Icon */}
      <div className="bg-green-900 text-white flex items-center justify-center w-[80px] h-full text-2xl">
        {icon}
      </div>

      {/* Right Text */}
      <div className="flex flex-col justify-center px-4">
        <span className="text-xl font-bold text-gray-900">{value}</span>
        <span className="text-sm font-semibold text-gray-700 uppercase">
          {label}
        </span>
      </div>
    </div>
  );
};

export default IconStatCard;
