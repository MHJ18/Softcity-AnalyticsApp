import React, { useState, useCallback } from "react";
import "./chartlisting.css";
import BarChartButtons from "./BarChartButtons";
import ChartJS from "./chartJS/ChartJS";
export default function ChartListing() {
  return (
    <>
      <div className="mt-5 p-2 ">
        <div className="">
          <ChartJS />
        </div>
      </div>
    </>
  );
}
