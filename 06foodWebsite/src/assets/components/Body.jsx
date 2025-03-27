import React, { useContext, useEffect, useState } from "react";
import OnYourMind from "./OnYourMind";
import TopRestaurent from "./TopRestaurent";
import OnlineFoodDelivery from "./OnlineFoodDelivery";
import { Coordinates } from "../../context/contextApi";

const Body = () => {

  const [topReataurantData, setTopRestaurantData] = useState([])
  const [onYourMindData, setOnYourMindData] = useState([])
  const {coord : {lat, lng}} = useContext(Coordinates)
  // let [tempdata, setTempData] = useState([])


   async function fetchData() {
          try {
              const response = await fetch(
                  `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
              );
              const result = await response.json();
              setTopRestaurantData(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
            setOnYourMindData(result?.data?.cards[0]?.card?.card?.imageGridCards?.info || []);
            // console.log(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            // let thedata = (result?.data?.cards[0]?.card?.card?.imageGridCards?.info)
            // setTempData(result?.data?.cards[0]?.card?.card?.imageGridCards?.info)
          } catch (error) {
              console.error("Error fetching data:", error);
          }
      }
  
      useEffect(() => {
          fetchData();
      }, [lat, lng]);



  // const [data, setData] = useState([]);
  // const [value, setValue] = useState(0);
  
  // console.log(data?.cards?.[0]?.card?.imageGridCards?.info);

  // async function fetchData() {
  //   try {
  //     const response = await fetch(
  //       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //     );
  //     const result = await response.json();
  //     // console.log(result);
  //     // console.log(result?.data?.cards?.[0].card);
  //     // console.log(result?.data?.card?.[0]?.card?.imageGridCards?.info);
  //     setData(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
  //     // console.log(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // function handleNext() {
  //   if (value < 124) {
  //     setValue((prev) => prev + 31);
  //   }
  // }

  // function handlePrev() {
  //   if (value > 0) {
  //     setValue((prev) => prev - 31);
  //   }
  // }

  return (
    <div className="w-full overflow-hidden">
      <div className="w-[75%] flex flex-col overflow-hidden mt-3 mx-auto">
        {/* {
          tempdata.map((item) => (
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`} alt="" />
          ))
        } */}
        <OnYourMind data={onYourMindData}/>
        <TopRestaurent data={topReataurantData}/>
        <OnlineFoodDelivery data={topReataurantData}/>
      </div>
    </div>
  );
};

export default Body;
