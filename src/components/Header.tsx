import React from "react";
import { Bell } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="w-[100%] h-[56px] border-b border-[#EEEEEE] bg-white flex justify-between items-center px-4 py-2 opacity-100">
      {/* Left Side: Logo + Breadcrumb */}
      <div className="flex items-center gap-3">
        {/* App Icon */}
        <div className="w-5 h-5 bg-gradient-to-br from-green-400 to-orange-500 rounded-sm border border-orange-500"></div>

        {/* Breadcrumb */}
        <div className="flex justify-center items-center text-sm text-gray-500 gap-2">
          <span>Workspace</span>
          <span>&gt;</span>
          <span>Folder 2</span>
          <span>&gt;</span>
          <span className="text-black font-medium">Spreadsheet 3</span>
          <span className="text-xl font-semibold text-gray-400 ml-1">...</span>
        </div>
      </div>

      {/* Right Side: Search, Notification, Profile */}
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search within sheet"
            className="px-8 py-2 rounded-md bg-gray-100 text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Notification Bell */}
        <div className="relative">
          <Bell className="w-7 h-7 text-gray-700" />
          <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            2
          </span>
        </div>

        {/* User Info */}
        <div className="flex items-center gap-2">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User Avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="text-sm text-right leading-tight hidden sm:block">
            <p className="text-gray-800 font-medium">John Doe</p>
            <p className="text-gray-500 text-xs truncate">john.doe...</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
