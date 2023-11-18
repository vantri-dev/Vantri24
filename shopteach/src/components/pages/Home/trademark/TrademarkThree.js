import React from "react";

export default function TrademarkThree() {
  const listProducts = [
    {
      nameProduct: "    Tai nghe Apple Airpods 3 2022 sạc lightning",
      imgProduct:
        "https://salt.tikicdn.com/cache/280x280/ts/product/2f/59/53/a251c24705b141eeb3df1bd7b3349620.jpg.webp",
      realprice: 145.0,
      currentprice: 45.0,
      percent: 60,
      sales: 2.2,
    },
    {
      nameProduct: "    Tai nghe Apple Airpods 3 2022 sạc lightning",
      imgProduct:
        "https://salt.tikicdn.com/cache/280x280/ts/product/2f/59/53/a251c24705b141eeb3df1bd7b3349620.jpg.webp",
      realprice: 145.0,
      currentprice: 45.0,
      percent: 60,
      sales: 2.2,
    },
    {
      nameProduct: "    Tai nghe Apple Airpods 3 2022 sạc lightning",
      imgProduct:
        "https://salt.tikicdn.com/cache/280x280/ts/product/2f/59/53/a251c24705b141eeb3df1bd7b3349620.jpg.webp",
      realprice: 145.0,
      currentprice: 45.0,
      percent: 60,
      sales: 2.2,
    },
    {
      nameProduct: "    Tai nghe Apple Airpods 3 2022 sạc lightning",
      imgProduct:
        "https://salt.tikicdn.com/cache/280x280/ts/product/2f/59/53/a251c24705b141eeb3df1bd7b3349620.jpg.webp",
      realprice: 145.0,
      currentprice: 45.0,
      percent: 60,
      sales: 2.2,
    },
    {
      nameProduct: "    Tai nghe Apple Airpods 3 2022 sạc lightning",
      imgProduct:
        "https://salt.tikicdn.com/cache/280x280/ts/product/2f/59/53/a251c24705b141eeb3df1bd7b3349620.jpg.webp",
      realprice: 145.0,
      currentprice: 45.0,
      percent: 60,
      sales: 2.2,
    },
  ];
  return (
    <>
      {listProducts.map((product, index) => {
        return (
          <div key={index} className=" col-span-1 ">
            <div className="w-[190px] border rounded  bg-white  max-h-[520px] cursor-pointer transition-all ease-out translate-y-0 hover:-translate-y-[3px] hover:border-violet ">
              <div className=" w-full  ">
                <img
                  className="w-[170px] h-[190px] flex  m-auto border  duration-700 ease-in-out "
                  alt=""
                  src={product.imgProduct}
                />
              </div>
              <div className=" w-full mt-2 px-2 ">
                <p className="  line-clamp-2   text-textword font-medium text-[0.95rem]  ">
                  {product.nameProduct}
                </p>
              </div>
              <div className="w-full px-2 py-2 ">
                <div className="">
                  <span className="text-[1.09rem] text-violet font-bold">
                    {product.currentprice.toFixed(3)}đ
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <p className=" font-medium text-[0.85rem] text-[#cbd5e1] line-through">
                      {product.realprice.toFixed(3)}đ
                    </p>
                    <p className=" font-medium text-[0.85rem] text-violet pl-1">
                      -{product.percent}%
                    </p>
                  </div>
                  <p className="text-[0.778rem] text-[#94a3b8] ">
                    Đã bán {product.sales}k
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
