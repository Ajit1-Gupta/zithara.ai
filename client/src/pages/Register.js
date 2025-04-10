

import React, { useState } from "react";
import {Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import './Register.css'

const Register = () => {
  
  const navigate = useNavigate();
 
  // states
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //register ctrl
  const handleSubmit = async (e) => {
    toast.success("Registered successfully")
    navigate("/login");
          
      
   
    e.preventDefault();
    try {
      await axios.post("https://zithara-ai-backend.onrender.com", { username, email, password });
      toast.success("User Register Successfully");
      
    } catch (err) {
      console.log(error);
      if (err.response.data.error) {
       setError(err.response.data.error); 
      } else if (err.message) {
        setError(err.message);
      }
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="register-box">
       
       <div>{error}</div>
      <form onSubmit={handleSubmit}  className="form-box">

        <div className="sing-up">Sign Up</div>

        <div className="input-box">

        <input
          label="username"
          placeholder="enter username"
          required
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <input
          label="email"
          type="email"
          placeholder="enter email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <input
          label="password"
          type="password"
            placeholder="enter password"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        </div>

      <div className="submit-btn">  <button type="submit"> Register </button></div>
          

        <div className="already-account">
          Already have an account ? <Link to="/login"><div className="login-redirect">Please Login</div></Link>
        </div>

      </form>

    </div>
  );
};

export default Register;







