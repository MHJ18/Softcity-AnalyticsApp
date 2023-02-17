import React, { useContext, useEffect, useId, useState } from "react";
import DataPoint from "./data-point/DataPoint";
import { CiSearch } from "react-icons/ci";
import Form from "react-bootstrap/Form";
import context from "../../Context/DashboardContext";
const CreateUserGroup = () => {
  const finalData = useContext(context);
  const { dataForm } = finalData;
  const id = useId(null);

  return (
    <>
      <main className=" d-flex flex-column ">
        <div className="d-flex flex-column gap-5 px-4 rounded-3 py-3 ">
          <div className="d-flex w-100 align-items-center gap-4 flex-column flex-xl-row flex-lg-row flex-md-row">
            <h3 className="header-before font">Available Data Point</h3>

            <div className="d-flex align-items-center justify-content-end flex-column flex-xl-row flex-lg-row flex-md-row margin-left gap-4 w-50">
              <p className="fs-5 total">Total: {dataForm.length}</p>
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
          <div className="overflow">
            <div className="d-flex flex-wrap gap-2 gap-xl-4 gap-lg-4 align-items-center ">
              {/* mapping over all the form data */}
              {dataForm.map((res, ind) => {
                return (
                  <>
                    <DataPoint id={id} name={res} index={ind} />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CreateUserGroup;
