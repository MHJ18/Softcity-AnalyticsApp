import React, { useRef, useState } from "react";
import { BiQuestionMark } from "react-icons/bi";
import "./DataPoint.css";

const DataPoint = ({ name, index, func }) => {
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
    func(index);
  };
  return (
    <>
      <div
        key={index}
        onClick={onclick}
        className={`d-flex justify-content-center mb-3 cursor`}
        ref={first}
      >
        <p
          className={`fs-5 select data-point-template text-white px-4 py-3 rounded-start`}
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
