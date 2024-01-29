import cartEmty from "../../img/cart.png";
import { Link } from "react-router-dom";
function CartEmty() {
  return (
    <div className="w-full  flex   bg-gray-100  ">
      <div className=" m-auto mt-[7%] flex flex-col">
        <div className="w-[140px] h-[140px] ml-7">
          <img className=" w-full" src={cartEmty} alt="" />
        </div>
        <div className="pt-3">
          <span className=" text-slate-400 text-lg pr-5 ">
            Giỏ hàng của bạn đang trống
          </span>
        </div>
        <Link to='/'>
        <div className="ml-7 pt-4 mb-[200px]">
          <button className="bg-fuchsia-300 py-2 px-8 rounded text-white">Mua sắm ngay</button>
        </div>
        </Link>
      </div>
    </div>
  );
}
export default CartEmty;
