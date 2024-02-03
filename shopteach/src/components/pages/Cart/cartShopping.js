import React from "react";
import CartEmty from "./cartEmty";
import { useAuth } from "../../../context/Context";
import CartProduct from "./cartProduct";
export default function CartShopping() {
  const { cartProduct } = useAuth();
  return <>
  {cartProduct.length  > 0 ? <CartProduct /> : <CartEmty />}  
  </>;
}
