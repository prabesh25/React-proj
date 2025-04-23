// import React, { useState } from "react";
// import { AiFillHeart, AiFillEye, AiOutlineClose } from "react-icons/ai";
// import { useSearchParams } from "react-router";

// const Shop = ({ shop, Filter, allcatefilter, addtocart }) => {
//   //toogle product detail
//   const [showDetail, setShowDetail] = useState(false);
//   //detail page data
//   const [detail, setDetail] = useState([])
//   // showing detail box
//   const detailpage = (product) => {
//     const detaildata = ([{product}])
//     const productdetail = detaildata[0]['product']
//     setDetail(productdetail)
//     setShowDetail(true);
//   };

//   const closedetail = () => {
//     setShowDetail(false);
//   };
//   return (
//     <>
//       {showDetail ? (
//         <>
//           <div className="product_detail">
//             <button className="close_btn" onClick={closedetail}>
//               <AiOutlineClose />
//             </button>
//             <div className="container">
//                 <div className="img_box">
//                     <img src={detail.image} alt="" />
//                 </div>
//                 <div className="info">
//                     <h4>#
//                         {detail.cat}
//                     </h4>
//                     <h2>{detail.Name}</h2>
//                     <p>Every one will love.</p>
//                     <h3>${detail.price}</h3>
//                     <button onClick={() => addtocart(curElm)}>Add To Cart</button>
//                 </div>
//             </div>
//           </div>
//         </>
//       ) : null}

//       <div className="shop">
//         <h2>#shop</h2>
//         <p>Home . shop</p>
//         <div className="contianer">
//           <div className="left_box">
//             <div className="category">
//               <div className="header">
//                 <h2>all categories</h2>
//               </div>
//               <div className="box">
//                 <ul>
//                   <li onClick={() => allcatefilter()}></li>
//                   <li onClick={() => Filter("tv")}># tv</li>
//                   <li onClick={() => Filter("laptop")}># laptop</li>
//                   <li onClick={() => Filter("watch")}># watch</li>
//                   <li onClick={() => Filter("speaker")}># speaker</li>
//                   <li onClick={() => Filter("electronics")}># electronics</li>
//                   <li onClick={() => Filter("headphone")}># headphone</li>
//                   <li onClick={() => Filter("phone")}># phone</li>
//                 </ul>
//               </div>
//             </div>
//             <div className="banner">
//               <div className="img_box">
//                 <img src="image/" alt="" />
//               </div>
//             </div>
//           </div>
//           <div className="right_box">
//             <div className="banner">
//               <div className="img_box">
//                 <img src="image/" alt="" />
//               </div>
//             </div>
//             <div className="product_box">
//               <h2>Shop Product</h2>
//               <div className="product_container">
//                 {shop.map((curElm) => {
//                   return (
//                     <>
//                       <div className="box">
//                         <div className="img_box">
//                           <img src={curElm.image} alt="" />
//                           <div className="icon">
//                             <li>
//                               {" "}
//                               <AiFillHeart />
//                             </li>
//                             <li onClick={() => detailpage(curElm)}>
//                               {" "}
//                               <AiFillEye />
//                             </li>
//                           </div>
//                         </div>
//                         <div className="detail">
//                           <h3>{customElements.Name}</h3>
//                           <p>{curElm.price}</p>
//                           <button onClick={() => addtocart(curElm)}>
//                             Add To Cart
//                           </button>
//                         </div>
//                       </div>
//                     </>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Shop;























import React, { useState } from "react";
import { AiFillHeart, AiFillEye, AiOutlineClose } from "react-icons/ai";

const Shop = ({ shop, Filter, allcatefilter, addtocart }) => {
  const [showDetail, setShowDetail] = useState(false);
  const [detail, setDetail] = useState({});

  const detailpage = (product) => {
    setDetail(product);
    setShowDetail(true);
  };

  const closedetail = () => setShowDetail(false);

  return (
    <>
      {/* Product Detail Modal */}
      {showDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="relative mx-4 w-full max-w-4xl rounded-xl bg-white p-8 shadow-2xl">
            <button
              onClick={closedetail}
              className="absolute right-4 top-4 rounded-full bg-gray-100 p-2 text-2xl text-gray-600 transition-all hover:bg-gray-200 hover:text-red-500"
            >
              <AiOutlineClose />
            </button>
            <div className="flex flex-col gap-8 md:flex-row">
              <div className="md:w-1/2">
                <img
                  src={detail.image}
                  alt={detail.Name}
                  className="h-96 w-full object-contain"
                />
              </div>
              <div className="md:w-1/2">
                <h4 className="mb-2 text-lg font-semibold text-indigo-600">
                  #{detail.cat}
                </h4>
                <h2 className="mb-4 text-3xl font-bold text-gray-800">
                  {detail.Name}
                </h2>
                <p className="mb-4 text-gray-600">Every one will love.</p>
                <h3 className="mb-6 text-2xl font-bold text-indigo-600">
                  ${detail.price}
                </h3>
                <button
                  onClick={() => addtocart(detail)}
                  className="w-full rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition-all hover:bg-indigo-700 hover:shadow-md"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Shop Content */}
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gray-800">#shop</h2>
          <p className="mt-2 text-gray-500">Home • shop</p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Left Sidebar */}
          <div className="lg:w-64">
            <div className="rounded-xl bg-white p-6 shadow-lg">
              <h2 className="mb-4 text-xl font-bold text-gray-800">
                All Categories
              </h2>
              <ul className="space-y-3">
                <li
                  onClick={allcatefilter}
                  className="cursor-pointer text-gray-600 transition-all hover:text-indigo-600 hover:underline"
                >
                  All Products
                </li>
                {["tv", "laptop", "watch", "speaker", "electronics", "headphone", "phone"].map(
                  (category) => (
                    <li
                      key={category}
                      onClick={() => Filter(category)}
                      className="cursor-pointer capitalize text-gray-600 transition-all hover:text-indigo-600 hover:underline"
                    >
                      # {category}
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="mt-8 hidden lg:block">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src="image/bannerr2.webp" // Add your banner image path
                  alt="Promotion"
                  className="h-64 w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1">
            <div className="mb-8 hidden lg:block">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src="image/banner1.webp" // Add your banner image path
                  alt="Main Banner"
                  className="h-48 w-full object-cover"
                />
              </div>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-gray-800">
                Shop Products
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {shop.map((curElm) => (
                  <div
                    key={curElm.id}
                    className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={curElm.image}
                        alt={curElm.Name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute right-2 top-2 flex flex-col gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                        <button className="rounded-full bg-white p-2 text-gray-700 shadow-md transition-all hover:bg-indigo-600 hover:text-white">
                          <AiFillHeart className="h-6 w-6" />
                        </button>
                        <button
                          onClick={() => detailpage(curElm)}
                          className="rounded-full bg-white p-2 text-gray-700 shadow-md transition-all hover:bg-indigo-600 hover:text-white"
                        >
                          <AiFillEye className="h-6 w-6" />
                        </button>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="mb-2 text-lg font-semibold text-gray-800">
                        {curElm.Name}
                      </h3>
                      <p className="mb-4 text-xl font-bold text-indigo-600">
                        ${curElm.price}
                      </p>
                      <button
                        onClick={() => addtocart(curElm)}
                        className="w-full rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white transition-all hover:bg-indigo-700"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;