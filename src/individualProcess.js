import React, { useEffect, useState } from 'react'
import allProcesses from './allprocesses'
import Navbar from './navbar'





const IndividualProcess = () => {


    const [timerDisplaying, setTimerDisplaying]  = useState(false)
    const [stoppedTimer, setStoppedTimer] = useState(false)

    const [intialTime, setInitialTime] = useState(0)


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



    // setInterval(() => {
    //   setInitialTime(prev => prev + 0.1)
    // }, 1000)


   

  


  return (


   <div>
     <Navbar />
    <div className='p-5  bg-gray-200'>

    





      <div className='flex justify-center mb-32 mt-24 '>
      <div className=''>
      <div className='text-4xl text-center font-bold'> Vehicle A </div>
      <div className='text-5xl mt-4'> Mechanical Installation  {intialTime} </div>
      </div>
      </div>



      <div className='mt-5 flex justify-center pb-20'> 
     <div>
     {/* <div>  <button className='btn btn-lg btn-success'  onClick={handleClick} style={{display : `${startTimerButton}`}} > Start Timer</button> </div> */}

    <div>
    <button class="button"   onClick={handleClick} style={{display : `${startTimerButton}`}}>
  <div class="wrap">
    <p>
    
      Start Timer
    </p>
  </div>
</button>
    </div>








        
    <div style={{display: `${stoppedTimerDisplayClass}`}} className='mt-5 '>
       <p className='text-4xl font-bold'> 3 <span className='text-base font-normal'>hours</span> : 14 <span className='text-base font-normal'>minutes</span> </p>
       
    </div>

     <div style={{display: `${displayClass}`}}>
     <img src="https://community.chartfactor.com/uploads/default/original/1X/031a32b8ac57a02c565bf4fe6117fec8e6b1ecab.gif" className='w-96 h-auto mt-5' alt='timer-img'  />
    <div className='flex mt-4 justify-center'>
    <div>  <button className='btn btn-lg btn-warning mr-4'> Pause Timer</button> 
     <button className='btn btn-lg btn-danger' onClick={handleStopTimerClick} > Stop Timer</button> </div>
    </div>

     </div>

     </div>
      </div>














    








      <div className='  pt-32 h-screen bg-gray-200'>
      


    <div className='container flex justify-between'>
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



      <div className='text-2xl text-red-700 font-bold mb-5 flex justify-center'>Previous Logs</div>

      <div className='w-screen flex justify-center bg-gray-200'>
        
      <table className="table bg-gray-200"  style={{width: "60%"}} >
  <thead style={{background: "#d8d6d6"}}>
    <tr className='text-danger text-center' >
     
      <th style={{background: "#d8d6d6"}} className='text-danger' scope="col">Date</th>
      <th style={{background: "#d8d6d6"}} className='text-danger' scope="col"> Start Time</th>
      <th style={{background: "#d8d6d6"}} className='text-danger' scope="col"> Stop Time</th>
      <th style={{background: "#d8d6d6"}} className='text-danger' scope="col">Period</th>
    </tr>
  </thead>
  <tbody>
    <tr style={{background: "#d8d6d6"}} className='text-center '>
     
      <td style={{background: "#d8d6d6"}}>12th Dec 2024</td>
      <td style={{background: "#d8d6d6"}}>12:00</td>
      <td style={{background: "#d8d6d6"}}>17:00</td>
      <td style={{background: "#d8d6d6"}}>5 hours</td>
    </tr>
    <tr className='text-center'>
    
      <td style={{background: "#d8d6d6"}}>15th Dec 2024</td>
      <td style={{background: "#d8d6d6"}}>10:00</td>
      <td style={{background: "#d8d6d6"}}>16:00</td>
      <td style={{background: "#d8d6d6"}}>6 hours</td>
    </tr>
    <tr className='text-center'>
    
      <td style={{background: "#d8d6d6"}}>16th Dec 2024</td>
      <td style={{background: "#d8d6d6"}}>16:00</td>
      <td style={{background: "#d8d6d6"}}>19:00</td>
      <td style={{background: "#d8d6d6"}}>3 hours</td>
    </tr>
  </tbody>
</table>
      </div>







     


   

    

    </div>
   </div>
  )
}

export default IndividualProcess
