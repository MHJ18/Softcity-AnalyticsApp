import React from "react";

import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";
import BarChartButtons from "../chart-listing/BarChartButtons";
import HorizontalChart from "./HorizontalChart";
import DoughnutChart from "./DoughnutChart";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import HBarChart from "./HBarChart";
import BubbleChart from "./BubbleChart";
import LineStyling from "./LineStyling";
import DottedLine from "./DottedLine";
import BarLine from "./BarLine";
import SteppedLineChart from "./SteppedLineChart";
import MultiAxisChart from "./MultiAxisChart";
import GroupedBarChart from "./GroupedBarChart";
import FloatingBarChart from "./FloatingBarChart";
import RoundedBarChart from "./RoundedBarChart";

ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function ChartDashboard() {
  // const [chartData, setChartData] = useState({
  //   datasets: [],
  // });
  // const [chartOptions, setChartOptions] = useState({});
  // useEffect(() => {
  //   setChartData({
  //     labels: ["January", "Febuary", "March", "April", "May", "June", "July"],
  //     datasets: [
  //       {
  //         label: "My First DataSet",
  //         data: [71, 60, 85, 93, 61, 51, 40],
  //         borderColor: [
  //           "rgb(255, 99, 132)",
  //           "rgb(255, 159, 64)",
  //           "rgb(255, 205, 86)",
  //           "rgb(75, 192, 192)",
  //           "rgb(54, 162, 235)",
  //           "rgb(153, 102, 255)",
  //           "rgb(201, 203, 207)",
  //         ],
  //         backgroundColor: [
  //           "rgba(255, 99, 132, 0.2)",
  //           "rgba(255, 159, 64, 0.2)",
  //           "rgba(255, 205, 86, 0.2)",
  //           "rgba(75, 192, 192, 0.2)",
  //           "rgba(54, 162, 235, 0.2)",
  //           "rgba(153, 102, 255, 0.2)",
  //           "rgba(201, 203, 207, 0.2)",
  //         ],
  //         borderWidth: 1,
  //       },
  //     ],
  //   });
  //   setChartOptions({
  //     responsive: true,
  //     plugins: {
  //       Legend: {
  //         position: "top",
  //       },
  //       title: {
  //         display: true,
  //       },
  //       options: {
  //         aspectRatio: 2 | 1,
  //       },
  //     },
  //   });
  // }, []);
  return (
    <>
      {/* <div   ">
        <div
          className=" px-2 pb-2 bg-white rounded"
          style={{ width: "400px", height: "auto" }}
        >
          <div className="headingOfData" style={{ margin: "23px" }}>
            <span className="header-before mx-7">Text Content here</span>
          </div>
          <div className="d-flex flex-column align-items-center gap-3">
            <Bar options={chartOptions} data={chartData} />

            <BarChartButtons />
          </div>
        </div> */}
      <div
        className="d-flex flex-wrap gap-3 "
        style={{ transition: "all 0.5s" }}
      >
        {/* <HorizontalChart /> */}
        <RoundedBarChart />
        <FloatingBarChart />
        <GroupedBarChart />
        <DoughnutChart />
        <PieChart />
        {/* <LineChart /> */}
        <HBarChart />
        <DottedLine />
        <LineStyling />
        <BarLine />
        <BubbleChart />
        <SteppedLineChart />
        <MultiAxisChart />
      </div>
    </>
  );
}

export default ChartDashboard;
