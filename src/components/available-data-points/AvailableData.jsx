import React, { useState } from "react";

import "./availabledata.css";
const AvailableData = () => {
  const [check, setcheck] = useState(false);

  const onclick = function (e) {
    e.preventDefault();
    console.log(e.target.closest(".box-1").textContent);
  };
  return (
    <>
      <div className="data_point-right">
        <div className="div">
          <div className="middle">
            <label onClick={onclick}>
              <div className="front-end box">
                <div className="select_box-1">
                  <p className="box-text">Front-end</p>
                </div>
                <div className="select_box-description">?</div>
              </div>
              <input
                type="checkbox"
                name="checkbox"
                onChange={() => {
                  setcheck(!check);
                }}
              />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default AvailableData;
