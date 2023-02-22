import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { faker } from "@faker-js/faker";
import { Bubble } from "react-chartjs-2";
import * as Utils from "./chartJS/Utils";
import ChartButtons from "../chart-listing/ChartButtons";
ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export default function App() {
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const data = {
    datasets: [
      {
        label: "Red dataset",
        data: Array.from({ length: 50 }, () => ({
          x: faker.datatype.number({ min: -40, max: 50 }),
          y: faker.datatype.number({ min: -40, max: 50 }),
          r: faker.datatype.number({ min: 5, max: 10 }),
        })),
        backgroundColor: "rgba(255, 99, 13, 0.5)",
      },
      {
        label: "Blue dataset",
        data: Array.from({ length: 50 }, () => ({
          x: faker.datatype.number({ min: -10, max: 50 }),
          y: faker.datatype.number({ min: -30, max: 50 }),
          r: faker.datatype.number({ min: 5, max: 10 }),
        })),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <>
      <Bubble options={options} data={data} />;
    </>
  );
}
