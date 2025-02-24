import React from "react";
import { motion } from "framer-motion";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import vendorProcesses from "./vendorAccProcess";
import EmployeeNavbar from "./employeeNavbar";

const EmployeeProcess = () => {
  return (
    <div className=" w-screen  ">
      <EmployeeNavbar />
      <div className="px-16 pt-10">
        <div className="font-bold text-3xl"> Select Your Process </div>
        <div className=" text-2xl mb-10 ">
          {" "}
          Select the process you are starting/resuming work for{" "}
          <span className="font-bold " style={{color: '#00679F'}}>Vehicle A</span>
        </div>

        <div className="flex justify-center">
          <div>
            {vendorProcesses.map((item) => (
              <Link to="/individualProcess" className="no-underline">
                <motion.div
                  className="card shadow-2xl mt-5 hover:animate-jump"
                  style={{
                    width: "45rem",
                    height: "4.5rem",
                    border: "",
                    background:
                      "#00679F",
                  }}
                  variants={{
                    hidden: { opacity: 0, scale: 0.4 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{
                    type: "spring",
                    duration: 0.5,
                    delay: `${item.animateDelay}`,
                  }}
                  initial="hidden"
                  animate="visible"
                >
                 

                  <div className="card-body text-2xl no-underline flex justify-between">
                    <p className="text-white">{item.processName}</p>
                    <div className="flex">
                      <p className="text-2xl mr-8 text-blue-300">
                        {" "}
                        {item.percentCompleted}
                      </p>
                      <p className="text-2xl text-white">
                        {" "}
                        {item.hoursWorked}h
                      </p>
                    </div>
                  </div>

                
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProcess;
