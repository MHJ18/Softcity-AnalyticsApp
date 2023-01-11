import React from "react";
import Form from "./Form";
import "./createdatapoints.css";
const Create_Data_Points = ({ func }) => {
  return (
    <>
      <div className="data-point-left ">
        <p className="main-title">Data Point</p>
        <div className="backgroud-left ">
          <div className="create-data-point d-flex justify-content-start align-items-center ">
            <div className="create-data-color"></div>
            <div className="data-point-heading">Create Data Points</div>
          </div>
          <div>
            <Form func={func} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Create_Data_Points;
