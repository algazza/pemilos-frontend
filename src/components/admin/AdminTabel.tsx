import type { UserType } from "@/schemas/user.schema";
import { type ColumnDef } from "@tanstack/react-table";
import { Pen, Trash } from "lucide-react";

export const columns: ColumnDef<UserType>[] = [
  {
    accessorKey: "name",
    header: "Nama",
    cell: ({ row }) => {
      const name = row.original;
      return (
        <div className="grid gap-[0.3]">
          <h1 className="font-bold">{name.name}</h1>
          <span className="text-xs">{name.grade}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "uuid",
    header: "UUID",
  },
  {
    accessorKey: "username",
    header: "Username",
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
              : role === "Guru"
              ? "bg-green-500"
              : "bg-red-500"
          }`}
        >
          {role}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <div className="flex gap-8">
          <div
            className="w-fit cursor-pointer"
            onClick={() => {
              console.log("hai");
            }}
          >
            <Pen className="size-4" />
          </div>
          <div
            className="w-fit cursor-pointer"
            onClick={() => {
              console.log("oiy");
            }}
          >
            <Trash className="size-4" />
          </div>
        </div>
      );
    },
  },
];
