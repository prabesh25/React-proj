// import React from "react";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { AiFillEye, AiFillHeart } from "react-icons/ai";
// import Homeproduct from "./home_product";
// import {BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoYoutube} from "react-icons/bi";

// const Home = () => {
//     const [trendingProduct, setTrendingProduct] = useState(Homeproduct)
//     //filter of trending product
//     const filtercate = (x) => {
//         const filterproduct = Homeproduct.filter((curElem) => {
//             return curElem.type === x
//         })
//         setTrendingProduct(filterproduct)
//     }
//     //all trending product on click of h2

//     const allTrendingProcuct = () => {
//         setTrendingProduct(Homeproduct)
//     }

//   return (
//     <>
//       <div className="home">
//         <div className="top_banner">
//             <img src="image\pngwing.com.png" alt="" />
//           {/* <div className='contant'></div> */}
//           <div className="contant">
//             <h3>silver aluminum</h3>
//             <h2>Apple Watch</h2>
//             <p>30% off at your first odder</p>
//             <Link to="/shop" className="link">
//               Shop Now
//             </Link>
//           </div>
//         </div>
//         <div className="trending">
//           <div className="container">
//             <div className="left_box">
//               <div className="header">
//                 <div className="heading">
//                   <h2 onClick={() => allTrendingProcuct()}>trending product</h2>
//                 </div>
//                 <div className="cate">
//                   <h3 onClick={() => filtercate('new')}>New</h3>
//                   <h3 onClick={() => filtercate('featured')}>Featured</h3>
//                   <h3 onClick={() => filtercate('top')}>top selling</h3>
//                 </div>
//               </div>
//               <div className="products">
//                 <div className="container">
//                    {
//                     trendingProduct.map((curElem) => {
//                         return (
//                             <>
//                               <div className="box">
//                                 <div className="img_box">
//                                     <img src={curElem.image} alt="" ></img>
//                                     <div className="icon">
//                                         <div className="icon_box">
//                                             <AiFillEye/>
//                                         </div>
//                                         <div className="icon_box">
//                                             <AiFillHeart/>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="info">
//                                     <h3>{curElem.Name}</h3>
//                                     <p>Rs{curElem.price}</p>
//                                     <button className="btn">Add to cart</button>
//                                     {/* <Link to='/cart'>Add To Cart</Link> */}
//                                 </div>
//                               </div>
//                             </>
//                         )
//                     })
//                    }
//                 </div>
//               </div>
//             </div>
//             <div className="right_box">
//                 <div className="container">
//                     <div className="testimonial">
//                         <div className="head">
//                             <h3>our testimonial</h3>
//                         </div>
//                         <div className="detail">
//                             <div className="img_box">
//                                 <img src="image/T1.png" alt="testimonial" />
//                             </div>
//                             <div className="info">
//                                 <h3>stephan robot</h3>
//                                 <h3>web designer</h3>
//                                 <p>We provide different services and we also offer products accourding to customer requirements.</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="newsletter">
//                         <div className="head">
//                             <h3>newsletter</h3>
//                         </div>
//                         <div className="form">
//                             <p>joinn our mailing link!</p>
//                             <input type="email" placeholder="E-mail" autoComplete="off"/>
//                             <button>subscribe</button>
//                             <div className="icon_box">
//                                 <div className="icon">
//                                     <BiLogoFacebook/>
//                                 </div>
//                                 <div className="icon">
//                                     <BiLogoTwitter/>
//                                 </div>
//                                 <div className="icon">
//                                     <BiLogoInstagram/>
//                                 </div>
//                                 <div className="icon">
//                                     <BiLogoYoutube/>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;










































// import React from "react";
// import { Link } from "react-router-dom";
// import { useState,useEffect } from "react";
// import { AiFillEye, AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
// import Homeproduct from "./home_product";
// import {
//   BiLogoFacebook,
//   BiLogoInstagram,
//   BiLogoTwitter,
//   BiLogoYoutube,
// } from "react-icons/bi";

