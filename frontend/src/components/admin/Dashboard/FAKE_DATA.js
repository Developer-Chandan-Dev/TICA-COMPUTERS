export const lineChartData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "First Week",
      data: [3000, 4500, 5500, 6600, 7000, 8000, 9000],
      borderColor: "rgb(75, 192, 192)",
    },
    {
      label: "Second Week",
      data: [3300, 4600, 5700, 6900, 7600, 8700, 10000],
      borderColor: "rgb(75, 192, 12)",
    },
  ],
};

export const pieChartData = {
  labels: ["Candidates", "Students", "Enquiryes"],
  datasets: [
    {
      lable: "Time Spent",
      data: [50, 60, 70],
      backgroundColor: [
        "rgba(255, 26, 104, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255,206, 86, 0.6)",
      ],
      hoverOffset: 4,
    },
  ],
};
