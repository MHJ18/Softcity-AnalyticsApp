import React, { useState, useCallback, useEffect, useContext } from "react";
import "./createdatapoints.css";
import { BsArrowRightShort } from "react-icons/bs";
import { IoMdAddCircle } from "react-icons/io";
import { useForm, FormProvider, useFormState } from "react-hook-form";
import Inputs from "./Inputs";
import DashboardContext from "../../Context/DashboardContext";

const Form = () => {
  const submit = useContext(DashboardContext);
  const { fetch_data } = submit;
  const methods = useForm();
  const { register, handleSubmit, watch, reset } = methods;
  //
  //
  const [inputFields, setInputFields] = useState([
    { dataPointName: "", description: "", checkbox: "" },
  ]);
  const [descheck, setdescheck] = useState(false);
  const [refs, setrefs] = useState("hidden");
  const [ischecked, setischecked] = useState(false);
  const [columns, setcolumns] = useState([]);
  const [state, setstate] = useState(false);
  //

  //add
  const add1 = function () {
    const obj = { dataPointName: "", description: "", checkbox: null };
    setInputFields([obj, ...inputFields]);
  };
  const add2 = function () {
    const obj = { dataPointName: "", description: "", checkbox: null };
    setInputFields([...inputFields, obj]);
  };
  //checkbox logic
  const checkbox = function () {
    setischecked(!ischecked);
  };
  //data pointtype
  const onchange = function (e) {
    e.persist();
    e.preventDefault();
    console.log(e.target.value);
    setischecked(false);

    //triggering number selecton based on that checkbox
    if (e.target.value === "number") {
      setstate({
        success: false,
        type: e.target.value,
        boxdescription: true,
      });
    }
    //
    else if (e.target.value === "text-area") {
      setstate({
        success: false,
        type: e.target.value,
      });
    } else if (
      e.target.value === "Sdrop-TextField" ||
      e.target.value === "Mdrop-NumberField" ||
      e.target.value === "Mdrop-TextField" ||
      e.target.value === "checkbox" ||
      e.target.value === "radio" ||
      e.target.value === "date" ||
      e.target.value === "url" ||
      e.target.value === "Mdrop-NumberField"
    ) {
      //setting custom label
      if (
        e.target.value === "Mdrop-NumberField" ||
        e.target.value === "Sdrop-TextField" ||
        e.target.value === "Mdrop-TextField" ||
        e.target.value === "date" ||
        e.target.value === "Mdrop-NumberField"
      ) {
        setstate((state) => ({
          ...state,
          boxdescription: false,
          label: "Label Drop",
          success: true,
        }));
      }
      if (e.target.value === "radio") {
        setstate((state) => ({ ...state, label: "Label Radio" }));
      }
      if (e.target.value === "checkbox") {
        setstate((state) => ({ ...state, label: "Label Box" }));
      }
      //settingthe little checkbox next to description box
      if (
        e.target.value === "checkbox" ||
        e.target.value === "radio" ||
        e.target.value === "date" ||
        e.target.value === "url" ||
        e.target.value === "Mdrop-NumberField" ||
        e.target.value === "number"
      ) {
        setstate((state) => ({ ...state, boxdescription: true }));
      }
      //default final state
      setstate((state) => ({ ...state, allow: true, success: true }));
    } else {
      setstate({ success: false });
    }
  };
  //
  const createColumns = function (e) {
    //a little animation
    setTimeout(() => {
      setrefs("show");
    }, 300);

    console.log(e.target.value);

    if (e.target.value === "1") {
      let array = new Array(1).fill({ label: "", column: "" });

      setcolumns(array);
    } else if (e.target.value === "2") {
      let array = new Array(2).fill({ label: "", column: "" });
      setcolumns(array);
    } else if (e.target.value === "3") {
      let array = new Array(3).fill({ label: "", column: "" });
      setcolumns(array);
    }
  };
  //
  const onchangetext = function (e) {};
  //submit
  const formreset = function () {
    setstate(false);
    setischecked(false);
    setcolumns([]);
    reset();
  };

  const onSubmit = (data) => {
    fetch_data(data);
    // formreset();
  };

  return (
    <>
      <div className="form-container m-3 p-3">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="DataPointname" className="form-label form-text">
                Data Point name
              </label>
              <input
                {...register("DataPointName")}
                onChange={onchangetext}
                required="true"
                // value={textField.datapointname || ""}
                autofocus="true"
                placeholder="Data point name"
                type="text"
                name="DataPointName"
                className="form-control form-placeholder"
                id="DataPointname"
                aria-describedby="Data-Point-name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="DataType" className="form-label form-text">
                Data Point Type
              </label>
              <select
                {...register("dataFieldType")}
                id="DataType"
                onChange={onchange}
                name="dataFieldType"
                className="select form-select"
              >
                <option
                  className="options"
                  selected
                  value="text"
                  name="Text Field"
                >
                  Text field
                </option>
                <option className="options" value="Wnumber" name="Text Field">
                  Whole Number field
                </option>
                <option className="options" value="Dnumber" name="Text Field">
                  Decimal Number field
                </option>
                <option className="options" value="email" name="Email Field">
                  Email field
                </option>
                <option className="options" value="date" name="Email Field">
                  Date field
                </option>
                <option className="options" value="url" name="Email Field">
                  Web Address field
                </option>
                <option
                  className="options"
                  value="Sdrop-TextField"
                  name="Email Field"
                >
                  Single selection Dropdown text field
                </option>
                <option
                  className="options"
                  value="Mdrop-TextField"
                  name="Email Field"
                >
                  Multi Selection Dropdown text field
                </option>
                <option
                  className="options"
                  value="Mdrop-NumberField"
                  name="Email Field"
                >
                  Single selection Dropdown number field
                </option>
                <option
                  className="options"
                  value="Mdrop-NumberField"
                  name="Email Field"
                >
                  Multi Selection Dropdown number field
                </option>
                <option className="options" value="radio" name="Email Field">
                  Radio buttons
                </option>
                <option className="options" value="checkbox" name="Email Field">
                  Checkboxes
                </option>
                <option className="options" value="number" name="Number Field:">
                  Currency Price field
                </option>
                <option
                  className="options"
                  value="text-area"
                  name="TextArea Field:"
                >
                  Text-area
                </option>
              </select>
            </div>
            {state.type === "text-area" && !state.success && (
              <div>
                <label className="form-label form-text" htmlFor="datapoint">
                  Max Character
                </label>
                <input
                  {...register("textAarea Field")}
                  autoFocus={true}
                  style={{ height: "3.5rem" }}
                  type={state.type}
                  placeholder="Default: 200"
                  name="textAarea Field"
                  id="datapoint"
                  maxLength={200}
                  className="form-control form-placeholder mb-4 top-text"
                />
              </div>
            )}
            {!state.success && state.type === "number" && !ischecked && (
              <div>
                <label className="form-label form-text" htmlFor="Groupname">
                  Select Currency
                </label>
                <select
                  {...register(`${!ischecked && "Currency"}`)}
                  autofocus={true}
                  name="Currency"
                  className="form-select select mb-4"
                  aria-label="Default select"
                  defaultValue="ngn"
                >
                  <option value="ngn">NGN</option>
                  <option value="aus">AUS</option>
                  <option value="pkr">PKR</option>
                  <option value="aud">AUD</option>
                </select>
              </div>
            )}
            {!state.success && state.type === "number" && ischecked && (
              <div>
                <label className="form-label form-text" htmlFor="Groupname">
                  Select Currency
                </label>
                <input
                  {...register(`${ischecked && "currency-field"}`)}
                  autoFocus="true"
                  name="currency-field"
                  className="form-control form-placeholder mb-4"
                  type="text"
                  id="Groupname"
                  placeholder="Field Group Name"
                />
              </div>
            )}
            {state.success && (
              <div>
                <label className="form-label form-text" htmlFor="Groupname">
                  Field Group Name
                </label>
                <input
                  {...register("fieldGroupName")}
                  name="fieldGroupName"
                  autoFocus="true"
                  onChange={onchangetext}
                  // value={textField.groupName || ""}
                  className="form-control form-placeholder mb-4"
                  type="text"
                  id="Groupname"
                  placeholder="Field Group Name"
                />
              </div>
            )}
            <div className="mb-4 form-check">
              <label className="form-check-label" htmlFor="exampleCheck1">
                Enable Multi-columns
              </label>
              <input
                {...register("MultiColumn")}
                onChange={checkbox}
                name="MultiColumn"
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
                {...register(`${ischecked && "columns"}`)}
                id="DataPointType"
                onChange={createColumns}
                name="columns"
                disabled={!ischecked}
                className="form-select select"
                aria-label="Default select"
                defaultValue=""
              >
                <option value="" selected hidden>
                  -- select an option
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div>
              {ischecked &&
                columns.map((res, ind) => {
                  return (
                    <div key={ind} className={`${refs}`}>
                      <label
                        className="form-check-label label-input"
                        htmlFor="DataPointname"
                      >
                        {state.label || "Label Column"} {ind + 1}
                      </label>
                      <input
                        {...register(
                          `${
                            ischecked &&
                            `${state.label || "Label Column"}-${ind + 1}`
                          }`
                        )}
                        autoFocus={true}
                        placeholder="Column name"
                        name={`${state.label || "Label Column"}-${ind + 1}`}
                        type="text"
                        className="form-control form-placeholder p-3 mb-3"
                        id="DataPointname"
                        aria-describedby="Data-Point-name"
                      />
                    </div>
                  );
                })}
            </div>
            <div className="mb-4 ">
              {
                <div>
                  {state.boxdescription ? (
                    <>
                      <div className="mb-2 form-check mt-4">
                        <label
                          className="form-check-label check-label"
                          htmlFor="dropdown"
                        >
                          Description
                        </label>
                        <input
                          // onChange={(event) => handleFormChange(props.index, event)}
                          onChange={() => {
                            setdescheck(!descheck);
                          }}
                          type="checkbox"
                          name="Check"
                          className="form-check-input "
                          id="check"
                          // checked={descheck}
                        />
                      </div>
                      <textarea
                        {...register(`${descheck && "Description-data"}`)}
                        className="text-area form-control mb-3"
                        name="Description-data"
                        id="check"
                        cols="40"
                        rows="3"
                        minLength="5"
                        maxLength="30"
                        placeholder="Description"
                      ></textarea>
                    </>
                  ) : (
                    <div>
                      <label
                        className="form-check-label check-label mb-3 "
                        htmlFor="DataDescription"
                      >
                        Description:
                      </label>
                      <textarea
                        {...register("Description")}
                        className="text-area form-control"
                        name="Description"
                        id="DataDescription"
                        cols="40"
                        rows="3"
                        minLength="5"
                        maxLength="30"
                        placeholder="Description"
                      ></textarea>
                    </div>
                  )}
                </div>
              }
            </div>

            {state.allow && (
              <IoMdAddCircle onClick={add1} className="addicons" />
            )}
            {state.allow &&
              inputFields.map((res, index) => {
                return (
                  <Inputs
                    key={index}
                    res={res}
                    index={index}
                    inputFields={inputFields}
                    setInputFields={setInputFields}
                  />
                );
              })}

            <div className="d-flex justify-content-between align-items-center buttons-style">
              <div>
                {state.allow && (
                  <IoMdAddCircle
                    onClick={add2}
                    className="addicons last-icon"
                  />
                )}
              </div>
              <div>
                <button type="submit" className="btn  mx-3 btn-form">
                  Update <BsArrowRightShort className="btn-icon" />
                </button>
                <button
                  onClick={() => {
                    formreset();
                  }}
                  type="submit"
                  className="btn  btn-form"
                >
                  Reset
                </button>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default Form;
