import React from "react";
import Headers from "../../components/Headers";
import {useAuth} from "../../context/authContext";
import { useNavigate } from "react-router-dom";
// import RegisterAdmin from "../registerAdmin";

const Home = () => {

// const {isLoginFunAsync } = useAuth()
const navigate=  useNavigate ()
const {logout } = useAuth()
const handleLogout = async ()=>{
  await logout()
  navigate("/login")
}
  return (
    <div>
      <Headers />
      <h1> welcome </h1>
    </div>
  );
};

export default Home;
