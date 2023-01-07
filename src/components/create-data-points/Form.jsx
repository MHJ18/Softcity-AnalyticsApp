import React, { useEffect, useRef, useState } from "react";
import "./createdatapoints.css";
import { BsArrowRightShort } from "react-icons/bs";
import Inputs from "./Inputs";

const Form = () => {
 const [refs, setrefs] = useState("hidden");
 const [col1, setcol1] = useState(false);
 const [ischecked, setischecked] = useState(false);
 const [columns, setcolumns] = useState([]);
 const [state, setstate] = useState(false);
 const [enable, setenable] = useState(false);
 //
 useEffect(() => {}, []);
 //checkbox logic
 const checkbox = function () {
   setischecked(!ischecked);
   setcol1(true);
 };
 //form submit
 const formsubmit = function (e) {
   e.preventDefault();
 };
 //onchange

 const onchange = function (e) {
   console.log(e.target.value);
   let lab = e.target.value;

   if (
     e.target.value === "text-area" ||
     e.target.value === "Sdrop" ||
     e.target.value === "Mdrop" ||
     e.target.value === "checkbox" ||
     e.target.value === "radio" ||
     e.target.value === "date" ||
     e.target.value === "url"
   ) {
     //  let label = lab.slice(0, 1).toUpperCase() + lab.slice(1).toLowerCase();
     setstate({
       success: true,
       type: e.target.value,
     });
     setenable(true);
   } else {
     setenable(false);
     setstate({ success: false });
   }
 };
 const createColumns = function (e) {
   setTimeout(() => {
     setrefs("show");
   }, 300);

   console.log(e.target.value);

   if (e.target.value === "1") {
     let array = new Array(1).fill({ label: "", column: "" });

     setcolumns(array);
   } else if (e.target.value === "2") {
     let array = new Array(2).fill({ label: "", column: "" });

     setcolumns(array);
   } else if (e.target.value === "3") {
     let array = new Array(3).fill({ label: "", column: "" });
     setcolumns(array);
   }
 };
 return (
   <>
     <div className="form-container m-3 p-3">
       <form onSubmit={formsubmit}>
         <div className="mb-4">
           <label htmlFor="DataPointname" className="form-label form-text">
             Data Point name
           </label>
           <input
             autofocus="true"
             placeholder="Data point name"
             type="text"
             className="form-control form-placeholder"
             id="DataPointname"
             aria-describedby="Data-Point-name"
           />
         </div>
         <div className="mb-4">
           <label htmlFor="DataPointType" className="form-label form-text">
             Data Point Type
           </label>
           <select
             defaultValue={"text"}
             onChange={onchange}
             id="datatype"
             className="select form-select"
           >
             <option className="options" value="text" name="Text Field">
               Text field
             </option>
             <option className="options" value="number" name="Text Field">
               Whole Number field
             </option>
             <option className="options" value="number" name="Text Field">
               Decimal Number field
             </option>
             <option className="options" value="email" name="Email Field">
               Email field
             </option>
             <option className="options" value="date" name="Email Field">
               Date field
             </option>
             <option className="options" value="url" name="Email Field">
               Web Address field
             </option>
             <option className="options" value="Sdrop" name="Email Field">
               Single selection drop down
             </option>
             <option className="options" value="Mdrop" name="Email Field">
               Multi-Selection Dropdown
             </option>
             <option className="options" value="radio" name="Email Field">
               Radio buttons
             </option>
             <option className="options" value="checkbox" name="Email Field">
               Checkboxes
             </option>
             <option className="options" value="number" name="Number Field:">
               Currency Price field
             </option>
             <option
               className="options"
               value="text-area"
               name="TextArea Field:"
             >
               Text-area
             </option>
           </select>
         </div>
         {state.type === "text-area" && (
           <div>
             <label className="form-label form-text" htmlFor="datapoint">
               Max Character
             </label>
             <input
               autoFocus={true}
               style={{ height: "3.5rem" }}
               type={state.type}
               placeholder="Default: 200"
               name="dataPoint"
               id="datapoint"
               maxLength={200}
               className="form-control form-placeholder mb-4"
             />
           </div>
         )}
         {enable ? (
           <div>
             <label className="form-label form-text" htmlFor="Groupname">
               Field Group Name
             </label>
             <input
               autoFocus="true"
               className="form-control form-placeholder mb-4"
               type="text"
               id="Groupname"
               placeholder="Field Group Name"
             />
           </div>
         ) : (
           ""
         )}
         <div className="mb-4 form-check">
           <label className="form-check-label" htmlFor="exampleCheck1">
             Enable Multi-columns
           </label>
           <input
             onChange={checkbox}
             type="checkbox"
             className="form-check-input"
             id="exampleCheck1"
             checked={ischecked}
           />
         </div>
         <div className="mb-4">
           <label htmlFor="DataPointType" className="form-label form-text">
             No. of Columns
           </label>
           <select
             onChange={createColumns}
             disabled={!ischecked}
             className="form-select select"
             aria-label="Default select"
           >
             {/* <option value={null}>Select...</option> */}
             <option disabled selected>
               -- select an option --
             </option>
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
           </select>
         </div>
         <div>
           {ischecked &&
             columns.map((res, ind) => {
               return (
                 <div className={`${refs}`}>
                   <label
                     className="form-check-label label-input"
                     htmlFor="DataPointname"
                   >
                     Label Column {ind + 1}
                   </label>
                   <input
                     autoFocus={true}
                     onChange={onchange}
                     placeholder="Column name"
                     name={`value-${ind}`}
                     type="text"
                     className="form-control form-placeholder p-3 mb-3"
                     id="DataPointname"
                     aria-describedby="Data-Point-name"
                   />
                 </div>
               );
             })}
         </div>
         <div className="mb-4 ">
           <label
             className="form-label form-text d-block"
             htmlFor="DataTypeDescription"
           >
             Description:
           </label>
           <textarea
             className="text-area form-control"
             name="description"
             id="DataTypeDescription"
             cols="40"
             rows="3"
             minLength="5"
             maxLength="30"
             placeholder="Description"
           ></textarea>
         </div>
         <div className="d-flex justify-content-end buttons-style">
           <button type="submit" className="btn  mx-3 btn-form">
             Update <BsArrowRightShort className="btn-icon" />
           </button>
           <button type="submit" className="btn  btn-form">
             Reset
           </button>
         </div>
       </form>
     </div>
   </>
 );
};

export default Form;
