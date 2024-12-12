import React from 'react'
import { Link } from 'react-router-dom'






const Loginform = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center custom-bg py-20 px-32 "  >

      <div className='custom-bg-translucent w-full h-full flex justify-content-end shadow-inner'>
        <div className='w-2/5 h-full bg-teal-500 flex justify-center items-center text-white text-lg'> 
        <form className="w-1/2">
        <div className="form-group ">
          <p className='font-bold capitalize text-xl'>USER LOGIN</p>
      <label htmlFor="exampleInputEmail1">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    </div>
    <div className="form-group mt-2">
      <label htmlFor="exampleInputPassword1">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
    </div>
  
    <button type="submit" className="btn  bg-gradient mt-5 text-white" style={{background: "#c1491e"}}>  <Link to="/vehicles" className='text-white no-underline' >Submit   </Link> </button>
  </form> 
        
        

        </div>
        
      </div>
 
      </div>
  )
}

export default Loginform
