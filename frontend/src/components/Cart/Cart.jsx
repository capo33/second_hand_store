import React, { useContext } from "react";
import { Link } from "react-router-dom";
 import {TrashIcon} from "@heroicons/react/24/outline";

import Rating from "../Rating/Rating";
import Images from "../../assets/images";
import { CartContext } from "../../context/CartProvider";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  console.log(cartItems);

  // Cart Items Count
  const getCartCount = () => {
     return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  // Cart Items Total Price
  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.qty * item.price, 0)
      .toFixed(2);
  };

  // Remove Item From Cart
  const removeFromCartHandler = (id) => {
    setCartItems(cartItems.filter((x) => x.id !== id));
    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems.filter((x) => x.id !== id))
    );
  };

  return (
    <div className='h-screen bg-gray-100 pt-20'>
      <h1 className='mb-10 text-center text-2xl font-bold'>Cart Items</h1>
      <div className='mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0'>
        <div className='rounded-lg md:w-2/3'>
          {cartItems.length === 0 ? (
            <div className='flex flex-col items-center justify-center'>
              <img className='w-1/2' src={Images.emptyCart} alt='Empty Cart' />
              <p className='text-2xl font-bold mt-5'>Your cart is empty</p>
              <Link
                className='mt-5 px-5 py-2 rounded-md bg-blue-500 text-blue-50 hover:bg-blue-600'
                to='/'
              >
                Go Back
              </Link>
            </div>
          ) : (
            <div className='flex flex-col'>
              {cartItems.map((item) => (
                <div className='justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start'>
                  <img
                    src={Images[item.image]}
                    alt={item.title}
                    className='w-full rounded-lg sm:w-40'
                  />
                  <div className='sm:ml-4 sm:flex sm:w-full sm:justify-between'>
                    <div className='mt-5 sm:mt-0'>
                      <h2 className='text-lg font-bold text-gray-900'>
                        {item.title}
                      </h2>
                      <p className='mt-1 text-lg text-gray-700'>
                        <span className='font-semibold text-green-800'>
                          Price:
                        </span>{" "}
                        €{item.price}
                      </p>
                      <div className='mt-4'>
                        <p className='mt-2 text-gray-600 text-sm'>
                          <span className='font-semibold text-green-800'>
                            Quantity:
                          </span>{" "}
                          {item.stock}
                        </p>
                        <Rating value={item.rating} />
                      </div>
                    </div>
                    <div className='flex justify-end'>
                      <div className='flex items-end'>
                        <button
                          className='text-gray-500 focus:outline-none focus:text-gray-600'
                          onClick={() => removeFromCartHandler(item.id)}
                        >
                          <TrashIcon className='h-5 w-5' /> 
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Sub total */}
        <div className='mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3'>
          <div className='mb-2 flex justify-between'>
            <p className='text-gray-700'>SubTitle ({getCartCount()}) Items</p>€
            {getCartSubTotal()}
          </div>
          <div className='flex justify-between'>
            <p className='text-gray-700'>Shipping</p>
            <p className='text-gray-700'>$4.99</p>
          </div>
          <hr className='my-4' />
          <div className='flex justify-between'>
            <p className='text-lg font-bold'>Total</p>
            <div className>
              <p className='mb-1 text-lg font-bold'>
                €{(Number(getCartSubTotal()) + 4.99).toFixed(2)}
              </p>
              <p className='text-sm text-gray-700'>including VAT</p>
            </div>
          </div>
          <button
            className='mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600'
            onClick={() => {
              alert("Thank you for your purchase!");
              localStorage.setItem("cart", JSON.stringify([]));
              setCartItems([]);
            }}
          >
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
