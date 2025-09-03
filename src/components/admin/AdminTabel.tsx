import type { UserType } from "@/schemas/user.schema";
import { type ColumnDef } from "@tanstack/react-table";
import { Pen, Trash } from "lucide-react";
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
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import AdminAddUser from "./AdminAddUser";

export const columns: ColumnDef<UserType>[] = [
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
    id: "actions",
    cell: ({row}) => {
      const user = row.original

      return (
        <div className="flex gap-8">
          <AdminAddUser isNewUser={false} user={user}>
            <Pen className="size-4"/>
          </AdminAddUser>

          <AlertDialog>
            <AlertDialogTrigger className="cursor-pointer">
              <Trash className="size-4" />
            </AlertDialogTrigger>
            <AlertDialogContent className="dark text-foreground">
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Apakah ada yakin ingin menghapus user ini?
                </AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction className="bg-red-500 text-white">Delete</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      );
    },
  },
];
