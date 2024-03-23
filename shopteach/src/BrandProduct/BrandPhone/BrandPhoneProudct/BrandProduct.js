import React from 'react'
import ReactPaginate from 'react-paginate';
import { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
export default function BrandProduct(props) {
     const {data}= props
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0);
  const itemsPerPage = 18;
  useEffect(() => {
    const dataProducts = async () => {
      const rep = await fetch(`https://jsonplaceholder.typicode.com/comments`);
      const data = await rep.json();
      setProducts(data);
    };

    dataProducts();
  }, [offset]);
  const endOffset = offset + itemsPerPage;
  const currentItems = products.slice(offset, endOffset);
  const pageCount = Math.ceil(( data === 0 ? ( products.length - 410) : products.length ) / itemsPerPage);
  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % products.length;
    setOffset(newOffset);
  };
;
  return (
    <>
    <div className={ data === 1 ?  `grid grid-cols-5 gap-3  bg-slate-100 mt-[12px]  ` : `grid grid-cols-6 bg-slate-100 gap-3   `}>
      {
        currentItems.map((product,index)=>{
          return(
            <div key={index} className=" col-span-1  w-full max-h-[540px] ">
              <Link to={`/productpage/${product.id}`}>
              <div className="w-[210px] border rounded  bg-white   cursor-pointer transition-all ease-out translate-y-0 hover:-translate-y-[3px] hover:border-violet">
              <div className=" w-full  ">
                <img
                  className="w-[170px] h-[190px] flex  m-auto border"
                  alt=""
                  src="https://salt.tikicdn.com/cache/280x280/ts/product/e2/79/3a/99fb3f8dd32c331e6535e5aae5d51f98.jpg.webp"
                />
              </div>
              <div className=" w-full my-3 px-2 ">
                <p className="  line-clamp-2   text-textword font-medium text-[0.95rem]  ">
                  {product.body}
                </p>
              </div>
              <div className="w-full px-2 py-2 ">
                <div className="">
                  <span className="text-[1.09rem] text-violet font-bold">
                    {product.id.toFixed(3)}đ
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <p className=" font-medium text-[0.85rem] text-[#cbd5e1] line-through">
                      145.000đ
                    </p>
                    <p className=" font-medium text-[0.85rem] text-violet pl-1">
                      -39%
                    </p>
                  </div>
                  <p className="text-[0.8rem] text-[#94a3b8] pl-1 ">
                    Đã bán 2.2k
                  </p>
                </div>
              </div>
            </div>
              </Link>
            
          </div>
          )
        })
      }
    </div>
   <ReactPaginate
    className='flex items-center justify-center pb-5  pt-7  bg-slate-100 '
      breakLabel="..."
      nextLinkClassName='text-[1.5rem] text-slate-400  pl-1  '
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      pageLinkClassName='  text-[1.2rem]   text-slate-400  mx-6'
      pageCount={pageCount}
      previousLinkClassName='text-[1.5rem] text-slate-400  pr-1'
      previousLabel="<"
      activeLinkClassName=' active bg-violet px-4 py-1 rounded text-white'
      renderOnZeroPageCount={null}
    />
    </>
  )
}
