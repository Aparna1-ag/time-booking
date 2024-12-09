import React from 'react'
import { Link } from 'react-router-dom'


const Vehicles = () => {


  let vehicles = ["Vehicle A" , "Vehicle B", "Vehicle C", "Vehicle D"]



  return (
    <div class="container ">
      <p> Welcome UserName</p>
      <p> Please select the vehicle you working on today!</p>
    <div className='row'>
    {vehicles.map((item)=> 
          <div className='col-6 '> 
           <Link to="/processes">
           <div class="card mt-5 animate-jump-in animate-once animate-duration-500 animate-delay-800 animate-ease-in-out" style={{width: "30rem", background: "linear-gradient(to right, #a68fd437, #7fb49634, #6bc6da4c)"}}>
           <div className="card-body font-bold text-xl no-underline">
            
            {item}
           </div>
         </div>
           </Link>



          </div>
        
        )}




    </div>

    </div>
  )
}

export default Vehicles

