import React from "react";
import "./createAdminContainer.css";

export default function CreateAdminContainer() {
  return (
    <div className="row m-0 p-0 bg-gray d-flex justify-content-center">
      <div className="row mt-3 mb-5 p-0 d-flex align-items-center style">
        <div className="col ms-4 p-0 fs-4">Create Admin</div>
        <div className="col me-4 p-0 d-flex justify-content-end">
          <button className=" me-3 py-2 px-3 border-0 position-relative bg-blue border-0 rounded-2 text-white fw-lighter fs-7">
            Upload CSV
            <input
              role="button"
              type="file"
              className=" m-0 p-0 position-absolute top-0 start-0 w-100 h-100 opacity-0"
            />
          </button>
          <button className="m-0 py-2 px-3 bg-java text-white  border-0 rounded-2 text-white fw-lighter fs-7">
            View all Users: 390
          </button>
        </div>
      </div>

      <div className="row col-8 mt-5 me-5 p-0 border-0 d-flex justify-content-center bg-white rounded-4 fw-bold text-sg container-bs">
        <div className="col-12 mb-5 d-flex justify-content-center">
          <img
            className="object-fit-cover rounded-circle m-img"
            width={140}
            height={140}
            src=".//assets/profilePhoto/1.jpeg"
            alt="Profile"
          />
        </div>

        <div className="row mt-5 px-5">
          <div className="col-6 my-3 mx-0 d-flex flex-column">
            <label htmlFor="fName">First Name</label>
            <input
              className="primary-inputs p-2 border-0 rounded-3 mt-2"
              type="text"
              id="fName"
              name="fName"
            />
          </div>
          <div className="col-6 my-3 mx-0 d-flex flex-column">
            <label htmlFor="lName">Last Name</label>
            <input
              className="primary-inputs p-2 border-0 rounded-3 mt-2"
              type="text"
              id="lName"
              name="lName"
            />
          </div>
          <div className="col-6 my-3 mx-0 d-flex flex-column">
            <label htmlFor="phone">Phone</label>
            <input
              className="primary-inputs p-2 border-0 rounded-3 mt-2"
              type="tel"
              id="phone"
              name="phone"
            />
          </div>
          <div className="col-6 my-3 mx-0 d-flex flex-column">
            <label htmlFor="email">Email</label>
            <input
              className="primary-inputs p-2 border-0 rounded-3 mt-2"
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div className="col-6 my-3 mx-0 d-flex flex-column">
            <label htmlFor="userRole">Assign User Role</label>
            <select
              className="primary-inputs p-2 border-0 rounded-3 mt-2"
              name="userRole"
              id="userRole"
              form="userRole"
            >
              <option value=""></option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="col-6 my-3 mx-0 d-flex flex-column">
            <label htmlFor="userGroups">Assign to User Group(s)</label>
            <input
              className="primary-inputs p-2 border-0 rounded-3 mt-2"
              type="text"
              id="userGroups"
              name="userGroups"
              placeholder="   Select one or More User Groups "
            />
          </div>
          <div className="col-6 mt-3 mb-5 px-2 p-1">
            <button className="w-100 bg-blue p-2 border-0 rounded-3 mt-2 text-white">
              Create User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
