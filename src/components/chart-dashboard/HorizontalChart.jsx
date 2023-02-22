import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartButtons from "../chart-listing/ChartButtons";
import "./chartJS/chartstyling.css";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 1,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: false,
    },
  },
};

const labels = ["January", "February", "March", "April"];

export const data = {
  labels,
  datasets: [
    {
      label: "Sales",
      data: [91, 67, 35, 78],
      backgroundColor: "rgba(255, 99, 132, 0.4)",
      borderColor: "red",
      borderRadius: 1,
    },
  ],
};

const HorizontalChart = () => {
  return (
    <>
      <div
        className="px-2 pb-2 bg-white rounded align-self-stretch"
        style={{ width: 400 }}
      >
        <div className="headingOfData" style={{ margin: "25px" }}>
          <span className="header-before mx-7">Text Content here</span>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center height gap-3">
          <Bar options={options} data={data} />

          <div>
            <ChartButtons />
          </div>
        </div>
      </div>
    </>
  );
};

export default HorizontalChart;
