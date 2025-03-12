import React from 'react'
import RestaurantCard from './RestaurantCard'

const OnlineFoodDelivery = ({data}) => {
  return (
    <div>
        OnlineFoodDelivery
        {/* <RestaurantCard {...info}/> */}
        <div  className='grid grid-cols-4 gap-10'>
        {
                data.map(({info}) => (
                    <div className='hover:scale-90 duration-300'>
                        <RestaurantCard {...info}/>
                    </div>
                ))
               }
               </div>
    </div>
  )
}

export default OnlineFoodDelivery