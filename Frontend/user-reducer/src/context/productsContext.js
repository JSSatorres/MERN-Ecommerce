import { createContext } from "react";

export const StateProductContext = createContext({
  id: "product.id",
  title: "product.title",
  img: "product.img",
  price: "product.price",
  unitsInStock: "product.unitsInStock",
  createdAt: "product.createdAt",
  updatedAt: "product.updatedAt",
  quantity: "product.quantity + 1",
});

export const DispatchProductContext = createContext(() => {});
