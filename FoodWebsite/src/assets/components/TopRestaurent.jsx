
import React, { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';

const TopRestaurent = ({data}) => {
    const [value, setValue] = useState(0);
    // const [data, setData] = useState([]);
    console.log(data)

    function handleNext() {
        // if (value < 360) {
        setValue((prev) => prev + 50);
        // }
    }

    function handlePrev() {
        // if (value > 0) {
        setValue((prev) => prev - 50);
        // }
    }

    // async function fetchData({data}) {
    //     try {
    //         const response = await fetch(
    //             "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    //         );
    //         const result = await response.json();
    //         setData(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
    //     } catch (error) {
    //         console.error("Error fetching data:", error);
    //     }
    // }

    // useEffect(() => {
    //     fetchData();
    // }, []);

    // console.log(data);

    return (
        <div className="mt-10 flex flex-col">
            <div className="flex items-center justify-between mt-5">
                <h1 className="font-bold text-2xl">Top restaurant chains in Kathmandu</h1>
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

            <div className={`flex w-full duration-300 mt-4 gap-5`} style={{ transform: `translateX(-${value}%)` }}>
               {
                data.map(({info}) => (
                    <div className='hover:scale-90 duration-300'>
                        <RestaurantCard {...info}/>
                    </div>
                ))
               }
               
                {/* {data.map((restaurant, index) => (
                    <div key={restaurant?.info?.id || index} className="relative min-w-[295px] h-[182px]">
                        <img
                            className="w-full absolute h-full rounded-2xl aspect-video object-cover"
                            src={`https://media-assets.swiggy.com/swiggy/image/upload/${restaurant?.info?.cloudinaryImageId}`}
                            alt={restaurant?.info?.name}
                        />
                        <div className=' bg-red-500 w-full h-full'>hihihi</div>
                    </div>
                ))} */}
            </div>
            <hr class="text-gray-300 mt-2" />
            {/* <hr className="border" /> */}
        </div>
    );
};

export default TopRestaurent;
