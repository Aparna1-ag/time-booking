import React from 'react'
import Navbar from './navbar'
import { useNavigate } from 'react-router-dom'

const VehicleList = () => {

    const navigate = useNavigate()


  return (
    <div className=' '>
        <Navbar />
        <div className='p-4 '>

        <button onClick={() => (navigate(-1))} className=' mb-6 btn- btn-sm btn-secondary bg-gradient'> <i class="fa-solid fa-arrow-left mr-1 text-light"></i> Back </button>

<h3 className='mb-10'>All Vehicles</h3>



  <div className="table-container mx-auto "  style={{width: "98%"}}>
            <table className="table text-center table-sm vehicle-list-table " >


                <thead className="fixedheader "  >
                    <tr className=" align-middle  text-center bg-gradient font-normal fixedheader"
                        style={{height: "2.9rem"}}>
                        <th width="" className="fixedheader align-middle font-normal  text-center">
                           Vehicle Name</th>
                        <th width="" class="fixedheader align-middle font-normal text-center">
                            VIN</th>

                        <th width="" class="fixedheader align-middle font-normal text-center">
                            Processes</th>
                       

                        <th width="" class="fixedheader align-middle font-normal text-center">
                            Employees</th>

                            <th width=""  class="fixedheader align-middle font-normal text-center">
                             Status</th>
                            <th width=""  class="fixedheader align-middle font-normal text-center">
                            Total Hrs</th>
                            <th width=""  class="fixedheader align-middle font-normal text-center">
                            Hrs Worked</th>
                            <th width=""  class="fixedheader align-middle font-normal text-center">
                            Progress</th>
                      
                        <th width=""  class="fixedheader align-middle font-normal text-center">
                            Actions</th>
                    </tr>


                </thead>

                <tbody style={{background: "rgb(245, 245, 245)" }} > 


                   

                       


                        <tr className=''>
                            <td>Vehicle A</td>
                            <td>2C8GP54L25B779</td>
                            <td>
                                <p>Mechanical Installation </p>
                                <p>Electrical Installation</p>
                                <p>Hydraulics</p>
                                <p>Assembling</p>
                            </td>
                            <td> <p>John Doe</p>
                                <p>Emily White</p>
                                <p>Chris Ethans</p>
                                <p>George</p>
                                </td>
                                <td><div class="badge bg-warning text-dark">Not Started</div></td>
    <td>40</td>
    <td>0</td>
    <td>0%</td>
                                <td className="text-center align-middle my-0 py-0">





<div className='flex justify-center'>

<button className=" btn-sm edit-btn bg-gradient rounded-sm w-20 " > <i class="fa-solid fa-pen-to-square mr-1"></i> Edit</button>




<button className=" btn-sm delete-btn bg-gradient rounded-sm w-20 ml-3" > <i class="fa-solid fa-trash mr-1"></i> Delete</button>
</div>
</td>
                       




                        </tr>



                        <tr className=''>
                            <td>Vehicle B</td>
                            <td>2C8GP54L546779</td>
                            <td>
                                <p>Mechanical Installation </p>
                                <p>Electrical Installation</p>
                                <p>Miscellaneous</p>
                                <p>Painting</p>
                            </td>
                            <td>
                            <p>Alice Brown</p>
<p>Michael Smith</p>
<p>Sarah Johnson</p>
<p>David</p>
</td>
<td><div class="badge bg-primary">In Progress</div></td>
    <td>50</td>
    <td>20</td>
    <td>40%</td>
                                <td className="text-center align-middle my-0 py-0">





<div className='flex justify-center'>

<button className=" btn-sm edit-btn bg-gradient rounded-sm w-20 " > <i class="fa-solid fa-pen-to-square mr-1"></i> Edit</button>




<button className=" btn-sm delete-btn bg-gradient rounded-sm w-20 ml-3" > <i class="fa-solid fa-trash mr-1"></i> Delete</button>
</div>
</td>
                       




                        </tr>

                        <tr className=''>
                            <td>Vehicle C</td>
                            <td>2C8GP54L546779</td>
                            <td>
                                <p>Mechanical Installation </p>
                                <p>Electrical Installation</p>
                                <p>Miscellaneous</p>
                                <p>Painting</p>
                            </td>
                            <td>
                            <p>Alice Brown</p>
<p>Michael Smith</p>
<p>Sarah Johnson</p>
<p>David</p>
</td>
<td><div class="badge bg-success">Completed</div></td>
    <td>30</td>
    <td>30</td>
    <td>100%</td>
                                <td className="text-center align-middle my-0 py-0">





<div className='flex justify-center'>

<button className=" btn-sm edit-btn bg-gradient rounded-sm w-20 " > <i class="fa-solid fa-pen-to-square mr-1"></i> Edit</button>




<button className=" btn-sm delete-btn bg-gradient rounded-sm w-20 ml-3" > <i class="fa-solid fa-trash mr-1"></i> Delete</button>
</div>
</td>
                       




                        </tr>
                  

                </tbody>
            </table>
        </div>
     
        </div>
    </div>
  )
}

export default VehicleList
