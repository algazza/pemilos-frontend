import type { UserType } from "@/schemas/user.schema";
import { type ColumnDef } from "@tanstack/react-table";
import { Pen, Trash } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
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
    cell: ({row}) => {
      const user = row.original

      return (
        <div className="flex gap-8">
          <Dialog>
            <form>
              <DialogTrigger className="cursor-pointer">
                <Pen className="size-4" />
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] dark text-foreground">
                <DialogHeader>
                  <DialogTitle>Edit user</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="">Nama</Label>
                    <Input
                      name="name"
                      defaultValue={user.name}
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="">Kelas</Label>
                    <Input
                      name="grade"
                      defaultValue={user.grade}
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="">UUID</Label>
                    <Input
                      name="uuid"
                      defaultValue={user.uuid}
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="">Username</Label>
                    <Input
                      id="username-1"
                      name="username"
                      defaultValue={user.username}
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="">Role</Label>
                    <Input
                      name="role"
                      defaultValue={user.role}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </form>
          </Dialog>
          <div
            className="w-fit cursor-pointer"
            onClick={() => {
              console.log("hai");
            }}
          ></div>

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
