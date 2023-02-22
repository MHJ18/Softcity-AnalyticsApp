import React from "react";
import "./createAdmin.css";
import CreateAdminContainer from "../../components/createAdminContainer/CreateAdminContainer";

export default function CreateAdmin() {
  return (
    <div
      className="row m-0 p-0 "
      style={{ border: "1px solid red", height: "100vh" }}
    >
      {/* topbar */}
      <div
        className="row m-0 p-0"
        style={{ border: "1px solid blue", height: "50px" }}
      >
        {" "}
        TOPBAR
      </div>

      <div
        className="row m-0 p-0 d-flex "
        style={{ border: "1px solid green" }}
      >
        {/* Sidebar */}
        <div
          className="row m-0 p-0"
          style={{ border: "1px solid green", width: "300px" }}
        >
          {" "}
          Sidebar
        </div>

        {/* Create Admin Container */}
        <CreateAdminContainer />
      </div>
    </div>
  );
}
