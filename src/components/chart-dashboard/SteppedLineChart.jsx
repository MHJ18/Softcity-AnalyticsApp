import React from "react";
import { Line } from "react-chartjs-2";
import * as Utils from "./Utils";
import ChartButtons from "../chart-listing/ChartButtons";

import { faker } from "@faker-js/faker";
import {
  Chart as My,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Filler,
  LineController,
  BarController,
} from "chart.js";
My.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Filler,
  LineController,
  BarController
);
function SteppedLineChart() {
  let labels = Utils.months({ count: 6 });
  const data = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"],
    datasets: [
      {
        label: "Dataset",
        data: Utils.numbers({ count: 6, min: -100, max: 100 }),
        borderColor: Utils.CHART_COLORS.red,
        fill: false,
        stepped: true,
      },
    ],
  };
  const options = {
    responsive: true,
    interaction: {
      intersect: false,
      axis: "x",
    },
    plugins: {},
  };
  return (
    <>
      <div className="px-2 pb-2 bg-white rounded" style={{ width: 400 }}>
        <div className="headingOfData" style={{ margin: "25px" }}>
          <span className="header-before">Text Content here</span>
        </div>
        <div className="d-flex flex-column align-items-center gap-3 ">
          <Line type="line" options={options} data={data} />
          <div className="">
            <ChartButtons />
          </div>
        </div>
      </div>
    </>
  );
}

export default SteppedLineChart;
