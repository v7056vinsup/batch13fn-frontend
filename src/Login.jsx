import React, { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://batch13fn-backend.vercel.app/user/login", formData);
      console.log(response.data);
      localStorage.setItem("user", JSON.stringify(response.data.user._id));

      setFormData({
        email: "",
        password: "",
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />

        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
        <button type="submit">Submit</button>
      </form>


    </div>
  );
};

export default Register;