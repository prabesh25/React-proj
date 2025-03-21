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
  const [value, setValue] = useState(0);
  const [currIndex, setCurrIndex] = useState(false);
  console.log(id);

  function handleNext() {}
  function handlePrev() {}

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
    let actualMenu =
      (res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards).filter(
        (data) => data?.card?.card?.itemCards || data?.card?.card?.categories
      );
    setMenuData(
      // res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      //   ?.card
      actualMenu
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

  function toogleFun() {
    setCurrIndex(!currIndex);
  }

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
                    }
                    {"  -  "} will be delivered within {""}
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

        <div className="w-full overflow-hidden">
          <div className="flex items-center justify-between mt-8">
            <h1 className="font-bold text-xl">Deals for you</h1>
            <div className="flex gap-2">
              <div
                onClick={handlePrev}
                className={`cursor-pointer rounded-full w-8 h-9 flex justify-center items-center ${
                  value <= 0 ? "bg-gray-100" : "bg-gray-200"
                }`}
              >
                <i
                  className={`text-2xl fi mt-1 fi-rr-arrow-small-left ${
                    value <= 0 ? "text-gray-300" : "text-gray-800"
                  }`}
                ></i>
              </div>
              <div
                onClick={handleNext}
                className={`cursor-pointer rounded-full w-8 h-9 flex justify-center items-center ${
                  value >= 124 ? "bg-gray-100" : "bg-gray-200"
                }`}
              >
                <i
                  className={`text-2xl fi mt-1 fi-rr-arrow-small-right ${
                    value >= 124 ? "text-gray-300" : "text-gray-800"
                  }`}
                ></i>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-5">
            {discountData.map((data) => (
              <Discount data={data} />
            ))}
          </div>
        </div>

        <h2 className="text-center mt-5 leading-5">Menu</h2>
        <div className="w-full mt-5 relative cursor-pointer">
          <div className="w-full rounded-xl p-3 font-semibold  bg-slate-200 text-center">
            Search for dishes
          </div>
          <i className="absolute top-3 right-4 fi fi-rs-search"></i>
        </div>

        <div>
          {menuData.map(({ card: { card } }) => (
            <MenuCard card={card} />
            // // i
            // <div>
            //   <div className="flex justify-between">
            //     <h1>
            //       {title} ({itemCards.length})
            //     </h1>
            //     <i
            //       className="fi fi-rr-angle-small-up"
            //       // onClick={() => toogleFun(i)}
            //     ></i>
            //   </div>

            //   <div className="m-5">
            //     {itemCards.map(({ card: { info } }) => (
            //       <h1>{info.name}</h1>
            //     ))}
            //   </div>
            // </div>
          ))}

          {/* {
            <div>
              <h1>
                {menuData[0]?.card?.card?.title} (
                {menuData[0]?.card?.card?.itemCards?.length})
              </h1>
              <i
                className="fi text-2xl fi-rr-angle-small-up"
                onClick={toogleFun}
              ></i>
              {currIndex && (
                <div className="m-5">
                  {menuData[0]?.card?.card?.itemsCards.map(
                    ({ card: { info } }) => (
                      <h1>{info.name}</h1>
                    )
                  )}
                </div>
              )}
            </div>
          } */}
        </div>
      </div>
    </div>
  );
};

function MenuCard({ card }) {
  let hello = false;

  if (card["@type"]) {
    hello = true;
  }

  const [isOpen, setIsOpen] = useState(hello);

  function toggleDropDown() {
    setIsOpen((prev) => !prev);
  }

  if (card.itemCards) {
    const { title, itemCards } = card;

    return (
      <>
        <div className="mt-7">
          <div className="flex justify-between">
            <h1 className="font-bold text-xl">
              {title} ({itemCards.length})
            </h1>
            <i
              onClick={toggleDropDown}
              className={
                "fi text-xl fi-rr-angle-small-" + (isOpen ? "up" : "down")
              }
            ></i>
          </div>
          {isOpen && <DetailMenu itemCards={itemCards} />}
        </div>
        <hr
          className={
            "text-gray-300 my-5 border-" + (card["@type"] ? "[10px]" : "[4px]")
          }
        />
      </>
    );
  } else {
    const { title, categories } = card;
    return (
      <div>
        <h1 className={"font-bold text-" + (card["@type"] ? "xl" : "base")}>
          {" "}
          {title}
        </h1>
        {categories.map((data) => {
          <MenuCard card={data} />;
        })}
      </div>
    );
  }
}

