import React, { useEffect, useState } from 'react'
import allProcesses from './allprocesses'
import Navbar from './navbar'
import EmployeeNavbar from './employeeNavbar'
import { useNavigate } from 'react-router-dom'





const IndividualProcess = () => {


  const navigate = useNavigate()

    const [timerDisplaying, setTimerDisplaying]  = useState(false)
    const [stoppedTimer, setStoppedTimer] = useState(false)

    const [intialTime, setInitialTime] = useState(1)


    const displayClass = timerDisplaying ? "block" : "none"
     const stoppedTimerDisplayClass = stoppedTimer ? "block" : "none"
     const startTimerButton = timerDisplaying ? "none" : "block"


    const handleClick = () => {
        setTimerDisplaying(prev => !prev)
        setStoppedTimer(prev => !prev)
        
    }

    const handleStopTimerClick = () => {
        setTimerDisplaying(prev => !prev)
        setStoppedTimer(prev => !prev)

    }



   useEffect(() => {
      const playTimer = setInterval(() => {
        setInitialTime(prev => prev + 1)

      }, 1000)

      return () => {
        clearInterval(playTimer)
      }



   }, [])

   

  


  return (


   <div>
     <EmployeeNavbar />



<button onClick={() => {navigate(-1)}} className='btn  btn-sm btn-secondary bg-gradient mt-3 ml-3'> <i class="fa-solid fa-arrow-left mr-1 text-light"></i> Back</button>
    <div className=' bg-gradient-to-b  p-5 '>

    





      <div className='flex justify-between mb-32 '>
      <div className='flex'>
      <div className='text-2xl text-center font-bold '> Vehicle A: </div>
      <div className='text-2xl ml-2'> Mechanical Installation  </div>
      </div>

      <div>
    <button class="button mb-2"   onClick={handleClick} style={{display : `${startTimerButton}`}}>
  <div class="wrap">
    <p >
    
      Start Work Timer
    </p>
  </div>
</button>
    </div>
      </div>



      <div className='mt-5 flex justify-center pb-20'> 
     <div>
  
   

    








  

     <div style={{display: `${displayClass}`}}>
  

   <div className='flex justify-center'> <p className='font-bold text-4xl mb-32'> 00<span className='text-primary'>h</span>: 00<span className='text-primary'>m</span>: {intialTime}<span className='text-primary'>s</span></p></div>
    <div className='flex mt-4 justify-center'>
    <div>  <button className='btn  btn-warning bg-gradient  mr-4' style={{border: "3px solid goldenrod"}}> Pause</button> 
     <button className='btn  btn-danger bg-gradient' onClick={handleStopTimerClick} style={{border: "3px solid crimson"}} > Stop for the day</button> </div>
    </div>

    <div className='mt-4 text-xl'>Next Auto Stop: <span className='text-blue-600 font-semibold'>1:30 PM</span> -- <span className='text-blue-600 font-semibold'>Lunch Break</span></div>  
    <div className='flex justify-center'> <button style={{border: "1.5px solid teal"}} className='btn btn-sm btn-info bg-gradient mt-4'> Don't auto stop at 1:30 PM</button></div>

     </div>
   

     </div>
      </div>














    








      <div className='flex justify-center  pt-20 pb-32 bg-gradient-to-b '>
      


   <div className='w-4/5 bg-inherit'>
   <div className=' flex justify-between'>
    <div>
      <div className='text-lg'> Time worked:  </div>
      <div className=' text-4xl text-blue-800 font-bold mt-1'> 2.4 <span className='text-2xl ml-0'> hours </span>  </div>
      </div>


      <div>
      <div className='text-lg'> Estimated Completion Time:  </div>
      <div className=' text-4xl text-blue-800 font-bold mt-1'> 20 <span className='text-2xl ml-0'> hours </span>  </div>
      </div>

      {/* <img src="https://www.qinlockhcp.com/Content/images/dosing/92_graphic.png" className='w-52 h-52' alt="doughnut-chart" /> */}

      <img src="https://images.squarespace-cdn.com/content/v1/57bfa51129687fe4f8df9bbe/1584141602578-YY03BBAA0XUT5Q1ZQSZJ/image-asset.png" className='w-56 h-52' alt="doughnut-chart" />


    </div>
   </div>
      

      </div>











      <div className='text-2xl font-bold mb-5 pt-6 flex justify-center'>Previous Logs</div>

      <div className='w-full flex justify-center bg-inherit' >
        
   <div style={{width: "50%"}}>
   <table className="table bg-inherit "  >
  <thead style={{background: ""}}>
    <tr className='text-danger ' >
     
      <th style={{background: "",}} className='text-primary' scope="col">Date</th>
      <th style={{background: ""}} className='text-primary' scope="col"> Start Time</th>
      <th style={{background: ""}} className='text-primary' scope="col"> Stop Time</th>
      <th style={{background: ""}} className='text-primary' scope="col">Period</th>
    </tr>
  </thead>
  <tbody>
    <tr style={{background: ""}} className=' '>
     
      <td style={{background: ""}}>12th Dec 2024</td>
      <td style={{background: ""}}>12:00</td>
      <td style={{background: ""}}>17:00</td>
      <td style={{background: ""}}>5 hours</td>
    </tr>
    <tr className=''>
    
      <td style={{background: ""}}>15th Dec 2024</td>
      <td style={{background: ""}}>10:00</td>
      <td style={{background: ""}}>16:00</td>
      <td style={{background: ""}}>6 hours</td>
    </tr>
    <tr className=''>
    
      <td style={{background: ""}}>16th Dec 2024</td>
      <td style={{background: ""}}>16:00</td>
      <td style={{background: ""}}>19:00</td>
      <td style={{background: ""}}>3 hours</td>
    </tr>
  </tbody>
</table>
   </div>
      </div>



    </div>







    <div className='text-2xl font-bold pb-5 flex justify-center mt-4 mx-auto'>Overtime logs</div>

<div className='w-full flex justify-center pb-10' >
  
<div style={{width: "50%"}}>
<table className="table bg-inherit "  >
<thead style={{background: ""}}>
<tr className='text-danger ' >

<th style={{background: "",}} className='text-primary' scope="col">Date</th>
<th style={{background: ""}} className='text-primary' scope="col"> Start Time</th>
<th style={{background: ""}} className='text-primary' scope="col"> Stop Time</th>
<th style={{background: ""}} className='text-primary' scope="col">Period</th>
</tr>
</thead>
<tbody>
<tr style={{background: ""}} className=' '>

<td style={{background: ""}}>11th Dec 2024</td>
<td style={{background: ""}}>18:00</td>
<td style={{background: ""}}>19:30</td>
<td style={{background: ""}}>1.5 hours</td>
</tr>
<tr className=''>

<td style={{background: ""}}>15th Dec 2024</td>
<td style={{background: ""}}>18:00</td>
<td style={{background: ""}}>19:00</td>
<td style={{background: ""}}>1 hour(s)</td>
</tr>

</tbody>
</table>
</div>
</div>
    




      











   </div>
  )
}

export default IndividualProcess
