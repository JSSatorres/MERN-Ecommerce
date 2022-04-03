import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ItemProducts = ({ item }) => {
  const [contador, setContador] = useState(0)


  const handleAddToCart=()=>{
    setContador(contador=>contador+1)
    console.log(contador);
  }
  console.log(item);
  if (!item) {
    return <div>is loading</div>;
  }
  return (
    <div className="">
      <div className="">
        <div>
          {contador}
        </div>
        <img
          width="400"
          height="200"
          className="w-5/6 mx-auto"
          src={item.image.url}
          alt={item.title}
        ></img>
        <div className="">
          <h4 className="">{item?.title}</h4>
          <p className="">{item?.description}</p>
          <div className="">
            <button className="" onClick={ handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemProducts;
