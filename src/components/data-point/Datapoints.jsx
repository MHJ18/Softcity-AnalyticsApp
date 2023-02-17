import React from "react";
import AvailableData from "../available-data-points/AvailableData";
import CreateDataPoints from "../create-data-points/Create_Data_Points";
import "./datacontainer.css";
const Datapoints = () => {
  return (
    <>
      <div>
        <div className="row">
          <div className="col-md-5 col-lg-4 col-sm-12  ">
            <CreateDataPoints />
          </div>
          <div className="col-md-7 container col-lg-8 col-sm-12 right-grid  ">
            <AvailableData />
          </div>
        </div>
      </div>
    </>
  );
};

export default Datapoints;
