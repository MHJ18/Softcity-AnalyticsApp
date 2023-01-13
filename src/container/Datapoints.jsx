import React, { useContext, useEffect, useState } from "react";
import AvailableData from "../components/available-data-points/AvailableData";
import CreateDataPoints from "../components/create-data-points/Create_Data_Points";
import DashboardState from "../Context/DashboardState";
import DashboardContext from "../Context/DashboardContext";
import "./datacontainer.css";
const Datapoints = () => {
  return (
    <>
      <div className="container container-color pt-4">
        <div className="row">
          <div className="col-md-5 col-lg-4 col-sm-12  ">
            <CreateDataPoints />
          </div>
          <div className="col-md-7 col-lg-8 col-sm-12 right-grid ">
            <AvailableData />
          </div>
        </div>
      </div>
    </>
  );
};

export default Datapoints;
