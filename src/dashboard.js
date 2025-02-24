import React from 'react'
import Navbar from './navbar'
import { Link } from 'react-router-dom'



const Dashboard = () => {
  return (
    <div>
      
      {/* <div className=''> 
        <div className='card' style={{width: "18rem"}}>

            Performance

        </div>
        <div className='card' style={{width: "18rem"}}>

All Vehicles

</div>
<div className='card' style={{width: "18rem"}}>

Manage Employees

</div>

      </div> */}


<div class="main-container mt-16">
 
  <div class="cards">
  <Link to="/performance" className='no-underline'>
  <div class="dashboard-card card-3 mt-2">
    <div className='w-16 h-16 rounded-full border-2 border-white flex justify-center align-middle mx-auto' style={{verticalAlign: "middle", alignItems: 'center'}} >  <i class="fa-solid fa-chart-simple text-light " style={{fontSize: "2rem"}}></i>
    </div>
      <h4 class="card__title mt-8 mb-0 pb-0 text-light">Performance</h4>
      
     
    </div>
    </Link>
    <Link to="/vehiclelist" className='no-underline'>
    <div class="dashboard-card card-3 mt-2">
    <div className='w-16 h-16 rounded-full border-2 border-white flex justify-center align-middle mx-auto' style={{verticalAlign: "middle", alignItems: 'center'}} >    <i class="fa-solid fa-van-shuttle text-light " style={{fontSize: "2rem"}}></i>
    </div>
      <h4 class="card__title mt-4 mb-0 pb-0 text-light">All Vehicles</h4>
      <h3 class="card__title mt-2 mb-0 pb-0 text-light">320</h3>

     
    </div>
    </Link>
   <Link to="/dailylogs" className='no-underline'>
   <div class="dashboard-card card-3 mt-2">
    <div className='w-16 h-16 rounded-full border-2 border-white flex justify-center align-middle mx-auto' style={{verticalAlign: "middle", alignItems: 'center'}} >    <i class="fa-solid fa-users-line text-light " style={{fontSize: "2rem"}}></i>
    </div>
    <h4 class="card__title mt-4 mb-0 pb-0 text-light">Manage Employees</h4>

      <h3 class="card__title mt-2  mb-0 pb-0 text-light">230</h3>
     
    </div>
    </Link>
  
  </div>   
</div>

    </div>
  )
}

export default Dashboard
