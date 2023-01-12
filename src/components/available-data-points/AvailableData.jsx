import React, { useContext } from "react";
import CreateUserGroup from "./CreateUserGroup";
import "./availabledata.css";
const AvailableData = ({ data }) => {
  return (
    <>
      <div className="div">
        <div className="second-conatiner">
          <div className="backgroud-right">
            <CreateUserGroup data={data} />
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default AvailableData;
