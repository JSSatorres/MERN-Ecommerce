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
  // const { isLoginUser } = useAuth();

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
    <div className="h-screen flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="w-full max-w-xs m-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 py-6"
        >
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-800">
              {" "}
              Email
            </label>
            <input
              className="shadow appearance-none border rounded my-2"
              type="email"
              name="email"
              placeholder="Insert email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-800">
              {" "}
              Password
            </label>
            <input
              className="shadow appearance-none border rounded my-2"
              type="password"
              name="password"
              placeholder="Insert password"
              onChange={handleChange}
            />
          </div>
          <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:shadow-outline">
            {" "}
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginAdmin;
