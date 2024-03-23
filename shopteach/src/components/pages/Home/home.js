import { Link } from "react-router-dom";

import Slider from "../../Slider/Slider";
import Translation from "./Translation";
import FlashSale from "./FlashSale";
import Product from "./Product/Product";

import Trademark from "./trademark/trademark";
import BackTop from "../../BackTop/BackTop";
function Home() {
  
  const listProduct = [
    {
      name: "Điện thoại",
      pathImg: "https://cdn-icons-png.flaticon.com/128/7344/7344131.png",
      pathPage:'/productSmartPhone'
    },
    {
      name: "Nhà sách ",
      pathImg: "https://cdn-icons-png.flaticon.com/128/4033/4033473.png",
    },
    {
      name: "Điện gia dụng",
      pathImg: "https://img.icons8.com/?size=1x&id=cPvUGpqA1Dmh&format=png",
    },
    {
      name: "Bách hóa online",
      pathImg: "https://cdn-icons-png.flaticon.com/128/9937/9937695.png",
    },
    {
      name: "Sức khỏe",
      pathImg: "https://img.icons8.com/?size=1x&id=ko8yvFK9sWYJ&format=png",
    },
    {
      name: "Đồng hồ",
      pathImg: "https://cdn-icons-png.flaticon.com/128/100/100320.png",
    },
    {
      name: "Thời trang ",
      pathImg: "https://cdn-icons-png.flaticon.com/128/7681/7681178.png?ga=GA1.1.211905827.1690876736",
    },
    {
      name: "Máy tính",
      pathImg: "https://img.icons8.com/?size=1x&id=WPZvpTLUFPkq&format=png",
    },
    {
      name: "Điện tử",
      pathImg: "https://cdn-icons-png.flaticon.com/128/2432/2432572.png",
    },
  ];
  const listOutstand = [
    {
      name: "Giá rẻ mỗi ngày",
      pathImg:
        "https://salt.tikicdn.com/cache/100x100/ts/upload/ae/72/a3/d4503c3ece932dc8c57d2d5c97cd6ffc.png.webp",
    },
    {
      name: "Ưu đãi đối tác",
      pathImg: "https://cdn-icons-png.flaticon.com/128/719/719732.png",
    },
    {
      name: "Mã giảm giá",
      pathImg:
        "https://salt.tikicdn.com/cache/100x100/ts/upload/20/68/cf/6d4adbdbcd1c35b0a438a655d9a420d0.png.webp",
        path:'/outstanding'
    },
    {
      name: "TechFast",
      pathImg: "https://cdn-icons-png.flaticon.com/128/9148/9148092.png",
    },
    {
      name: "Thanh toán nhanh",
      pathImg: "https://cdn-icons-png.flaticon.com/128/147/147258.png",
    },
    {
      name: " Deal giảm sốc",
      pathImg: "https://cdn-icons-png.flaticon.com/128/463/463246.png",
    },
  ];
  return (
    <div className="  w-full pt-[10px] flex bg-gray-100 pr-[100px]  pl-[80px] ">
      <div className=" w-[22%]  flex-col  flex  items-center  ">
        <div className="w-[85%] border rounded m-h-[90%] ml-[14px] cursor-pointer bg-white  shadow-md h-[556px]  ">
          <div className="pl-5 py-2">
            <span className="text-[1rem] font-semibold text-slate-600">
              Danh mục
            </span>
          </div>
          <ul className=" flex  items-start flex-col   w-full overflow-y-auto  ">
            {listProduct.map((product, index) => {
              return (
                <Link to={product.pathPage} className="w-full" key={index}>
                  <li className="py-[12px]  pl-8 hover:bg-slate-100 w-full rounded-lg flex items-center ">
                    <img
                      className="w-[32px] h-[32px]  rounded-lg text-[1.3rem] mr-3"
                      src={product.pathImg}
                      alt=""
                    />

                    <span className="text-[1rem] text-textword pt-[3px]">
                      {product.name}
                    </span>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="w-[85%]  border rounded ml-[14px] m-h-[90%]  cursor-pointer bg-white  shadow-md mt-[13px] h-[360px]">
          <div className="pl-5 py-2">
            <span className="text-[1rem] font-semibold text-slate-600">
              Nổi bật
            </span>
          </div>
          <ul className=" flex  items-start flex-col   w-full overflow-y-auto ">
            {listOutstand.map((product, index) => {
              return (
                <Link to={product.path} className="w-full" key={index}>
                  <li className="py-[10px]  pl-8 hover:bg-slate-100 w-full rounded-lg flex items-center ">
                    <img
                      className="w-[32px] h-[32px]  rounded-lg text-[1.3rem] mr-3"
                      src={product.pathImg}
                      alt=""
                    />

                    <span className="text-[1rem] text-textword pt-[3px]">
                      {product.name}
                    </span>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
      <div className=" w-[82%]  ">
        <div className="w-full h-80">
          <Slider />
        </div>
        <Translation />
        <FlashSale />
        <Trademark/>
        
          <Product/>
      
          <BackTop/>
       
      </div>
    </div>
  );
}
export default Home;
