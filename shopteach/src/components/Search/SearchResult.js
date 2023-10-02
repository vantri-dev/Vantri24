import { AiOutlineSearch } from "react-icons/ai";
import { RiCloseFill } from "react-icons/ri";
import "./SearchResult.css";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import * as Servies from "../../apiServies/searchSevries";
 
import Wrapper from "../Popper/Wrapper";
import useDebounce from "../hooks/useDebounnce";

function SearchResult() {
  const [searchResult, setsearchResult] = useState([]);
  const [dataProduct, setdataProduct] = useState([]);
  const [valueInput, setvalueInput] = useState("");
  const [showResult, setshowResult] = useState(false);
  const inputRef = useRef();
  const resultRef = useRef();
  const debounce = useDebounce(valueInput, 150);
  const handleSearch = (e) => {
    setvalueInput(e.target.value);
    const newResult = dataProduct.filter((value) => {
      return value.full_name.toLowerCase().includes(valueInput.toLowerCase());
    });
    setsearchResult(newResult);
    if (valueInput === "") {
      setsearchResult([]);
    } else {
      setsearchResult(newResult);
    }
  };
  useEffect(() => {
    if (!debounce.trim()) {
      setsearchResult([]);
      return;
    }
    const fetchApi = async () => {
      const data = await Servies.searchServies(debounce);
      setdataProduct(data);
    };
    fetchApi();
  }, [debounce]);
  const clearProduct = () => {
    setsearchResult([]);
    setvalueInput("");
    inputRef.current.focus();
  };

  useEffect(() => {
    const hiddenResult = (e) => {
      if (!resultRef.current.contains(e.target)) {
        setshowResult(false);
      }
    };
    document.addEventListener("mousedown", hiddenResult);
    return () => {
      document.removeEventListener("mousedown", hiddenResult);
    };
  }, []);
  return (
    <div className="flex relative items-center  " ref={resultRef}>
      <input
        className="border outline-none  
             focus-within:border-violet
          item-center
            font-light
             pl-10px
           text-slate-500
            rounded-lg w-full mt-2  py-7px bg-white shadow-sm border-e2e8f0
             placeholder:text-base 
              leading-none"
        ref={inputRef}
        value={valueInput}
        type="text"
        placeholder="Tìm kiếm sản phẩm..."
        onFocus={() => setshowResult(true)}
        onChange={handleSearch}
      />
      <span className="absolute  right-3 pt-10px  text-f0abfc cursor-pointer select">
        {searchResult.length > 0 ? (
          <RiCloseFill id="clearProduct" onClick={clearProduct} />
        ) : (
          <AiOutlineSearch id="icon_search" />
        )}
      </span>
      {showResult && searchResult.length > 0 && (
        <div className="absolute top-11 w-full  ">
          <Wrapper>
            <div>
              <ul className="pl-0  max-h-72 cursor-pointer">
                {searchResult.slice(0, 15).map((result, index) => {
                  return (
                    <li key={index} className="hover:bg-f5f5f5 ">
                      <Link to={`/cart`}>
                        <div className="flex items-center">
                          <div id="result_icon" className=" px-10px py-10px">
                            <AiOutlineSearch />
                          </div>
                          <span className=" text-17 font-normal pl-7px">
                            {result.full_name}
                          </span>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Wrapper>
        </div>
      )}
    </div>
  );
}
export default SearchResult;
