import React from 'react'
import employeeDailyData from './employeeDailyData';
import Navbar from './navbar'

const ManageEmployeeLogin = () => {





  return (
    <div>

        <Navbar />
{/* {employeeDailyData.map(item => {
    <div> {item.activeStatus}</div>
})} */}

      

       <div className="row p-4">
       
        {employeeDailyData.map(item => 
            
            (
                <div className='col-4'>
             <div className="card p-3 mt-3" style={{background: "#ececec", borderRadius: "16px"}}> 
             <img src="https://www.shutterstock.com/image-vector/avatar-gender-neutral-silhouette-vector-600nw-2470054311.jpg" style={{width: "3rem", height: "3rem", borderRadius: "50%"}} className="mt-2" />
             <div className="mt-2"> {item.employeeName}, <span> {item.employeeId}</span> <span style={{width: "0.25rem", height: "0.25rem", borderRadius: "50%", background:`${item.activeStatus}` }}> </span> </div>
             <button className="btn btn-sm btn-info rounded-sm w-48 mt-2"> View Employee Details </button>
             <div> Vehicle Assigned: <span><input className= "bg-white mt-2" value={item.vehicles[0].name} /></span> </div>
            <div>   Process: <span><input className= "bg-white mt-2" value={item.vehicles[0].process} /> </span></div>
            <div>  Daily Start Time: <span><input className= "bg-white mt-2" value={item.dailyStartTime} /> </span></div>
            <div>  Daily End Time: <span><input className= "bg-white mt-2" value={item.dailyEndTime} /> </span></div>
            <div>  Overtime Hours Today: <span><input className= "bg-white mt-2" value={item.overTimeToday} /> </span></div>

         <div>  Overtime Hours Tomorrow: <span><input className= "bg-white mt-2" value={item.overTimeTomorrow} /> </span></div>

             <button className="btn btn-sm btn-danger rounded-sm w-72 mt-2" > View  {item.employeeName}'s Overtime Record </button>
 
             <button className="btn btn-sm btn-success rounded-sm w-28 mt-4" > Save Changes </button>
 
             
 
             </div>
             </div>
            )
 
         )}



      

       </div>
      
    </div>
  )
}

export default ManageEmployeeLogin
