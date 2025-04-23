// import React from "react";
// import { Link } from "react-router-dom";
// import { AiOutlineClose } from "react-icons/ai";

// const Cart = ({ cart, setCart }) => {
//   //Increase quantity of cart product
//   const incqty = (product) => {
//     const exist = cart.find((x) => {
//       return x.id === product.id;
//     });
//     setCart(
//       cart.map((curElm) => {
//         return curElm.id === product.id
//           ? { ...exist, qty: exist.qty + 1 }
//           : curElm;
//       })
//     );
//   };

//   //decrease quantity of cart product
//   const decqty = (product) => {
//     const exist = cart.find((x) => {
//       return x.id === product.id;
//     });
//     setCart(
//       cart.map((curElm) => {
//         return curElm.id === product.id
//           ? { ...exist, qty: exist.qty - 1 }
//           : curElm;
//       })
//     );
//   };

//   //removing cart product
//   const removeProduct = (product) => {
//     const exist = cart.find((x) => {
//       return x.id === product.id;
//     });
//     if (exist.qty > 0) {
//       setCart(
//         cart.filter((curElm) => {
//           return curElm.id !== product.id;
//         })
//       );
//     }
//   };

//   //Total price
//   const total = cart.reduce((price, item) => price * item.qty * item.price, 0);

//   return (
//     <>
//       <div className="cart">
//         <h3>#cart</h3>
//         {cart.length === 0 && (
//           <>
//             <div className="empty_cart">
//               <h2>Your shopping cart is empty</h2>
//               <Link to="/shop">
//                 <button>shop now</button>
//               </Link>
//             </div>
//           </>
//         )}

//         <div className="container">
//           {cart.map((curElm) => {
//             return (
//               <>
//                 <div className="box">
//                   <div className="img_box">
//                     <img src={curElm.image} alt="" />
//                   </div>
//                   <div className="detail">
//                     <h4>{curElm.cat}</h4>
//                     <h3>{curElm.Name}</h3>
//                     <p>Price: ${curElm.price}</p>
//                     <p>Total : ${curElm.price * curElm.qty}</p>

//                     <div className="quantity">
//                       <button onClick={() => incqty(curElm)}>+</button>
//                       <input type="number" value={curElm.qty} />
//                       <button onClick={() => decqty(curElm)}>-</button>
//                     </div>
//                     <div className="icon">
//                       <li onClick={() => removeProduct(curElm)}>
//                         <AiOutlineClose />
//                       </li>
//                     </div>
//                   </div>
//                 </div>
//               </>
//             );
//           })}
//         </div>
//         <div className="bottom">
//           {cart.length > 0 && (
//             <>
//               <div className="Total">
//                 <h4>Total: ${total}</h4>
//               </div>
//               <button>checkout</button>
//             </>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Cart;











import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const Cart = ({ cart, setCart }) => {
  //Increase quantity of cart product
  const incqty = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    setCart(
      cart.map((curElm) => {
        return curElm.id === product.id
          ? { ...exist, qty: exist.qty + 1 }
          : curElm;
      })
    );
  };

  //decrease quantity of cart product
  const decqty = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    setCart(
      cart.map((curElm) => {
        return curElm.id === product.id
          ? { ...exist, qty: exist.qty - 1 }
          : curElm;
      })
    );
  };

  //removing cart product
  const removeProduct = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    if (exist.qty > 0) {
      setCart(
        cart.filter((curElm) => {
          return curElm.id !== product.id;
        })
      );
    }
  };

  //Total price
  const total = cart.reduce((price, item) => price + item.qty * item.price, 0);

  return (
    <>
      <div className="cart p-6">
        <h3 className="text-2xl font-semibold mb-4">#cart</h3>
        {cart.length === 0 && (
          <>
            <div className="empty_cart text-center py-8">
              <h2 className="text-xl font-medium mb-4">Your shopping cart is empty</h2>
              <Link to="/shop">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">shop now</button>
              </Link>
            </div>
          </>
        )}

        <div className="container grid gap-6">
          {cart.map((curElm) => {
            return (
              <>
                <div className="box flex flex-col md:flex-row items-center border p-4 rounded shadow">
                  <div className="img_box w-full md:w-1/3 mb-4 md:mb-0">
                    <img src={curElm.image} alt="" className="w-full h-48 object-contain" />
                  </div>
                  <div className="detail w-full md:w-2/3 space-y-2">
                    <h4 className="text-gray-500 uppercase text-sm">{curElm.cat}</h4>
                    <h3 className="text-xl font-bold">{curElm.Name}</h3>
                    <p className="text-gray-700">Price: ${curElm.price}</p>
                    <p className="text-gray-700">Total : ${curElm.price * curElm.qty}</p>

                    <div className="quantity flex items-center gap-2">
                      <button onClick={() => incqty(curElm)} className="cursor-pointer bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600">+</button>
                      <input readOnly type="number" value={curElm.qty} className="w-12 text-center border rounded" />
                      <button onClick={() => decqty(curElm)} className="cursor-pointer bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">-</button>
                      <div className="icon mt-2">
                      <li onClick={() => removeProduct(curElm)} className="text-red-600 text-xl  ml-1 border rounded-sm cursor-pointer mb-2 hover:text-red-800 list-none">
                        <AiOutlineClose />
                      </li>
                    </div>
                    </div>
                    
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="bottom mt-6 text-right">
          {cart.length > 0 && (
            <>
              <div className="Total mb-4">
                <h4 className="text-xl font-semibold">Total: ${total}</h4>
              </div>
              <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">checkout</button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
