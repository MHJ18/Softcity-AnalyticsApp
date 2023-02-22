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
import { faker } from "@faker-js/faker";
import ChartButtons from "../chart-listing/ChartButtons";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  plugins: {
    title: {
      display: false,
      text: "Chart.js Bar Chart - Stacked",
    },
  },
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: -100, max: 100 })),
      backgroundColor: "rgb(255, 99, 132)",
      stack: "Stack 0",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: -100, max: 100 })),
      backgroundColor: "rgb(75, 192, 192)",
      stack: "Stack 0",
    },
    {
      label: "Dataset 3",
      data: labels.map(() => faker.datatype.number({ min: -100, max: 100 })),
      backgroundColor: "rgb(53, 162, 235)",
      stack: "Stack 0",
    },
  ],
};

export default function GroupedBarChart() {
  return (
    <>
      <div
        className="px-2 pb-2 rounded border bg-white"
        style={{ width: 400, transition: "all 1s" }}
      >
        <div
          className="headingOfData"
          style={{ padding: "20px 0 20px 0", margin: "0 25px" }}
        >
          <span className="header-before">Text Content here</span>
        </div>
        <div className="d-flex flex-column align-items-center gap-3">
          <Bar options={options} data={data} />
          <div>
            <ChartButtons />
          </div>
        </div>
      </div>
    </>
  );
}
