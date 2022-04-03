import React from "react";
import { useNavigate } from "react-router-dom";

const ItemProducts = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="text-center my-4 mx-10 shadow-lg hover:shadow-xl rounded-sm content-between">
      <div className="flex items-stretch">
        <div>
          {item.image ? (
            <img
              width="400"
              height="200"
              className="w-5/6 mx-auto"
              src={item.image.url}
            ></img>
          ) : (
            <div> no hay fotico</div>
          )}
        </div>
        <div className="self-end">
          <h4 className="text-2xl font-bold text-gray-500 group-hover:text-gray-700">
            {item.title}
          </h4>
          <p className="text-sm font-semibold text-gray-500 group-hover:text-gray-700 mt-2 leading-6">
            {item.description}
          </p>
          <div className="flex justify-center">
            <button
              className=" bg-blue-900 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:shadow-outline shadow-2xl"
              onClick={() => navigate(`/editproduct/${item._id}`)}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemProducts;
