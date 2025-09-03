import AdminAddUser from "@/components/admin/AdminAddUser";
import { columns } from "@/components/admin/AdminTabel";
import { DataTable } from "@/components/DataTable";
import { Button } from "@/components/ui/button";
import type { UserType } from "@/schemas/user.schema";

const userData: UserType[] = [
  {
    name: "Fadhil Ghaza",
    uuid: "550e8400-e29b-41d4-a716-446655440000",
    username: 1001,
    role: "Murid",
    kelas: "XI DKV 1",
  },
  {
    name: "Nathan Ardiansyah",
    uuid: "123e4567-e89b-12d3-a456-426614174000",
    username: 1002,
    role: "Guru",
  },
  {
    name: "Mahes Putra",
    uuid: "9e107d9d-372b-4c72-9c3b-9a1b6ef0c123",
    username: 1003,
    role: "Staff",
  },
  {
    name: "Wahit Santoso",
    uuid: "6f9619ff-8b86-d011-b42d-00cf4fc964ff",
    username: 1004,
    role: "Murid",
    kelas: "X PS 1",
  },
  {
    name: "Siti Aisyah",
    uuid: "16fd2706-8baf-433b-82eb-8c7fada847da",
    username: 1005,
    role: "Murid",
    kelas: "XI TJKT 1",
  },
  {
    name: "Budi Prasetyo",
    uuid: "7c9e6679-7425-40de-944b-e07fc1f90ae7",
    username: 1006,
    role: "Guru",
  },
  {
    name: "Rina Kurnia",
    uuid: "8a7f5a3c-3b9f-4e92-8e1a-5f44c8f27f5c",
    username: 1007,
    role: "Staff",
  },
  {
    name: "Andi Wijaya",
    uuid: "b2c1a3f1-7d64-4a15-9b8a-7393a4a5b2e1",
    username: 1008,
    role: "Guru",
  },
  {
    name: "Dewi Sartika",
    uuid: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    username: 1009,
    role: "Murid",
    kelas: "XI PPLG 1",
  },
  {
    name: "Galih Saputra",
    uuid: "c56a4180-65aa-42ec-a945-5fd21dec0538",
    username: 1010,
    role: "Staff",
  },
];

const User = () => {
  const studentLength = userData.filter((user) => user.role === "Murid").length;
  const staffLength = userData.filter((user) => user.role === "Guru" || user.role === 'Staff').length;

  return (
    <section>
      <div className="flex justify-between w-full">
        <h1 className="text-2xl font-bold">User</h1>
        <div className="flex gap-2">
          <Button>Ekspor (Excel)</Button>
          <Button>Tambah (CSV)</Button>
          <AdminAddUser isNewUser={true}>
            <Button>Tambah</Button>
          </AdminAddUser>
        </div>
      </div>

      <div className="grid gap-2 mt-4">
        <div className="w-full px-2 py-2 rounded-xl border-2 text-center">
          Jumlah Siswa: {studentLength}, Jumlah Guru/Karyawan {staffLength}
        </div>
        <DataTable columns={columns} data={userData} />
      </div>
    </section>
  );
};

export default User;
