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
import { useState, useEffect } from "react";
import axios from "axios";

// Chart.js रजिस्टर करें
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MonthlyChartStudents = () => {
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  const [filteredCounts, setFilteredCounts] = useState([]); // State for filtered counts

  const monthNames = [
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
  ];

  useEffect(() => {
    const fetchMontlyData = async () => {
      try {
        const response = await axios.get(
          `${VITE_API_URL}/api/v1/instructor/student/admission/monthly`
        );
        const data = response.data;

        // Initialize an array with 12 months and set count to 0
        const counts = Array(12).fill(0);

        // Update counts array with actual data
        data.forEach((d) => {
          counts[d._id - 1] = d.count; // `_id - 1` maps month number to zero-indexed array
          setFilteredCounts(counts);
        });
      } catch (error) {
        console.error("Error fetching monthly registration data:", error);
      }
    };
    fetchMontlyData();
  }, []);

  // चार्ट डेटा
  const data = {
    labels: monthNames,
    datasets: [
      {
        label: "Students",
        data: filteredCounts,
        backgroundColor: "rgba(75, 192, 192, 0.7)",
        borderColor: "rgba(75, 192, 192, 0.8)",
        borderWidth: 1,
        barThickness: 10,
        borderRadius: 10,
      },
    ],
  };

  // चार्ट ऑप्शंस
  const options = {
    // responsive: true,
    // aspectRatio: 1.3,
    maintainAspectRadio: false,
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

export default MonthlyChartStudents;
