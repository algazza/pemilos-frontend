import { columns } from "@/components/admin/AdminVote";
import { DataTable } from "@/components/DataTable";
import { apiUrl } from "@/lib/api";
import type { UserType } from "@/schemas/user.schema";
import type { PaginationState } from "@tanstack/react-table";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";

const Vote = () => {
  const [userData, setUserData] = useState<UserType[]>([]);
  const [page, setPage] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 40,
  });
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${apiUrl}/admin/user?name=${search}&kelas=${filter}&page=${
          page.pageIndex + 1
        }`,
        {
          headers: {
            "ngrok-skip-browser-warning": "true",
            Authorization: `${localStorage.getItem("Authorization")}`,
          },
        }
      );
      setUserData(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setPage((prev) => ({ ...prev, pageIndex: 0 }));
  }, [search, filter]);

  useEffect(() => {
    fetchData();
  }, [page.pageIndex, search, filter]);

  const memoizedColumns = useMemo(() => columns(fetchData), [fetchData]);

  return (
    <section>
      <h1 className="text-2xl font-bold">Vote</h1>

      <div className="grid gap-2 mt-4">
        <DataTable
          columns={memoizedColumns}
          data={userData}
          pagination={page}
          onPaginationChange={setPage}
          isLoading={loading}
          onSearchChange={setSearch}
          onFilter={setFilter}
        />
      </div>
    </section>
  );
};

export default Vote;
