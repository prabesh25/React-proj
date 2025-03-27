import React, { useContext } from "react";
import OnYourMind from "./OnYourMind";
// import { Outlet } from "react-router-dom";
import {Link, Outlet} from "react-router-dom";
import { useState } from "react";
import { Coordinates, Visibility } from "../../context/contextApi";

const Head = () => {
  const navItems = [
    {
      name: "Swiggy corporate",
      image: "fi-rr-shopping-bag",
    },
    {
      name: "Search",
      image: "fi-rr-search",
    },
    {
      name: "Offers",
      image: "fi-rr-badge-percent",
    },
    {
      name: "Help",
      image: "fi-ss-life-ring",
    },
    {
      name: "Sign in",
      image: "fi-rr-user",
    },
    {
      name: "Cart",
      image: "fi-rr-shopping-cart-add",
    },
  ];

  const {visible, setVisible} = useContext(Visibility)
  const [searchResult, setSearchRes] = useState([])
  const [adress, setAdress] = useState("")

  const { setCoord} = useContext(Coordinates)
  
  // console.log(navItems)
  // function handleSearchFunctionality(){
  //   setVisible(prev => !prev)
  // }

  function handleVisibility(){
    setVisible(prev => !prev)
  }

  async function searchResultFun(val){
    if(val == "") return
    const res = await fetch(`https://www.swiggy.com/dapi/misc/place-autocomplete?input=${val}`)
    const data = await res.json();

    console.log(data.data)
    setSearchRes(data.data)
  }

  async function fetchLatAndLng(id){
    if(id == "") return
    const res = await fetch(`https://www.swiggy.com/dapi/misc/address-recommend?place_id=${id}`)
    const data = await res.json();
    console.log(data)
    setCoord({
      lat : data?.data[0]?.geometry?.location?.lat,
      lng : data?.data[0]?.geometry?.location?.lng,
    })
    console.log(data.data)
    setSearchRes(data.data)
    setAdress(data.data[0].formatted_address)
  }


  return (
    <div className="relative w-full">
      <div className="w-full">
          <div onClick={handleVisibility} className={"w-full absolute h-full z-30 bg-black/50 " + (visible ? "visible" : "invisible")}>
          <div onClick={(e) => e.stopPropagation()} className={"bg-white duration-400 w-[40%] absolute p-5 z-40 h-full "  + (visible ? " left-0 " : " -left-[100%] ")}>              
          <p onClick={handleVisibility} className="bg-black text-white p-5 w-[10%]">cut</p>
          <input onChange={(e) => searchResultFun(e.target.value)} type="text"  className="border focus:outline-none focus:shadow-lg p-5"/>
          <div>
            <ul>
              {console.log(searchResult)}
              {searchResult.map((data) => (
                console.log(data),
                <li onClick={() => fetchLatAndLng(data.place_id)}>
                  {data?.structured_formatting?.main_text}
                   <p className="text-sm opacity-65">{data?.structured_formatting?.secondary_text}
                   </p>
                  </li>
              ))}
            </ul>
          </div>
          </div>
        </div>
      </div>

      <div className="w-full sticky z-20 flex justify-center items-center shadow-lg h-24">
      <div className="w-[70%] flex justify-between">
        <div className="flex">
          <Link to={"/"}>
          <img
            className="w-24"
            src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png"
            alt=""
          />
          </Link>
          <div onClick={handleVisibility} className="flex gap-1 items-center">
            <p>
              <span className="font-bold border-b-2 border-black">others</span> 
              <span className="ml-1 text-sm opacity-85">{adress}</span>
            </p>
            <i className="mt-2 text-orange-500 text-2xl fi fi-rs-angle-small-down"></i>
          </div>
        </div>
        <div className="flex gap-8 items-center">

          {navItems.map((data,i) => (
            <div key={i} className="flex items-center gap-3">
              <i className={"mt-1 text-xl fi text-gray-700 " + data.image}></i>
              <p className="text-lg font-medium text-gray-700">{data.name}</p>
            </div>
          ))}
        </div>
      </div>
      </div>

      <Outlet/>
    </div>
    

    
  );
};

export default Head;