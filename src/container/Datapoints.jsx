import React, { useEffect, useState } from "react";
import AvailableData from "../components/available-data-points/AvailableData";
import Create_Data_Points from "../components/create-data-points/Create_Data_Points";
import "./datacontainer.css";
const Datapoints = () => {
  const [dataForm, setdataForm] = useState([]);
  const fetch_data = function (data) {
    setdataForm([...dataForm, data]);
  };
  return (
    <>
      <div className="container container-color pt-4">
        <div className="row">
          <div className="col-md-5 col-lg-4 col-sm-12  ">
            <Create_Data_Points func={fetch_data} />
          </div>
          <div className="col-md-7 col-lg-8 col-sm-12 ">
            <AvailableData data={dataForm} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Datapoints;
