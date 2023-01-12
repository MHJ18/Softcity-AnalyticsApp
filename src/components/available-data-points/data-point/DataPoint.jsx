import React, { useRef } from "react";
import { BiQuestionMark } from "react-icons/bi";
import "./DataPoint.css";

const DataPoint = ({ name, index, func }) => {
  const first = useRef();
  const onclick = function (e) {
    // console.log(first.current);
    //pasing indx to parent
    func(index);
  };
  return (
    <>
      <div
        key={index}
        onClick={onclick}
        className="d-flex justify-content-center mb-3 cursor"
      >
        <p
          ref={first}
          className="fs-5 select data-point-template text-white px-4 py-3 rounded-start"
        >
          {name.DataPointName}
          {name.fieldGroupName && ` (${name.fieldGroupName})`}
        </p>

        <p className="data-template-icon rounded-end  datapoint-icon">
          <BiQuestionMark className="fs-2" />
        </p>
      </div>
    </>
  );
};

export default DataPoint;
