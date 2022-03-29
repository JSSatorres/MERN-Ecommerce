import React from "react";
import { useQuery } from "react-query";
import { getProductsRequest } from "../api/listProducts";

const Products = () => {
  const query = useQuery("products", getProductsRequest);
  if (query.isLoading) {
    return <div>is loading</div>;
  }

  if (query.isError) {
    return <div>Erro loading: {query.error?.message}</div>;
  }
  console.log(query.data);

  return (
    <>
      <ul>
        {query.data.map((item) => (
          <li key={item._id}> {item.title} </li>
        ))}
      </ul>
      <button onClick={query.refetch}>Refresh </button>
    </>
  );
};

export default Products;
