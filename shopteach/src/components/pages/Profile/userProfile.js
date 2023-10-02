/* eslint-disable react-hooks/exhaustive-deps */
import avataEmty from "../../img/emty.jpg";
import { AiOutlineCloudUpload } from "react-icons/ai";


import React from "react";
import { useState, useEffect } from "react";
import {
  getDatabase,
  set,
  ref as dataRef,
  update,
  onValue,
} from "firebase/database";
import { uploadBytes, getDownloadURL, ref, getStorage } from "firebase/storage";
import { uid } from "uid";
import { v4 } from "uuid";
export default function UserProfile(props) {
  //Avata
  const [img, setImg] = useState(null);
  const [avata, setAvata] = useState();
//Storage
  const storage = getStorage();
  //Databasae
  const id = uid();
  const db = getDatabase();
  const [dataUser, setDataUser] = useState([]);
  const [valueInput, setValueInput] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  //getData Child
  const { handleDataChild } = props;
//Get Avata
  const handleGetImg = (e) => {
    if (e.target.files[0]) {
      setImg(e.target.files[0]);
    }
  };
  const hanldeAvata = async () => {
    try {
      if (img === null) return;
      const imageRef = ref(storage, `images/${v4()}`);
      await uploadBytes(imageRef, img).then((snaphsot) => {
        getDownloadURL(snaphsot.ref).then((url) => {
          setAvata(url);
         
        });
      });
    } catch (error) {
      console.log(error);
    }
    setAvata(null);
  };
  //hanldeGetValue
  let name, value;
  const data = (e) => {
    e.preventDefault();
    name = e.target.name;
    value = e.target.value;
    setValueInput({
      ...valueInput,
      [name]: value,
    });
  };

  //HanldeProfile
  const handleProfile = () => {
    //Set data
    const handleCreate = async () => {
      try {
        setSuccess("");
        setError("");
        await set(dataRef(db, `/${id}`), {
          valueInput,
          id,
          avata: avata ? avata : avataEmty,
        });
        setSuccess("Đã lưu");
      
      } catch (error) {
        setError("Lưu không thành công");
      }
    };
    handleCreate();
  };
  //Update
  const handleUpdate = async () => {
    try {
      setSuccess("");
        setError("");
      await update(dataRef(db, `/${id}`), {
        valueInput,
        id,
        avata: avata ? avata : avataEmty,
      });
      setSuccess("Cập nhật thành công");
    } catch (error) {
     console.log(error)
      setError("Cập nhật thất bại");
      
    }
  };
  //Read Data
  useEffect(() => {
    onValue(dataRef(db), (snaphsot) => {
      setDataUser([]);
      const data = snaphsot.val();
      if (data !== null) {
        // eslint-disable-next-line array-callback-return
        Object.values(data).map((item) =>{
          setDataUser((prev) => [...prev, item]);
        });
      }
    });
  }, []);
  handleDataChild(dataUser);

 
//Clear success and error
  useEffect(() => {
    const clear = setTimeout(() => {
      if (success || error) {
        setSuccess("");
        setError("");
      }
    }, 4000);
    return () => clearTimeout(clear);
  }, [success, error]);


  return (
    <>
      <div className="h-screen  bg-gray-100 mb-2 ">
        
        <div className=" ">
          <div className="bg-white rounded-sm  px-5  pt-[10px] pb-9 relative ">
            {success && (
              <div
                className="bg-teal-100  border border-teal-300   text-teal-500 px-4 py-[5px] rounded  absolute  w-[62%] top-0 left-5 mt-[2px]"
                role="alert"
              >
                <strong className="font-bold">{success}</strong>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-[7px]"></span>
              </div>
            )}
            {error && (
              <div
                className="bg-red-100 border border-red-300 text-red-500 px-4 py-[7px] rounded w-[62%] top-0 left-5  mt-[2px] "
                role="alert"
              >
                <strong className="font-bold pl-3">{error}</strong>
              </div>
            )}
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="lg:col-span-2 border-r-slate-300 border  border-transparent pr-3">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5 mb-5 pt-[28px]">
                    <label htmlFor="full_name" className="text-[1rem] mb-2">
                      Tên đăng nhập
                    </label>

                    <input
                      onChange={data}
                      value={valueInput.fullName}
                      type="text"
                      name="full_name"
                      id="full_name"
                      className=" border mt-1 rounded px-4 w-full h-9 outline-none text-black"
                    />
                  </div>

                  <div className="md:col-span-5  mb-5">
                    <label htmlFor="email" className="text-[1rem]">
                      Email
                    </label>
                    <input
                      onChange={data}
                      value={valueInput.email}
                      type="text"
                      name="email"
                      id="email"
                      className="h-9 border mt-1 rounded px-4 w-full outline-none"
                    />
                  </div>
                  <div className="md:col-span-5  mb-5">
                    <label htmlFor="tel" className="text-[1rem]">
                      Số điện thoại
                    </label>
                    <input
                      onChange={data}
                      value={valueInput.phone}
                      type="tel"
                      id="phone"
                      name="phone"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                      className="h-9 border mt-1 rounded px-4 w-full outline-none "
                    />
                  </div>

                  <div className="md:col-span-3  mb-5">
                    <label htmlFor="address" className="text-[1rem]">
                      Địa chỉ
                    </label>
                    <input
                      onChange={data}
                      value={valueInput.address}
                      type="text"
                      name="address"
                      id="address"
                      className="h-9 border mt-1 rounded px-4 w-full outline-none"
                      placeholder=""
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="text-[1rem]">Giới tính</label>
                    <div className="flex   justify-around pt-3">
                      <div className="flex items-center ">
                        <label className="text-base mr-[6px] pb-[1px]  cursor-pointer">
                          Nam
                        </label>
                        <input
                          className=" cursor-pointer"
                          type="radio"
                          name="male"
                          id="male"
                          value="Nam"
                          onChange={data}
                        />
                      </div>
                      <div className="flex items-center ">
                        <label className="text-base mr-[6px] pb-[1px] cursor-pointer">
                          Nữ
                        </label>
                        <input
                          className=" cursor-pointer"
                          type="radio"
                          name="male"
                          id="female"
                          value="Nữ"
                          onChange={data}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end">
                      {dataUser.length > 0  ? (
                        <button
                          onClick={handleUpdate}
                          className=" bg-fuchsia-300 hover:bg-fuchsia-400 text-white font-bold py-2 px-4 rounded mt-9"
                        >
                          Cập nhật
                        </button>
                      ) : (
                      <button
                        onClick={handleProfile}
                        className=" bg-fuchsia-300 hover:bg-fuchsia-400 text-white font-bold py-2 px-4 rounded mt-9"
                      >
                        Lưu
                      </button>
                     )} 
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-gray-600  mt-0">
                <div className="flex flex-col gap-4 items-center relative">
                  <div className=" w-32">
                    <img
                      src={avata ? avata : avataEmty}
                      className=" rounded-full  h-32  "
                      alt="Avatar"
                    />
                  </div>
                  <div className=" w-full min-h-[250px] bg-slate-400">
                    <label
                      htmlFor="dropzone-file"
                      className="  flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-[#f8fafc]"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <AiOutlineCloudUpload className="w-8 h-8 mb-4 text-gray-400 dark:text-gray-400" />

                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span>
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                        onChange={handleGetImg}
                      />
                    </label>
                  </div>
                  <button
                    onClick={hanldeAvata}
                    className=" bg-fuchsia-300 hover:bg-fuchsia-400 text-white font-bold py-2 px-4 rounded mt-1"
                  >
                    Tải lên
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
