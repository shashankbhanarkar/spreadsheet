// import React from "react";

// const data = [
//   {
//     id: 1,
//     job: "Launch social media campaign for product",
//     submitted: "15-11-2024",
//     status: "In-process",
//     submitter: "Aisha Patel",
//     url: "www.aishapatel.com",
//     assigned: "Sophie Choudhury",
//     priority: "Medium",
//     due: "20-11-2024",
//     value: "6,200,000 ₹"
//   },
//   {
//     id: 2,
//     job: "Update press kit for company redesign",
//     submitted: "28-10-2024",
//     status: "Need to start",
//     submitter: "Irfan Khan",
//     url: "www.irfankhanp.com",
//     assigned: "Tejas Pandey",
//     priority: "High",
//     due: "30-10-2024",
//     value: "3,500,000 ₹"
//   },
//   {
//     id: 3,
//     job: "Finalize user testing feedback for app",
//     submitted: "05-12-2024",
//     status: "In-process",
//     submitter: "Mark Johnson",
//     url: "www.markjohnson.com",
//     assigned: "Rachel Lee",
//     priority: "Medium",
//     due: "10-12-2024",
//     value: "4,750,000 ₹"
//   },
//   {
//     id: 4,
//     job: "Design new features for the website",
//     submitted: "10-01-2025",
//     status: "Complete",
//     submitter: "Emily Green",
//     url: "www.emilygreen.com",
//     assigned: "Tom Wright",
//     priority: "Low",
//     due: "15-01-2025",
//     value: "5,900,000 ₹"
//   },
//   {
//     id: 5,
//     job: "Prepare financial report for Q4",
//     submitted: "25-01-2025",
//     status: "Blocked",
//     submitter: "Jessica Brown",
//     url: "www.jessicabrown.com",
//     assigned: "Kevin Smith",
//     priority: "Low",
//     due: "30-01-2025",
//     value: "2,800,000 ₹"
//   }
// ];

// const getStatusColor = (status: string) => {
//   switch (status) {
//     case "In-process": return "bg-yellow-100 text-yellow-700";
//     case "Need to start": return "bg-blue-100 text-blue-700";
//     case "Complete": return "bg-green-100 text-green-700";
//     case "Blocked": return "bg-red-100 text-red-700";
//     default: return "bg-gray-100 text-gray-700";
//   }
// };

// const getPriorityColor = (priority: string) => {
//   switch (priority) {
//     case "High": return "text-red-600 font-semibold";
//     case "Medium": return "text-yellow-600 font-medium";
//     case "Low": return "text-blue-600 font-medium";
//     default: return "text-gray-600";
//   }
// };

// const FinancialTable: React.FC = () => {
//   return (
//     <div className="overflow-x-auto p-4">
//       <table className="min-w-full border border-gray-200 text-sm">
//         <thead className="bg-gray-100">
//           <tr>
//             <td className="px-4 py-2 text-left">#</td>
//             <td className="px-4 py-2 text-left">Job Request</td>
//             <td className="px-4 py-2 text-left">Submitted</td>
//             <td className="px-4 py-2 text-left">Status</td>
//             <td className="px-4 py-2 text-left">Submitter</td>
//             <td className="px-4 py-2 text-left">URL</td>
//             <td className="px-4 py-2 text-left">Assigned</td>
//             <td className="px-4 py-2 text-left">Priority</td>
//             <td className="px-4 py-2 text-left">Due Date</td>
//             <td className="px-4 py-2 text-left">Est. Value</td>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row) => (
//             <tr key={row.id} className="border-t">
//               <td className="px-4 py-2">{row.id}</td>
//               <td className="px-4 py-2 max-w-xs truncate">{row.job}</td>
//               <td className="px-4 py-2">{row.submitted}</td>
//               <td className="px-4 py-2">
//                 <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(row.status)}`}>
//                   {row.status}
//                 </span>
//               </td>
//               <td className="px-4 py-2">{row.submitter}</td>
//               <td className="px-4 py-2 text-blue-600 underline cursor-pointer truncate">{row.url}</td>
//               <td className="px-4 py-2">{row.assigned}</td>
//               <td className={`px-4 py-2 ${getPriorityColor(row.priority)}`}>{row.priority}</td>
//               <td className="px-4 py-2">{row.due}</td>
//               <td className="px-4 py-2">{row.value}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default FinancialTable;



// FinancialTable.tsx
import * as React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { columns } from "../config/columns";
import { data } from "../data/data";

const rowCount = 12; // Total rows to display (including empty)

const FinancialTable: React.FC = () => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const actualRows = table.getRowModel().rows;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-gray-900 border border-gray-200">
        {/* Custom Top Header */}
        <thead>
          <tr>
            <td className="px-4 py-2 bg-white border border-gray-200"></td>
            <td className="px-4 py-2 bg-[#E2E2E2] border border-gray-200 text-left" colSpan={5}>
              🟦 <strong>Q3 Financial Overview</strong>
            </td>
            <td className="px-4 py-2 bg-[#D2E0D4] border border-gray-200 text-left" colSpan={1}>
              🟩 <strong>ABC</strong>
            </td>
            <td className="px-4 py-2 bg-[#DCCFFC] border border-gray-200 text-left" colSpan={2}>
              🟪 <strong>Answer a question</strong>
            </td>
            <td className="px-4 py-2 bg-[#FAC2AF] text-left" colSpan={1}>
              🟧 <strong>Extract</strong>
            </td>
            <td className="px-4 py-2 bg-[#EEEEEE] text-left" colSpan={1}>
              <strong className="font-normal text-2xl">+</strong>
            </td>
          </tr>
          {/* Actual Table Headers */}
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="bg-[#EEEEEE]">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-4 py-2 text-left border-r border-gray-200"
                  colSpan={header.colSpan}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {Array.from({ length: rowCount }).map((_, index) => {
            const row = actualRows[index];
            return (
              <tr key={index} className="border-t border-gray-200">
                {row
                  ? row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="px-4 py-2 border-r border-gray-100">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))
                  : columns.map((_, colIdx) => (
                      <td key={colIdx} className="px-4 py-2 border-r border-gray-100 h-9"></td>
                    ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FinancialTable;