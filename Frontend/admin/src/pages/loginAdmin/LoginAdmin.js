import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";


const LoginAdmin = () => {


  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();
  const { isLoginUser } = useAuth();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(user.email, user.password);
      console.log("login correcto");
      navigate("/home");
    } catch (error) {
      console.log(error);
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

      <button> Login</button>
    </form>
  );
};

export default LoginAdmin;


