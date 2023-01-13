import React, { useState } from "react";
import context from "./DashboardContext";
const DashboardState = (props) => {
  //Hassaan context working
  const [point, setpoint] = useState([]);
  const [dataForm, setdataForm] = useState([]);
  const fetch_data = function (data) {
    setdataForm([...dataForm, data]);
  };
  const setting = function (index) {
    //gathering all clicked data
    setpoint([...point, dataForm[index]]);
  };
  ///body
  return (
    <>
      <context.Provider value={{ dataForm, setdataForm, fetch_data, setting }}>
        {props.children}
      </context.Provider>
      ;
    </>
  );
};

export default DashboardState;
