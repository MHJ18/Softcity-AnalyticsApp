import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartButtons from "../chart-listing/ChartButtons";

ChartJS.register(ArcElement, Tooltip, Legend);
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      maxWidth: 10,
      maxHeight: 40,
      labels: {
        font: { size: 10 },
        boxWidth: 22,
        boxHeight: 8,
        textAlign: "start",
      },
    },
    title: {
      display: false,
      text: "Chart.js Doughnut Chart",
    },
  },
};
export const data = {
  labels: ["Red", "Blue", "yellow"],
  datasets: [
    {
      label: "Profit",
      data: [7, 1, 2],
      backgroundColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
      hoverOffset: 8,
    },
  ],
};

const PieChart = () => {
  return (
    <div
      className="px-2 pb-2 bg-white rounded align-self-start"
      style={{ width: 400 }}
    >
      <div
        className="headingOfData"
        style={{ margin: "23px", paddingTop: "10px" }}
      >
        <span className="header-before mx-7">Text Content here</span>
      </div>
      <div className="d-flex flex-column align-items-center gap-3">
        <div style={{ height: "190px", overflow: "visible" }}>
          <Pie data={data} options={options} />
        </div>
        <ChartButtons />
      </div>
    </div>
  );
};

export default PieChart;
