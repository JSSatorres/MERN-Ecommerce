import React from "react";
import useProducts from "../useHook/useProducts";
import ItemProducts from "./ItemProducts";

const Products = () => {
  const query = useProducts();
  if (query.isLoading) {
    return <div>is loading</div>;
  }

  if (query.isError) {
    return <div>Erro loading: {query.error?.message}</div>;
  }
  console.log(query.data);

  return (
    <>
    
      <div className="grid grid-cols-3 gap-2">
        {query.data.map((item) => (
          <ItemProducts key={item._id} item={item} />
        ))}
      </div>
      <div className="flex justify-center">
        <button
          className=" bg-blue-900 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:shadow-outline shadow-2xl"
          onClick={query.refetch}
        >
          Refresh{" "}
        </button>
      </div>
    </>
  );
};

export default Products;
