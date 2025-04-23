

// import React from 'react';
// import { MdLocalShipping } from 'react-icons/md';
// import { AiOutlineSearch } from 'react-icons/ai';
// import { FiLogIn } from 'react-icons/fi';
// import { useAuth0 } from "@auth0/auth0-react";
// import { CiLogout, CiUser } from 'react-icons/ci';
// import { Link } from 'react-router-dom';



// const Nav = ({search, setSearch, searchproduct}) => {
//     const { loginWithRedirect, logout, user, isAuthenticated,} = useAuth0();

//   return (
//     <>
//       <div className="header w-full">
//         {/* <div className="top_header flex p-2.5 bg-[#f6f7f8] items-center">
//           <div className="icon ml-5 text-[#ababab] text-[22px]">
//             <MdLocalShipping />
//           </div>
//           <div className="info ml-3">
//             <p className="text-[#8a8a8a] text-[14px]">
//               Free Shipping When Shopping up to Rs.10000
//             </p>
//           </div>
//         </div> */}
        
//         <div className="bg-gradient-to-r from-[#411b99] via-[#3b3b58] to-[#502b99]
//     mid_header flex py-4 px-10 max-w-full justify-between items-center">
//           <div className="logo flex text-purple-800 text-xl font-bold items-center">
//             <img
//               className="h-[45px] w-auto cursor-pointer object-cover"
//               src="image/logo2.png"
//               alt="Logo"
//             />
//             <p className='mt-1'>Alternatives</p>
//           </div>
          
//           <div className="search_box flex items-center">
//             <input
//               className="outline-none bg-[#f6f7f8] w-[250px] border border-[#8a8a8a] rounded-l-full py-2 px-4 text-[14px]"
//               type="text"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search..."
//             />
//             <button onClick={searchproduct} className="w-[50px] h-[39px] border-[#cd1e76] border rounded-r-full cursor-pointer bg-[#cd1e76] flex justify-center items-center">
//               <AiOutlineSearch className="text-white text-[20px]" />
//             </button>
//           </div>
//           {
//                 isAuthenticated ?  
//                 //if user is loggedin then logout button show hunxa sathsathai userprofile panishow hunxa.
//                 <div className="user flex items-center">
//                 <div className="icon text-[#ababab] text-[22px]">
//                   <CiLogout />
//                 </div>
//                 <div className="btn ml-3">
//                   <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className="px-4 py-2 bg-[#cd1e76] text-white rounded-full text-[14px] cursor-pointer hover:bg-[#e02f8f]">
//                     Logout
//                   </button>
//                 </div>
//               </div>
//               :
//               //if user is not loggedin then login button show hunxa.
//               <div className="user flex items-center">
//               <div className="icon text-[#ababab] text-[22px]">
//                 <FiLogIn />
//               </div>
//               <div className="btn ml-3">
//                 <button onClick={() => loginWithRedirect()} className="px-4 py-2 bg-[#cd1e76] text-white rounded-full text-[14px] cursor-pointer hover:bg-[#e02f8f]">
//                   Login
//                 </button>
//               </div>
//             </div>

//           }
       

         
//         </div>
//         <div className=' last_header w-full py-2 px-2 flex bg-[#232323] justify-between'>
//             <div className='user_Profile flex mt-2 '>
//                 {
//                     // yaha user profile show huncha
//                     isAuthenticated ? <>
//                     <div className='icon rounded-full py-2 px-2 bg-white'>
//                        <CiUser /> 
//                     </div>
//                     <div className='info ml-2 '>
//                     <h2 className='text-white text-xl'>{user.name}</h2>
//                     <p className='text-[#ababab] text-sm'>{user.email}</p>
//                     </div>
                   
//                     </>
//                     :
//                     <>
//                     <div className='icon rounded-[10px] py-2 px-2 bg-white'>
//                        <CiUser /> 
//                     </div>
//                     <div className='info  ml-2'>
//                         <p className='text-[#ababab] text-sm'>Please Login</p>
//                     </div>
//                     </>
//                 }
//             </div>
//             <div className='nav mt-[15px] '>
//               <ul className='flex'>
//                 <li><Link to='/' className='link mr-5 text-white cursor-pointer font-semibold'>Home</Link></li>
//                 <li><Link to='/shop' className='link  mr-5 text-white cursor-pointer font-semibold'>Shop</Link></li>
//                 <li><Link to='/cart' className='link  mr-5 cursor-pointer text-white font-semibold'>Cart</Link></li>
//                 <li><Link to='/about' className='link  mr-5 cursor-pointer text-white font-semibold'>About</Link></li>

//                 <li><Link to='/contact' className='link cursor-pointer mr-5 text-white font-semibold'>Contact</Link></li>

//               </ul>
//             </div>
//             <div className='offer mr-5 rounded-[10px] px-5 py-2 bg-[#fed700]'>
//                 <p className='mt-2.5 text-[#232323] font-semibold  text-sm'>flat 10% over all</p>
//             </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Nav;


















