// BarChart.js
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Chart.js रजिस्टर करें
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  // चार्ट डेटा
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Sales 1",
        data: [40, 9, 0, 81, 56, 55, 40, 50, 65, 58, 75, 9],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 0.6)",
        borderWidth: 1,
        categoryPercentage: 0.5,
        barThickness: 14,
        borderRadius: 10,
        barPercentage: 0.1,
        hoverOffset: 4,
      },
    ],
  };

  // चार्ट ऑप्शंस
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Student Registration monthly",
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
