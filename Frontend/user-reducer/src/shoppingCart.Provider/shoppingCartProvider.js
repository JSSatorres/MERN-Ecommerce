import React, {  useReducer } from "react";
import { productsReducer, ProductsInitialState } from "./shoppingCartReducer";
import {
  StateProductContext,
  DispatchProductContext,
} from "../context/productsContext";



const ShoppingCartProvider = ({ children }) => {
  const [productsOn, dispatch] = useReducer(
    productsReducer,
    ProductsInitialState
  );
  return (
    <StateProductContext.Provider value={{ productsOn }}>
      <DispatchProductContext value={{ dispatch }}>
        {children}
      </DispatchProductContext>
    </StateProductContext.Provider>
  );
};

export default ShoppingCartProvider;
