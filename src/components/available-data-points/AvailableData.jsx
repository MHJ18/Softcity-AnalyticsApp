import React, { useContext } from "react";
import CreateUserGroup from "./CreateUserGroup";
import "./availabledata.css";

import PaginationDefault from "./pagination/PaginationDefault";
import context from "../../Context/DashboardContext";
const AvailableData = () => {
  const datapoints = useContext(context);
  const { dataForm } = datapoints;

  return (
    <>
      <div className="div">
        <div className="second-conatiner">
          <div className="backgroud-right">
            <CreateUserGroup />
          </div>
          <footer className="border-top">
            <div className="  d-flex align-items-center justify-content-between mx-4 ">
              <p className="fs-5 mx-3">Total: {dataForm.length}</p>
              <div className="py-4">
                {/* <PaginationRounded /> */}
                <PaginationDefault />
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default AvailableData;