function DetailMenu({ itemCards }) {
  return (
    <div className="my-5">
      {itemCards.map(
        ({
          card: {
            info: {
              name,
              defaultPrice,
              itemAttribute: { vegClassifier },
              ratings: {
                aggregatedRating: { rating, ratingCountv2 },
              },
              description = "",
              imageId,
            },
          },
        }) => {

          const [isMore, setIsMore] = useState(false);
          {
            console.log(description);
          }
          let trimDes = description?.substring(0, 138) + "...";
          return (
            <>
              <div className="flex w-full justify-between min-h-[182px]">
                <div className="w-[70%]">
                  {vegClassifier === "VEG" ? (
                    <img
                      className="w-5 rounded-sm"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuKWPYAXRMXFCGyFWLFLTolV8Y6vbwf56xVw&s"
                      alt=""
                      srcSet=""
                    />
                  ) : (
                    <img
                      className="w-5 rounded-sm"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj0GRx7AJk3NB8qj-zjEQi9Isj6qMRuYNufQR6lykPr_QbNPZxLhhulkt2fya6myvUGeU&usqp=CAU"
                      alt=""
                      srcSet=""
                    />
                  )}
                  <p>{vegClassifier}</p>
                  <h2 className="font-bold text-lg">{name}</h2>
                  <p className="font-bold text-lg">
                    रु {defaultPrice / 100 || price/100}
                  </p>

                  <p className="flex items-center gap-1">
                    <i className={"fi text-xl fi-ss-star"}></i>{" "}
                    <span>
                      {rating} ({ratingCountv2})
                    </span>
                  </p>
                  {description?.length > 140 ?
                    <div>
                      <span className="">{isMore ? description : trimDes}</span>
                      { description.length > 140 && (
                        <button
                          onClick={() => setIsMore(!isMore)}
                          className="cursor-pointer font-bold"
                        >
                          {isMore ? "less" : "more"}
                        </button>
                      )}
                    </div> :  <span className="">{trimDes}</span>     

                    
                  }

                </div>
                <div className="w-[20%] relative h-full">
                  <img
                    className="rounded-xl aspect-square"
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                      imageId
                    }
                    alt=""
                  />
                  <button className=" bg-white rounded-2xl bottom-[-20px] left-4 text-lg font-bold border border-gray-200 absolute  px-10 text-green-700 py-2 drop-shadow-xl">
                    more
                  </button>
                </div>
              </div>

              <hr className="text-gray-300 my-5"></hr>
            </>
          );
        }
      )}
    </div>
  );
}

function Discount({
  data: {
    info: { header, offerLogo, couponCode },
  },
}) {
  return (
    <div className="flex gap-2 p-3 border border-gray-300 min-w-[328px] h-[76px] rounded-2xl">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,q_auto,w_96,h_96/" +
          offerLogo
        }
        alt=""
      />
      <div>
        <h2 className="font-bold text-xl">{header}</h2>
        <p className="text-gray-500">{couponCode}</p>
      </div>
    </div>
  );
}

export default RestaurantMenu;

// prabesh prabprabeshesh










// <div className="p-4 w-full">
// {/* <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto.q_auto,w-40,h_40/" + restInfo.feeDetails?.icon} alt="" /> */}
// <div className="flex items-center">
//   {/* <i className="fi w-[10px] bg-black border fi-sc-biking-mountain text-lg"></i> */}
//   {/* <i class="fi fi-br-biking-mountain"></i> */}
//   <i className="mr-2.5 fi fi-rr-biking-mountain"></i>
//   {restInfo.length !== 0 ? (
//     <span className="text-md mb-1 text-gray-500">
//       {
//         restInfo?.nearestOutletNudge?.nearestOutletInfo
//           ?.siblingOutlet?.sla.lastMileTravelString
//       }
//       {"  -  "} will be delivered within {""}
//       {
//         restInfo?.nearestOutletNudge?.nearestOutletInfo
//           ?.siblingOutlet?.sla.deliveryTime
//       }{" "}
//       minutes
//     </span>
//   ) : (
//     ""
//   )}
//   {/* <div>{restInfo?.nearestOutletNudge?.nearestOutletInfo?.siblingOutlet?.sla}</div> */}
// </div>
// </div>
// </div>
// </div>

