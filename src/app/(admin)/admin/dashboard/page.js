import { Bar, BarChart } from "recharts"
import AnalyticsChart from "@/components/ui/BarChart/BarChart";


export default function Dashboard() {
  return (
    <div className=" font-bold text-center text-3xl">
      <div>
        <h1 className="flex justify-between text-3xl font-bold">Dashboard</h1>
      </div>
      <AnalyticsChart />
    </div>
  );
}
