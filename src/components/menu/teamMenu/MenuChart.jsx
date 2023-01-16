import React, { useState } from "react";
import Card from "./Card";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { FiChevronLeft } from "react-icons/fi";
import "./menu.css";
const MenuChart = () => {
  const [menuInfo, setmenuInfo] = useState([
    {
      Title: "Field Team KPI",
      img: "chart1.jpg",
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
      img: "chart3.jpg",
      description:
        "This is the description text that appears as entered by the dashboard creator",
    },
  ]);

  return (
    <>
      <div className="position-1">
        <div className=" menu-container ">
          <div className="contain d-flex flex-wrap flex-lg-row align-items-center justify-content-center ">
            {menuInfo?.map((res) => (
              <Card details={res} />
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
