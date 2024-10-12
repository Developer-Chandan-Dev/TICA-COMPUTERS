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

// Helper function to format labels as "Month YYYY - Week X"
const formatLabel = (month, year, week) => {
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
  return ` ${year} - Week`;
};

const WeeklyChartStudents = () => {
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  // State to hold chart date and current month/year
  const [chartData, setChartData] = useState({});
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Function to fetch weekly data for the current month
    const fetchMonthlyWeellyData = async () => {
      try {
        // Make an API call to fetch data
        const response = await axios.get(
          `${VITE_API_URL}/api/v1/instructor/student/admission/current-month-weeks`,
          {
            params: { month: currentMonth, year: currentYear },
          }
        );
        const data = response.data;

        // Organize data into labels and counts arrays
        const labels = [];
        const counts = [];

        data.forEach((d) => {
          const label = formatLabel(currentYear, d._id.week);
          labels.push(label);
          counts.push(d.count);
        });

        // Set chart data state
        setChartData({
          labels: labels, // Labels for each week
          datasets: [
            {
              label: `Admission per Week (${currentMonth}/${currentYear})`,
              data: counts, // Admission counts for each week
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
      } catch (error) {
        // Handle error
        console.error("Error fetching monthly weekly admission data:", error);
      }
    };
    fetchMonthlyWeellyData();
  }, [currentMonth, currentYear]); // Re-run the effect when month or year changes

  // Default data for running web app cleaner
  const data = {
    labels: ["First", "Second", "Third", "Fourth"],
    datasets: [
      {
        label: ["Candidate Registration Per week"],
        data: [6, 5, 5, 12],
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
        text: "Student Admission weekly",
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default WeeklyChartStudents;
