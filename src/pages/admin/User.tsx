import AdminAddUser from "@/components/admin/AdminAddUser";
import { columns } from "@/components/admin/AdminTabel";
import { DataTable } from "@/components/DataTable";
import { Button } from "@/components/ui/button";
import type { UserType } from "@/schemas/user.schema";
import { useEffect, useState } from "react";

import { fetchUsers } from "@/service/fetch";

const User = () => {
  const [userData, setUserData] = useState<UserType[]>([]);
  const [page, setPage] = useState(1);
  const [studentCount, setStudentCount] = useState(0);
  const [staffCount, setStaffCount] = useState(0);

  useEffect(() => {
    fetchUsers(page).then((data) => {
      setUserData(data.users);
    })
  }, [page]);

  useEffect(() => {
    if (userData) {
      const counts = userData.reduce(
        (acc, user) => {
          if (user.role === "Murid") acc.students += 1;
          if (user.role === "Guru" || user.role === "Staff") acc.staff += 1;
          return acc;
        },
        { students: 0, staff: 0 }
      );
      setStudentCount(counts.students);
      setStaffCount(counts.staff);
    }
  }, [userData]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <section>
      <div className="flex justify-between w-full">
        <h1 className="text-2xl font-bold">User</h1>
        <div className="flex gap-2">
          <Button onClick={() => window.location.href = "/admin/gettoken"}>Download Token</Button>
          <Button>Ekspor (Excel)</Button>
          <Button>Tambah (CSV)</Button>
          {/* <AdminAddUser isNewUser={true}>
            <Button type="button">Tambah</Button>
          </AdminAddUser> */}
        </div>
      </div>

      <div className="grid gap-2 mt-4">
        <div className="w-full px-2 py-2 rounded-xl border-2 text-center">
          Jumlah Siswa: {studentCount}, Jumlah Guru/Karyawan: {staffCount}
        </div>
        <DataTable columns={columns} data={userData} />
      </div>
    </section>
  );
};

export default User;
