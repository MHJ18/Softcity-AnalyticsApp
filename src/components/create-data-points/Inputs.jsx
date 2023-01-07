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
  return <></>;
};

export default Inputs;
