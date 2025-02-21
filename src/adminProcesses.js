import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import allProcesses from './allprocesses'
import { motion } from "framer-motion"
import Navbar from './navbar'

const Processes = () => {

  const [displayinglogs, setDisplayingLogs] = useState(false)

  const [displayingProcessDetails, setDisplayingProcessDetails] = useState(false)

  const handleClick = () => {
    setDisplayingLogs(prev => !prev)
  }


  const handleProcessClick = () => {
    setDisplayingProcessDetails(prev => !prev)
  }









  return (
    <div className=' w-screen  '>
      <Navbar />
      <div className='px-16 pt-10'>
      <div className='font-bold text-3xl'><span className='font-bold ' style={{color: "#00679F"}} >Vehicle A</span> </div>
       <div className=' text-2xl mb-10 '> Select process to view more details </div>
     

       

     

    <div className="flex justify-center animate-fade-right">


   <div>
   {
      allProcesses.map((item) => <div>
        
            <motion.div  onClick={handleProcessClick}  className = 'p-3  rounded-lg shadow-2xl mt-5 hover:animate-jump hover:animate-duration-[1500ms]' style={{width: "40rem", borderRight: "1px solid gainsboro", borderTop: "1px solid gainsboro", height: "4.5rem", borderLeft: `3px solid ${item.borderCol}`, background: "white", borderBottom: `6px solid ${item.borderCol}`}} variants = {{hidden: {opacity: 0, scale: 0.4}, visible: {opacity : 1, scale: 1}}}
transition = {{type: 'spring', duration: 0.5, delay: `${item.animateDelay}`}} initial = 'hidden' animate = 'visible' > 






 <div className=" text-2xl no-underline flex justify-between">
           <p className=''>{item.processName}</p>
         <div className='flex'>
         <p className='text-2xl mr-8  text-slate-800 '> {item.percentCompleted}</p>
         <p className='text-2xl  font-bold'> {item.hoursWorked}h</p>
         </div>
           </div>


           
           
           
            </motion.div>

          
        
      </div>

      


      )
    }
   </div>


   <div className={`ml-5 ${displayingProcessDetails? "block animate-fade-right" : "hidden"}  `} style={{width: "80rem", marginLeft: "4rem"}}  >
<div className='font-bold my-4 text-2xl '> Electrical Installation </div> 
<div className='font-bold text-blue-800 mb-4 text-xl'> Vendor <span className='text-black'>:  Vendor Abc Xyz</span> </div> 
<div className='font-bold text-blue-800 mb-4 text-xl'> Estimated Time <span className='text-black'>:  60 hours</span></div> 
<div className='font-bold text-blue-800 mb-4 text-xl'> Time worked  <span className='text-black'> :</span>   <span className='text-danger'>  14 hours</span></div> 
<div className='font-bold text-blue-800 mb-4 text-xl'> % completed  <span className='text-black'> :</span>  <span className='text-danger'> 50%</span> </div> 

<div> <button className="btn btn-primary bg-gradient px-3 border-3 border-blue-800" onClick={handleClick}><i class="fa-solid fa-clock text-light mr-2"></i>See Logs</button> </div> 

<div className={`flex justify-center mt-5  ${displayinglogs? "block animate-fade-down" : "hidden"}`} >
        
        <div style={{width: "90%"}}>
        <table className="table"  >
       <thead >
         <tr className='text-primary ' >
          
           <th className='text-primary text-center ' scope="col">Date</th>
           <th  className='text-primary text-center' scope="col"> Start Time</th>
           <th  className='text-primary text-center' scope="col"> Stop Time</th>
           <th  className='text-primary text-center' scope="col">Period</th>
         </tr>
       </thead>
       <tbody>
         <tr  className=' '>
          
           <td >12th Dec 2024</td>
           <td >12:00</td>
           <td >17:00</td>
           <td >5 hours</td>
         </tr>
         <tr className=''>
         
           <td >15th Dec 2024</td>
           <td >10:00</td>
           <td >16:00</td>
           <td >6 hours</td>
         </tr>
         <tr className=''>
         
           <td >16th Dec 2024</td>
           <td >16:00</td>
           <td >19:00</td>
           <td >3 hours</td>
         </tr>
       </tbody>
     </table>
        </div>
           </div>







</div>


  




    </div>

      </div>


 </div>
      
   
  )
}

export default Processes




