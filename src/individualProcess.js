import React, { useState } from 'react'
import allProcesses from './allprocesses'





const IndividualProcess = () => {


    const [timerDisplaying, setTimerDisplaying]  = useState(false)
    const [stoppedTimer, setStoppedTimer] = useState(false)


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



  return (
    <div className='p-5'>





      <div className='flex justify-center'>
      <div>
      <div className='text-4xl text-center font-bold'> Vehicle A </div>
      <div className='text-5xl mt-4'> Mechanical Installation </div>
      </div>
      </div>



      <div className='mt-5 flex justify-center'> 
     <div>
     <div>  <button className='btn btn-lg btn-success'  onClick={handleClick} style={{display : `${startTimerButton}`}} > Start Timer</button> </div>


        
    <div style={{display: `${stoppedTimerDisplayClass}`}} className='mt-5'>
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














      <div className='container flex justify-between mt-16'>
      


      <div>
      <div className=''> Time worked:  </div>
      <div className='mt-3 text-8xl text-teal-800 font-bold'> 5 <span className='text-2xl ml-0'> hours </span>  </div>
      </div>

    <img src="https://www.qinlockhcp.com/Content/images/dosing/92_graphic.png" className='w-72 h-72' alt="doughnut-chart" />

      <div>
      <div className=''> Estimated Completion Time  </div>
      <div className='mt-3 text-8xl text-pink-800 font-bold'> 25 <span className='text-2xl ml-0'> hours </span>  </div>
      </div>
      

      </div>


     


   

    

    </div>
  )
}

export default IndividualProcess
