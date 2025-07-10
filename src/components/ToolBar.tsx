import React from "react";
import {
  EyeOff,
  ArrowDownUp,
  Filter,
  MoveDownLeft,
  Download,
  Upload,
  Share2,
  PlusCircle
} from "lucide-react";

const Toolbar: React.FC = () => {
  return (
    <div className="w-[100%] h-[48px] border-b border-[#EEEEEE] bg-white flex justify-between items-center px-2 py-[6px] gap-2 opacity-100">
      {/* Left Options */}
      <div className="flex items-center gap-4 text-sm text-gray-700">
        <button className="flex items-center gap-1">
          <span>Tool bar</span>
          <span className="ml-1">»</span>
        </button>
        <div className="h-5 w-px bg-gray-300" />
        <button className="flex items-center gap-1">
          <EyeOff className="w-4 h-4" />
          <span>Hide fields</span>
        </button>
        <button className="flex items-center gap-1">
          <ArrowDownUp className="w-4 h-4" />
          <span>Sort</span>
        </button>
        <button className="flex items-center gap-1">
          <Filter className="w-4 h-4" />
          <span>Filter</span>
        </button>
        <button className="flex items-center gap-1">
          <MoveDownLeft className="w-4 h-4" />
          <span>Cell view</span>
        </button>
      </div>

      {/* Right Buttons */}
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-800 hover:bg-gray-50">
          <Download className="w-4 h-4" />
          Import
        </button>
        <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-800 hover:bg-gray-50">
          <Upload className="w-4 h-4" />
          Export
        </button>
        <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-800 hover:bg-gray-50">
          <Share2 className="w-4 h-4" />
          Share
        </button>
        <button className="flex items-center gap-1 px-4 py-1 bg-green-700 text-white rounded-md text-sm hover:bg-green-800">
          <PlusCircle className="w-4 h-4" />
          New Action
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
