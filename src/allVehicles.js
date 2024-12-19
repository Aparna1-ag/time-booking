import React, { useState } from "react";
import Navbar from "./navbar";

const NewVehicles = () => {


  const [Assign, setAssign] = useState(false)

  const handleAssignClick = () => {
    setAssign("true")
  }

const more = Assign ? `    <div>
        <div> Processes</div>
        
      

      <div className="flex ">
      <div className="flex ">Process Name: <input />  </div>
        <div className="ml-4"> <select> 

          <option> Vendor A </option>
          <option> Vendor B </option>
          <option> Vendor C </option>
          <option> Vendor D </option>
          
          
          </select>
          
          <button className="btn btn-primary" onClick={handleAssignClick}>  Add new process</button>
          
          </div>

      </div>


</div>`   : ""



  const newVehicle = [
    {
      name: "",
      vin: "",
      vendors: [
        {
          VendorName: "",
          process: "",
        },
        {
          VendorName: "",
          process: "",
        },
        {
          VendorName: "",
          process: "",
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-300 w-screen h-screen ">
      <Navbar />


      <div className="w-screen pt-12">
      <form className="w-1/2 m-auto">
        <div className="w-full flex">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label text-xl">
            Vehicle Name
          </label>
          <input
           type="text"
            class="form-control bg-white h-12"
            
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3 ml-6">
          <label for="exampleInputPassword1" class="form-label text-xl">
            VIN
          </label>
          <input
              type="text"
            class="form-control bg-white h-12 "
            
          />
        </div>
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label text-xl">
            Total Estimated Time 
          </label>
          <input
              type="text"
            class="form-control bg-white h-12 w-24"
            
          />
        </div>
       

      <div>
        <div className="text-xl font-bold mb-4"> Processes</div>
        
      

      <div className="flex">
      <div className="flex">   <select className="w-72 h-16"> 

<option> Electrical Installation </option>
<option> Mechanical Installation </option>
<option> Hydraulics </option>
<option>  Painting </option>
<option>  Assembling </option>
<option>  Add new process </option>


</select> </div>
        <div className="ml-4"> <select className="w-72 h-16"> 

          <option> Vendor A </option>
          <option> Vendor B </option>
          <option> Vendor C </option>
          <option> Vendor D </option>
          
          
          </select>



         
          
         
          
          </div>
         
      

      </div>

      <div>
            <label for="hehe" class="form-label">Extimated Time for the process </label>
            <input type="text" class="my-6 ml-4 bg-white h-12 w-72" id="hehe" />
          </div>

      <button className="btn mt-4 bg-gradient text-white" onClick={handleAssignClick} style={{background: "purple"}}>     Add New Process</button>
      <button className="btn mt-4 ml-4 bg-gradient text-white" onClick={handleAssignClick} style={{background: "darkgoldenrod"}}>  Add New Vendor</button>


</div>



        <button type="submit" class="btn btn-success mt-12">
          Submit
        </button>
      </form>

      </div>
      


     



      
          </div>
      
  );
};

export default NewVehicles;
