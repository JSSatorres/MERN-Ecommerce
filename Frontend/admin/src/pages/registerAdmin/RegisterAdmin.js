import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";


const RegisterAdmin = () => {
  const [error, setError] = useState()  
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("joder");
    try {
      await signUp(user.email, user.password);
      navigate("/home");
    } catch (error) {
     setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email"> Email</label>
      <input
        type="email"
        name="email"
        placeholder="Insert email"
        onChange={handleChange}
      />

      <label htmlFor="password"> Password</label>
      <input
        type="password"
        name="password"
        placeholder="Insert password"
        onChange={handleChange}
      />

      <button> Register</button>
    </form>
  );
};

export default RegisterAdmin;
