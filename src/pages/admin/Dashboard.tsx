import AdminChart from "@/components/admin/AdminChart";
import { useEffect, useState } from "react";
import Pusher from "pusher-js";
import type { CountArrayType } from "@/schemas/livecount.schema";
import axios from "axios";
import { apiUrl } from "@/lib/api";

const Dashboard = () => {
  const [count, setCount] = useState<CountArrayType | null>(null);

  const fetchData = async () => {
    const res = await axios.get(`${apiUrl}/admin/live/count`, {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    });
    setCount(res.data.data);
  };

  useEffect(() => {
    fetchData();

    Pusher.logToConsole = true;
    const pusher = new Pusher(import.meta.env.VITE_PUSHER_KEY, {
      cluster: import.meta.env.VITE_PUSHER_CLUSTER,
    });

    const channel = pusher.subscribe("pemilose");
    channel.bind("pemilolot", () => {
      fetchData();
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
      pusher.disconnect();
    };
  }, []);

  console.log(count)

  return (
    <section>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="flex gap-8 mt-4">
        <AdminChart titleChart="Osis" data={count?.osis} />
        <AdminChart titleChart="Mpk" data={count?.mpk} />
      </div>
    </section>
  );
};

export default Dashboard;
