import React, {  useReducer } from "react";
import { productsOnReducer, productsOnItialState } from "./shoppingCartReducer";
import {
  StateProductContext,
  DispatchProductContext,
} from "../context/productsContext";



const ShoppingCartProvider = ({ children }) => {
  const [productsOn, dispatch] = useReducer(
    productsOnReducer,
    productsOnItialState
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
