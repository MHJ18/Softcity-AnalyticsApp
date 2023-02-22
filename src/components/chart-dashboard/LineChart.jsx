import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";
import ChartButtons from "../chart-listing/ChartButtons";
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

function LineChart() {
  const data = {
    labels: ["January", "Febuary", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "my First DataSet",
        data: [65, 57, 80, 82, 56, 55, 40],
        backgroundColor: "#47b3a6",
        borderColor: "#24c8bf",
        pointBorderColor: "#47b3a6",
        tension: 0.2,
      },
    ],
  };
  const options = {
    plugins: {
      Legend: true,
    },
    scales: {
      y: {
        min: 50,
        max: 85,
      },
    },
  };
  return (
    <>
      <div className="px-2 pb-2 rounded bg-white" style={{ width: 400 }}>
        <div
          className="headingOfData"
          style={{ padding: "20px 0 20px 0", margin: "0 25px" }}
        >
          <span className="header-before">Text Content here</span>
        </div>
        <div className="d-flex flex-column align-items-center gap-3">
          <Line data={data} options={options} />

          <div>
            <ChartButtons />
          </div>
        </div>
      </div>
    </>
  );
}

export default LineChart;
