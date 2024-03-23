import React, { useState } from "react";

import { Link } from "react-router-dom";
export default function DescriptionProduct(props) {
  const [hiidenContext, setHiddenContext] = useState(false);
  const  {productId}=  props;
  const handleHiddenContext = () => {
    setHiddenContext(!hiidenContext);
  };

  return (
    <div className=" bg-slate-100">
      <div className=" bg-white ">
        <div className="px-5 py-5">
          <span className="text-[1.1rem]  font-light  text-slate-500 uppercase">
            Chi tiet san pham
          </span>
        </div>
        <div className=" px-10 py-2    bg-white   ">
          <span>
          {productId.body}
            <span
              className={
                hiidenContext === true
                  ? "block"
                  : " my-2 text-opacity-75 text-textword"
              }
            >
              Thiết kế có nhiều thay đổi, mặt trước sang hơn Ở phiên bản iPhone
              14 128GB có thiết kế có nhiều khác biệt so với thế hệ trước. Phiên
              bản này vẫn sở hữu ngoại hình với những điểm nổi bật như những
              người đàn anh trước đây. Với trọng lượng chỉ vỏn vẹn 172g, được
              thiết kế nguyên khối mang đến cho người dùng một thiết kế nhỏ gọn,
              tiện lợi khi sử dụng.
            </span>
            <span
              className={
                hiidenContext === true
                  ? "block"
                  : " text-opacity-50 text-textword"
              }
            >
              Với thiết kế khung viền phẳng, cùng với bốn góc bo tròn sẽ mang
              đến cảm giác cầm nắm thoải mái, chắc chắn hơn. Đồng thời, năm nay
              nhà Apple cũng trang bị đa dạng màu sắc trẻ trung, năng động như:
              Đen (Midnight), Trắng ( Starlight) , Đỏ ( Product Red), Xanh dương
              (Blue), Tím (Purple). Cho người dùng thoải mái lựa chọn màu sắc
              phù hợp với cá tính và sở thích của bản thân.
            </span>
          </span>
        </div>

        <div
          className={
            hiidenContext === true
              ? "hidden"
              : "flex items-center justify-center -translate-y-[30px]"
          }
          onClick={handleHiddenContext}
        >
          <button className="flex items-center text-[1.15rem]  rounded py-2 px-10  bg-violet text-white    bg-gradient-to-t  from-[#efc4ef] ">
            Xem thêm
          </button>
        </div>

        <div className={hiidenContext === true ? "block" : "hidden"}>
          <img
            className="   object-contain w-full mb-2 "
            alt=""
            src="https://www.techguide.com.au/wp-content/uploads/2022/10/iPhone14PlusReview5.jpeg"
          />
          <img
            className="   object-contain w-full mb-2"
            alt=""
            src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/10/iphone14productshots-1-2.jpeg"
          />
          <img
            className="   object-contain w-full mb-2"
            alt=""
            src="https://www.specdecoder.com/images/news/article-images/iphone%2014%20pro%20spec-1662661194.JPG"
          />
          <img
            className="   object-contain w-full mb-2"
            alt=""
            src="https://content.hwigroup.net/images/editorial/1920/116988_09-iphones-14-line-up-scaled.jpg"
          />
          <img
            className="   object-contain w-full mb-2"
            alt=""
            src="https://images.news18.com/ibnlive/uploads/2022/09/apple-iphone-14-iphone-14-plus-166257835616x9.jpg"
          />
          <div className="px-10 py-2">
            <p className="mb-2">
              Điện thoại iPhone 14 Pro sở hữu trọng lượng 206g cùng thiết kế nhỏ
              gọn cho khả năng cầm nắm thoải mái. Về thông số màn hình, điện
              thoại được trang bị màn hình có độ phân giải 2556 x 1179 pixel và
              mật độ điểm ảnh 2556 x 1179 pixel mang lại khả năng hiển thị ấn
              tượng.
            </p>
            <p className="mb-2">
              Điện thoại được trang bị màn hình Dynamic Island siêu ấn tượng với
              khả năng tuy biến thành nhiều dạng theo điều khiển của người dùng.
              Nhờ đó người dùng có thể theo dõi và hiển thị nhanh các thông tin
              như cuộc gọi, chỉ đường, hẹn giờ,... Trên điện thoại iPhone 14
              Pro, lần đầu Apple trang bị cho sản phẩm của mình camera cảm biến
              lớn. Theo đó, thiết bị đã được nâng cấp camera chính lên độ phân
              giải 48MP, kết hợp công ngệ pixel-pinning hỗ trợ nâng cao khả năng
              chụp hình trong điều kiện thiếu sáng.
            </p>
            <span className=" text-[1rem] font-sans  font-semibold ">
              Thong so ki thuat
              <p className="text-[0.95rem]  font-thin">
                Truy cap{" "}
                <Link to="/" className=" text-[0.9rem] font-thin text-blue-700">
                  apple.com/iphone/compare{" "}
                </Link>
              </p>
            </span>
            <p className="mb-2">
              iPhone 14 có khả năng chống tia nước, chống nước và chống bụi. Sản
              phẩm đã qua kiểm nghiệm trong điều kiện phòng thí nghiệm có kiểm
              soát đạt mức IP68 theo tiêu chuẩn IEC 60529 (chống nước ở độ sâu
              tối đa 6 mét trong vòng tối đa 30 phút). Khả năng chống tia nước,
              chống nước và chống bụi không phải là các điều kiện vĩnh viễn. Khả
              năng này có thể giảm do hao mòn thông thường. Không sạc pin khi
              iPhone đang bị ướt. Vui lòng tham khảo hướng dẫn sử dụng để biết
              cách lau sạch và làm khô máy. Không bảo hành sản phẩm bị hỏng do
              thấm chất lỏng.
            </p>
            <p className="mb-2">
              Điện thoại iPhone 14 Pro sở hữu trọng lượng 206g cùng thiết kế nhỏ
              gọn cho khả năng cầm nắm thoải mái. Về thông số màn hình, điện
              thoại được trang bị màn hình có độ phân giải 2556 x 1179 pixel và
              mật độ điểm ảnh 2556 x 1179 pixel mang lại khả năng hiển thị ấn
              tượng.
            </p>
          </div>
          <div
            className={
              hiidenContext === false
                ? "hiden"
                : "flex items-center justify-center py-5 "
            }
            onClick={handleHiddenContext}
          >
            <button className="flex items-center text-[1.15rem]  rounded py-2 px-10   bg-fuchsia-300 text-white   ">
              Thu gọn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
