import type { UserType } from "@/schemas/user.schema";
import { type ColumnDef } from "@tanstack/react-table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { RefreshCcw } from "lucide-react";
import axios from "axios";
import { apiUrl } from "@/lib/api";

export const columns = (refetch: () => void): ColumnDef<UserType>[] => [
  {
    accessorKey: "name",
    header: "Nama",
    cell: ({ row }) => {
      const name = row.original;
      return (
        <div className="grid gap-[0.3]">
          <h1 className="font-bold">{name.name}</h1>
          <span className="text-xs">{name.class}</span>
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
    accessorKey: "vote",
    header: "Vote",
    cell: ({ row }) => {
      const vote = row.original.isVoted;

      return (
        <div
          className={`rounded-lg w-fit px-2 text-sm font-semibold ${
            vote ? "bg-white text-black" : "border-2 border-white"
          }`}
        >
          {vote ? "Sudah" : "Belum"}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;

      const ResetData = async (username: string) => {
        try {
          await axios.put(
            `${apiUrl}/admin/reset`,
            { username },
            {
              headers: {
                "ngrok-skip-browser-warning": "true",
                Authorization: `${localStorage.getItem("Authorization")}`,
              },
            }
          );
          refetch();
        } catch (error) {
          console.error("Failed to reset user:", error);
          throw error;
        }
      };

      return (
        <div className="flex gap-8">
          <AlertDialog>
            <AlertDialogTrigger className="cursor-pointer">
              <RefreshCcw className="size-4" />
            </AlertDialogTrigger>
            <AlertDialogContent className="dark text-foreground">
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Apakah ada yakin ingin mereset user ini?
                </AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  className="bg-blue-500 text-white"
                  onClick={() => ResetData(user.username)}
                  disabled={!user.isVoted}
                >
                  Reset
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      );
    },
  },
];