// const Home = ({addtocart}) => {
//   //product category
//   const [newProduct, setNewProduct] = useState([]);
//   const [featuredProduct, setFeaturedProduct] = useState([]);
//   const [topProduct, setTopProduct] = useState([]);


//   const [trendingProduct, setTrendingProduct] = useState(Homeproduct);

//   const filtercate = (x) => {
//     const filterproduct = Homeproduct.filter((curElem) => curElem.type === x);
//     setTrendingProduct(filterproduct);
//   };

//   const allTrendingProcuct = () => setTrendingProduct(Homeproduct);

//   //product type
//   useEffect(() => {
//     productcategory();
//   }, []);
//   const productcategory = () => {
//     //new product
//     const newcategory = Homeproduct.filter((x) => {
//       return x.type === "new";
//     });
//     setNewProduct(newcategory);

//     //featured product
//     const featuredProduct = Homeproduct.filter((x) => {
//         return x.type === 'featured'
//     })
//     setFeaturedProduct(featuredProduct)

//     const topcategory = Homeproduct.filter((x) => {
//         return x.type === 'top'
//     })
//     setTopProduct(topcategory)

//   };

  

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Banner */}
//       <div className="relative h-[600px] overflow-hidden bg-gradient-to-r from-indigo-900 to-indigo-700">
//         <img
//           src="image/pngwing.com.png"
//           alt="Smartwatch"
//           className="absolute right-0 top-1/2 h-96 -translate-y-1/2 transform object-contain opacity-75 transition-all duration-500 hover:scale-105"
//         />
//         <div className="container relative z-10 flex h-full items-center px-4 text-white">
//           <div className="max-w-2xl space-y-6">
//             <h3 className="text-xl font-light tracking-wider text-indigo-200">
//               Silver Aluminum
//             </h3>
//             <h2 className="text-6xl font-bold leading-tight">
//               Apple Watch Series 8
//             </h2>
//             <p className="text-lg text-indigo-100">
//               30% off on your first order
//             </p>
//             <Link
//               to="/shop"
//               className="inline-block rounded-full bg-white px-8 py-3 font-semibold text-indigo-900 transition-all duration-300 hover:scale-105 hover:bg-opacity-90 hover:shadow-xl"
//             >
//               Shop Now
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Trending Products Section */}
//       <div className="container mx-auto px-4 py-16">
//         <div className="flex flex-col gap-12 lg:flex-row">
//           {/* Left Column */}
//           <div className="flex-1">
//             <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
//               <h2
//                 onClick={allTrendingProcuct}
//                 className="cursor-pointer text-3xl font-bold text-gray-800 transition-all duration-300 hover:text-indigo-600"
//               >
//                 Trending Products
//               </h2>
//               <div className="flex gap-6">
//                 {["New", "Featured", "top"].map((category) => (
//                   <h3
//                     key={category}
//                     onClick={() => filtercate(category.toLowerCase())}
//                     className="cursor-pointer font-semibold uppercase text-gray-500 transition-all duration-300 hover:text-indigo-600"
//                   >
//                     {category}
//                   </h3>
//                 ))}
//               </div>
//             </div>

//             <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
//               {trendingProduct.map((curElem) => (
//                 <div
//                   key={curElem.id}
//                   className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
//                 >
//                   <div className="relative h-80 overflow-hidden">
//                     <img
//                       src={curElem.image}
//                       alt={curElem.Name}
//                       className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
//                     />
//                     <div className="absolute right-4 top-4 flex flex-col gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
//                       <button className="rounded-full bg-white p-3 text-gray-700 shadow-md transition-all hover:bg-indigo-600 hover:text-white">
//                         <AiFillEye className="h-6 w-6" />
//                       </button>
//                       <button className="rounded-full bg-white p-3 text-gray-700 shadow-md transition-all hover:bg-indigo-600 hover:text-white">
//                         <AiFillHeart className="h-6 w-6" />
//                       </button>
//                     </div>
//                   </div>
//                   <div className="p-6">
//                     <h3 className="mb-2 text-xl font-semibold text-gray-800">
//                       {curElem.Name}
//                     </h3>
//                     <p className="mb-4 text-2xl font-bold text-indigo-600">
//                       Rs {curElem.price}
//                     </p>
//                     <button onClick={() => addtocart(curElem)} className="w-full rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition-all hover:bg-indigo-700 hover:shadow-md">
//                       Add to Cart
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <button>show more</button>
//           </div>

