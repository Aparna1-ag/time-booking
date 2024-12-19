import React from 'react'

const vendors = () => {



    const vendors = [
        {
        name: "vendor ABC",

        activeStatus: "working",
        activeStatusColor: "bg-green-400",
        vehicles: [
            {name: "Vehicle K",
                vin: "BHAHDKL12LPHO",
                process: "Hydraulics",
                totalLogs: "14 hours",
                lastlogs: [
                    {
                        date: "21st December 2024",
                        startTime: "7:00 AM",
                        EndTime: "02:30 PM",
                        period: "7 hours 30 minutes",



                    },
                    {
                        date: "19th December 2024",
                        startTime: "9:15 AM",
                        EndTime: "04:00 PM",
                        period: "6 hours 15 minutes",



                    },


                ]


            },
          
        ],},
        {
            name: "vendor XYZ",
    
            activeStatus: "working",
            activeStatusColor: "bg-green-400",
            vehicles: [
                {name: "Vehicle M",
                    vin: "MLKHDKL41LKHP",
                    process: "Hydraulics",
                    totalLogs: "7 hours",
                    lastlogs: [
                        {
                            date: "19th December 2024",
                            startTime: "7:00 AM",
                            EndTime: "02:30 PM",
                            period: "7 hours 30 minutes",
    
    
    
                        },
                        {
                            date: "11th December 2024",
                            startTime: "9:15 AM",
                            EndTime: "04:00 PM",
                            period: "6 hours 15 minutes",
    
    
    
                        },
    
    
                    ]
    
    
                },
              
            ],},
            {
                name: "vendor PQR",
        
                activeStatus: "not working",
                activeStatusColor: "bg-orange-400",
                vehicles: [
                    {name: "Vehicle K",
                        vin: "UPA7546KSRWJ",
                        process: "Hydraulics",
                        totalLogs: "14 hours",
                        lastlogs: [
                            {
                                date: "21st December 2024",
                                startTime: "7:00 AM",
                                EndTime: "02:30 PM",
                                period: "7 hours 30 minutes",
        
        
        
                            },
                            {
                                date: "19th December 2024",
                                startTime: "9:15 AM",
                                EndTime: "04:00 PM",
                                period: "6 hours 15 minutes",
        
        
        
                            },
        
        
                        ]
        
        
                    },
                  
                ],},
                {
                    name: "vendor ABC",
            
                    activeStatus: "working",
                    activeStatusColor: "bg-green-400",
                    vehicles: [
                        {name: "Vehicle K",
                            vin: "BHAHDKL12LPHO",
                            process: "Hydraulics",
                            totalLogs: "7 hours",
                            lastlogs: [
                                {
                                    date: "21st December 2024",
                                    startTime: "7:00 AM",
                                    EndTime: "02:30 PM",
                                    period: "7 hours 30 minutes",
            
            
            
                                },
                                {
                                    date: "19th December 2024",
                                    startTime: "9:15 AM",
                                    EndTime: "04:00 PM",
                                    period: "6 hours 15 minutes",
            
            
            
                                },
            
            
                            ]
            
            
                        },
                      
                    ],}




 

    ]



  return (
    <div className='w-screen h-screen bg-gray-200'>
        {vendors.map((item)   => <div className='card'>
            <p>  {item.name} </p>
            <p className='font-bold text-2xl'>  Vehciles: </p>
            <p>Vehicle name:  {item.name} </p>
            <p>VIN:  {item.vehicles.vin} </p>
            <p>In Process:  {item.vehicles.name} </p>
            <p>Last worked on/Active on: {item.vehicles.name} </p>
            <p>{item.vehicles.lastlogs.map(each) => <div>
                
                </div>}</p>
            </div>)}

      
    </div>
  )
}

export default vendors
