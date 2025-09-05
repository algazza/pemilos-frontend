import { columns } from '@/components/admin/AdminVote';
import { DataTable } from '@/components/DataTable';
import type { VoteType } from '@/schemas/vote.schema';

const userData: VoteType[] = [
  {
    name: "Fadhil Ghaza",
    role: "Murid",
    kelas: "XI DKV 1",
    vote: true
  },
  {
    name: "Nathan Ardiansyah",
    role: "Guru",
    vote: true
  },
  {
    name: "Mahes Putra",
    role: "Staff",
    vote: false
  },
  {
    name: "Wahit Santoso",
    role: "Murid",
    kelas: "X PS 1",
    vote: true
  },
  {
    name: "Siti Aisyah",
    role: "Murid",
    kelas: "XI TJKT 1",
    vote: false
  },
  {
    name: "Budi Prasetyo",
    role: "Guru",
    vote: false
  },
  {
    name: "Rina Kurnia",
    role: "Staff",
    vote: true
  },
  {
    name: "Andi Wijaya",
    role: "Guru",
    vote: true
  },
  {
    name: "Dewi Sartika",
    role: "Murid",
    kelas: "XI PPLG 1",
    vote: true
  },
  {
    name: "Galih Saputra",
    role: "Staff",
    vote: false
  },
];

const Vote = () => {
    const isNotVote = userData.filter(user => user.vote === false).length

  return (
    <section>
        <h1 className="text-2xl font-bold">User</h1>

      <div className="grid gap-2 mt-4">
        <div className="w-full px-2 py-2 rounded-xl border-2 text-center">
          Jumlah Belum Voting: {isNotVote}
        </div>
        <DataTable columns={columns} data={userData} />
      </div>
    </section>
  );
}

export default Vote