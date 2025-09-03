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

const AdminChart = ({titleChart}: {titleChart: string}) => {
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
            datasets: [
              {
                label: "Al",
                data: [200],
              },
              {
                label: "ol",
                data: [100],
              },
            ],
          }}
        />
      </CardContent>
    </Card>
  );
};

export default AdminChart;
