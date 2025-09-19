import AdminChart from "@/components/admin/AdminChart";

const response = {
  "osis": [
    {
      "count": 2,
      "name": "erlangga",
      "number": 1
    }
  ],
  "mpk": [
    {
      "count": 25,
      "name": "elang",
      "number": 1
    },
    {
      "count": 25,
      "name": "elang",
      "number": 2
    },
    {
      "count": 2,
      "name": "banon",
      "number": 3
    }
  ]
}

const Dashboard = () => {
  return (
    <section>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="flex gap-8 mt-4">
        <AdminChart titleChart="Osis" data={response.osis}/>
        <AdminChart titleChart="Mpk" data={response.mpk}/>
      </div>
    </section>
  );
};

export default Dashboard;
