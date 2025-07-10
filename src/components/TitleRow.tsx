import React, { useState } from "react";

const tabs = ["All Orders", "Pending", "Reviewed", "Arrived", "+"];

const TitleRow: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All Orders");

  return (
    <div className="flex items-center space-x-4 px-4 py-2 text-sm font-medium text-gray-700 border-b border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`p-2 border-t-2 cursor-pointer ${
            activeTab === tab
              ? "border-green-800 text-green-900 font-semibold bg-[#E8F0E9]"
              : "border-transparent hover:text-gray-900"
          } transition-colors`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TitleRow;
