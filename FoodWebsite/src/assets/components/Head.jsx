import React from "react";
import OnYourMind from "./OnYourMind";

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

  return (
    <div className="w-full flex justify-center items-center shadow-lg h-24">
      <div className="w-[70%] flex justify-between">
        <div className="flex">
          <img
            className="w-24"
            src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png"
            alt=""
          />
          <div className="flex gap-1 items-center">
            <p className="font-bold border-b-2 border-black">others</p>
            <i className="mt-2 text-orange-500 text-2xl fi fi-rs-angle-small-down"></i>
          </div>
        </div>
        <div className="flex gap-10 items-center">

          {navItems.map((data,i) => (
            <div key={i} className="flex items-center gap-3">
              <i className={"mt-1 text-xl fi text-gray-700 " + data.image}></i>
              <p className="text-lg font-medium text-gray-700">{data.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Head;