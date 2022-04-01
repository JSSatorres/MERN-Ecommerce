import React,{useState} from "react";
import useProducts from "../useHook/useProducts";
import { useNavigate, useParams } from "react-router-dom";




const EditProducts = () => {

  const navigate=  useNavigate ()
  const query = useProducts();
  const {id} = useParams();
  const hayYoQueSe = query.data

  console.log(id);
  console.log(hayYoQueSe);

  // setAllProducts= (hayYoQueSe)
  // console.log(allProducts);


  // const productToEdit= hayYoQueSe.filter((el)=> el.title === "Picachu")
//  console.log(productToEdit);
  

  return (
    <div className="text-center my-4 mx-10 shadow-lg hover:shadow-xl rounded-sm content-between">
      <div className="flex items-stretch">
        <div>
          <img
            width="400"
            height="200"
            className="w-5/6 mx-auto"
            // src={productToEdit.image.url}
          ></img>
        </div>
        <div className="self-end">
          <h4 className="text-2xl font-bold text-gray-500 group-hover:text-gray-700">
            {/* {productToEdit.title} */}
          </h4>
          <p className="text-sm font-semibold text-gray-500 group-hover:text-gray-700 mt-2 leading-6">
            {/* {productToEdit.description}  */}
          </p>
          <div className="flex justify-center">
            <button
              className=" bg-blue-900 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:shadow-outline shadow-2xl"
              onClick={() => navigate('/home')}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProducts;
