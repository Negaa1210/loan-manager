import  { useEffect, useState } from "react";

const loansDataInit = [
  {
    id: 1,
    avatar: "https://i.pravatar.cc/40?img=1",
    activity: "Contact Email not Linked",
    updated: "Updated 1 day ago",
    customer: "Tom Cruise",
    customerDate: "on 24.05.2019",
    date: "June 09, 2021",
    time: "6:30 PM",
    status: "PENDING",
  },
  {
    id: 2,
    avatar: "https://i.pravatar.cc/40?img=2",
    activity: "Adding Images to Featured Posts",
    updated: "Updated 1 day ago",
    customer: "Matt Damon",
    customerDate: "on 24.05.2019",
    date: "June 09, 2021",
    time: "8:00 AM",
    status: "PENDING",
  },
];

const StatusBadge = ({ status }: { status: string }) => {
  const color =
    status === "PENDING"
      ? "bg-yellow-100 text-yellow-700"
      : status === "APPROVED"
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-700";

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${color}`}>
      {status}
    </span>
  );
};

const AppliedLoansTable = () => {
  const [loansData, setLoansData] = useState(loansDataInit);
  const [role, setRole] = useState("User");

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    if (storedRole) setRole(storedRole);
  }, []);

  const handleUpdateStatus = (id: number, newStatus: string) => {
    const updated = loansData.map((loan) =>
      loan.id === id ? { ...loan, status: newStatus } : loan
    );
    setLoansData(updated);
  };

  return (
    <div className="relative bg-white rounded-lg shadow-md p-4 overflow-auto w-[1137px] h-[915px]">
      {/* Header */}
      <div className="flex justify-between items-center pb-4">
        <h2 className="text-lg font-semibold">Applied Loans</h2>
        <div className="flex gap-4 text-sm text-gray-500">
          <button className="hover:text-black">⇅ Sort</button>
          <button className="hover:text-black">⚲ Filter</button>
        </div>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-12 text-xs font-medium text-gray-400 border-b pb-3 mb-2">
        <div className="col-span-5">User Recent Activity</div>
        <div className="col-span-3">Customer name</div>
        <div className="col-span-2">Date</div>
        <div className="col-span-2 text-right">Action</div>
      </div>

      {/* Table Rows */}
      {loansData.map((loan) => (
        <div
          key={loan.id}
          className="grid grid-cols-12 items-center py-4 border-b hover:bg-gray-50 transition"
        >
          {/* Activity */}
          <div className="col-span-5 flex items-center gap-3 truncate">
            <img
              src={loan.avatar}
              alt="avatar"
              className="w-10 h-10 rounded-full flex-shrink-0"
            />
            <div className="flex flex-col">
              <span className="text-sm font-medium leading-none">
                {loan.activity}
              </span>
              <span className="text-xs text-gray-500">{loan.updated}</span>
            </div>
          </div>

          {/* Customer */}
          <div className="col-span-3 flex flex-col">
            <span className="text-sm font-medium leading-none">
              {loan.customer}
            </span>
            <span className="text-xs text-gray-400">{loan.customerDate}</span>
          </div>

          {/* Date */}
          <div className="col-span-2 flex flex-col">
            <span className="text-sm font-medium leading-none">
              {loan.date}
            </span>
            <span className="text-xs text-gray-400">{loan.time}</span>
          </div>

          {/* Action Buttons */}
          <div className="col-span-2 flex justify-end gap-2 items-center">
            {role === "Admin" && loan.status === "PENDING" ? (
              <>
                <button
                  onClick={() => handleUpdateStatus(loan.id, "APPROVED")}
                  className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded hover:bg-green-200"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleUpdateStatus(loan.id, "REJECTED")}
                  className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded hover:bg-red-200"
                >
                  Reject
                </button>
              </>
            ) : (
              <StatusBadge status={loan.status} />
            )}
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
        <div>
          Rows per page:
          <select className="ml-2 border rounded p-1">
            <option>7</option>
            <option>10</option>
          </select>
        </div>
        <div className="flex gap-3 items-center">
          <span>1–{loansData.length} of 1240</span>
          <button className="px-2 py-1 border rounded">◀</button>
          <button className="px-2 py-1 border rounded">▶</button>
        </div>
      </div>
    </div>
  );
};

export default AppliedLoansTable;
