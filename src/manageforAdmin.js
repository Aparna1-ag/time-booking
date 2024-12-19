import React from 'react'
import Navbar from './navbar'
import { Link } from 'react-router-dom'

const Manage = () => {
  return (
    <div className='w-screen h-screen manage-bg'>
      <Navbar />

<div className='p-20'>




{/* <div className='w-72 h-32 px-3 py-4 apple-banana border border-slate-900 rounded-md text-white mb-6' >
  <div className='flex'>
  <img src="https://cdn3d.iconscout.com/3d/premium/thumb/business-group-10627446-8598810.png" className='w-16 h-16' alt="employees-icon"/>
  <p className='text-xl mt-3 ml-2'> Manage Vendors </p>
  </div>
</div> */}

<Link to="/newvehicle" className='no-underline'>
<div className='w-72 h-32 px-3 py-4 apple-banana border border-slate-900 rounded-md text-white mb-6' >

<div className='flex'>
  <img src="https://cdn1.iconfinder.com/data/icons/logistics-delivery-1-14/64/31-1024.png" className='w-16 h-16' alt="employees-icon"/>
  <p className='text-xl mt-3 ml-4 text-white'> Add New Vehicle </p>
  </div>
</div>
</Link>



</div>
    
      
    </div>
  )
}

export default Manage
