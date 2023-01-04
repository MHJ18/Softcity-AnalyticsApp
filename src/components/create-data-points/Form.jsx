import React, { useState } from "react";
import "./createdatapoints.css";
import { BsArrowRightShort } from "react-icons/bs";
const Form = () => {
  const [ischecked, setischecked] = useState(false);
  let state = null;
  //checkbox logic
  const checkbox = function () {
    setischecked(!ischecked);
  };
  //form submit
  const formsubmit = function (e) {
    e.preventDefault();
  };
  //onchange
  const onchange = function (e) {
    console.log(e.target.value);
    state = e.target.value;
  };
  return (
    <>
      <div className="form-container m-3 p-3">
        <form onSubmit={formsubmit}>
          <div className="mb-4">
            <label htmlFor="DataPointname" className="form-label form-text">
              Data Point name
            </label>
            <input
              placeholder="Data point name"
              type="text"
              className="form-control form-placeholder"
              id="DataPointname"
              aria-describedby="Data-Point-name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="DataPointType" className="form-label form-text">
              Data Point Type
            </label>
            <select
              name="datatype"
              id="datatype"
              className="select form-select"
            >
              <option value="" selected>
                Decimal number field
              </option>
              <option value="">Text</option>
              <option value="">Date</option>
              <option value="">Time</option>
            </select>
          </div>
          <div className="mb-4 form-check">
            <label className="form-check-label" htmlFor="exampleCheck1">
              Enable Multi-columns
            </label>
            <input
              onChange={checkbox}
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              checked={ischecked}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="DataPointType" className="form-label form-text">
              No. of Columns
            </label>

            <select
              onChange={onchange}
              disabled={!ischecked}
              class="form-select select"
              aria-label="Default select example"
            >
              <option value="1" selected>
                1
              </option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="mb-4 ">
            <label
              className="form-label form-text d-block"
              htmlFor="DataTypeDescription"
            >
              Description:
            </label>
            <textarea
              className="text-area"
              name="description"
              id="DataTypeDescription"
              cols="40"
              rows="3"
              minlength="5"
              maxlength="30"
              placeholder="Description"
            ></textarea>
          </div>
          <div className="d-flex justify-content-end buttons-style">
            <button type="submit" className="btn  mx-3 btn-form">
              Update <BsArrowRightShort className="btn-icon" />
            </button>
            <button type="submit" className="btn  btn-form">
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