// <div className="w-full overflow-hidden">
// <div className="flex items-center justify-between mt-8">
// <h1 className="font-bold text-xl">Deals for you</h1>
// <div className="flex gap-2">
// <div
//   onClick={handlePrev}
//   className={`cursor-pointer rounded-full w-8 h-9 flex justify-center items-center ${
//     value <= 0 ? "bg-gray-100" : "bg-gray-200"
//   }`}
// >
//   <i
//     className={`text-2xl fi mt-1 fi-rr-arrow-small-left ${
//       value <= 0 ? "text-gray-300" : "text-gray-800"
//     }`}
//   ></i>
// </div>
// <div
//   onClick={handleNext}
//   className={`cursor-pointer rounded-full w-8 h-9 flex justify-center items-center ${
//     value >= 124 ? "bg-gray-100" : "bg-gray-200"
//   }`}
// >
//   <i
//     className={`text-2xl fi mt-1 fi-rr-arrow-small-right ${
//       value >= 124 ? "text-gray-300" : "text-gray-800"
//     }`}
//   ></i>
// </div>
// </div>
// </div>
// <div className="flex gap-4 mt-5">
// {discountData.map((data) => (
// <Discount data={data} />
// ))}
// </div>
// </div>

// <h2 className="text-center mt-5 leading-5">Menu</h2>
// <div className="w-full mt-5 relative cursor-pointer">
// <div className="w-full rounded-xl p-3 font-semibold  bg-slate-200 text-center">
// Search for dishes
// </div>
// <i className="absolute top-3 right-4 fi fi-rs-search"></i>
// </div>

// <div>
// {menuData.map(({ card: { card } }) => (
// <MenuCard card={card} />
// // // i
// // <div>
// //   <div className="flex justify-between">
// //     <h1>
// //       {title} ({itemCards.length})
// //     </h1>
// //     <i
// //       className="fi fi-rr-angle-small-up"
// //       // onClick={() => toogleFun(i)}
// //     ></i>
// //   </div>

// //   <div className="m-5">
// //     {itemCards.map(({ card: { info } }) => (
// //       <h1>{info.name}</h1>
// //     ))}
// //   </div>
// // </div>
// ))}

// {/* {
// <div>
// <h1>
//   {menuData[0]?.card?.card?.title} (
//   {menuData[0]?.card?.card?.itemCards?.length})
// </h1>
// <i
//   className="fi text-2xl fi-rr-angle-small-up"
//   onClick={toogleFun}
// ></i>
// {currIndex && (
//   <div className="m-5">
//     {menuData[0]?.card?.card?.itemsCards.map(
//       ({ card: { info } }) => (
//         <h1>{info.name}</h1>
//       )
//     )}
//   </div>
// )}
// </div>
// } */}
// </div>
// </div>
// </div>
// );
// };

// function MenuCard({ card }) {
// let hello = false;

// if (card["@type"]) {
// hello = true;
// }

// const [isOpen, setIsOpen] = useState(hello);

// function toggleDropDown() {
// setIsOpen((prev) => !prev);
// }

// if (card.itemCards) {
// const { title, itemCards } = card;

// return (
// <>
// <div className="mt-7">
// <div className="flex justify-between">
// <h1 className="font-bold text-xl">
// {title} ({itemCards.length})
// </h1>
// <i
// onClick={toggleDropDown}
// className={
//   "fi text-xl fi-rr-angle-small-" + (isOpen ? "up" : "down")
// }
// ></i>
// </div>
// {isOpen && <DetailMenu itemCards={itemCards} />}
// </div>
// <hr
// className={
// "text-gray-300 my-5 border-" + (card["@type"] ? "[10px]" : "[4px]")
// }
// />
// </>
// );
// } else {
// const { title, categories } = card;
// return (
// <div>
// <h1 className={"font-bold text-" + (card["@type"] ? "xl" : "base")}>
// {" "}
// {title}
// </h1>
// {categories.map((data) => {
// <MenuCard card={data} />;
// })}
// </div>
// );
// }
// }