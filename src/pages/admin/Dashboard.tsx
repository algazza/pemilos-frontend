import AdminChart from "@/components/admin/AdminChart";

const Dashboard = () => {
  return (
    <section>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="flex gap-8 mt-4">
        <AdminChart titleChart="OSIS"/> 
        <AdminChart titleChart="MPK"/>
      </div>
    </section>
  );
};

export default Dashboard;
