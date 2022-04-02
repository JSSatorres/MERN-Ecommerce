import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Headers = () => {
  const user = null;
  const navigate = useNavigate();


  const handleLogout = async ()=>{
    // await logout()
    navigate("/login")
  }

  return (
    <nav className="">
      <Link className="" to="/home">
        Home
      </Link>
      <Link className="" to="/newproduct">
        New Product
      </Link>
      {user ? (
        <Link className="" to="/login">
          login
        </Link>
      ) : (
        <button onClick={handleLogout}className="">
          LogOut
        </button>
      )}
    </nav>
  );
};

export default Headers;
