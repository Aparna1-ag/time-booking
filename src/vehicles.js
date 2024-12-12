import React from 'react'
import { Link } from 'react-router-dom'


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
    <div class="w-screen h-screen p-24 bg-gradient-to-tr from-teal-300 via-slate-300 to-orange-300">
      <p className='text-4xl font-bold'> Welcome <span className='text-teal-600'> Aparna !</span></p>
      <p className='text-2xl'> Please select the vehicle you working on today.</p>
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
  )
}

export default Vehicles

