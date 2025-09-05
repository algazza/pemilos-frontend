import type { VoteType } from "@/schemas/vote.schema";
import { type ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<VoteType>[] = [
  {
    accessorKey: "name",
    header: "Nama",
    cell: ({ row }) => {
      const name = row.original;
      return (
        <div className="grid gap-[0.3]">
          <h1 className="font-bold">{name.name}</h1>
          <span className="text-xs">{name.kelas}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      const role = row.original.role;
      return (
        <div
          className={`rounded-lg w-fit px-2 text-sm font-semibold ${
            role === "Murid"
              ? "bg-blue-500"
              : role === "Staff"
              ? "bg-orange-500"
              : role === 'Guru' 
              ? "bg-green-500"
              : 'bg-red-500' 
          }`}
        >
          {role}
        </div>
      );
    },
  },
  {
    accessorKey: 'vote',
    header: 'Vote',
    cell: ({row}) => {
      const vote = row.original.vote

      return (
        <div className={`rounded-lg w-fit px-2 text-sm font-semibold ${
          vote ? 'bg-white text-black' : 'border-2 border-white'
        }`}>
          {vote ? 'Sudah' : 'Belum'}
        </div>
      )
    }
  }
];
