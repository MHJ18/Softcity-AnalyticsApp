import React, { useState } from "react";
import context from "./DashboardContext";
const DashboardState = (props) => {
  const variable = "hassaan";
  return (
    <>
      <context.Provider value={{ variable }}>{props.children}</context.Provider>
      ;
    </>
  );
};

export default DashboardState;