//           {/* Right Column */}
//           <div className="w-full space-y-8 lg:w-96">
//             {/* Testimonial Card */}
//             <div className="rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
//               <h3 className="mb-6 text-2xl font-bold text-gray-800">
//                 Our Testimonial
//               </h3>
//               <div className="flex items-center gap-6">
//                 <div className="h-20 w-20 overflow-hidden rounded-full border-4 border-indigo-100">
//                   <img
//                     src="image/T1.png"
//                     alt="Stephan Robot"
//                     className="h-full w-full object-cover"
//                   />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800">
//                     Stephan Robot
//                   </h3>
//                   <p className="text-sm text-gray-500">Web Designer</p>
//                   <p className="mt-2 text-gray-600">
//                     We provide different services and offer products according
//                     to customer requirements.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Newsletter Card */}
//             <div className="rounded-xl bg-indigo-600 p-8 text-white shadow-lg">
//               <h3 className="mb-6 text-2xl font-bold">Newsletter</h3>
//               <div className="space-y-6">
//                 <p className="text-indigo-100">Join our mailing list!</p>
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="w-full rounded-lg border-0 px-4 py-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-white"
//                 />
//                 <button className="w-full rounded-lg bg-white px-6 py-3 font-semibold text-indigo-600 transition-all hover:bg-opacity-90 hover:shadow-md">
//                   Subscribe
//                 </button>
//                 <div className="flex justify-center gap-4">
//                   {[
//                     BiLogoFacebook,
//                     BiLogoTwitter,
//                     BiLogoInstagram,
//                     BiLogoYoutube,
//                   ].map((Icon, index) => (
//                     <a
//                       key={index}
//                       href="#"
//                       className="text-2xl text-white transition-all hover:text-indigo-200 hover:scale-110"
//                     >
//                       <Icon />
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="banners">
//         <div className="container">
//           <div className="left_box">
//             <div className="box">
//               <img src="image/" alt="banner" />
//             </div>
//             <div className="box">
//               <img src="image/" alt="" />
//             </div>
//             <div className="right_box">
//               <div className="top">
//                 <img src="image/Multi-Banner-3.webp" alt="" />
//                 <img src="image/" alt="" />
//               </div>
//               <div className="bottom">
//                 <img src="image/" alt="" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="product_type">
//         <div className="container">
//           <div className="box">
//             <div className="header">
//               <h2>New Product</h2>
//             </div>
//             {newProduct.map((curElm) => {
//               return (
//                 <>
//                   <div className="productbox">
//                     <div className="img-box">
//                       <img src={curElm.image} alt="" />
//                     </div>
//                     <div className="detail">
//                         <h3>{curElm.Name}</h3>
//                         <p>${curElm.price}</p>
//                         <div className="icon">
//                             <button><AiFillEye/></button>
//                             <button><AiFillHeart/></button>
//                             <button  onClick={() => addtocart(curElm)}><AiOutlineShoppingCart /></button>

//                         </div>
//                     </div>
//                   </div>
//                 </>
//               );
//             })}
//           </div>

//           <div className="box">
//             <div className="header">
//               <h2>Featured Product</h2>
//             </div>
//             {featuredProduct.map((curElm) => {
//               return (
//                 <>
//                   <div className="productbox">
//                     <div className="img-box">
//                       <img src={curElm.image} alt="" />
//                     </div>
//                     <div className="detail">
//                         <h3>{curElm.Name}</h3>
//                         <p>${curElm.price}</p>
//                         <div className="icon">
//                             <button><AiFillEye/></button>
//                             <button><AiFillHeart/></button>
//                             <button onClick={() => addtocart(curElm)}><AiOutlineShoppingCart /></button>

//                         </div>
//                     </div>
//                   </div>
//                 </>
//               );
//             })}
//           </div>

