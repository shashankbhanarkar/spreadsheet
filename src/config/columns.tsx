import type { ColumnDef, CellContext } from '@tanstack/react-table';

type RowData = {
  id: number | string;
  job: string;
  submitted: string;
  status: string;
  submitter: string;
  url: string;
  assigned: string;
  priority: string;
  due: string;
  value: string | number;
  notes: string;
};

export const columns: ColumnDef<RowData>[] = [
  {
    accessorKey: 'id',
    header: '#',
    cell: (info: CellContext<RowData, unknown>) => info.getValue(),
    size: 40,
  },
  {
    accessorKey: 'job',
    header: 'Job Request',
    size: 200,
  },
  {
    accessorKey: 'submitted',
    header: 'Submitted',
    size: 110,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    size: 110,
    cell: (info: CellContext<RowData, unknown>) => {
      const value = info.getValue() as string;
      const statusClasses: Record<string, string> = {
        "In-process": "bg-yellow-100 text-yellow-800",
        "Need to start": "bg-blue-100 text-blue-800",
        "Complete": "bg-green-100 text-green-800",
        "Blocked": "bg-red-100 text-red-800",
      };
      return (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusClasses[value] || "bg-gray-100 text-gray-800"}`}>
          {value}
        </span>
      );
    },
  },
  {
    accessorKey: 'submitter',
    header: 'Submitter',
    size: 140,
  },
  {
    accessorKey: 'url',
    header: 'URL',
    size: 170,
    cell: (info: CellContext<RowData, unknown>) => (
      <a
        href={`https://${info.getValue()}`}
        className="text-blue-600 underline"
        target="_blank"
        rel="noreferrer"
      >
        {String(info.getValue())}
      </a>
    ),
  },
  {
    accessorKey: 'assigned',
    header: 'Assigned',
    size: 140,
  },
  {
    accessorKey: 'priority',
    header: 'Priority',
    size: 100,
    cell: (info: CellContext<RowData, unknown>) => {
      const value = info.getValue() as string;
      const color = {
        High: "text-red-600 font-semibold",
        Medium: "text-yellow-600 font-medium",
        Low: "text-blue-600 font-medium",
      }[value] || "text-gray-600";
      return <span className={color}>{value}</span>;
    }
  },
  {
    accessorKey: 'due',
    header: 'Due Date',
    size: 110,
  },
  {
    accessorKey: 'value',
    header: 'Est. Value',
    size: 120,
  },
];