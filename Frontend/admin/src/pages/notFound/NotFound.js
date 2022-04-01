import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineSmsFailed, MdTravelExplore } from "react-icons/md";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="grid justify-items-center max-w-xs m-auto w-full text-center">
        <MdOutlineSmsFailed className="w-48 text-2xl text-white h-20" />
        <p className="w-48 text-2xl text-white h-20"> not foud</p>
        <MdTravelExplore className="w-48 text-2xl text-white h-20" />

        <button
          className=" bg-blue-900 hover:bg-blue-700 text-white font-bold my-10 py-1 px-4 rounded focus:shadow-outline shadow-2xl"
          onClick={() => navigate(`/home`)}
        >
          go home
        </button>
      </div>
    </div>
  );
};
// w-full max-w-xs m-auto
export default NotFound;
