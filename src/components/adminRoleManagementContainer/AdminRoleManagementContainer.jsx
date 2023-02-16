import React from 'react'
import "./adminRoleManagementContainer.css"
import { BsPencilFill } from 'react-icons/bs'
import { TiDelete } from 'react-icons/ti'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { VscArrowRight } from 'react-icons/vsc'
import AlertProceed from '../alertProceed/AlertProceed'
import { useState } from 'react'

export default function AdminRoleManagementContainer() {
    const [show, setShow] = useState(true);

    return (
        <div className='row m-0 p-0 bg-gray' >
            <div className="row m-0 mb-4 mt-4 px-4" >
                <div className="col m-0 p-0 fs-2 fw-normal d-flex align-items-center"  >Admin Role Management</div>
                <div className="col m-0 p-0 fw-light d-flex justify-content-end align-items-center text-sg" >Total users: 390</div>
            </div>

            <div className="container m-0  px-4 pb-4 d-flex  gap-3">
                <div className="col p-3   rounded bg-white" >
                    <table className="table table-bordered border-secondary mb-5 " >
                        <thead className='align-middle' >
                            <tr className='lh-lg text-white bg-blue'>
                                <td>S.no.</td>
                                <td>Template name goes here</td>
                                <td>Functions</td>
                                <td>Assigned to</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody className='align-middle tr-even'>

                            <tr >
                                <td >01</td>
                                <td>Template name goes here</td>
                                <td>5</td>
                                <td>6</td>
                                <td >
                                    <button className='border-0 bg-transparent z-1' onClick={() => setShow(true)}><BsPencilFill className='fs-5 border-0 ' /></button>
                                    <button className='border-0 bg-transparent'><TiDelete className='fs-3 border-0 text-danger ' /></button>
                                </td>
                            </tr>
                            <tr >
                                <td >02</td>
                                <td>Template name goes here</td>
                                <td>4</td>
                                <td>7</td>
                                <td >
                                    <button className='border-0 bg-transparent z-1' onClick={() => setShow(true)}><BsPencilFill className='fs-5 border-0 ' /></button>
                                    <button className='border-0 bg-transparent'><TiDelete className='fs-3 border-0 text-danger ' /></button>
                                </td>
                            </tr>
                            <tr >
                                <td >01</td>
                                <td>Template name goes here</td>
                                <td>5</td>
                                <td>6</td>
                                <td >
                                    <button className='border-0 bg-transparent z-1' onClick={() => setShow(true)}><BsPencilFill className='fs-5 border-0 ' /></button>
                                    <button className='border-0 bg-transparent'><TiDelete className='fs-3 border-0 text-danger ' /></button>
                                </td>
                            </tr>
                            <tr >
                                <td >02</td>
                                <td>Template name goes here</td>
                                <td>4</td>
                                <td>7</td>
                                <td >
                                    <button className='border-0 bg-transparent z-1' onClick={() => setShow(true)}><BsPencilFill className='fs-5 border-0 ' /></button>
                                    <button className='border-0 bg-transparent'><TiDelete className='fs-3 border-0 text-danger ' /></button>
                                </td>
                            </tr>
                            <tr >
                                <td >01</td>
                                <td>Template name goes here</td>
                                <td>5</td>
                                <td>6</td>
                                <td >
                                    <button className='border-0 bg-transparent z-1' onClick={() => setShow(true)}><BsPencilFill className='fs-5 border-0 ' /></button>
                                    <button className='border-0 bg-transparent'><TiDelete className='fs-3 border-0 text-danger ' /></button>
                                </td>
                            </tr>
                            <tr >
                                <td >02</td>
                                <td>Template name goes here</td>
                                <td>4</td>
                                <td>7</td>
                                <td >
                                    <button className='border-0 bg-transparent z-1' onClick={() => setShow(true)}><BsPencilFill className='fs-5 border-0 ' /></button>
                                    <button className='border-0 bg-transparent'><TiDelete className='fs-3 border-0 text-danger ' /></button>
                                </td>
                            </tr>
                            <tr >
                                <td >01</td>
                                <td>Template name goes here</td>
                                <td>5</td>
                                <td>6</td>
                                <td >
                                    <button className='border-0 bg-transparent z-1' onClick={() => setShow(true)}><BsPencilFill className='fs-5 border-0 ' /></button>
                                    <button className='border-0 bg-transparent'><TiDelete className='fs-3 border-0 text-danger ' /></button>
                                </td>
                            </tr>
                            <tr >
                                <td >02</td>
                                <td>Template name goes here</td>
                                <td>4</td>
                                <td>7</td>
                                <td >
                                    <button className='border-0 bg-transparent z-1' onClick={() => setShow(true)}><BsPencilFill className='fs-5 border-0 ' /></button>
                                    <button className='border-0 bg-transparent'><TiDelete className='fs-3 border-0 text-danger ' /></button>
                                </td>
                            </tr>
                            <tr >
                                <td >01</td>
                                <td>Template name goes here</td>
                                <td>5</td>
                                <td>6</td>
                                <td >
                                    <button className='border-0 bg-transparent z-1' onClick={() => setShow(true)}><BsPencilFill className='fs-5 border-0 ' /></button>
                                    <button className='border-0 bg-transparent'><TiDelete className='fs-3 border-0 text-danger ' /></button>
                                </td>
                            </tr>
                            <tr >
                                <td >02</td>
                                <td>Template name goes here</td>
                                <td>4</td>
                                <td>7</td>
                                <td >
                                    <button className='border-0 bg-transparent z-1' onClick={() => setShow(true)}><BsPencilFill className='fs-5 border-0 ' /></button>
                                    <button className='border-0 bg-transparent'><TiDelete className='fs-3 border-0 text-danger ' /></button>
                                </td>
                            </tr>
                            <tr >
                                <td >01</td>
                                <td>Template name goes here</td>
                                <td>5</td>
                                <td>6</td>
                                <td >
                                    <button className='border-0 bg-transparent z-1' onClick={() => setShow(true)}><BsPencilFill className='fs-5 border-0 ' /></button>
                                    <button className='border-0 bg-transparent'><TiDelete className='fs-3 border-0 text-danger ' /></button>
                                </td>
                            </tr>
                            <tr >
                                <td >02</td>
                                <td>Template name goes here</td>
                                <td>4</td>
                                <td>7</td>
                                <td >
                                    <button className='border-0 bg-transparent z-1' onClick={() => setShow(true)}><BsPencilFill className='fs-5 border-0 ' /></button>
                                    <button className='border-0 bg-transparent'><TiDelete className='fs-3 border-0 text-danger ' /></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>


                    <hr />


                    <nav className='mt-3 d-flex justify-content-end' aria-label="Page navigation example">
                        <ul className="pagination m-0">
                            <li className="page-item px-2">
                                <a className="page-link px-4 p-0 text-dark rounded" style={{ fontSize: "24px" }} href="/" aria-label="Previous">
                                    <HiOutlineArrowNarrowLeft />

                                </a>
                            </li>
                            <li className="page-item px-1  " ><a className="page-link text-white rounded" style={{ backgroundColor: "#14365D" }} href="/">3</a></li>
                            <li className="page-item px-2">
                                <a className="page-link px-4 p-0 text-dark rounded" style={{ fontSize: "24px" }} href="/" aria-label="Next">
                                    <HiOutlineArrowNarrowRight />
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <AlertProceed show={show} setShow={setShow} />
                </div>



                <div className="col p-3 rounded bg-white d-flex flex-column">
                    <div className=' mb-5 ms-1'>
                        <div className='header-before ms-4'>Create Role</div>
                    </div>

                    <div className="col-8 m-0 fs-6 fw-bold d-flex flex-column text-sg"  >
                        <label htmlFor="fName">Data Point name</label>
                        <input type="text" placeholder='  Data point name' id='fName' name='fName' className='mt-4 rounded border-0 bg-gray py-3 ' />
                    </div>

                    <div className='mt-4 mb-5 d-flex'>
                        <div className="col">
                            <div className="form-check d-flex  align-items-center  mb-3 gap-2">
                                <input className="form-check-input border-blue mt-0" type="checkbox" value="" id="dataCollectors" />
                                <label for="dataCollectors" className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle text-sg " >
                                    Data Collectors
                                </label>
                            </div>
                            <div className="form-check d-flex  align-items-center mb-3 gap-2">
                                <input className="form-check-input border-blue  mt-0" type="checkbox" value="" id="createDataTemplate" />
                                <label for="createDataTemplate" className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle text-sg " >
                                    Create Data Template
                                </label>
                            </div>
                            <div className="form-check d-flex  align-items-center mb-3 gap-2">
                                <input className="form-check-input  mt-0" type="checkbox" value="" id="viewDashboard" style={{ borderColor: "#556E8A" }} />
                                <label htmlFor="viewDashboard" className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle " style={{ fontSize: "12px", color: "#8D8D8D", }}>
                                    View Dashboard
                                </label>
                            </div>
                            <div className="form-check d-flex  align-items-center mb-3 gap-2">
                                <input className="form-check-input  mt-0" type="checkbox" value="" id="editUserGroups" style={{ borderColor: "#556E8A" }} />
                                <label htmlFor="editUserGroups" className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle " style={{ fontSize: "12px", color: "#8D8D8D", }}>
                                    Edit User Groups
                                </label>
                            </div>
                            <div className="form-check d-flex  align-items-center mb-3 gap-2">
                                <input className="form-check-input border-blue  mt-0" type="checkbox" value="" id="suspendDeleteAdmin" />
                                <label for="suspendDeleteAdmin" className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle text-sg " >
                                    Suspend/Delete Admin
                                </label>
                            </div>
                            <div className="form-check d-flex  align-items-center mb-3 gap-2">
                                <input className="form-check-input border-blue  mt-0" type="checkbox" value="" id="viewActivityLag" />
                                <label for="viewActivityLag" className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle text-sg " >
                                    View Activity Lag
                                </label>
                            </div>
                            <div className="form-check d-flex  align-items-center mb-3 gap-2">
                                <input className="form-check-input border-blue  mt-0" type="checkbox" value="" id="viewDataTemplate" />
                                <label for="viewDataTemplate" className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle text-sg " >
                                    View Data Template
                                </label>
                            </div>
                            <div className="form-check d-flex  align-items-center mb-3 gap-2">
                                <input className="form-check-input  mt-0" type="checkbox" value="" id="deleteCharts" style={{ borderColor: "#556E8A" }} />
                                <label htmlFor="deleteCharts" className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle " style={{ fontSize: "12px", color: "#8D8D8D", }}></label>
                                <input className="form-check-input border-blue  mt-0" type="checkbox" value="" id="deleteCharts" />
                                <label for="deleteCharts" className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle text-sg " >
                                    Delete Charts
                                </label>
                            </div>
                            <div className="form-check d-flex  align-items-center mb-3 gap-2">
                                <input className="form-check-input  mt-0" type="checkbox" value="" id="createUserGroups" style={{ borderColor: "#556E8A" }} />
                                <label htmlFor="createUserGroups" className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle " style={{ fontSize: "12px", color: "#8D8D8D", }}></label>
                                <input className="form-check-input border-blue  mt-0" type="checkbox" value="" id="createUserGroups" />
                                <label for="createUserGroups" className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle text-sg " >
                                    Create User Groups
                                </label>
                            </div>
                            <div className="form-check d-flex  align-items-center mb-3 gap-2">
                                <input className="form-check-input  mt-0" type="checkbox" value="" id="createAdmin" style={{ borderColor: "#556E8A" }} />
                                <label htmlFor="createAdmin" className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle " style={{ fontSize: "12px", color: "#8D8D8D", }}></label>
                                <input className="form-check-input border-blue  mt-0" type="checkbox" value="" id="createAdmin" />
                                <label for="createAdmin" className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle text-sg " >
                                    Create Admin
                                </label>
                            </div>
                            <div className="form-check d-flex  align-items-center mb-3 gap-2">
                                <input className="form-check-input  mt-0" type="checkbox" value="" id="viewAuthenticationLog" style={{ borderColor: "#556E8A" }} />
                                <label htmlFor="viewAuthenticationLog" className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle " style={{ fontSize: "12px", color: "#8D8D8D", }}></label>
                                <input className="form-check-input border-blue  mt-0" type="checkbox" value="" id="viewAuthenticationLog" />
                                <label for="viewAuthenticationLog" className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle text-sg " >
                                    View Authentication Log
                                </label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-check d-flex  align-items-center mb-3 gap-2">
                                <input className="form-check-input  mt-0" type="checkbox" value="" id="createDataPoint" style={{ borderColor: "#556E8A" }} />
                                <label htmlFor="createDataPoint" className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle " style={{ fontSize: "12px", color: "#8D8D8D", }}></label>
                                <input className="form-check-input border-blue  mt-0" type="checkbox" value="" id="createDataPoint" />
                                <label for="createDataPoint" className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle text-sg " >
                                    Create Data Point
                                </label>
                            </div>
                            <div className="form-check d-flex  align-items-center mb-3 gap-2">
                                <input className="form-check-input  mt-0" type="checkbox" value="" id="editDeleteTemplate" style={{ borderColor: "#556E8A" }} />
                                <label htmlFor="editDeleteTemplate" className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle " style={{ fontSize: "12px", color: "#8D8D8D", }}>
                                    Edit/Delete Template
                                </label>
                            </div>
                            <div className="form-check d-flex  align-items-center mb-3 gap-2">
                                <input className="form-check-input  mt-0" type="checkbox" value="" id="assignDashboards" style={{ borderColor: "#556E8A" }} />
                                <label htmlFor="assignDashboards" className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle " style={{ fontSize: "12px", color: "#8D8D8D", }}>
                                    Assign Dashboards
                                </label>
                            </div>
                            <div className="form-check d-flex  align-items-center mb-3 gap-2">
                                <input className="form-check-input  mt-0" type="checkbox" value="" id="createUser" style={{ borderColor: "#556E8A" }} />
                                <label htmlFor="createUser" className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle " style={{ fontSize: "12px", color: "#8D8D8D", }}>
                                    Create User
                                </label>
                            </div>
                            <div className="form-check d-flex  align-items-center mb-3 gap-2">
                                <input className="form-check-input  mt-0" type="checkbox" value="" id="createRoles" style={{ borderColor: "#556E8A" }} />
                                <label htmlFor="createRoles" className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle " style={{ fontSize: "12px", color: "#8D8D8D", }}>
                                    Create Roles
                                </label>
                            </div>
                            <div className="form-check d-flex  align-items-center mb-3 gap-2">
                                <input className="form-check-input  mt-0" type="checkbox" value="" id="dashboardViewers" style={{ borderColor: "#556E8A" }} />
                                <label htmlFor="dashboardViewers" className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle " style={{ fontSize: "12px", color: "#8D8D8D", }}>
                                    Dashboard Viewers
                                </label>
                            </div>
                            <div className="form-check d-flex  align-items-center mb-3 gap-2">
                                <input className="form-check-input  mt-0" type="checkbox" value="" id="assignDataTemplate" style={{ borderColor: "#556E8A" }} />
                                <label htmlFor="assignDataTemplate" className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle " style={{ fontSize: "12px", color: "#8D8D8D", }}>
                                    Assign Data Template
                                </label>
                            </div>
                            <div className="form-check d-flex  align-items-center mb-3 gap-2">
                                <input className="form-check-input  mt-0" type="checkbox" value="" id="createDashboards" style={{ borderColor: "#556E8A" }} />
                                <label htmlFor="createDashboards" className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle " style={{ fontSize: "12px", color: "#8D8D8D", }}>
                                    Create Dashboards
                                </label>
                            </div>
                            <div className="form-check d-flex  align-items-center mb-3 gap-2">
                                <input className="form-check-input  mt-0" type="checkbox" value="" id="viewUsers" style={{ borderColor: "#556E8A" }} />
                                <label htmlFor="viewUsers" className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle " style={{ fontSize: "12px", color: "#8D8D8D", }}>
                                    View Users
                                </label>
                            </div>
                            <div className="form-check d-flex  align-items-center mb-3 gap-2">
                                <input className="form-check-input border-blue  mt-0" type="checkbox" value="" id="viewRoles" />
                                <label for="viewRoles" className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle text-sg " >
                                    View Roles
                                </label>
                            </div>
                            <div className="form-check d-flex  align-items-center mb-3 gap-2">
                                <input className="form-check-input border-blue  mt-0" type="checkbox" value="" id="viewSessionLog" />
                                <label for="viewSessionLog" className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle text-sg " >
                                    View Session Log
                                </label>
                            </div>


                        </div>
                        <div className="col">
                            <div className="form-check d-flex  align-items-center mb-3 gap-2">
                                <input className="form-check-input border-blue  mt-0" type="checkbox" value="" id="deleteDataPoints" />
                                <label for="deleteDataPoints" className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle text-sg " >
                                    Delete Data Points
                                </label>
                            </div>
                            <div className="form-check d-flex  align-items-center mb-3 gap-2">
                                <input className="form-check-input  mt-0" type="checkbox" value="" id="createCharts" style={{ borderColor: "#556E8A" }} />
                                <label htmlFor="createCharts" className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle " style={{ fontSize: "12px", color: "#8D8D8D", }}>
                                    Create Charts
                                </label>
                            </div>
                            <div className="form-check d-flex  align-items-center mb-3 gap-2">
                                <input className="form-check-input  mt-0" type="checkbox" value="" id="viewUserGroups" style={{ borderColor: "#556E8A" }} />
                                <label htmlFor="viewUserGroups" className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle " style={{ fontSize: "12px", color: "#8D8D8D", }}>
                                    View User Groups
                                </label>
                            </div>
                            <div className="form-check d-flex  align-items-center mb-3 gap-2">
                                <input className="form-check-input  mt-0" type="checkbox" value="" id="viewAdmins" style={{ borderColor: "#556E8A" }} />
                                <label htmlFor="viewAdmins" className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle " style={{ fontSize: "12px", color: "#8D8D8D", }}>
                                    View Admins
                                </label>
                            </div>
                            <div className="form-check d-flex  align-items-center mb-3 gap-2">
                                <input className="form-check-input  mt-0" type="checkbox" value="" id="viewApprovalTrail" style={{ borderColor: "#556E8A" }} />
                                <label htmlFor="viewApprovalTrail" className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle " style={{ fontSize: "12px", color: "#8D8D8D", }}>
                                    View Approval Trail
                                </label>
                            </div>
                            <div className="form-check d-flex  align-items-center mb-3 gap-2">
                                <input className="form-check-input  mt-0" type="checkbox" value="" id="viewDataPoints" style={{ borderColor: "#556E8A" }} />
                                <label htmlFor="viewDataPoints" className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle " style={{ fontSize: "12px", color: "#8D8D8D", }}>
                                    View Data Points
                                </label>
                            </div>
                            <div className="form-check d-flex  align-items-center mb-3 gap-2">
                                <input className="form-check-input  mt-0" type="checkbox" value="" id="viewCharts" style={{ borderColor: "#556E8A" }} />
                                <label htmlFor="viewCharts" className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle " style={{ fontSize: "12px", color: "#8D8D8D", }}>
                                    View Charts
                                </label>
                            </div>
                            <div className="form-check d-flex  align-items-center mb-3 gap-2">
                                <input className="form-check-input  mt-0" type="checkbox" value="" id="editDeleteDashboard" style={{ borderColor: "#556E8A" }} />
                                <label htmlFor="editDeleteDashboard" className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle " style={{ fontSize: "12px", color: "#8D8D8D", }}>
                                    Edit/Delete Dashboard
                                </label>
                            </div>
                            <div className="form-check d-flex  align-items-center mb-3 gap-2">
                                <input className="form-check-input  mt-0" type="checkbox" value="" id="suspendDeleteUser" style={{ borderColor: "#556E8A" }} />
                                <label htmlFor="suspendDeleteUser" className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle " style={{ fontSize: "12px", color: "#8D8D8D", }}>
                                    Suspend/Delete User
                                </label>
                            </div>
                            <div className="form-check d-flex  align-items-center mb-3 gap-2">
                                <input className="form-check-input  mt-0" type="checkbox" value="" id="manageRoles" style={{ borderColor: "#556E8A" }} />
                                <label htmlFor="manageRoles" className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle " style={{ fontSize: "12px", color: "#8D8D8D", }}>
                                    Manage Roles
                                </label>
                            </div>



                        </div>

                    </div>
                    <div className=' me-2 d-flex justify-content-end align-items-end gap-2'>
                        <button className='col-2 rounded d-flex justify-content-center align-items-center p-0 bg-blue border-blue border-1 text-white fs-7' >
                            <div className='py-2' >Create</div>
                            <div className="ms-2 pb-1 m-0 fs-6"  ><VscArrowRight /></div>
                        </button>
                        <button className='col-1  rounded bg-dark py-2 text-white border-1 fs-7' >Reset </button>

                    </div>
                </div>


            </div>

        </div>
    )
}
