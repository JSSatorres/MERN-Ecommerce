import React, { useReducer } from "react";
import {
  shoppingCartInitialState,
  shoppingReducer,
} from "../shoppingCart.Provider/shoppingCartReducer";
import ItemProducts from "./ItemProducts";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(
    shoppingReducer,
    shoppingCartInitialState
  );

  const{products,cart}= state

  return (
  <div>
    <ItemProducts/>
  </div>
  )
};

export default ShoppingCart;
