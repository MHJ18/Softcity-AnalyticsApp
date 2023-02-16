import React, { useContext, useRef, useState } from "react";
import { BiQuestionMark } from "react-icons/bi";
import "./DataPoint.css";
import context from "../../../Context/DashboardContext";
const DataPoint = ({ name, index }) => {
  const indexData = useContext(context);
  const { setting } = indexData;
  // for changing datapoint color on selecttion

  // const [color, setcolor] = useState({
  //   box: "",
  //   name: "data-point-template",
  // });
  const first = useRef();
  const onclick = function (e) {
    // console.log(first.current);
    // setcolor({ box: "data-box", name: "selected-data" });
    // console.log(first.current);
    //pasing index to parent
    setting(index);
  };
  return (
    <>
      <div
        key={index}
        onClick={onclick}
        className={`d-flex justify-content-center mb-3 mx-1 cursor`}
        ref={first}
      >
        <p
          className={`fs-5 select-point data-point-template text-white px-4 rounded-start d-flex align-items-center justify-content-center`}
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
