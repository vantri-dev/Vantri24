import React from "react";
import CartEmty from "./cartEmty";
import { useAuth } from "../../../context/Context";
import CartProduct from "./cartProduct";
export default function CartShopping() {
  const { cartProduct, currentUser} = useAuth();
  return <>
  {cartProduct.length > 0 && currentUser ? <CartProduct /> : <CartEmty />}  
  </>;
}