// import React, { useState } from 'react';
// import { MdLocalShipping } from 'react-icons/md';
// import { AiOutlineSearch } from 'react-icons/ai';
// import { FiLogIn } from 'react-icons/fi';
// import { useAuth0 } from "@auth0/auth0-react";
// import { CiLogout, CiUser } from 'react-icons/ci';
// import { Link } from 'react-router-dom';
// import { HiMenuAlt3, HiX } from 'react-icons/hi';

// const Nav = ({ search, setSearch, searchproduct }) => {
//   const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <>
//       <div className="header w-full">
//         <div className="bg-gradient-to-r from-[#411b99] via-[#3b3b58] to-[#502b99] py-4 px-5 md:px-10 flex justify-between items-center">
//           <div className="flex items-center text-purple-800 text-xl font-bold">
//             <img className="h-[45px] w-auto object-cover" src="image/logo2.png" alt="Logo" />
//             <p className="ml-2 text-white">Alternatives</p>
//           </div>

//           <div className="hidden md:flex items-center">
//             <input
//               className="outline-none bg-[#f6f7f8] w-[250px] border border-[#8a8a8a] rounded-l-full py-2 px-4 text-[14px]"
//               type="text"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search..."
//             />
//             <button onClick={searchproduct} className="w-[50px] h-[39px] border-[#cd1e76] border rounded-r-full bg-[#cd1e76] flex justify-center items-center">
//               <AiOutlineSearch className="text-white text-[20px]" />
//             </button>
//           </div>

//           <div className="hidden md:flex items-center">
//             {isAuthenticated ? (
//               <>
//                 <CiLogout className="text-[#ababab] text-[22px]" />
//                 <button
//                   onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
//                   className="ml-3 px-4 py-2 bg-[#cd1e76] text-white rounded-full text-[14px] hover:bg-[#e02f8f]"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <FiLogIn className="text-[#ababab] text-[22px]" />
//                 <button
//                   onClick={() => loginWithRedirect()}
//                   className="ml-3 px-4 py-2 bg-[#cd1e76] text-white rounded-full text-[14px] hover:bg-[#e02f8f]"
//                 >
//                   Login
//                 </button>
//               </>
//             )}
//           </div>

//           <div className="md:hidden">
//             <button onClick={toggleMenu}>
//               {isMobileMenuOpen ? <HiX className="text-white text-2xl" /> : <HiMenuAlt3 className="text-white text-2xl" />}
//             </button>
//           </div>
//         </div>
        

//         {isMobileMenuOpen && (
//           <div className="md:hidden px-5 py-4 bg-[#2d2d2d] text-white space-y-4">
//             <div className="flex items-center">
//               <input
//                 className="flex-1 outline-none bg-[#f6f7f8] border border-[#8a8a8a] rounded-l-full py-2 px-4 text-[14px] text-black"
//                 type="text"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search..."
//               />
//               <button onClick={searchproduct} className="w-[50px] h-[39px] border-[#cd1e76] border rounded-r-full bg-[#cd1e76] flex justify-center items-center">
//                 <AiOutlineSearch className="text-white text-[20px]" />
//               </button>
//             </div>

//             <div>
//               {isAuthenticated ? (
//                 <button
//                   onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
//                   className="w-full px-4 py-2 bg-[#cd1e76] text-white rounded-full text-[14px] hover:bg-[#e02f8f]"
//                 >
//                   Logout
//                 </button>
//               ) : (
//                 <button
//                   onClick={() => loginWithRedirect()}
//                   className="w-full px-4 py-2 bg-[#cd1e76] text-white rounded-full text-[14px] hover:bg-[#e02f8f]"
//                 >
//                   Login
//                 </button>
//               )}
//             </div>

//             <ul className="space-y-2">
//               <li><Link to='/' className='block text-white font-semibold'>Home</Link></li>
//               <li><Link to='/shop' className='block text-white font-semibold'>Shop</Link></li>
//               <li><Link to='/cart' className='block text-white font-semibold'>Cart</Link></li>
//               <li><Link to='/about' className='block text-white font-semibold'>About</Link></li>
//               <li><Link to='/contact' className='block text-white font-semibold'>Contact</Link></li>
//             </ul>
//           </div>
//         )}

//         <div className='hidden md:flex last_header w-full py-2 px-10 bg-[#232323] justify-between items-center'>
//           <div className='user_Profile flex items-center'>
//             {isAuthenticated ? (
//               <>
//                 <div className='icon rounded-full py-2 px-2 bg-white'>
//                   <CiUser />
//                 </div>
//                 <div className='info ml-2'>
//                   <h2 className='text-white text-xl'>{user.name}</h2>
//                   <p className='text-[#ababab] text-sm'>{user.email}</p>
//                 </div>
//               </>
//             ) : (
//               <>
//                 <div className='icon rounded-[10px] py-2 px-2 bg-white'>
//                   <CiUser />
//                 </div>
//                 <div className='info ml-2'>
//                   <p className='text-[#ababab] text-sm'>Please Login</p>
//                 </div>
//               </>
//             )}
//           </div>

