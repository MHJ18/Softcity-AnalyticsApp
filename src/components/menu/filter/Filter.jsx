import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";
import "./filter.css";
const Filter = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const show = useRef();
  useEffect(() => {
    console.log(startDate, endDate);
  }, [startDate, endDate]);

  return (
    <div className="container-filter">
      <div className=" round ">
        <div className="container-padding">
          <div className="d-inline-flex flex-lg-row flex-sm-column justify-content-center align-items-center gap-4">
            <div className="mb-4 input-text">
              <p className="fs-4 mb-2 date-label ">From</p>
              <label
                htmlFor="Date"
                className="d-flex justify-content-center align-items-center"
              >
                <svg
                  width="111px"
                  height="111px"
                  viewBox="-3.84 -3.84 31.68 31.68"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g id="style=linear">
                      {" "}
                      <g id="calendar-cells">
                        {" "}
                        <path
                          id="rectangle"
                          d="M2 8C2 5.79086 3.79086 4 6 4H18C20.2091 4 22 5.79086 22 8V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V8Z"
                          stroke="#999"
                          stroke-width="1.5"
                        ></path>{" "}
                        <path
                          id="vector"
                          d="M7.5 10H8.5V11H7.5V10Z"
                          stroke="#999"
                          stroke-linecap="round"
                        ></path>{" "}
                        <path
                          id="vector_2"
                          d="M7.5 13H8.5V14H7.5V13Z"
                          stroke="#999"
                          stroke-linecap="round"
                        ></path>{" "}
                        <path
                          id="vector_3"
                          d="M7.5 16H8.5V17H7.5V16Z"
                          stroke="#999"
                          stroke-linecap="round"
                        ></path>{" "}
                        <path
                          id="vector_4"
                          d="M11.5 10H12.5V11H11.5V10Z"
                          stroke="#999"
                          stroke-linecap="round"
                        ></path>{" "}
                        <path
                          id="vector_5"
                          d="M11.5 13H12.5V14H11.5V13Z"
                          stroke="#999"
                          stroke-linecap="round"
                        ></path>{" "}
                        <path
                          id="vector_6"
                          d="M11.5 16H12.5V17H11.5V16Z"
                          stroke="#999"
                          stroke-linecap="round"
                        ></path>{" "}
                        <path
                          id="vector_7"
                          d="M15.5 10H16.5V11H15.5V10Z"
                          stroke="#999"
                          stroke-linecap="round"
                        ></path>{" "}
                        <path
                          id="vector_8"
                          d="M15.5 13H16.5V14H15.5V13Z"
                          stroke="#999"
                          stroke-linecap="round"
                        ></path>{" "}
                        <path
                          id="vector_9"
                          d="M15.5 16H16.5V17H15.5V16Z"
                          stroke="#999"
                          stroke-linecap="round"
                        ></path>{" "}
                        <path
                          id="line"
                          d="M8 2V5.5"
                          stroke="#999"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        ></path>{" "}
                        <path
                          id="line_2"
                          d="M16 2V5.5"
                          stroke="#999"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        ></path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <DatePicker
                  placeholderText="MM/DD/YYYY"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  className="form-placeholder input-text-date"
                  aria-describedby="Data-Point-name"
                />
              </label>
            </div>
            <div className="mb-4 input-text">
              <p className="fs-4 mb-2 date-label ">To</p>
              <label
                htmlFor="Date"
                className="d-flex justify-content-center align-items-center"
              >
                <svg
                  width="111px"
                  height="111px"
                  viewBox="-3.84 -3.84 31.68 31.68"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g id="style=linear">
                      {" "}
                      <g id="calendar-cells">
                        {" "}
                        <path
                          id="rectangle"
                          d="M2 8C2 5.79086 3.79086 4 6 4H18C20.2091 4 22 5.79086 22 8V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V8Z"
                          stroke="#999"
                          stroke-width="1.5"
                        ></path>{" "}
                        <path
                          id="vector"
                          d="M7.5 10H8.5V11H7.5V10Z"
                          stroke="#999"
                          stroke-linecap="round"
                        ></path>{" "}
                        <path
                          id="vector_2"
                          d="M7.5 13H8.5V14H7.5V13Z"
                          stroke="#999"
                          stroke-linecap="round"
                        ></path>{" "}
                        <path
                          id="vector_3"
                          d="M7.5 16H8.5V17H7.5V16Z"
                          stroke="#999"
                          stroke-linecap="round"
                        ></path>{" "}
                        <path
                          id="vector_4"
                          d="M11.5 10H12.5V11H11.5V10Z"
                          stroke="#999"
                          stroke-linecap="round"
                        ></path>{" "}
                        <path
                          id="vector_5"
                          d="M11.5 13H12.5V14H11.5V13Z"
                          stroke="#999"
                          stroke-linecap="round"
                        ></path>{" "}
                        <path
                          id="vector_6"
                          d="M11.5 16H12.5V17H11.5V16Z"
                          stroke="#999"
                          stroke-linecap="round"
                        ></path>{" "}
                        <path
                          id="vector_7"
                          d="M15.5 10H16.5V11H15.5V10Z"
                          stroke="#999"
                          stroke-linecap="round"
                        ></path>{" "}
                        <path
                          id="vector_8"
                          d="M15.5 13H16.5V14H15.5V13Z"
                          stroke="#999"
                          stroke-linecap="round"
                        ></path>{" "}
                        <path
                          id="vector_9"
                          d="M15.5 16H16.5V17H15.5V16Z"
                          stroke="#999"
                          stroke-linecap="round"
                        ></path>{" "}
                        <path
                          id="line"
                          d="M8 2V5.5"
                          stroke="#999"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        ></path>{" "}
                        <path
                          id="line_2"
                          d="M16 2V5.5"
                          stroke="#999"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        ></path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <DatePicker
                  placeholderText="MM/DD/YYYY"
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  className="form-placeholder input-text-date"
                  aria-describedby="Data-Point-name"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
