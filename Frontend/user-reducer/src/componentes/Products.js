import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemProducts from "./ItemProducts";

const Products = () => {
  const [products, setProducts] = useState([]);

  // const listProducts = async() =>{
  //     const AllProducts = await axios.get("http://localhost:4000/products")
  //     .then(res=>  res.data)
  //     .then((res)=>res.json)
  //     return AllProducts
  // }

  const listProducts = async () => {
    try {
      const resProducts = await axios.get("http://localhost:4000/products");
      return resProducts;
    } catch (error) {
      console.log(error);
    }
  };
  listProducts();

  useEffect(() => {
    const getProducts = async () => {
      const resProducts = await axios.get("http://localhost:4000/products");
      setProducts(resProducts.data);
      return products;
    };
    getProducts();
  }, []);
  return (
    <>
      <div className="">
        {products.map((item) => (
          <ItemProducts key={item._id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Products;
