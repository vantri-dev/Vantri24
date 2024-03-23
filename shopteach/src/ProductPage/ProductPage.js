/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import { BsCheckLg } from "react-icons/bs";
import { FaRegFaceSadTear } from "react-icons/fa6";
import ImageProduct from "./ImageProduct";
import { InformationProduct } from "./InformationProduct";
import { Link } from "react-router-dom";
import DealProduct from "./DealProduct";
import ShopProduct from "./ShopProduct";
import DetailProduct from "./DetailProduct";
import DescriptionProduct from "./DescriptionProduct";
import CommentPage from "./Comment/CommentPage";
import { useAuth } from "../context/Context";
import AddProduct from "./AddProduct";
export default function ProductPage() {
  const [productId, setProductId] = useState([]);
  const [products, setProducts] = useState([]);
  const { handleProductCurrent, handleAddCart ,handleGetProductId} = useAuth();
  const [hiddenSuccess, setHiddenSuccess] = useState(false);
  const [hiddenError, setHiddenError] = useState(false);

  const cartLocalStorage = JSON.parse(
    localStorage.getItem("productCart" || [])
  );
  const [productCart, setProductCart] = useState(cartLocalStorage);   
  const param = useParams();
  const idProduct = param.idProduct;
  useEffect(() => {
    const dataProducts = async () => {
      const repApi = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await repApi.json();
      setProducts(data);
    };
    dataProducts();
  }, []);

  const handleProductId = () => {
    const dataIdProduct = products.find(
      (product) => product.id === Number(idProduct)
    );
    if (dataIdProduct) {
      setProductId({ ...dataIdProduct });
    }
  };
  useEffect(() => {
    handleProductId();
    handleProductCurrent(productId);
  }, [products]);

  const AddProductCart = () => {
    try {
        const indexCart = productCart.find((item) => item.id === productId.id);
        if (productId.id >= 0) {
          const newProductCart = {
            ...productId,
          };
          handleGetProductId(newProductCart)
          if (indexCart) {
            const existingItem = productCart.map((item) => {
              if (item.id === productId.id) {
                return { ...newProductCart, quantity: 2 };
              } else {
                return item;
              } 
            });
            setProductCart(existingItem);
          } else {
            setProductCart([...productCart, { ...newProductCart, quantity: 1 }]);
          }
        setHiddenSuccess(true);
      } else {
        setHiddenError(true);
      }
    } catch (error) {
      console.log("Error al agregar el producto:", error);
    }
  };

  useEffect(() => {
    localStorage.setItem("productCart", JSON.stringify(productCart));
  }, [productCart]);

  useEffect(() => {
    const clear = setTimeout(() => {
      setHiddenSuccess(false);
      setHiddenError(false);
    }, 3500);
    handleAddCart(productCart);
    return () => clearTimeout(clear);
  });

  return (
    <div className=" bg-gray-100 ">
      <div className=" w-full pt-[10px]   px-[105px]">
        <div className=" flex items-center mb-2  ">
          <Link to="/">
            <span className="text-[0.9rem] text-slate-500">Trang chủ</span>
          </Link>
          <BsChevronRight className="text-[0.9rem] mt-[2px] text-slate-400" />
          <Link to="/practicalShipping">
            <span className="text-[0.9rem] ">Sản phẩm</span>
          </Link>
        </div>
        <div className=" grid grid-cols-3 bg-white ">
          <ImageProduct />
          <div className="col-span-2">
            <InformationProduct />
            <AddProduct AddProductCart={AddProductCart} />
            <div
              className={
                hiddenSuccess === true
                  ? " fixed  bg-zinc-700 opacity-[0.85]  top-[45%] left-[40%] w-[23%] py-7 rounded px-1 justify-center items-center flex flex-col"
                  : "hidden"
              }
            >
              <BsCheckLg className=" text-[1rem] text-white w-[40px] h-[40px] rounded-full bg-teal-400 mb-4" />
              <span className="text-white text-[1rem] w-full  text-center">
                Sản phẩm đã được thêm vào giỏ hàng
              </span>
            </div>
            <div
              className={
                hiddenError === true
                  ? " fixed  bg-zinc-700 opacity-[0.85]  top-[45%] left-[40%] w-[23%] py-7 rounded px-1 justify-center items-center flex flex-col"
                  : "hidden"
              }
            >
              <FaRegFaceSadTear className=" text-[1rem] text-red-600 w-[40px] h-[40px] rounded-full  mb-4" />
              <span className="text-white text-[1rem] w-full  text-center">
                Uiii có lỗi rồi bạn vui lòng tải lại trang...
              </span>
            </div>
            <div className=" ">
              <ul className="flex items-center justify-around mt-[3.1%]">
                <li className="flex items-center">
                  <img
                    alt=""
                    className="w-7 h-7 mx-1"
                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/6c502a2641457578b0d5f5153b53dd5d.png"
                  />
                  <span className="text-[1rem]  font-sans  font-medium">
                    7 Ngày trả hàng miễn phí
                  </span>
                </li>
                <li className="flex items-center">
                  <img
                    alt=""
                    className="w-7 h-7  mx-1"
                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/511aca04cc3ba9234ab0e4fcf20768a2.png"
                  />
                  <span className="text-[1rem]  font-sans  font-medium">
                    Hàng chính hãng 100%
                  </span>
                </li>
                <li className="flex items-center">
                  <img
                    alt=""
                    className="w-7 h-7  mx-1"
                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/16ead7e0a68c3cff9f32910e4be08122.png"
                  />
                  <span className="text-[1rem]  font-sans  font-medium">
                    Miễn phí vận chuyển
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <DealProduct />
      <div className="w-full mt-[10px]   bg-gray-100 px-[105px] ">
        <ShopProduct />
        <DetailProduct id={idProduct} />

        <DescriptionProduct productId={productId} />
        <CommentPage />
      </div>
    </div>
  );
}
