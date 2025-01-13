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
      vehicle: "Vehicle A",
      vin: "3GCUKREC9FG19",
      percentage: 45,
      hours: 5,
      color: "bg-green-700",
      textCol: "text-green-700" 
    },
    {
      
      vehicle: "Vehicle B",
      vin: "3GCUKREC9FG19",
      percentage: 66,
      hours: 15,
      color: "bg-green-700",
      textCol: "text-green-700" 
    },
    {
      
      vehicle: "Vehicle C",
      vin: "3GCUKREC9FG19",
      percentage: 6,
      hours: 20,
      color: "bg-green-700",
      textCol: "text-green-700" 
    },
    {
      
      vehicle: "Vehicle D",
      vin: "3GCUKREC9FG19",
      percentage: 10,
      hours: 2,
      color: "bg-red-700",
      textCol: "text-red-700" 
    },
    {
      
      vehicle: "Vehicle E",
      vin: "3GCUKREC9FG19",
      percentage: 63,
      hours: 5,
      color: "bg-green-700",
      textCol: "text-green-700" 
    },
    {
      
      vehicle: "Vehicle F",
      vin: "3GCUKREC9FG19",
      percentage: 70,
      hours: 5,
      color: "bg-purple-700",
      textCol: "text-purple-700" 
    },
    {
      
      vehicle: "Vehicle G",
      vin: "3GCUKREC9FG19",
      percentage: 18,
      hours: 5,
      color: "bg-green-700",
      textCol: "text-green-700" 
    },
    {
  
      vehicle: "Vehicle O",
      vin: "3GCUKREC9FG19",
      percentage: 63,
      hours: 5,
      color: "bg-green-700",
      textCol: "text-green-700" 
    },
    {
      
      vehicle: "Vehicle P",
      vin: "3GCUKREC9FG19",
      percentage: 70,
      hours: 5,
      color: "bg-purple-700",
      textCol: "text-purple-700" 
    },
    {
      
      vehicle: "Vehicle Q",
      vin: "3GCUKREC9FG19",
      percentage: 18,
      hours: 5,
      color: "bg-green-700",
      textCol: "text-green-700" 
    },
    {
  
      vehicle: "Vehicle R",
      vin: "3GCUKREC9FG19",
      percentage: 63,
      hours: 5,
      color: "bg-red-700",
      textCol: "text-red-700" 
    },
    {
  
      vehicle: "Vehicle D",
      vin: "2C8GP54L25B779",
      percentage: 10,
      hours: 2,
      color: "bg-red-700",
      textCol: "text-red-700" 
    },
   
 
    
  ]



 let bars2 = [    {
      
  vehicle: "Vehicle H",
  vin: "2C8GP54L25B779",
  percentage: 23,
  hours: 12,
  color: "bg-green-700",
  textCol: "text-green-700" 
},
{
  
  vehicle: "Vehicle I",
  vin: "2C8GP54L25B779",
  percentage: 40,
  hours: 45,
  color: "bg-purple-700",
  textCol: "text-purple-700" 
},
{
  
  vehicle: "Vehicle J",
  vin: "2C8GP54L25B779",
  percentage: 45,
  hours: 7,
  color: "bg-red-700",
  textCol: "text-red-700" 
},
{
  
  vehicle: "Vehicle K",
  vin: "2C8GP54L25B779",
  percentage: 20,
  hours: 3,
  color: "bg-green-700",
  textCol: "text-green-700" 
},
{
  
  vehicle: "Vehicle L",
  vin: "2C8GP54L25B779",
  percentage: 15,
  hours: 23,
  color: "bg-green-700",
  textCol: "text-green-700" 
},
{
  
  vehicle: "Vehicle M",
  vin: "2C8GP54L25B779",
  percentage: 65,
  hours: 17,
  color: "bg-purple-700",
  textCol: "text-purple-700" 
},
{
  
  vehicle: "Vehicle N",
  vin: "2C8GP54L25B779",
  percentage: 25,
  hours: 17,
  color: "bg-red-700",
  textCol: "text-red-700" 
},

{
  vehicle: "Vehicle A",
  vin: "2C8GP54L25B779",
  percentage: 45,
  hours: 5,
  color: "bg-green-700",
  textCol: "text-green-700" 
},
{
  
  vehicle: "Vehicle B",
  vin: "2C8GP54L25B779",
  percentage: 66,
  hours: 15,
  color: "bg-green-700",
  textCol: "text-green-700" 
},
{
  
  vehicle: "Vehicle C",
  vin: "2C8GP54L25B779",
  percentage: 6,
  hours: 20,
  color: "bg-green-700",
  textCol: "text-green-700" 
},
{
      
  vehicle: "Vehicle F",
  vin: "3GCUKREC9FG19",
  percentage: 70,
  hours: 5,
  color: "bg-purple-700",
  textCol: "text-purple-700" 
},
{
  
  vehicle: "Vehicle D",
  vin: "2C8GP54L25B779",
  percentage: 10,
  hours: 2,
  color: "bg-red-700",
  textCol: "text-red-700" 
},



 ]








  return (
    <div className=' bg-white flex justify-center'>
     <div className={`w-full py-3 px-20 ${changeBar ? "hidden" : "block"}`} > 


    <div className="animate-fade-down animate-duration-[1000ms]">
    <div className='text-4xl font-bold mb-5'>Live Production Status</div>
    {bars1.map((item) =>  <Link to="/adminprocesses" className='no-underline'><div className='h-10 mb-2 mt-3  flex' style={{width: '60rem;'}} > <p className='px-2 text-lg mr-2 w-32 text-black font-bold leading-none'> {item.vehicle}  <br/> <span className='text-sm font-normal mb-2 '>{item.vin} </span>  </p>  <div className={`h-10 ${item.color} bg-gradient`} style={{width: `${item.percentage}%`}}>      </div><div>  <div className='flex ml-3 mt-2'>  <p className={`text-3xl ml-4 font-bold h-16 `}> {item.percentage}% </p>  <p className={`text-3xl ml-4 font-bold h-16 ${item.textCol} `}> {item.hours}h  </p> </div>    </div> </div></Link>)}
    </div>


    </div>



        <div> 




        </div>







        <div className={`w-full py-3 px-20 ${changeBar ? "block" : "hidden"}`} > 


<div className="animate-fade-down animate-duration-[1000ms]">
<div className='text-4xl font-bold mb-5'>Live Production Status</div>
{bars2.map((item) =>  <Link to="/adminprocesses" className='no-underline'><div className='h-10 mb-2 mt-3  flex' style={{width: '60rem;'}} > <p className='px-2 text-lg mr-2 w-32 text-black font-bold leading-none'> {item.vehicle}  <br/> <span className='text-sm font-normal mb-2 '>{item.vin} </span>  </p>  <div className={`h-10 ${item.color} bg-gradient`} style={{width: `${item.percentage}%`}}>      </div><div>  <div className='flex ml-3 mt-2'>  <p className={`text-3xl ml-4 font-bold h-16 `}> {item.percentage}% </p>  <p className={`text-3xl ml-4 font-bold h-16 ${item.textCol} `}> {item.hours}h  </p> </div>    </div> </div></Link>)}
</div>


</div>



    <div> 




    </div>


    </div>
  )
}

export default Performance
