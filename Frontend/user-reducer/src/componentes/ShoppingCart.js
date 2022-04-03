import React, { useReducer } from "react";
import {
  productsOnItialState,
  productsOnReducer,
} from "../shoppingCart.Provider/shoppingCartReducer";
import ItemProducts from "./ItemProducts";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(
    productsOnReducer,
    productsOnItialState
  );

  const{products,cart}= state

  return (
  <div>
    <ItemProducts/>
  </div>
  )
};

export default ShoppingCart;
