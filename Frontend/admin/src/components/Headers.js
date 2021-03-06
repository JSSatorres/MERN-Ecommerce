import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Headers = () => {
  ''
  const user = null;
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async ()=>{
    await logout()
    navigate("/login")
  }

  return (
    <nav className="bg-indigo-500 py-4 text-white px-3 flow-root border-b-2 border-indigo-900">
      <Link className="hover:text-slate-900 mx-4 float-left" to="/home">
        Home
      </Link>
      <Link className="hover:text-slate-900 mx-4 float-left" to="/newproduct">
        New Product
      </Link>
      {user ? (
        <Link className="hover:text-slate-900 mx-4 float-right" to="/login">
          login
        </Link>
      ) : (
        <button onClick={handleLogout}className="hover:text-slate-900 mx-4 float-right">
          LogOut
        </button>
      )}
    </nav>
  );
};

export default Headers;
