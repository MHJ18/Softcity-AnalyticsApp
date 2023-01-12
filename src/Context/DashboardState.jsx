import React, { useState } from "react";
import Dashboard from "./DashboardContext";
const DashboardState = (props) => {
  return (
    <>
      <Dashboard.Provider value={{ dataForm, setdataForm, fetch_data }}>
        {props.children}
      </Dashboard.Provider>
      ;
    </>
  );
};

export default DashboardState;
