import React, { useState } from "react";
import Navbar from "./navbar";

const NewVehicles = () => {
  const [Assign, setAssign] = useState(false);

  const handleAssignClick = () => {
    setAssign("true");
  };

  const more = Assign
    ? `    <div>
        <div> Processes</div>
        
      

      <div className="flex ">
      <div className="flex ">Process Name: <input />  </div>
        <div className="ml-4"> <select> 

          <option> Employee A </option>
          <option> Employee B </option>
          <option> Employee C </option>
          <option> Employee D </option>
          
          
          </select>
          
          <button className="btn btn-primary" onClick={handleAssignClick}>  Add new process</button>
          
          </div>

      </div>


</div>`
    : "";

  const newVehicle = [
    {
      name: "",
      vin: "",
      Employees: [
        {
          EmployeeName: "",
          process: "",
        },
        {
          EmployeeName: "",
          process: "",
        },
        {
          EmployeeName: "",
          process: "",
        },
      ],
    },
  ];

  return (
    <div className="w-screen h-screen ">
      <Navbar />

      <div className="w-screen h-screen pt-12 bg-slate-200 vehicle-form">
        <form className="w-1/2 m-auto">
          <div className="w-full flex">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label ">
                Vehicle Name
              </label>
              <input
                type="text"
                class="form-control bg-white h-10"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3 ml-6">
              <label for="exampleInputPassword1" class="form-label ">
                VIN
              </label>
              <input type="text" class="form-control bg-white h-10 " />
            </div>
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label ">
              Total Estimated Time: 
            </label>
            <input type="number" class=" bg-white h-10 w-24 ml-3 px-3 rounded-sm" placeholder="hrs"/>
            <input type="number" class=" bg-white h-10 w-24 ml-3 px-3 rounded-sm" placeholder="mins"/>

          </div>

          <div>
            <div className="text-xl font-bold mb-4"> Processes</div>

            <div className="flex">
             
                <select className="w-64 h-10 px-2">
                  <option> Electrical Installation </option>
                  <option> Mechanical Installation </option>
                  <option> Hydraulics </option>
                  <option> Painting </option>
                  <option> Assembling </option>
                  <option> Add new process </option>
                </select>
             
            
                <select className="w-64 h-10 px-2 ml-3">
                  <option> Employee A </option>
                  <option> Employee B </option>
                  <option> Employee C </option>
                  <option> Employee D </option>
                </select>

                <div>
            <div class="flex ">
            <input type="number" class=" bg-white h-10 w-24 ml-3 px-3 rounded-sm" placeholder="hrs"/>
            <input type="number" class=" bg-white h-10 w-24 ml-3 px-3 rounded-sm" placeholder="mins"/> 
            </div>       
              </div>
             
            </div>

            <div className="flex mt-3">
             
             <select className="w-64 h-10 px-2">
               <option> Mechanical Installation </option>
               <option> Electrical Installation </option>

               <option> Hydraulics </option>
               <option> Painting </option>
               <option> Assembling </option>
               <option> Add new process </option>
             </select>
          
         
             <select className="w-64 h-10 px-2 ml-3">
               <option> Employee B </option>
               <option> Employee A </option>

               <option> Employee C </option>
               <option> Employee D </option>
             </select>

             <div>
             <div class="flex">
            <input type="number" class=" bg-white h-10 w-24 ml-3 px-3 rounded-sm" placeholder="hrs"/>
            <input type="number" class=" bg-white h-10 w-24 ml-3 px-3 rounded-sm" placeholder="mins"/> 
            </div> 
       </div>
          
         </div>


         <div className="flex mt-3">
             
             <select className="w-64 h-10 px-2">
             <option> Hydraulics </option>

               <option> Electrical Installation </option>
               <option> Mechanical Installation </option>
               <option> Painting </option>
               <option> Assembling </option>
               <option> Add new process </option>
             </select>
          
         
             <select className="w-64 h-10 px-2 ml-3">
             <option> Employee C </option>

               <option> Employee A </option>
               <option> Employee B </option>
               <option> Employee D </option>
             </select>

             <div>
             <div class="flex ">
            <input type="number" class=" bg-white h-10 w-24 ml-3 px-3 rounded-sm" placeholder="hrs"/>
            <input type="number" class=" bg-white h-10 w-24 ml-3 px-3 rounded-sm" placeholder="mins"/> 
            </div> 
       </div>
          
         </div>

         <div className="flex mt-3">
             
             <select className="w-64 h-10 px-2">
             <option> Assembling </option>

               <option> Electrical Installation </option>
               <option> Mechanical Installation </option>
               <option> Hydraulics </option>
               <option> Painting </option>
               <option> Add new process </option>
             </select>
          
         
             <select className="w-64 h-10 px-2 ml-3">
             <option> Employee D </option>

               <option> Employee A </option>
               <option> Employee B </option>
               <option> Employee C </option>
             </select>

             <div>
             <div class="flex ">
            <input type="number" class=" bg-white h-10 w-24 ml-3 px-3 rounded-sm" placeholder="hrs"/>
            <input type="number" class=" bg-white h-10 w-24 ml-3 px-3 rounded-sm" placeholder="mins"/> 
            </div> 
       </div>
          
         </div>

            <button
              className="btn mt-4 bg-gradient text-white btn-primary "
              onClick={handleAssignClick}
              style={{ background: "" }}
            >
              {" "}
              <i class="fa-solid fa-plus"></i> Add More
            </button>
            {/* <button className="btn mt-4 ml-4 bg-gradient text-white" onClick={handleAssignClick} style={{background: "navy"}}>   <i class="fa-solid fa-plus"></i> Add New Employee</button> */}
          </div>

          <button type="submit" class="btn btn-success mt-20">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewVehicles;
