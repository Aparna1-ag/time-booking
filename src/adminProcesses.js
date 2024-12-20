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
      <div className='font-bold text-3xl'><span className='font-bold text-teal-500'>Vehicle A</span> </div>
       <div className=' text-2xl mb-10 '> Select process to view more details </div>
     


     

    <div className="flex justify-center animate-fade-right">


   <div>
   {
      allProcesses.map((item) => <div>
        
            <motion.div  onClick={handleProcessClick}  className = 'card shadow-2xl mt-5 hover:animate-jump' style={{width: "45rem", height: "6rem", background: `${item.bgColor}`}} variants = {{hidden: {opacity: 0, scale: 0.4}, visible: {opacity : 1, scale: 1}}}
transition = {{type: 'spring', duration: 0.5, delay: `${item.animateDelay}`}} initial = 'hidden' animate = 'visible' > 

{/* <motion.div  onClick={handleProcessClick} className = 'card shadow-2xl mt-5 hover:animate-jump'  variants = {{hidden: {opacity: 0, scale: 0.4}, visible: {opacity : 1, scale: 1}}}
transition = {{type: 'spring', duration: 0.5, delay: `${item.animateDelay}`}} initial = 'hidden' animate = 'visible' >  */}




 <div className="card-body text-3xl no-underline flex justify-between">
           <p className='text-white'>{item.processName}</p>
         <div className='flex'>
         <p className='text-4xl mr-8   font-bold'> {item.percentCompleted}</p>
         <p className='text-4xl text-white font-bold'> {item.hoursWorked}h</p>
         </div>
           </div>

{/* 
<button className="frutiger-button">
  <div className="inner">
    <div className="top-white"></div>
    <span className="text">{item.processName}</span>
    <span className='text-4xl text ml-48 text-green-200 font-bold'>{item.percentCompleted}</span>
    <span className='text-4xl text ml-8 text-green-200 font-bold'>{item.hoursWorked}h</span>
  </div>
</button>

<div >

</div> */}
           
           
           
           
            </motion.div>

          
        
      </div>

      


      )
    }
   </div>


   <div className={`p-5 ml-5 ${displayingProcessDetails? "block animate-fade-right" : "hidden"}  `} style={{width: "50rem", marginLeft: "10rem"}}  >
<div className='font-bold my-5 text-4xl '> Electrical Installation </div> 
<div className='font-bold text-blue-800 mb-4 text-2xl'> Vendor <span className='text-black'>:  Vendor Abc Xyz</span> </div> 
<div className='font-bold text-blue-800 mb-4 text-2xl'> Estimated Time <span className='text-black'>:  60 hours</span></div> 
<div className='font-bold text-blue-800 mb-4 text-2xl'> Time worked  <span className='text-black'> :</span>   <span className='text-danger'>  14 hours</span></div> 
<div className='font-bold text-blue-800 mb-4 text-2xl'> % completed  <span className='text-black'> :</span>  <span className='text-danger'> 50%</span> </div> 

<div> <button className="btn btn-danger bg-gradient px-5" onClick={handleClick}>See Logs</button> </div> 

<div className={`flex justify-center mt-5  ${displayinglogs? "block animate-fade-down" : "hidden"}`} >
        
        <div style={{width: "90%"}}>
        <table className="table"  >
       <thead >
         <tr className='text-danger ' >
          
           <th className='text-danger' scope="col">Date</th>
           <th  className='text-danger' scope="col"> Start Time</th>
           <th  className='text-danger' scope="col"> Stop Time</th>
           <th  className='text-danger' scope="col">Period</th>
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




