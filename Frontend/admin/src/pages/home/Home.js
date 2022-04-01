import React from "react";
import Headers from "../../components/Headers";
import {useAuth} from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer";
import Products from "../../components/Products";
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
      <Products />
      <Footer/>
    </div>
  );
};

export default Home;
