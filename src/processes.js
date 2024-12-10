import React from 'react'
import { Link } from 'react-router-dom'
import allProcesses from './allprocesses'

const Processes = () => {





  return (
    <div className='h-screen w-screen p-5'>
       <div className='font-bold text-2xl'> Select Process </div>
       <div> Select the process you are starting/resuming work for Vehicle A</div>


     

    <div className='flex justify-center'>


   <div>
   {
      allProcesses.map((item) => 
        <Link to="/individualProcess" className='no-underline'>
           <div class="card shadow-2xl mt-5 animate-jump-in animate-once animate-duration-500 animate-delay-800 animate-ease-in-out  hover:animate-jump hover:animate-duration-4000" style={{width: "45rem", height: "6rem", border: "1px solid red", background: `${item.bgColor}`}}>
           <div className="card-body font-bold text-3xl no-underline flex justify-between">
           <p className='text-white'>{item.processName}</p>
         <div className='flex'>
         <p className='text-4xl mr-8 text-green-300'> {item.percentCompleted}</p>
         <p className='text-4xl text-purple-300'> {item.hoursWorked}</p>
         </div>
         
           </div>
         </div>
           </Link>


      )
    }
   </div>




    </div>



 </div>
      
   
  )
}

export default Processes
