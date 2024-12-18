import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Performance = () => {

  const [changeBar, setChangeBar] = useState(false)


  
  useEffect(() => {
    const interval = setInterval(() => {
      setChangeBar(prev => !prev);
    }, 6000);
  
    return () => clearInterval(interval);
  }, []);




  let bars1 = [
    {
      vehicle: "Vehicle A 3GCUKREC9FG19",
      percentage: 45,
      hours: 5,
      color: "bg-green-700",
      textCol: "text-green-700" 
    },
    {
      
      vehicle: "Vehicle B 4T1BK36B06U19",
      percentage: 66,
      hours: 15,
      color: "bg-green-700",
      textCol: "text-green-700" 
    },
    {
      
      vehicle: "Vehicle C JHMBB6157WC05",
      percentage: 6,
      hours: 20,
      color: "bg-green-700",
      textCol: "text-green-700" 
    },
    {
      
      vehicle: "Vehicle D JHLRM4H71CC05",
      percentage: 10,
      hours: 2,
      color: "bg-red-700",
      textCol: "text-red-700" 
    },
    {
      
      vehicle: "Vehicle E 3GYFNBE34FS59",
      percentage: 63,
      hours: 5,
      color: "bg-green-700",
      textCol: "text-green-700" 
    },
    {
      
      vehicle: "Vehicle F 1FAFP40411F",
      percentage: 70,
      hours: 5,
      color: "bg-purple-700",
      textCol: "text-purple-700" 
    },
    {
      
      vehicle: "Vehicle G 4TASN92XZ",
      percentage: 18,
      hours: 5,
      color: "bg-green-700",
      textCol: "text-green-700" 
    },
 
    
  ]



 let bars2 = [    {
      
  vehicle: "Vehicle H 2C8GP54L25",
  percentage: 23,
  hours: 12,
  color: "bg-green-700",
  textCol: "text-green-700" 
},
{
  
  vehicle: "Vehicle I 1GCHC23192F2",
  percentage: 40,
  hours: 45,
  color: "bg-purple-700",
  textCol: "text-purple-700" 
},
{
  
  vehicle: "Vehicle J 1N6AD07U08C4",
  percentage: 45,
  hours: 7,
  color: "bg-red-700",
  textCol: "text-red-700" 
},
{
  
  vehicle: "Vehicle K 1N6AD07U08C4",
  percentage: 20,
  hours: 3,
  color: "bg-green-700",
  textCol: "text-green-700" 
},
{
  
  vehicle: "Vehicle L 1N6AD07U08C4",
  percentage: 15,
  hours: 23,
  color: "bg-green-700",
  textCol: "text-green-700" 
},
{
  
  vehicle: "Vehicle M 1N6AD07U08C4",
  percentage: 65,
  hours: 17,
  color: "bg-purple-700",
  textCol: "text-purple-700" 
},
{
  
  vehicle: "Vehicle N 1N6AD07U08C4",
  percentage: 25,
  hours: 17,
  color: "bg-red-700",
  textCol: "text-red-700" 
},

 ]








  return (
    <div className=' bg-gray-300 flex justify-center'>
     <div className={`w-full p-12 px-20 ${changeBar ? "hidden" : "block"}`} > 


    <div className="animate-fade-down animate-duration-[1000ms]">
    <div className='text-5xl font-bold mb-5'>Live Production Status</div>
    {bars1.map((item) =>  <Link to="/adminprocesses" className='no-underline'><div className='h-16 mb-8  flex' style={{width: '60rem;'}} > <p className='p-2 text-2xl mr-2 w-60 text-black'> {item.vehicle}  </p>  <div className={`h-16 ${item.color} bg-gradient`} style={{width: `${item.percentage}%`}}>      </div><div>  <div className='flex ml-3 mt-2'>  <p className={`text-3xl ml-4 font-bold h-16 `}> {item.percentage}% </p>  <p className={`text-3xl ml-4 font-bold h-16 ${item.textCol} `}> {item.hours}h  </p> </div>    </div> </div></Link>)}
    </div>


    </div>



        <div> 




        </div>







        <div className={`w-full p-12 px-20 ${changeBar ? "block" : "hidden"}`} > 


<div className="animate-fade-down animate-duration-[1000ms]">
<div className='text-5xl font-bold mb-5'>Live Production Status</div>
{bars2.map((item) =>  <Link className='no-underline' to="/processes"><div className='h-16 mb-8  flex' style={{width: '60rem;'}} > <p className='p-2 text-2xl w-60  mr-2 text-black'> {item.vehicle}  </p>  <div className={`h-16 ${item.color} bg-gradient `} style={{width: `${item.percentage}%`}}>      </div><div>  <div className='flex ml-3 mt-2'> <p className='text-3xl ml-3 font-bold'> {item.percentage}% </p>  <p className={`text-3xl ml-4 font-bold h-16 ${item.textCol} `}> {item.hours}h  </p> </div>    </div> </div></Link>)}
</div>


</div>



    <div> 




    </div>


    </div>
  )
}

export default Performance
