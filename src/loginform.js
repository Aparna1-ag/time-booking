import React from "react";
import { Link } from "react-router-dom";

const Loginform = () => {

  let currentSession = ""
  return (
    <div className="w-screen h-screen flex justify-center bg-gradient-to-b from-white to bg-slate-200 items-center ">
      <div className="bg-white p-5 w-1/3 h-96 flex justify-content-end shadow-lg">
        <div className="w-full h-full  flex justify-center items-center text-lg">
          <div className="w-full">
            <div className="form-group ">
              <p className="font-bold capitalize text-xl text-purple-700">
                USER LOGIN
              </p>
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>

            <div className="flex justify-center">
              <div>
                <button
                  type=""
                  onClick={() => {currentSession = "admin"}}
                  className="btn btn-success  bg-gradient mt-4 text-white"
                  style={{
                    background: "",
                    border: "2px solid green",
                    width: "16rem",
                    height: "3rem",
                  }}
                >
                  {" "}
                  <Link
                    to="/admindashboard"
                    className="text-white no-underline font-semibold"
                  >
                    {" "}
                    Admin Login{" "}
                  </Link>{" "}
                </button>

                <br />

                <button
                  type=""
                  className="btn   bg-gradient mt-3 text-white"
                  style={{
                    background: "#00679E",
                    border: "2px solid #0a5e8b",
                    width: "16rem",
                    height: "3rem",
                  }}
                >
                  {" "}
                  <Link
                    to="/vehicles"
                    className="text-white no-underline font-semibold"
                  >
                    {" "}
                    Production Login{" "}
                  </Link>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginform;
