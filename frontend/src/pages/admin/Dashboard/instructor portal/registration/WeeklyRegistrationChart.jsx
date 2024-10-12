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
import { useEffect, useState } from "react";
import axios from "axios";

// Register Chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const WeeklyRegistrationChart = () => {
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  const [chartData, setChartData] = useState({});
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const fetchWeeklyData = async () => {
      try {
        const response = await axios.get(
          `${VITE_API_URL}/api/v1/instructor/registered-candidates/registration/current-month-weeks`,
          {
            params: { month: currentMonth, year: currentYear },
          }
        );

        const data = response.data;
        console.log("API Response:", data); // Debugging line

        if (Array.isArray(data) && data.length > 0) {
          const labels = data.map((d) => `Week ${d._id.week}`);
          const counts = data.map((d) => d.count);

          setChartData({
            labels,
            datasets: [
              {
                label: `Candidate Registration per Week (${currentMonth}/${currentYear})`,
                data: counts,
                backgroundColor: "rgba(255,206, 86, 0.7)",
                borderColor: "rgba(255,206, 86, 0.8)",
                borderWidth: 1,
                barThickness: 24,
                categoryPercentage: 0.5,
                barPercentage: 0.1,
                borderRadius: 10,
              },
            ],
          });
        } else {
          console.warn("Warning: No valid data available to update chart");
          setChartData({
            labels: ["No Data"],
            datasets: [
              {
                label: `Candidate Registration per Week `,
                data: [0],
                backgroundColor: "rgba(255,206, 86, 0.7)",
                borderColor: "rgba(255,206, 86, 0.8)",
                borderWidth: 1,
                barThickness: 24,
                categoryPercentage: 0.5,
                barPercentage: 0.1,
                borderRadius: 10,
              },
            ],
          });
        }
      } catch (error) {
        console.error("Error fetching weekly registration data:", error);
      }
    };

    fetchWeeklyData();
  }, [currentMonth, currentYear]);


  // Default data for running web app cleaner
  const data = {
    labels: ["First", "Second", "Third", "Fourth"],
    datasets: [
      {
        label: ["Candidate Registration Per week"],
        data: [6, 7, 9, 10],
        backgroundColor: "rgba(255,206, 86, 0.7)",
        borderColor: "rgba(255,206, 86, 0.8)",
        borderWidth: 1,
        barThickness: 24,
        categoryPercentage: 0.5,
        barPercentage: 0.1,
        borderRadius: 10,
      },
    ],
  };
  // चार्ट ऑप्शंस
  const options = {
    responsive: true,
    aspectRatio: 1,
    // maintainAspectRadio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Student Registration weekly",
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default WeeklyRegistrationChart;
