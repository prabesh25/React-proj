import React from 'react'
import { useState, useEffect } from 'react';

const OnYourMind = ({data}) => {
  console.log(data)
  let know = (data?.info?.badges?.imageBadges)

  // know.map((each) => (
  //   console.log(each.ImageId)
  // ))
    
    const [value, setValue] = useState(0);
    // const [data, setData] = useState([]);
    // console.log(data?.cards?.[0]?.card?.imageGridCards?.info)
    function handleNext() {
        if (value < 124) {
          setValue((prev) => prev + 31);
        }
      }
    
      function handlePrev() {
        if (value > 0) {
          setValue((prev) => prev - 31);
        }
      }
    // async function fetchData() {
    //   try {
    //     const response = await fetch(
    //       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    //     );
    //     const result = await response.json();
    //     // console.log(result)
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
  return (
    <div>
      <div className="flex flex-col">
          <div className="flex items-center justify-between mt-5">
            <h1 className="font-bold text-2xl">What's on your mind?</h1>
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
          <div className="overflow-hidden mt-2">
            <div
              style={{ transform: `translateX(-${value}%)` }}
              className="flex duration-700 gap-2"
            >
              {data.map((item) => (
                <img
                  key={item.imageId}
                  className="w-30"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
                  alt=""
                />
              ))}
            </div>
          </div>
        </div>
        <hr className='text-gray-300 mt-5'/>
    </div>
  )
}

export default OnYourMind;




