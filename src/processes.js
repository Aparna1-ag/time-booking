import React from 'react'
import { Link } from 'react-router-dom'
import allProcesses from './allprocesses'
import { motion } from "framer-motion"
import Navbar from './navbar'

const Processes = () => {





  return (
    <div className=' w-screen  process-bg'>
      <Navbar />
      <div className='px-16 pt-10'>
      <div className='font-bold text-3xl text-white'> Select Your Process </div>
       <div className=' text-2xl mb-10 text-white'> Select the process you are starting/resuming work for <span className='font-bold text-teal-500'>Vehicle A</span></div>
     


     

    <div className='flex justify-center'>


   <div>
   {
      allProcesses.map((item) => 
        <Link to="/individualProcess" className='no-underline'>
            {/* <motion.div className = 'card shadow-2xl mt-5 hover:animate-jump' style={{width: "45rem", height: "6rem", border: "1px solid red", background: `${item.bgColor}`}} variants = {{hidden: {opacity: 0, scale: 0.4}, visible: {opacity : 1, scale: 1}}}
transition = {{type: 'spring', duration: 0.5, delay: `${item.animateDelay}`}} initial = 'hidden' animate = 'visible' >  */}

<motion.div className = 'card shadow-2xl mt-5 hover:animate-jump'  variants = {{hidden: {opacity: 0, scale: 0.4}, visible: {opacity : 1, scale: 1}}}
transition = {{type: 'spring', duration: 0.5, delay: `${item.animateDelay}`}} initial = 'hidden' animate = 'visible' > 




 {/* <div className="card-body text-3xl no-underline flex justify-between">
           <p className='text-white'>{item.processName}</p>
         <div className='flex'>
         <p className='text-4xl mr-8 text-green-200 font-bold'> {item.percentCompleted}</p>
         <p className='text-4xl text-purple-200 font-bold'> {item.hoursWorked}h</p>
         </div>
           </div> */}


<button class="frutiger-button">
  <div class="inner">
    <div class="top-white"></div>
    <span class="text">{item.processName}</span>
  </div>
</button>
           
           
           
           
            </motion.div>
        
           </Link>


      )
    }
   </div>




    </div>

      </div>


 </div>
      
   
  )
}

export default Processes
