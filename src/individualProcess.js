import React, { useEffect, useState } from 'react'
import allProcesses from './allprocesses'
import Navbar from './navbar'





const IndividualProcess = () => {


    const [timerDisplaying, setTimerDisplaying]  = useState(false)
    const [stoppedTimer, setStoppedTimer] = useState(false)

    const [intialTime, setInitialTime] = useState(9)


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
     <Navbar />
    <div className='p-5 bg-gradient-to-b from-slate-200 via-white to-slate-200 '>

    





      <div className='flex justify-center mb-32 mt-24 '>
      <div className=''>
      <div className='text-4xl text-center font-bold'> Vehicle A </div>
      <div className='text-5xl mt-4'> Mechanical Installation  </div>
      </div>
      </div>



      <div className='mt-5 flex justify-center pb-20'> 
     <div>
     {/* <div>  <button className='btn btn-lg btn-success'  onClick={handleClick} style={{display : `${startTimerButton}`}} > Start Timer</button> </div> */}
   

    <div>
    <button class="button"   onClick={handleClick} style={{display : `${startTimerButton}`}}>
  <div class="wrap">
    <p>
    
      Start Work Timer
    </p>
  </div>
</button>
    </div>








        
    {/* <div style={{display: `${stoppedTimerDisplayClass}`}} className='mt-5 '>
       <p className='text-4xl font-bold'> 3 <span className='text-base font-normal'>hours</span> : 14 <span className='text-base font-normal'>minutes</span> </p>
       
    </div> */}

     <div style={{display: `${displayClass}`}}>
     {/* <img src="https://community.chartfactor.com/uploads/default/original/1X/031a32b8ac57a02c565bf4fe6117fec8e6b1ecab.gif" className='w-96 h-auto mt-5' alt='timer-img'  /> */}

   <div className='flex justify-center'> <p className='font-bold text-6xl mb-32'> 00:00:{intialTime}</p></div>
    <div className='flex mt-4 justify-center'>
    <div>  <button className='btn btn-lg btn-warning mr-4'> Pause</button> 
     <button className='btn btn-lg btn-danger' onClick={handleStopTimerClick} > Stop for the day</button> </div>
    </div>

    <div className='mt-4 text-xl'>Next Auto Stop: <span className='text-blue-600 font-semibold'>1:30 PM</span> -- <span className='text-blue-600 font-semibold'>Lunch Break</span></div>  
    <div className='flex justify-center'> <button className='btn btn-sm btn-info mt-4'> Don't auto stop at 1:30 PM</button></div>

     </div>
   

     </div>
      </div>














    








      <div className='flex justify-center  pt-32 pb-32 bg-gradient-to-b from-white to-slate-100'>
      


   <div className='w-4/5 bg-inherit'>
   <div className=' flex justify-between'>
    <div>
      <div className='text-lg'> Time worked:  </div>
      <div className='mt-3 text-8xl text-teal-800 font-bold'> 14 <span className='text-2xl ml-0'> hours </span>  </div>
      </div>

    <img src="https://www.qinlockhcp.com/Content/images/dosing/92_graphic.png" className='w-72 h-72' alt="doughnut-chart" />

      <div>
      <div className='text-lg'> Estimated Completion Time:  </div>
      <div className='mt-3 text-8xl text-pink-800 font-bold'> 17 <span className='text-2xl ml-0'> hours </span>  </div>
      </div>
    </div>
   </div>
      

      </div>












      <div className='text-2xl text-red-700 font-bold mb-5 pt-6 flex justify-center'>Previous Logs</div>

      <div className='w-full flex justify-center bg-inherit' >
        
   <div style={{width: "50%"}}>
   <table className="table bg-inherit "  >
  <thead style={{background: ""}}>
    <tr className='text-danger ' >
     
      <th style={{background: "",}} className='text-danger' scope="col">Date</th>
      <th style={{background: ""}} className='text-danger' scope="col"> Start Time</th>
      <th style={{background: ""}} className='text-danger' scope="col"> Stop Time</th>
      <th style={{background: ""}} className='text-danger' scope="col">Period</th>
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







    <div className='text-2xl text-red-700 font-bold pb-5 flex justify-center bg-slate-200'>Overtime logs</div>

<div className='w-full flex justify-center bg-slate-200 pb-10' >
  
<div style={{width: "50%"}}>
<table className="table bg-inherit "  >
<thead style={{background: ""}}>
<tr className='text-danger ' >

<th style={{background: "",}} className='text-danger' scope="col">Date</th>
<th style={{background: ""}} className='text-danger' scope="col"> Start Time</th>
<th style={{background: ""}} className='text-danger' scope="col"> Stop Time</th>
<th style={{background: ""}} className='text-danger' scope="col">Period</th>
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
