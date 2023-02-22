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
import * as Utils from "./Utils";
import { Bar } from "react-chartjs-2";
import ChartButtons from "../chart-listing/ChartButtons";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function RoundedBarChart() {
  const options = {
    type: "bar",

    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: false,
          text: "Chart.js Bar Chart",
        },
      },
    },
  };

  const DATA_COUNT = 8;
  const NUMBER_CFG = { count: DATA_COUNT, min: -50, max: 60 };

  const labels = Utils.months({ count: 6 });
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Fully Rounded",
        data: Utils.numbers(NUMBER_CFG),
        borderColor: Utils.CHART_COLORS.red,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
        borderWidth: 2,
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
      },
      {
        label: "Small Radius",
        data: Utils.numbers(NUMBER_CFG),
        borderColor: Utils.CHART_COLORS.blue,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: false,
      },
    ],
  };
  return (
    <>
      <div className="px-2 pb-2 rounded border bg-white" style={{ width: 400 }}>
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