//           <div className='offer rounded-[10px] px-5 py-2 bg-[#fed700]'>
//             <p className='text-[#232323] font-semibold text-sm'>Flat 10% Over All</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Nav;











































import React, { useState } from 'react';
import { MdLocalShipping } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiLogIn } from 'react-icons/fi';
import { useAuth0 } from "@auth0/auth0-react";
import { CiLogout, CiUser } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Nav = ({ search, setSearch, searchproduct }) => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="header w-full">
        <div className="bg-gradient-to-r from-[#411b99] via-[#3b3b58] to-[#502b99] py-4 px-5 md:px-10 flex justify-between items-center">
          <div className="flex items-center text-purple-800 text-xl font-bold">
            <img className="h-[45px] w-auto object-cover" src="image/logo2.png" alt="Logo" />
            <p className="ml-2 text-white">Alternatives</p>
          </div>

          <div className="hidden md:flex items-center">
            <input
              className="outline-none bg-[#f6f7f8] w-[250px] border border-[#8a8a8a] rounded-l-full py-2 px-4 text-[14px]"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
            />
            <button onClick={searchproduct} className="w-[50px] h-[39px] border-[#cd1e76] border rounded-r-full bg-[#cd1e76] flex justify-center items-center">
              <AiOutlineSearch className="text-white text-[20px]" />
            </button>
          </div>

          <div className="hidden md:flex items-center">
            {isAuthenticated ? (
              <>
                <CiLogout className="text-[#ababab] text-[22px]" />
                <button
                  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                  className="ml-3 px-4 py-2 bg-[#cd1e76] text-white rounded-full text-[14px] hover:bg-[#e02f8f]"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <FiLogIn className="text-[#ababab] text-[22px]" />
                <button
                  onClick={() => loginWithRedirect()}
                  className="ml-3 px-4 py-2 bg-[#cd1e76] text-white rounded-full text-[14px] hover:bg-[#e02f8f]"
                >
                  Login
                </button>
              </>
            )}
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isMobileMenuOpen ? <HiX className="text-white text-2xl" /> : <HiMenuAlt3 className="text-white text-2xl" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden px-5 py-4 bg-[#2d2d2d] text-white space-y-4">
            <div className="flex items-center">
              <input
                className="flex-1 outline-none bg-[#f6f7f8] border border-[#8a8a8a] rounded-l-full py-2 px-4 text-[14px] text-black"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
              />
              <button onClick={searchproduct} className="w-[50px] h-[39px] border-[#cd1e76] border rounded-r-full bg-[#cd1e76] flex justify-center items-center">
                <AiOutlineSearch className="text-white text-[20px]" />
              </button>
            </div>

            <div>
              {isAuthenticated ? (
                <button
                  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                  className="w-full px-4 py-2 bg-[#cd1e76] text-white rounded-full text-[14px] hover:bg-[#e02f8f]"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => loginWithRedirect()}
                  className="w-full px-4 py-2 bg-[#cd1e76] text-white rounded-full text-[14px] hover:bg-[#e02f8f]"
                >
                  Login
                </button>
              )}
            </div>

            <ul className="space-y-2">
              <li><Link to='/' className='block text-white font-semibold'>Home</Link></li>
              <li><Link to='/shop' className='block text-white font-semibold'>Shop</Link></li>
              <li><Link to='/cart' className='block text-white font-semibold'>Cart</Link></li>
              <li><Link to='/about' className='block text-white font-semibold'>About</Link></li>
              <li><Link to='/contact' className='block text-white font-semibold'>Contact</Link></li>
            </ul>
          </div>
        )}

        {/* This is the desktop navbar with the links showing always on PC */}
        <div className="hidden md:flex last_header w-full py-2 px-10 bg-[#232323] justify-between items-center">
          <div className="user_Profile flex items-center">
            {isAuthenticated ? (
              <>
                <div className="icon rounded-full py-2 px-2 bg-white">
                  <CiUser />
                </div>
                <div className="info ml-2">
                  <h2 className="text-white text-xl">{user.name}</h2>
                  <p className="text-[#ababab] text-sm">{user.email}</p>
                </div>
              </>
            ) : (
              <>
                <div className="icon rounded-[10px] py-2 px-2 bg-white">
                  <CiUser />
                </div>
                <div className="info ml-2">
                  <p className="text-[#ababab] text-sm">Please Login</p>
                </div>
              </>
            )}
          </div>

          <div className="hidden md:flex text-white px-5 py-4 space-x-4">
          <Link to="/" className="font-semibold">Home</Link>
          <Link to="/shop" className="font-semibold">Shop</Link>
          <Link to="/cart" className="font-semibold">Cart</Link>
          <Link to="/about" className="font-semibold">About</Link>
          <Link to="/contact" className="font-semibold">Contact</Link>
        </div>

          <div className="offer rounded-[10px] px-5 py-2 bg-[#fed700]">
            <p className="text-[#232323] font-semibold text-sm">Flat 10% Over All</p>
          </div>
        </div>

        {/* Desktop Links Visible */}
        
      </div>
    </>
  );
};

export default Nav;
