import {
  FiDollarSign,
  FiUsers,
  FiCheckCircle,
  FiTrendingUp,
  FiBriefcase,
  FiCreditCard,
} from "react-icons/fi";
import IconStatCard from "../components/IconStatCard";

const IconPage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      <IconStatCard icon={<FiDollarSign />} value="50" label="Loans" className="w-[348px] h-[128px]" />
      <IconStatCard icon={<FiUsers />} value="100" label="Borrowers" className="w-[348px] h-[128px]" />
      <IconStatCard icon={<FiCheckCircle />} value="30" label="Repaid Loans" className="w-[348px] h-[128px]" />
      <IconStatCard icon={<FiTrendingUp />} value="550,000" label="Cash Disbursed" className="w-[348px] h-[128px]" />
      <IconStatCard icon={<FiBriefcase />} value="450,000" label="Savings" className="w-[348px] h-[128px]" />
      <IconStatCard icon={<FiCreditCard />} value="1,000,000" label="Cash Received" className="w-[348px] h-[128px]" />
    </div>
  );
};

export default IconPage;