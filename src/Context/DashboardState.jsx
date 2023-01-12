import React, { useState } from "react";
import { context } from "./DashboardContext";
const DashboardState = (props) => {
  return (
    <>
      <context.Provider value={{}}>{props.children}</context.Provider>;
    </>
  );
};

export default DashboardState;
