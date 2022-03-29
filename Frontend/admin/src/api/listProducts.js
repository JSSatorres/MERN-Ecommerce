

export const getProductsRequest = async ()=> { 
const response = await fetch("http://localhost:4000/products")
  // .then((response) => response.json())
  // .then((res)=> return response.json())
  // .then((data) => console.log(data));
  // console.log(response);
  return response.json()
}


// import  { useEffect } from "react";

// export const getProductsRequest = async () => {
//   useEffect(() => {
//     fetch("http://localhost:4000/products")
//       .then((response) => response.json())
//       .then((data) => console.log(data));
//   }, []);
// };
