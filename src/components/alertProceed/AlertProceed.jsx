import Alert from 'react-bootstrap/Alert';
import "./alertProceed.css"
import { BsX } from "react-icons/bs"
import React from 'react';
export default function AlertProceed( {show, setShow}) {
    


    return (
        <>

            <Alert show={show} variant="" className='vw-100 vh-100 bg-0 d-flex justify-content-center align-items-center position-absolute z-1 top-0 left-0'>
                <div className='w-25 bs bg-white rounded-4 p-4 pb-5'>


                    <div >
                        <div>
                        <div className='d-flex justify-content-end'>
                            <button className='rounded border-0 fs-5' onClick={() => setShow(false)}><BsX /></button>
                        </div>

                        <p className='mt-4 fs-5 fw-bold text-center '>Please Confirm <br /> your Action</p>


                        <div className="col-12 mb-4 d-flex justify-content-center ">
                            <div className="blue-line"></div>
                        </div>

                        <div className="d-flex justify-content-center gap-2">
                            <button className='btn-blue rounded-2 border-0 px-3' >
                                Proceed
                            </button>
                            <button className='btn-black rounded-2 border-0 px-3' onClick={() => setShow(false)}>
                                Cancel
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            </Alert>


        </>
    );
}

