import React from 'react'
import { Link } from 'react-router-dom'

const RestaurantCard = (info) => {
  console.log(info.link.split("/"))
  return (
    // <Link to={`/restaurantMenu/${info.link.split("/")[4]}`}>
    <Link to={`/restaurantMenu/${info.id}`}>

        <div  className='min-w-[295px] h-[182px] relative overflow-hidden'>
                        <img className='w-full h-full rounded-2xl object-cover' src={`https://media-assets.swiggy.com/swiggy/image/upload/${info?.cloudinaryImageId}`} alt="" />
                        {/* <div className='absolute bg-gradient-to-t from-black from-1% to-transparent to-40% w-full h-full'></div> */}
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black from-1% to-transparent to-40% z-10 rounded-2xl"></div>
                        <p className='absolute bottom-0 z-20 text-white text-2xl ml-2 mb-1 font-bold '>{info?.aggregatedDiscountInfoV3?.header + " " + info?.aggregatedDiscountInfoV3?.subHeader}</p>
                    </div>
                    <div className='mt-3'>
                        <h2 className='text-lg font-semibold'>{info.name}</h2>
                        <p className='text-base font-semibold flex gap-1 items-center'>{" "}
                        <i class="fi fi-ss-circle-star mt-1 text-green-600 text-lg"></i>
                        {info?.avgRating} .{" "}
                            <span>{info?.sla?.slaString}</span></p>
                        <p className='line-clamp-1 text-black/10 font-medium'>{info.cuisiness}</p>
                        <p className='line-clamp-1 text-black/60 font-medium'>{info.locality}</p>
                    </div>
    </Link>
  )
}

export default RestaurantCard