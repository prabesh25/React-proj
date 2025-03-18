// import React from 'react'
// import { useParams } from 'react-router-dom'
// import { useState, useEffect } from 'react';

// const RestaurantMenu = () => {
//   const {id} = useParams();
//   console.log(id)
//   let mainId = id.split("-").at(-1);
//   const [menuData, setMenuData] = useState("")

//   async function fetchMenu(){
//     let data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.9690247&lng=72.8205292&restaurantId=655822&catalog_qa=undefined&submitAction=ENTER`);
//     let res = await data.json();
//     console.log(res)
//   }
//   useEffect(() => {
//     fetchMenu();
//   },[])

//   return (
//     <div>RestaurantMenu --- {mainId} {menuData}</div>
//   )
// }

// export default RestaurantMenu

import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
// import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const RestaurantMenu = () => {
  const { id } = useParams();
  let mainId = id.split("-").at(-1);

  const [menuData, setMenuData] = useState([]);
  const [restInfo, setResInfo] = useState([]);
  const [discountData, setDiscountData] = useState([]);
  console.log(id);

  async function fetchMenu() {
    let data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65200&lng=77.16630&restaurantId=${mainId}&catalog_qa=undefined&submitAction=ENTER`
    );
    let res = await data.json();
    console.log(res?.data?.cards);
    console.log(res?.data?.cards[2]?.card?.card?.info);
    // setMenuData(res?.data?.cards[0]?.card?.card?.text)
    setResInfo(res?.data?.cards[2]?.card?.card?.info);
    setDiscountData(
      res?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers
    );
    setMenuData(
      res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card
    );
    console.log(restInfo?.sla?.slaString);
  }
  console.log(restInfo.sla);
  console.log(
    restInfo?.nearestOutletNudge?.nearestOutletInfo?.siblingOutlet?.sla
  );

  useEffect(() => {
    fetchMenu();
  }, []);

  return (
    <div className="w-full">
      <div className="w-[800px] mx-auto pt-8">
        <p className="text-[12px] text-slate-500 ">
          {" "}
          <Link to={"/"}>
            <span className="hover:text-slate-700 hover:cursor-pointer">
              Home
            </span>
          </Link>{" "}
          /{" "}
          <Link to={"/"}>
            {" "}
            <span className="hover:text-slate-700 hover:cursor-pointer">
              {restInfo.city}
            </span>
          </Link>{" "}
          <span className="text-slate-700 hover: cursor-pointer">
            {restInfo.name}
          </span>
        </p>
        <h1 className="font-bold pt-6 text-2xl">{restInfo.name}</h1>
        <div className="w-full h-[206px]  bg-gradient-to-t px-4 pb-4 from-slate-200/70  mt-3 rounded-[30px]">
          <div className="w-full border border-slate-200/70  rounded-[30px] h-full bg-white">
            <div className="p-4 w-full ">
              <div className="flex items-center gap-1 font-semibold">
                <i className="fi fi-ss-circle-star mt-1 text-green-600 text-lg"></i>
                <span>{restInfo.avgRating}</span>
                <span>({restInfo.totalRatingsString})</span>.
                <span>{restInfo.costForTwoMessage}</span>
              </div>
              <p className="underline font-semibold text-orange-600 ">
                {restInfo?.cuisines?.join(", ")}
              </p>

              <div className="flex gap-2 mt-2">
                <div className="w-[7px] flex flex-col justify-center items-center">
                  <div className="w-[7px] h-[7px] bg-gray-500 rounded-full"></div>
                  <div className="w-[1px] h-[25px] bg-gray-500"></div>
                  <div className="w-[7px] h-[7px] bg-gray-500 rounded-full"></div>
                </div>
                <div className="flex flex-col text-sm gap-1 font-semibold">
                  <p>
                    Outlet .{" "}
                    <span className="text-gray-400 font-normal">
                      {restInfo.locality}
                    </span>
                  </p>
                  <p>{restInfo?.sla?.rainMode}</p>
                </div>
              </div>
            </div>
            <hr className="text-gray-300" />

            <div className="p-4 w-full">
              {/* <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto.q_auto,w-40,h_40/" + restInfo.feeDetails?.icon} alt="" /> */}
              <div className="flex items-center">
                {/* <i className="fi w-[10px] bg-black border fi-sc-biking-mountain text-lg"></i> */}
                {/* <i class="fi fi-br-biking-mountain"></i> */}
                <i className="mr-2.5 fi fi-rr-biking-mountain"></i>
                {restInfo.length !== 0 ? (
                  <span className="text-md mb-1 text-gray-500">
                    {
                      restInfo?.nearestOutletNudge?.nearestOutletInfo
                        ?.siblingOutlet?.sla.lastMileTravelString
                    }{"  -  "}{" "}
                    will be delivered within {""}
                    {
                      restInfo?.nearestOutletNudge?.nearestOutletInfo
                        ?.siblingOutlet?.sla.deliveryTime
                    }{" "}
                    minutes
                  </span>
                ) : (
                  ""
                )}
                {/* <div>{restInfo?.nearestOutletNudge?.nearestOutletInfo?.siblingOutlet?.sla}</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
