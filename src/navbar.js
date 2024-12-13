import React from 'react'
import { Link } from 'react-router-dom'
import Image1 from './settings-icon.jpg'

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-bg-custom shadow-2xl py-0 px-3">
  <div class="container-fluid py-0"> 
    <Link to="/" className='flex no-underline'> <img src=" https://avatars.githubusercontent.com/u/30645490?s=280&v=4" alt="brand-icon" className='w-12 h-12 '   /> <p className='text-3xl ml-2 font-semibold bg-gradient-to-r from-red-600 to-yellow-600 via-purple-500 bg-clip-text text-transparent '>Brand Name</p></Link>
    <div className='flex'>

    <Link to="/manage" className='no-underline'> <img src="https://static.vecteezy.com/system/resources/previews/028/605/133/original/gear-3d-rendering-icon-illustration-comma-separated-no-special-characters-free-png.png" alt="settings-icon" className='w-20 h-20'/> <p className='text-white text-center'>Manage</p> </Link>
    <Link to="/" className=' no-underline'> <img src=" https://cdn-icons-png.flaticon.com/512/8812/8812070.png" alt="user-icon" className='w-12 h-12 ml-4 mr-2 my-3'   /><p className='text-white text-center pl-2'>Aparna</p> </Link>


    </div>

 
  </div>
</nav>

      
    </div>
  )
}

export default Navbar
