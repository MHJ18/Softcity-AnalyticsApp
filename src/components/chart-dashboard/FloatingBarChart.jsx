import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { faker } from "@faker-js/faker";
import { Bar } from "react-chartjs-2";
import * as Utils from "./Utils";
import ChartButtons from "../chart-listing/ChartButtons";
ChartJS.register(LinearScale, PointElement, Tooltip, Legend);
const FloatingBarChart = () => {
  let labels = Utils.months({ count: 6 });

  const options = {
    type: "bar",

    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Chart.js Floating Bar Chart",
        },
      },
    },
  };
  const data = {
    labels: labels,

    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => {
          return [Utils.rand(-30, 50), Utils.rand(-50, 50)];
        }),
        backgroundColor: Utils.CHART_COLORS.red,
      },
      {
        label: "Dataset 2",
        data: labels.map(() => {
          return [Utils.rand(-10, 20), Utils.rand(-50, 50)];
        }),
        backgroundColor: Utils.CHART_COLORS.blue,
      },
    ],
  };
  return (
    <div>
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
    </div>
  );
};

export default FloatingBarChart;
