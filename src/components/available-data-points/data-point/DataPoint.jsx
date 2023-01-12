import React from "react";
import { BiQuestionMark } from "react-icons/bi";

import "./DataPoint.css";

const DataPoint = () => {
  return (
    <>
      <div className="d-flex justify-content-center mb-4">
        <p className="fs-5 data-point-template text-white px-4 py-3 rounded-start">
          Data point name goes here
        </p>

        {/* Slight issue here with the icon's padding/size */}
        <p className="data-template-icon rounded-end  datapoint-icon">
          <BiQuestionMark className="fs-2" />
        </p>
      </div>
    </>
  );
};

export default DataPoint;
