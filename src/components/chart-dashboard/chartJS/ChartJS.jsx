import React, { useEffect, useState } from "react";
import { Chart, Bubble } from "react-chartjs-2";
import * as Utils from "./Utils";
import "./chartstyling.css";
import ChartButtons from "../../chart-listing/ChartButtons";
import BubbleChart from "../BubbleChart";
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

const ChartJS = () => {
  const [dataChart, setdataChart] = useState();
  const DATA_COUNT = 8;
  const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };
  let labels = Utils.months({ count: 6 });
  const NUMBER_CFG2 = {
    count: DATA_COUNT,
    rmin: 5,
    rmax: 15,
    min: 0,
    max: 100,
  };
  useEffect(() => {
    setdataChart(() => [
      {
        options: {
          type: "line",
          data: Utils.numbers(NUMBER_CFG),
          options: {
            responsive: false,
            plugins: {
              title: {
                display: true,
                text: "Chart.js Line Chart",
              },
            },
            interaction: {
              mode: "index",
              intersect: false,
            },
          },
        },
        data: {
          labels: labels,
          datasets: [
            {
              label: "Unfilled",
              fill: false,
              backgroundColor: Utils.CHART_COLORS.blue,
              borderColor: Utils.CHART_COLORS.blue,
              data: Utils.numbers(NUMBER_CFG),
              borderWidth: 1.5,
            },
            {
              label: "Dashed",
              fill: false,
              backgroundColor: Utils.CHART_COLORS.green,
              borderColor: Utils.CHART_COLORS.green,
              borderDash: [5, 5],
              data: Utils.numbers(NUMBER_CFG),
            },
            {
              label: "Filled",
              backgroundColor: Utils.CHART_COLORS.red,
              borderColor: Utils.CHART_COLORS.red,
              data: Utils.numbers(NUMBER_CFG),
              fill: true,
            },
          ],
        },
      },
      {
        options: {
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
        },
        data: {
          labels: labels,
          datasets: [
            {
              label: "Dataset 1",
              data: Utils.numbers(NUMBER_CFG),
              borderColor: Utils.CHART_COLORS.red,
              backgroundColor: Utils.transparentize(
                Utils.CHART_COLORS.red,
                0.5
              ),
              order: 1,
            },
            {
              type: "bar",
              label: "Dataset 2",
              data: Utils.numbers(NUMBER_CFG),
              borderColor: Utils.CHART_COLORS.blue,
              backgroundColor: Utils.transparentize(
                Utils.CHART_COLORS.blue,
                0.5
              ),
              order: 0,
            },
          ],
        },
      },

      {
        options: {
          type: "line",
          options: {
            plugins: {
              title: {
                text: "Chart.js Combo Time Scale",
                display: true,
              },
            },
            scales: {
              x: {
                type: "time",
                display: true,
                offset: true,
                time: {
                  unit: "day",
                },
              },
            },
          },
        },
        data: {
          labels: labels,
          datasets: [
            {
              type: "bar",
              label: "Dataset 1",
              backgroundColor: Utils.transparentize(
                Utils.CHART_COLORS.red,
                0.5
              ),
              borderColor: Utils.CHART_COLORS.red,
              data: Utils.numbers(NUMBER_CFG),
            },
            {
              type: "bar",
              label: "Dataset 2",
              backgroundColor: Utils.transparentize(
                Utils.CHART_COLORS.blue,
                0.5
              ),
              borderColor: Utils.CHART_COLORS.blue,
              data: Utils.numbers(NUMBER_CFG),
            },
            {
              type: "line",
              label: "Dataset 3",
              backgroundColor: Utils.transparentize(
                Utils.CHART_COLORS.green,
                0.5
              ),
              borderColor: Utils.CHART_COLORS.green,
              fill: false,
              data: Utils.numbers(NUMBER_CFG),
              borderWidth: 1.3,
            },
          ],
        },
      },
      {
        options: {
          type: "bubble",
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
              title: {
                display: true,
                text: "Chart.js Bubble Chart",
              },
            },
          },
        },
        data: {
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
        },
      },
    ]);
  }, []);
  //
  // *! Chart js Method
  // useEffect(() => {
  //   console.log(document.querySelector("#myCharts"));
  //   let ctx = document.querySelector("#myCharts");
  //   let ctx1 = document.querySelector("#myCharts1");

  //   const data = [
  //     { year: 2010, count: 10 },
  //     { year: 2011, count: 20 },
  //     { year: 2012, count: 15 },
  //     { year: 2013, count: 25 },
  //     { year: 2014, count: 22 },
  //     { year: 2015, count: 30 },
  //     { year: 2016, count: 29 },
  //   ];

  //   let chart = new Chart(ctx, {
  //     type: "bar",
  //     data: {
  //       labels: data.map((row) => row.year),
  //       datasets: [
  //         {
  //           label: "Acquisitions by year",
  //           data: data.map((row) => row.count),
  //           fill: true,
  //         },
  //       ],
  //     },
  //   });
  //   // let char = new Chart(ctx, {
  //   //   type: "pie",
  //   //   data: {
  //   //     labels: data.map((row) => row.year),
  //   //     datasets: [
  //   //       {
  //   //         label: "Acquisitions by year",
  //   //         data: data.map((row) => row.count),
  //   //       },
  //   //     ],
  //   //   },
  //   // });
  //   return () => {
  //     chart.destroy();
  //     // char.destroy();
  //   };
  // }, []);
  return (
    <>
      {dataChart?.map((res, ind) => {
        return (
          <>
            <div
              className="px-2 pb-2 bg-white rounded "
              style={{ width: 400, height: "auto" }}
            >
              <div className="headingOfData" style={{ margin: "23px" }}>
                <span className="header-before">Text Content here</span>
              </div>
              <div className="d-flex flex-column align-items-center gap-3 ">
                {res.options?.type === "bubble" ? (
                  <Bubble options={res.options} data={res.data} />
                ) : (
                  <Chart
                    key={ind}
                    type="line"
                    options={res.options}
                    data={res.data}
                  />
                )}

                {/* <BubbleChart /> */}

                <ChartButtons />
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default ChartJS;
