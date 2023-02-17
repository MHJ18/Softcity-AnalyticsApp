import React, { useEffect, useState } from "react";
import { Bar, Line, Chart, Bubble } from "react-chartjs-2";
import * as Utils from "./Utils";
import Card from "react-bootstrap/Card";
import "./chartstyling.css";
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
import BarChartButtons from "../BarChartButtons";

//

//
const ChartJS = () => {
  // const [labels, setlabels] = useState();
  const [dataChart, setdataChart] = useState();
  const DATA_COUNT = 7;
  const NUMBER_CFG = { count: DATA_COUNT, min: -50, max: 50 };
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
  useEffect(() => {
    let labels = Utils.months({ count: 4 });
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
            scales: {
              x: {
                display: true,
                title: {
                  display: false,
                  text: "Month",
                },
              },
              y: {
                display: true,
                title: {
                  display: false,
                  text: "Value",
                },
              },
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
            scales: {
              x: {
                display: true,
              },
              y: {
                display: true,
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
              label: "Dataset 2",
              data: Utils.numbers(NUMBER_CFG),
              borderColor: Utils.CHART_COLORS.blue,
              backgroundColor: Utils.transparentize(
                Utils.CHART_COLORS.blue,
                0.5
              ),
              type: "bar",
              order: 0,
            },
          ],
        },
      },
      {
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },

        data: {
          type: "bubble",
          labels: labels,
          datasets: [
            {
              label: "Red dataset",
              data: Array.from({ length: 2 }, () => ({
                x: 10,
                y: 20,
                r: 10,
              })),
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
              label: "Blue dataset",
              data: [
                {
                  x: 20,
                  y: 30,
                  r: 15,
                },
                {
                  x: 40,
                  y: 10,
                  r: 10,
                },
              ],
              backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
          ],
        },
      },
      {
        options: {
          type: "bubble",
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
            scales: {
              x: {
                display: true,
                title: {
                  display: false,
                  text: "Month",
                },
              },
              y: {
                display: true,
                title: {
                  display: false,
                  text: "Value",
                },
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
              label: "Dataset 2",
              type: "bar",
              data: Utils.numbers(NUMBER_CFG),
              borderColor: Utils.CHART_COLORS.orange,
              borderWidth: "1",
              backgroundColor: Utils.transparentize(
                Utils.CHART_COLORS.orange,
                0.5
              ),
              order: 2,
            },
            {
              label: "Dataset 3",
              data: Utils.numbers(NUMBER_CFG),
              borderWidth: "1",
              borderColor: Utils.CHART_COLORS.blue,
              backgroundColor: Utils.transparentize(
                Utils.CHART_COLORS.blue,
                0.5
              ),
              type: "bar",
              order: 3,
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
            <div className="col-lg-4 col-md-6">
              <Card>
                <Card.Title>Primary Card Title</Card.Title>
                <Card.Body>
                  <Card.Text>
                    {res.data?.type === "bubble" ? (
                      <Bubble options={res.options} data={res.data} />
                    ) : (
                      <Chart
                        key={ind}
                        type="line"
                        options={res.options}
                        data={res.data}
                      />
                    )}
                  </Card.Text>
                  <BarChartButtons />
                </Card.Body>
              </Card>
            </div>
          </>
        );
      })}
    </>
  );
};

export default ChartJS;
