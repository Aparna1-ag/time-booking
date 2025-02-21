import React from 'react'
import employeeDailyData from './employeeDailyData';
import Navbar from './navbar';
import { Link } from 'react-router-dom';

const ManageEmployeeLogin = () => {


let offlineIndicator = `https://clipart-library.com/img1/1561538.png`

let onlineIndicator = `https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Icon_green_lamp_on.svg/480px-Icon_green_lamp_on.svg.png`





  return (
    <div>

        <Navbar />
{/* {employeeDailyData.map(item => {
    <div> {item.activeStatus}</div>
})} */}

      

       <div className="row p-4">

       <div className="flex justify-between mb-3">

        <div>  <h3>Employee Log Managment</h3>  </div>
       <div className='flex'>
       <div className='flex'> 
          <div className="search-icon-container"> <i className="fas fa-magnifying-glass text-light"></i>
        </div>

        <input type="text" id="customSearchInput" placeholder="Search..." className='mr-3'/></div>
        <button className=" btn-sm btn-success bg-gradient rounded-sm w-44 h-8 animated-btn mr-3" > <i class="fa-solid fa-plus mr-1"></i> Add New Employee</button>
        <Link to="/newvehicle" className='no-underline'>
        <button className=" btn-sm btn-success bg-gradient rounded-sm w-44 h-8 animated-btn " > <i class="fa-solid fa-plus mr-1"></i> Add New Vehicle</button>
        </Link>
       </div>



      </div>
       
        {employeeDailyData.map(item => 
            
            (
                <div className='col-6'>
             <div className="card p-4 mt-3" style={{background: "#ececec", borderRadius: "16px"}}> 


         <div className='flex justify-between'>
         <div className='d-flex'> 
          <img src="https://www.shutterstock.com/image-vector/avatar-gender-neutral-silhouette-vector-600nw-2470054311.jpg" style={{width: "3rem", height: "3rem", borderRadius: "50%"}} className="mt-2 mr-3" />

<div>

<div className="mt-2 d-flex">
    <div className='font-bold'>{item.employeeName} </div>
    <img className="ml-2 mt-2" src={`${item.activeStatus === "green" ? onlineIndicator : offlineIndicator}`}  style={{width: "0.6rem", height: "0.6rem", borderRadius: "50%" }} /> 
   
   </div>
   <div className='text-xs text-slate-600'> {item.employeeId}</div> 
 </div>
          </div>
          <button className="emp-details-btn bg-gradient rounded-sm w-52 h-8 mt-2"><i class="fa-solid fa-circle-info mr-1"></i> View Employee Details </button>

          </div>



             <div className='mt-5 flex justify-between'> 
              <div > Vehicle Assigned:  </div>
              <div><input className= "bg-white mt-2 px-2 py-1 w-60  text-slate-600 input-logs " value={item.vehicles[0].name} /></div> 
              </div>

            <div className='flex justify-between'>  
              <div>  Process:  </div>
              <div><input className= "bg-white mt-2 px-2 py-1 w-60 text-slate-600 input-logs" value={item.vehicles[0].process} /> </div>
              </div>

            <div className='flex justify-between'>  
              <div>Daily Start Time:  </div>
              <div><input className= "bg-white mt-2 px-2 py-1 w-60 text-slate-600 input-logs" value={item.dailyStartTime} /> </div>
              </div>

            <div className='flex justify-between'> 
              <div>  Daily End Time: </div>
              <div><input className= "bg-white mt-2 px-2 py-1 w-60 text-slate-600 input-logs" value={item.dailyEndTime} /> </div>
              </div>

            <div className='flex justify-between'> 
              <div>  Overtime Hours Today:  </div>
              <div><input className= "bg-white mt-2 px-2 py-1 w-60 text-slate-600 input-logs" value={item.overTimeToday} /> </div>
              </div>

         <div className='flex justify-between'>  
         <div>  Overtime Hours Tomorrow: </div>
          <div><input className= "bg-white mt-2 px-2 py-1 w-60 text-slate-600 input-logs" value={item.overTimeTomorrow} /> </div>
          </div>

            <div className='flex mt-5 justify-between mx-auto' style={{width: "62%"}}>
            <button className=" btn-sm logs-btn bg-gradient rounded-sm w-56 " > <i class="fa-solid fa-clock mr-1"></i> View  {item.employeeName}'s logs </button>
 
 <button className=" btn-sm btn-success bg-gradient rounded-sm w-36 animated-btn" > <i class="fa-solid fa-bookmark text-light mr-1"></i> Update Details</button>
              </div>
 
             </div>
 
             </div>
            
            )
 
         )}



        

       </div>
      
    </div>
  )
}

export default ManageEmployeeLogin
