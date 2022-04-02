import React from "react";

import ItemProducts from "./ItemProducts";

const Products = () => {
 
  return (
    <>
      <div className="">
        {/* {query.data.map((item) => (
          <ItemProducts key={item._id} item={item} />
        ))} */}
        <ItemProducts/>
      </div>
      <div className="">
        <button
          className=" "
          // onClick={query.refetch}
        >
          Refresh{" "}
        </button>
      </div>
    </>
  );
};

export default Products;
