import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './navbar'


const Vehicles = () => {



  let vehicles = [
    {
      name: "Vehicle A",
      id: "244HKLMK8875"
    },
    {
      name: "Vehicle B",
      id: "114HKFK88900"
      
    },
    {
      name: "Vehicle C",
      id: "463MGHFK88966"
    },
    {
      name: "Vehicle D",
      id: "114HJFS88237"
    },

  ]



  return (
    <div class="w-screen h-screen  ">
      <Navbar />
   <div className='px-24 pt-16 bg-slate-200'>
   <p className='text-4xl font-bold '> Welcome <span className='text-orange-400'> Aparna !</span></p>
      <p className='text-2xl '> Please select the vehicle you working on today.</p>
    <div className='row'>
    {vehicles.map((item)=> 
          <div className='col-6  '> 
           <Link to="/employeeprocess" className='no-underline' >
           <div class="card mt-5 animate-jump-in animate-once animate-duration-500 animate-delay-800 animate-ease-in-out bg-white shadow-2xl" style={{width: "30rem"}}>
           <div className="card-body  text-xl no-underline">
            
            {item.name} -
            {item.id}
           </div>
         </div>
           </Link>



          </div>
        
        )}


        <div className='h-screen w-screen bg-slate-200'></div>

    </div>
   </div>



    </div>
  )
}

export default Vehicles

