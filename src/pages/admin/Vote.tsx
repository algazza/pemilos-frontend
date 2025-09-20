import { columns } from "@/components/admin/AdminVote";
import { DataTable } from "@/components/DataTable";
import { apiUrl } from "@/lib/api";
import type { UserType } from "@/schemas/user.schema";
import type { PaginationState } from "@tanstack/react-table";
import axios from "axios";
import { useEffect, useState } from "react";

const Vote = () => {
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


  const isNotVote = userData.filter((user) => user.isVoted === false).length;

  return (
    <section>
      <h1 className="text-2xl font-bold">Vote</h1>

      <div className="grid gap-2 mt-4">
        <div className="w-full px-2 py-2 rounded-xl border-2 text-center">
          Jumlah Belum Voting: {isNotVote}
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

export default Vote;
