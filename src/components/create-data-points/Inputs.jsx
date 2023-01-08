import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
const Inputs = (props) => {
  const { register } = useFormContext();
  const [text, settext] = useState(false);
  const handleFormChange = function (index, event) {
    console.log(event.target.name);
    let data = [...props.inputFields];
    if (event.target.name === "checkbox") {
      settext(!text);
      data[index][event.target.name] = !text;
    } else {
      data[index][event.target.name] = event.target.value;
    }
    props.setInputFields(data);
  };
  return (
    <>
      <div>
        <label htmlFor="DataPointname" className="form-label form-text">
          Data Point name
        </label>
        <input
          {...register(`dataPointName${props.index + 1}`)}
          autofocus="true"
          // value={props.res.dataPointName}
          // onChange={(event) => handleFormChange(props.index, event)}
          placeholder="Data point name"
          type="text"
          className="form-control form-placeholder"
          id="DataPointname"
          name={`dataPointName${props.index + 1}`}
          aria-describedby="Data-Point-name"
        />
        <div className="mb-2 form-check mt-4">
          <label className="form-check-label check-label" htmlFor="dropdown">
            Description
          </label>
          <input
            onChange={(event) => handleFormChange(props.index, event)}
            type="checkbox"
            name="checkbox"
            className="form-check-input "
            id="check"
            checked={props.res.checkbox}
          />
        </div>
        <textarea
          {...register(`dataPointDescription${props.index + 1}`)}
          disabled={!props.res.checkbox}
          // onChange={tte!xt}
          // onChange={(event) => handleFormChange(props.index, event)}
          // value={props.res.description}
          className="text-area form-control mb-3"
          name={`dataPointDescription${props.index + 1}`}
          id="dropdown"
          cols="40"
          rows="3"
          minLength="5"
          maxLength="30"
          placeholder="Description"
        ></textarea>
      </div>
    </>
  );
};

export default Inputs;
