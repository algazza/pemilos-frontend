import AdminAddUser from "@/components/admin/AdminAddUser";
import { columns } from "@/components/admin/AdminTabel";
import { DataTable } from "@/components/DataTable";
import { Button } from "@/components/ui/button";
import type { UserType } from "@/schemas/user.schema";
import { useEffect, useState } from "react";
import type { PaginationState } from "@tanstack/react-table";
import { apiUrl } from "@/lib/api";
import axios from "axios";

const User = () => {
  const [userData, setUserData] = useState<UserType[]>([]);
  const [page, setPage] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 40,
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${apiUrl}/admin/user`, {
        params: { page },
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      });
      setUserData(response.data.data);
    };
    fetchData()
  }, [page]);

  const studentLength = userData.filter((user) => user.role === "Murid").length;
  const staffLength = userData.filter((user) => user.role === "Guru" || user.role === 'Staff').length;
  console.log(userData);

  return (
    <section>
      <div className="flex justify-between w-full">
        <h1 className="text-2xl font-bold">User</h1>
        <div className="flex gap-2">
          <Button onClick={() => (window.location.href = "/admin/gettoken")}>
            Download Token
          </Button>
          <Button>Ekspor (Excel)</Button>
          <Button>Tambah (CSV)</Button>
          <AdminAddUser isNewUser={true}>
            <Button type="button">Tambah</Button>
          </AdminAddUser>
        </div>
      </div>

      <div className="grid gap-2 mt-4">
        <div className="w-full px-2 py-2 rounded-xl border-2 text-center">
          Jumlah Siswa: {studentLength}, Jumlah Guru/Karyawan: {staffLength}
        </div>
        <DataTable
          columns={columns}
          data={userData}
          pagination={page}
          onPaginationChange={setPage}
        />
      </div>
    </section>
  );
};

export default User;
