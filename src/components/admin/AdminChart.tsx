import type { LiveCountType } from "@/schemas/livecount.schema";
import { Card, CardContent } from "../ui/card";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AdminChart = ({titleChart, data}: {titleChart: string, data: LiveCountType[]}) => {
  return (
    <Card className="flex-1">
      <CardContent>
        <Bar
          options={{
            plugins: {
              title: {
                display: true,
                text: `Live Count Voting ${titleChart}`,
                color: "#fff",
              },
            },
          }}
          data={{
            labels: [titleChart],
            datasets: data.map((res) => ({
              label: res.name,
              data: [res.count]
            }))
          }}
        />
      </CardContent>
    </Card>
  );
};

export default AdminChart;
