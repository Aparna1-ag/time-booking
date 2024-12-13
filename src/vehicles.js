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
    <div class="w-screen h-screen  bg-gradient-to-tr from-teal-300 via-slate-300 to-orange-300 more-bg">
      <Navbar />
   <div className='px-24 pt-16'>
   <p className='text-4xl font-bold text-white'> Welcome <span className='text-orange-400'> Aparna !</span></p>
      <p className='text-2xl text-white'> Please select the vehicle you working on today.</p>
    <div className='row'>
    {vehicles.map((item)=> 
          <div className='col-6 '> 
           <Link to="/processes" className='no-underline' >
           <div class="card mt-5 animate-jump-in animate-once animate-duration-500 animate-delay-800 animate-ease-in-out bg-white" style={{width: "30rem"}}>
           <div className="card-body font-bold text-xl no-underline">
            
            {item.name} -
            {item.id}
           </div>
         </div>
           </Link>



          </div>
        
        )}




    </div>
   </div>

    </div>
  )
}

export default Vehicles

