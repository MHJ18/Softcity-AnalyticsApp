import React, { useContext, useEffect, useState } from "react";
import AvailableData from "../components/available-data-points/AvailableData";
import CreateDataPoints from "../components/create-data-points/Create_Data_Points";
import DashboardState from "../Context/DashboardState";
import DashboardContext from "../Context/DashboardContext";
import "./datacontainer.css";
const Datapoints = () => {
  const context = useContext(DashboardContext);
  
  const [dataForm, setdataForm] = useState([]);
  const fetch_data = function (data) {
    setdataForm([...dataForm, data]);
  };
  return (
    <>
      <div className="container container-color pt-4">
        <div className="row">
          <div className="col-md-5 col-lg-4 col-sm-12  ">
            <CreateDataPoints func={fetch_data} />
          </div>
          <div className="col-md-7 col-lg-8 col-sm-12 right-grid ">
            <AvailableData data={dataForm} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Datapoints;
