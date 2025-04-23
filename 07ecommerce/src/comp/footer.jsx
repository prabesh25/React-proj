// import React from 'react'
// import {FaPiggyBank, FaHeadphonesAlt, FaShippingFast, FaWallet} from 'react-icons/fa'

// const Footer = () => {
//   return (
//     <div className='footer'>
//         <div className="container">
//             <div className="left-box">
//                 <div className="box">
//                     <div className="icon_box">
//                         <FaPiggyBank />
//                     </div>
//                     <div className="detail">
//                         <h3>Great Saving</h3>
//                         <p>congrats on great saving, </p>
//                     </div>
//                     </div>
//                     <div className="box">
//                     <div className="icon_box">
//                         <FaShippingFast />
//                     </div>
//                     <div className="detail">
//                         <h3>Great Saving</h3>
//                         <p>congrats on great saving, </p>
//                     </div>
//                 </div>
//                 <div className="box">
//                     <div className="icon_box">
//                         <FaHeadphonesAlt />
//                     </div>
//                     <div className="detail">
//                         <h3>Great Saving</h3>
//                         <p>congrats on great saving, </p>
//                     </div>
//                 </div>
//                 <div className="box">
//                     <div className="icon_box">
//                         <FaWallet />
//                     </div>
//                     <div className="detail">
//                         <h3>Great Saving</h3>
//                         <p>congrats on great saving, </p>
//                     </div>
//                 </div>
//                 </div>
//                 <div className="right_box">
//                     <div className="header">
//                         <img src="image/logo.png" alt="" />
//                         <p>Have a great day, thanks for shopping.</p>
//                     </div>
//                     <div className="bottom">
//                         <div className="box">
//                             <h3>Your Account</h3>
//                             <ul>
//                                 <li>About us</li>
//                                 <li>Account</li>
//                                 <li>Payment</li>
//                                 <li>Sales</li>
//                             </ul>
//                         </div>
//                         <div className="box">
//                             <h3>products</h3>
//                             <ul>
//                                 <li>Delivery</li>
//                                 <li>Track Order</li>
//                                 <li>New Product</li>
//                                 <li>Old product</li>
//                             </ul>
//                         </div>
//                         <div className="box">
//                             <h3>Contact Us</h3>
//                             <ul>
//                                 <li>4002, putalisadak Kathmandu</li>
//                                 <li>982347654</li>
//                                 <li>prabesh5511@gmail.com</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//   )
// }

// export default Footer;

import React from 'react'
import {FaPiggyBank, FaHeadphonesAlt, FaShippingFast, FaWallet} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-700">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Left Section - Features */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-gray-800 hover:bg-gray-800/50 transition-all duration-300 group">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-4 bg-indigo-600 rounded-full text-white group-hover:bg-indigo-700 transition-colors">
                  <FaPiggyBank className="text-3xl" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Great Savings</h3>
                <p className="text-sm text-gray-400">Enjoy exclusive discounts and special offers</p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gray-800 hover:bg-gray-800/50 transition-all duration-300 group">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-4 bg-indigo-600 rounded-full text-white group-hover:bg-indigo-700 transition-colors">
                  <FaShippingFast className="text-3xl" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Fast Shipping</h3>
                <p className="text-sm text-gray-400">Free delivery on orders over $99</p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gray-800 hover:bg-gray-800/50 transition-all duration-300 group">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-4 bg-indigo-600 rounded-full text-white group-hover:bg-indigo-700 transition-colors">
                  <FaHeadphonesAlt className="text-3xl" />
                </div>
                <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
                <p className="text-sm text-gray-400">Dedicated customer support team</p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gray-800 hover:bg-gray-800/50 transition-all duration-300 group">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-4 bg-indigo-600 rounded-full text-white group-hover:bg-indigo-700 transition-colors">
                  <FaWallet className="text-3xl" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Secure Payments</h3>
                <p className="text-sm text-gray-400">100% secure payment processing</p>
              </div>
            </div>
          </div>

          {/* Right Section - Links */}
          <div className="lg:w-1/2">
            <div className="mb-8 text-center lg:text-left">
              <img 
                src="image/logo.png" 
                alt="Logo" 
                className="h-12 w-auto mx-auto lg:mx-0 mb-4"
              />
              <p className="text-gray-400 max-w-md mx-auto lg:mx-0">
                Have a great day, thanks for shopping with us. We appreciate your trust!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-lg font-semibold mb-4">Your Account</h3>
                <ul className="space-y-2">
                  {['About us', 'Account', 'Payment', 'Sales'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center lg:text-left">
                <h3 className="text-lg font-semibold mb-4">Products</h3>
                <ul className="space-y-2">
                  {['Delivery', 'Track Order', 'New Product', 'Old Product'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center lg:text-left">
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>4002, Putalisadak Kathmandu</li>
                  <li>+977 982347654</li>
                  <li>
                    <a href="mailto:prabesh5511@gmail.com" className="hover:text-indigo-400 transition-colors">
                      prabesh5511@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 Your Store Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer