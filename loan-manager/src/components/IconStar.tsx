import {
  FiDollarSign,
  FiUsers,
  FiCheckCircle,
  FiTrendingUp,
  FiBriefcase,
  FiCreditCard,
} from "react-icons/fi";
import IconStatCard from "../components/IconStatCard";

const IconStar = () => {
  const stats = [
    { icon: <FiDollarSign />, value: "200", label: "Loans" },
    { icon: <FiUsers />, value: "100", label: "Borrowers" },
    { icon: <FiCheckCircle />, value: "30", label: "Repaid Loans" },
    { icon: <FiTrendingUp />, value: "550,000", label: "Cash Disbursed" },
    { icon: <FiBriefcase />, value: "1,000,000", label: "Cash Received" },
    { icon: <FiCreditCard />, value: "450,000", label: "Savings" },
    { icon: <FiCreditCard />, value: "30", label: "Repaid Loans" },
    { icon: <FiCreditCard />, value: "10", label: "Other Accounts" },
  ];

  return (
    <div className="grid grid-cols-4 gap-6 w-[1208px] mx-auto">
      {stats.map((item, index) => (
        <IconStatCard
          key={index}
          icon={item.icon}
          value={item.value}
          label={item.label}
          className="w-[272px] h-[100px]" // explicitly set
        />
      ))}
    </div>
  );
};

export default IconStar;