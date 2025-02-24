import React from 'react'
import { Link } from 'react-router-dom';

const EmployeeNavbar = () => {
    let showTextWhite = false;
    if (window.location.href.includes("manage") || window.location.href.includes("manageforemployee") ) {
      showTextWhite = true;

    }

    



  return (
    <div className='text-sm'>
        <nav className={` shadow-2xl bg-gradient py-0 px-3 text-black  `} style={{background: ""}} >
  <div className=" flex justify-between py-0"> 
    <Link to="/" className='flex no-underline mt-3'> <img src=" https://img.favpng.com/2/24/15/logo-blue-png-favpng-seAFkEW4Ar8dspLd3GU62AYPY.jpg" alt="brand-icon" className='w-12 h-12 '   /> <p className='text-2xl ml-2 mt-2 font-semibold bg-gradient-to-r from-blue-600 to-teal-600 via-purple-500 bg-clip-text text-transparent '>Brandname</p></Link>


    <div className='flex '>


    
    <Link to="/" className=' no-underline mr-1 mt-1' style={{width: "2rem", height: "2rem"}} > <img src=" https://cdn-icons-png.flaticon.com/512/8812/8812070.png" alt="user-icon" className='  mt-2 mb-1'   /><p className={`text-center ${showTextWhite ? 'text-white' : 'text-black'}`}>Mike</p> </Link>


    </div>

 
  </div>
</nav>

      
    </div>
  )
}

export default EmployeeNavbar
