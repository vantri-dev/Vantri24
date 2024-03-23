import React, { useEffect } from "react";
import { createContext, useContext } from "react";
import { useState } from "react";
import { auth } from "../firebase/firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

const AuthProvider = createContext();
export function useAuth() {
  return useContext(AuthProvider);
}
export function useProfile() {
  return useContext(useProfile);
}
export function Context({ children }) {
  //Auth
  const [currentUser, setcurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [, setError] = useState("");
  //Get FilterProduct
  const [filterProduct, setFilterProduct] = useState([]);
  //Get Change Img
  const [changeImage, setChangeImage] = useState(null);

  //Handle GetProduct Current
  const [productCurrent, setProductCurrent] = useState([]);
  //Get Handle Product
  const [deleteProduct, setDeleteProduct] = useState([]);
  //Cart Product
  const GetProductCart = JSON.parse(localStorage.getItem("productCart" || []));
  const [cartProduct, setCartProduct] = useState(
    GetProductCart !== null ? GetProductCart : []
  );
  //HandleGetProductId
  const [productId, setProductId] = useState([]);
  //Handle Get CheckOut
  const [checkOut, setCheckOut] = useState([]);
  //Get Price Product
  const [priceProduct, setPriceProduct] = useState(0);
  function signUp(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }
  function signIn(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  const hanldeSignOut = async () => {
    try {
      setError("");
      await auth.signOut();
    } catch (error) {
      setError("Fail To SignOut");
    }
  };
  function ForgotPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function handleLoginGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }
  function hanldeLoginFacebook() {
    const provider = new FacebookAuthProvider();
    return signInWithPopup(auth, provider);
  }
  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      setLoading(false);
      setcurrentUser(user);
    });
  }, []);
  //CountDown
  function CountDown() {
    const time = "Mar 09 2024 23:59:59";
    return time;
  }

  //Get Filter Product
  function getFilterProductContext(data) {
    setFilterProduct(data);
  }
  //Get Change Img
  function getChangeImage(data) {
    setChangeImage(data);
  }

  //Handle Product Current
  function handleProductCurrent(product) {
    setProductCurrent(product);
  }
  function getDeleteProduct(product) {
    setDeleteProduct(product);
  }
  function handleAddCart(product) {
    setCartProduct(product);
  }
  localStorage.setItem("productCart", JSON.stringify(cartProduct));
  //Get Delete Product
  function deleteProductCart(id) {
    const deleteCart = cartProduct.filter((item) => {
      return item.id !== id;
    });
    setCartProduct(deleteCart);
  }

  function handleGetProductId(product) {
    setProductId(product);
  }
  function handleCheckOut(data) {
    setCheckOut(data);
  }

  //Get Price Product
  function getPriceProduct(data) {
    setPriceProduct(data);
  }
  localStorage.setItem("checkOut1", JSON.stringify(checkOut));

  const value = {
    //Auth
    currentUser,
    signIn,
    signUp,
    hanldeSignOut,
    ForgotPassword,
    handleLoginGoogle,
    hanldeLoginFacebook,
    //CountDown
    CountDown,
    //Get filter
    getFilterProductContext,
    filterProduct,
    //Get Change Img
    getChangeImage,
    changeImage,

    //HandleProductCurrent
    handleProductCurrent,
    productCurrent,

    //Get Delete Product
    getDeleteProduct,
    deleteProduct,
    handleAddCart,
    cartProduct,
    //Get Id Cart
    deleteProductCart,
    //handleGetProductId
    handleGetProductId,
    productId,
    //handleCheckOut
    handleCheckOut,
    checkOut,
    //Price Product
    getPriceProduct,
    priceProduct,
  };
  return (
    <AuthProvider.Provider value={value}>
      {!loading && children}
    </AuthProvider.Provider>
  );
}
