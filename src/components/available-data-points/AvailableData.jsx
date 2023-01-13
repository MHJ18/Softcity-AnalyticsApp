import React, { useContext } from "react";
import CreateUserGroup from "./CreateUserGroup";
import "./availabledata.css";
import PaginationRounded from "./pagination/Pagination";
import PaginationDefault from "./pagination/PaginationDefault";
const AvailableData = ({ data }) => {
  const getback = function (...data) {
    console.log(data);
  };
  return (
    <>
      <div className="div">
        <div className="second-conatiner">
          <div className="backgroud-right">
            <CreateUserGroup data={data} func={getback} />
          </div>
          <div className=" border-top d-flex align-items-center justify-content-between mx-4 ">
            <p className="fs-5 mx-3">Total: {data.length}</p>
            <div className="py-4">
              {/* <PaginationRounded /> */}
              <PaginationDefault />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AvailableData;
