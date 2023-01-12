import React from "react";
import DataPoint from "./data-point/DataPoint";

import { CiSearch } from "react-icons/ci";
import Form from "react-bootstrap/Form";

const CreateUserGroup = ({ data }) => {
  console.log(data);
  return (
    <>
      <main className="container d-flex flex-column ">
        <div className="d-flex flex-column gap-5 px-4 rounded-3">
          <div className="d-flex w-100 align-items-center gap-4 flex-column flex-xl-row flex-lg-row flex-md-row">
            <h3 className="header-before font">Available Data Point</h3>

            <div className="d-flex align-items-center justify-content-end flex-column flex-xl-row flex-lg-row flex-md-row margin-left gap-4 w-50">
              <p className="fs-5">Total: 390</p>
              <div className="primary-inputs d-flex align-items-center rounded search-bar">
                <span className=" px-2">
                  <CiSearch className="search-icon" />
                </span>
                <Form.Control
                  placeholder="Search"
                  className="border-0 input primary-inputs "
                />
              </div>
            </div>
          </div>
          <div className="d-flex flex-wrap gap-2 gap-xl-4 gap-lg-4 align-items-center">
            <DataPoint />
            <DataPoint />
          </div>
        </div>
      </main>
    </>
  );
};

export default CreateUserGroup;
