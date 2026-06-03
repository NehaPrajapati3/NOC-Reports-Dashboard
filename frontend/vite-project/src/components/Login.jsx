import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import useVerifyAuth from "../hooks/useVerifyAuth.jsx";
import { RadioGroup } from "./ui/radio-group";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [shouldVerify, setShouldVerify] = useState(false);
  const dispatch = useDispatch();
   const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

 

  const onSubmitHandler = async (e) => {
    e.preventDefault();
     console.log("user", user);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/users/login`,
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );
      navigate("/");
      console.log(res);
     dispatch(login({ userData: res.data.userData }));
     setShouldVerify(true);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    setUser({
      username: "",
      password: "",
      
    });
  };

  useVerifyAuth(shouldVerify);
  console.log("Login useverify");

  return (
    <div>
      <div className=" flex justify-center items-center h-screen w-screen">
        <div className="p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
          <h1 className="text-3xl font-bold text-center p-2">Login</h1>
          <form onSubmit={onSubmitHandler} action="">
            <div>
              <label className="label p-2">
                <span className="text-base label-text">User Name</span>
              </label>
              <input
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                className="w-full input input-bordered border border-slate-700 rounded-md h-10"
                type="text"
                placeholder="User Name"
              />
            </div>
            <div>
              <label className="label p-2">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                className="w-full input input-bordered border border-slate-700 rounded-md h-10"
                type="password"
                placeholder="Password"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="btn btn-block btn-sm mt-2 p-1 px-3  hover:bg-blue-500 hover:text-cyan-50 bg-blue-400 transition-all border rounded-md border-slate-700"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
