import React from 'react'
import { Link } from 'react-router-dom'
import allProcesses from './allprocesses'
import { motion } from "framer-motion"

const Processes = () => {





  return (
    <div className='h-screen w-screen p-16'>
       <div className='font-bold text-3xl'> Select Process </div>
       <div className=' text-lg'> Select the process you are starting/resuming work for Vehicle A</div>
     


     

    <div className='flex justify-center'>


   <div>
   {
      allProcesses.map((item) => 
        <Link to="/individualProcess" className='no-underline'>
            <motion.div className = 'card shadow-2xl mt-5 hover:animate-jump' style={{width: "45rem", height: "6rem", border: "1px solid red", background: `${item.bgColor}`}} variants = {{hidden: {opacity: 0, scale: 0.4}, visible: {opacity : 1, scale: 1}}}
transition = {{type: 'spring', duration: 0.5, delay: `${item.animateDelay}`}} initial = 'hidden' animate = 'visible' > 
 <div className="card-body text-3xl no-underline flex justify-between">
           <p className='text-white'>{item.processName}</p>
         <div className='flex'>
         <p className='text-4xl mr-8 text-green-200 font-bold'> {item.percentCompleted}</p>
         <p className='text-4xl text-purple-200 font-bold'> {item.hoursWorked}</p>
         </div>
         
           </div> </motion.div>
           {/* <div class="card shadow-2xl mt-5 animate-jump-in animate-delay-2000  hover:animate-jump focus:animate-duration-4000" style={{width: "45rem", height: "6rem", border: "1px solid red", background: `${item.bgColor}`}}>
           <div className="card-body text-3xl no-underline flex justify-between">
           <p className='text-white'>{item.processName}</p>
         <div className='flex'>
         <p className='text-4xl mr-8 text-green-200 font-bold'> {item.percentCompleted}</p>
         <p className='text-4xl text-purple-200 font-bold'> {item.hoursWorked}</p>
         </div>
         
           </div>
         </div> */}
           </Link>


      )
    }
   </div>




    </div>



 </div>
      
   
  )
}

export default Processes
