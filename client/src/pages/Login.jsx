import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  // states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //register ctrl
  const handleSubmit = async (e) => {
    navigate("/home");
    e.preventDefault();
    toast.success("Loggedin successfully");
    <NavLink to="/home" />;
    try {
      await axios.post("https://zithara-ai-backend.onrender.com", { email, password });
      toast.success("Login Successfully");
      localStorage.setItem("authToken", true);
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
    <div className="login-box">
      <div>{error}</div>

      <form onSubmit={handleSubmit} className="form-box">
        <div className="sing-up">Login</div>
        <div className="input-box">
          <input
            label="email"
            type="email"
            placeholder="enter email"
            required
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

        <div className="submit-btn">
          <button type="submit"> Login In </button>
        </div>

        <div>
          Dont have an account ?{" "}
          <Link to="/">
            <div className="login-redirect">Please Register</div>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
