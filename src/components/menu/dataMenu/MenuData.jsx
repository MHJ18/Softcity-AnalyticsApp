import React, { useState } from "react";
import Data from "./Data";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import "./data.css";
const MenuChart = () => {
  const [menuInfo, setmenuInfo] = useState([
    {
      Title: "Field Team KPI",
      img: "speed.png",
      description:
        "This is the description text that appears as entered by the dashboard creator",
    },
    {
      Title: "Internal Revenue",
      img: "chart2.jpg",
      description:
        "This is the description text that appears as entered by the dashboard creator",
    },
    {
      Title: "Sales Performance",
      img: "speed.png",
      description:
        "This is the description text that appears as entered by the dashboard creator",
    },
  ]);

  return (
    <>
      <div className="position">
        <div className=" menu-container ">
          <div className="contains d-flex flex-wrap flex-lg-row align-items-center justify-content-center ">
            {menuInfo?.map((res) => (
              <Data details={res} />
            ))}
          </div>
          <div className="menu-icons d-flex gap-3 justify-content-center">
            <AiOutlineLeft className="menu-icon p-2 " />
            <AiOutlineRight className="menu-icon p-2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuChart;
