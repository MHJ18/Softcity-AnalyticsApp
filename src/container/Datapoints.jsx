import React from "react";
import AvailableData from "../components/available-data-points/AvailableData";
import Create_Data_Points from "../components/create-data-points/Create_Data_Points";
import "./datacontainer.css";
const Datapoints = () => {
  return (
    <>
      <div className="container container-color pt-4">
        <div className="row">
          <div className="col-md-4">
            <Create_Data_Points />
          </div>
          <div className="col-md-8">
            <AvailableData />
          </div>
        </div>
      </div>
    </>
  );
};

export default Datapoints;
