import React from "react";
import Footer from "../../componentes//footer";
import Headers from "../../componentes/Headers";
import Products from "../../componentes/Products";
import ShoppingCart from "../../componentes/ShoppingCart";

// import {useAuth} from "../../context/authContext";
// import { useNavigate } from "react-router-dom";

// import RegisterAdmin from "../registerAdmin";

const Home = () => {

// const {isLoginFunAsync } = useAuth()
// const navigate=  useNavigate ()
// const {logout } = useAuth()
// const handleLogout = async ()=>{
//   // await logout()
//   navigate("/login")
// }
  return (
    <div>
      <Headers/>
      <ShoppingCart />
      <Products/>
      <Footer/>
    </div>
  );
};

export default Home;
