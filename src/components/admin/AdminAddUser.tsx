import React from "react";
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
import type { UserType } from "@/schemas/user.schema";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";

const AdminAddUser = ({
  children,
  user,
  isNewUser,
}: {
  children: React.ReactNode;
  user?: UserType;
  isNewUser: boolean
}) => {
  return (
    <Dialog>
      <form>
        <DialogTrigger className="cursor-pointer">{children}</DialogTrigger>
        <DialogContent className="sm:max-w-[425px] dark text-foreground">
          <DialogHeader>
            <DialogTitle>{isNewUser ? 'Tambah user' :'Edit user'}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="">Nama</Label>
              <Input name="name" defaultValue={user?.name} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="">Kelas</Label>
              <Input name="grade" defaultValue={user?.kelas} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="">UUID</Label>
              <Input name="uuid" defaultValue={user?.uuid} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="">Username</Label>
              <Input
                id="username-1"
                name="username"
                defaultValue={user?.username}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="">Role</Label>
              <Select defaultValue={user?.role}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent className="dark text-foreground">
                  <SelectGroup>
                    <SelectItem value="Murid">Murid</SelectItem>
                    <SelectItem value="Guru">Guru</SelectItem>
                    <SelectItem value="Staff">Staff</SelectItem>
                    <SelectItem value="Admin">Admin</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">{isNewUser ? 'Add User' :'Save changes'}</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default AdminAddUser;
