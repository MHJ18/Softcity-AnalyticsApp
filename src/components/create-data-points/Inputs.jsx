import React, { useEffect, useState } from "react";

const Inputs = (props) => {
  const [first, setfirst] = useState({});
  const [second, setsecond] = useState({
    [`Label-${props.index}`]: "",
    value: "",
  });
  useEffect(() => {
    console.log(first);
  }, [first]);

  const onchange = function (e) {
    setfirst({ ...first, [e.target.name]: e.target.value });

    setsecond({ ...first, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div>
        <label htmlFor="DataPointname">Label Column {props.index + 1}</label>
        <input
          onChange={onchange}
          value={first.value}
          placeholder="Column name"
          name={`value-${props.index}`}
          type="text"
          className="form-control form-placeholder p-3 mb-3"
          id="DataPointname"
          aria-describedby="Data-Point-name"
        />
      </div>
    </>
  );
};

export default Inputs;
