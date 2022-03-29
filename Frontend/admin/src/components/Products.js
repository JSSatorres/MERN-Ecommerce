import React from "react";
// import { useQuery } from "react-query";
import {getProductsRequest} from "../api/listProducts"


const productsll = async() =>{
  const res = await getProductsRequest ();
  console.log(res);
}

const Products = () => {

  // const query = useQuery ("products",)

  console.log(productsll);
  return (
    <div>
      <h1>Products</h1>
      {productsll.map((item) => (
        <div key={item.id}> {item.title}</div>
      ))}
    </div>
  );
};

export default Products;