//           <div className="box">
//             <div className="header">
//               <h2>Top Product</h2>
//             </div>
//             {topProduct.map((curElm) => {
//               return (
//                 <>
//                   <div className="productbox">
//                     <div className="img-box">
//                       <img src={curElm.image} alt="" />
//                     </div>
//                     <div className="detail">
//                         <h3>{curElm.Name}</h3>
//                         <p>${curElm.price}</p>
//                         <div className="icon">
//                             <button><AiFillEye/></button>
//                             <button><AiFillHeart/></button>
//                             <button onClick={() => addtocart(curElm)}><AiOutlineShoppingCart /></button>

//                         </div>
//                     </div>
//                   </div>
//                 </>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;











































import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AiFillEye,
  AiFillHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";
import Homeproduct from "./home_product";

const Home = ({ addtocart }) => {
  const [newProduct, setNewProduct] = useState([]);
  const [featuredProduct, setFeaturedProduct] = useState([]);
  const [topProduct, setTopProduct] = useState([]);
  const [trendingProduct, setTrendingProduct] = useState(Homeproduct);

  const filtercate = (x) => {
    const filterproduct = Homeproduct.filter((curElem) => curElem.type === x);
    setTrendingProduct(filterproduct);
  };

  const allTrendingProcuct = () => setTrendingProduct(Homeproduct);

  useEffect(() => {
    const newcategory = Homeproduct.filter((x) => x.type === "new");
    setNewProduct(newcategory);

    const featured = Homeproduct.filter((x) => x.type === "featured");
    setFeaturedProduct(featured);

    const top = Homeproduct.filter((x) => x.type === "top");
    setTopProduct(top);
  }, []);

  const renderProductCard = (curElm) => (
    <div className="flex w-full max-w-sm flex-col overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg transition ">
      <div className="relative h-60 w-full overflow-hidden">
        <img
          src={curElm.image}
          alt={curElm.Name}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute right-2 top-2 flex flex-col gap-2 opacity-0 transition-all group-hover:opacity-100">
          <button className="rounded-full bg-white p-2 shadow hover:bg-indigo-600 hover:text-white">
            <AiFillEye />
          </button>
          <button className="rounded-full bg-white p-2 shadow hover:bg-indigo-600 hover:text-white">
            <AiFillHeart />
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{curElm.Name}</h3>
        <p className="text-indigo-600 text-xl font-bold mb-2">Rs {curElm.price}</p>
        <button
          onClick={() => addtocart(curElm)}
          className="w-full rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen  bg-gray-50">
      {/* Hero */}
      <div className="relative h-[600px] overflow-hidden bg-gradient-to-r from-indigo-900 to-indigo-700">
        <img
          src="image/pngwing.com.png"
          alt="Smartwatch"
          className="absolute right-0 top-1/2 h-96 -translate-y-1/2 transform opacity-75 transition hover:scale-105 hidden sm:block"
        />
        <img
          src="image/phoneimg.jpg"
          alt="Smartwatch"
          className="w-full h-full absolute right-0 top-1/2 h-96 -translate-y-1/2 transform opacity-75 transition hover:scale-105 sm:hidden"
        />
        <div className="relative z-10 flex h-full items-center px-4 text-white max-w-6xl ">
          <div className="space-y-6 ml-[15%]">
            <h3 className="text-xl  font-light tracking-wider text-indigo-200">
              Silver Aluminum
            </h3>
            <h2 className="text-6xl font-bold space-y-6">Apple Watch <br /> Series 8</h2>
            <p className="text-lg text-indigo-100">30% off on your first order</p>
            <Link
              to="/shop"
              className="inline-block rounded-full bg-white px-8 py-3 font-semibold text-indigo-900 transition hover:scale-105 hover:bg-opacity-90 hover:shadow-xl"
            >
              Shop Now
            </Link>
          </div>
        </div>
        {/* <div className="relative z-10 flex h-full items-center justify-start px-4 text-white max-w-6xl mx-auto">
  <div className="space-y-6 text-left">
    <h3 className="text-xl font-light tracking-wider text-indigo-200">
      Silver Aluminum
    </h3>
    <h2 className="text-6xl font-bold">Apple Watch Series 8</h2>
    <p className="text-lg text-indigo-100">30% off on your first order</p>
    <Link
      to="/shop"
      className="inline-block rounded-full bg-white px-8 py-3 font-semibold text-indigo-900 transition hover:scale-105 hover:bg-opacity-90 hover:shadow-xl"
    >
      Shop Now
    </Link>
  </div>
</div> */}






      </div>

      {/* Trending Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="flex-1">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <h2
                onClick={allTrendingProcuct}
                className="cursor-pointer text-3xl font-bold text-gray-800 hover:text-indigo-600"
              >
                Trending Products
              </h2>
              <div className="flex gap-6">
                {["New", "Featured", "Top"].map((category) => (
                  <h3
                    key={category}
                    onClick={() => filtercate(category.toLowerCase())}
                    className="cursor-pointer font-semibold uppercase text-gray-500 hover:text-indigo-600"
                  >
                    {category}
                  </h3>
                ))}
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {trendingProduct.map((curElem) => renderProductCard(curElem))}
            </div>

            <div className="mt-8 text-center">
              <button className="rounded bg-indigo-600 px-6 py-2 text-white hover:bg-indigo-700">
                Show More
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full space-y-8 lg:w-96">
            {/* Testimonial */}
            <div className="rounded-xl bg-white p-8 shadow hover:shadow-md">
              <h3 className="mb-6 text-2xl font-bold text-gray-800">
                Our Testimonial
              </h3>
              <div className="flex items-center gap-6">
                <img
                  src="image/T1.png"
                  alt="Stephan Robot"
                  className="h-20 w-20 rounded-full border-4 border-indigo-100 object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Stephan Robot
                  </h3>
                  <p className="text-sm text-gray-500">Web Designer</p>
                  <p className="mt-2 text-gray-600">
                    We provide different services and offer products according
                    to customer requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="rounded-xl bg-indigo-600 p-8 text-white shadow-lg">
              <h3 className="mb-6 text-2xl font-bold">Newsletter</h3>
              <p className="text-indigo-100 mb-4">Join our mailing list!</p>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mb-4 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="w-full rounded-lg bg-white px-6 py-3 font-semibold text-indigo-600 hover:bg-opacity-90 hover:shadow">
                Subscribe
              </button>
              <div className="mt-6 flex justify-center gap-4">
                {[BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoYoutube].map(
                  (Icon, index) => (
                    <a key={index} href="#" className="text-2xl hover:text-indigo-200">
                      <Icon />
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Banners Section */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <img src="image/banner1.webp" alt="Banner 1" className="rounded-xl shadow" />
          <img src="image/bannerr2.webp" alt="Banner 2" className="rounded-xl shadow" />
          <div className="flex flex-col gap-4">
            {/* <img src="image/banner3.avif" alt="Top Banner" className="rounded-xl shadow" /> */}
            <img src="image/banner3.webp" alt="Bottom Banner" className="rounded-xl shadow" />
          </div>
        </div>
      </div>

      {/* Product Types */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        {[["New Product", newProduct], ["Featured Product", featuredProduct], ["Top Product", topProduct]].map(([title, products]) => (
          <div key={title} className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">{title}</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((curElm) => (
                <div
                  key={curElm.id}
                  className="group flex flex-col overflow-hidden rounded-xl bg-white shadow hover:shadow-lg"
                >
                  <div className="h-60 w-full overflow-hidden">
                    <img
                      src={curElm.image}
                      alt={curElm.Name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{curElm.Name}</h3>
                    <p className="text-indigo-600 font-bold mb-2">${curElm.price}</p>
                    <div className="flex items-center gap-2">
                      <button className="text-gray-600 hover:text-indigo-600">
                        <AiFillEye />
                      </button>
                      <button className="text-gray-600 hover:text-indigo-600">
                        <AiFillHeart />
                      </button>
                      <button
                        onClick={() => addtocart(curElm)}
                        className="text-gray-600 hover:text-indigo-600"
                      >
                        <AiOutlineShoppingCart />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

