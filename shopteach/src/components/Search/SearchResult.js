import { AiOutlineSearch } from "react-icons/ai";
import { RiCloseFill } from "react-icons/ri";
import "./SearchResult.css";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/Context";
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
  const { getFilterProductContext } = useAuth();
  const handleSearch = (e) => {
    setvalueInput(e.target.value);
    let newResult = dataProduct.filter((value) => {
      return value.name.toLowerCase().includes(valueInput);
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
      const getApi = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const data = await await getApi.json();
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
        const clearProduct = () => {
          setsearchResult([]);
          setvalueInput("");
          inputRef.current.focus();
        };
        clearProduct();
      }
    };
    document.addEventListener("mousedown", hiddenResult);
    return () => {
      document.removeEventListener("mousedown", hiddenResult);
    };
  }, []);
  const hanldeFilterProduct = () => {
    const flattenFilterProduct = searchResult.slice(0, searchResult.length);
    const flattenFilter = flattenFilterProduct.reduce((prev, cur) => {
      return prev.concat(Array.isArray(cur) ? flattenFilter(cur) : cur);
    }, []);

    return getFilterProductContext(flattenFilter);
  };

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
              <ul className="pl-0   max-h-96 cursor-pointer">
                {searchResult.slice(0, 9).map((result, index) => {
                  return (
                    <li key={index} className="hover:bg-f5f5f5 ">
                      <Link
                        to={`/productFilterPhone`}
                        onClick={hanldeFilterProduct}
                      >
                        <div className="flex items-center">
                          <div id="result_icon" className=" px-10px py-10px">
                            <AiOutlineSearch />
                          </div>
                          <span className=" text-17 font-normal pl-7px">
                            {result.name}
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
