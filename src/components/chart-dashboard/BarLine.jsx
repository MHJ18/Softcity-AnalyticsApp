import React from "react";
import { Chart } from "react-chartjs-2";
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
const BarLine = () => {
  const DATA_COUNT = 8;
  const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };
  let labels = Utils.months({ count: 6 });
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Dataset 1",
        data: Utils.numbers(NUMBER_CFG),
        borderColor: Utils.CHART_COLORS.red,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
        order: 1,
      },
      {
        type: "bar",
        label: "Dataset 2",
        data: Utils.numbers(NUMBER_CFG),
        borderColor: Utils.CHART_COLORS.blue,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
        order: 0,
      },
    ],
  };
  const options = {
    type: "bar",
    data: Utils.numbers(NUMBER_CFG),
    options: {
      responsive: true,
      plugins: {
        title: {
          display: false,
          text: "Chart.js Line Chart",
        },
      },
    },
  };
  return (
    <>
      <div className="px-2 pb-2 bg-white rounded" style={{ width: 400 }}>
        <div className="headingOfData" style={{ margin: "25px" }}>
          <span className="header-before">Text Content here</span>
        </div>
        <div className="d-flex flex-column align-items-center gap-3 ">
          <Chart type="line" options={options} data={data} />
          <div className="">
            <ChartButtons />
          </div>
        </div>
      </div>
    </>
  );
};

export default BarLine;
