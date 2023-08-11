import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCartIcon,
  Bars4Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { CartContext } from "../../context/CartProvider";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const context = useContext(CartContext);

  const { cartItems } = context;

  return (
    <nav className='sticky top-0 flex flex-wrap items-center justify-between px-2 py-3 bg-teal-500 text-black'>
      <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
        <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
          <Link
            className='text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap'
            to='/'
          >
            Second Hand Store
          </Link>
          <button
            className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
            type='button'
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen ? (
              <XMarkIcon className='w-6 h-6' />
            ) : (
              <Bars4Icon className='w-6 h-6' />
            )}
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id='example-navbar-danger'
        >
          <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
            <li className='nav-item'>
              <Link
                className='px-3 py-2 flex items-center text-2xl  leading-snug hover:opacity-75'
                to='/'
              >
                Store
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='px-3 py-2 flex items-center text-2xl  leading-snug  hover:opacity-75'
                to='/contact'
              >
                Contact
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='px-3 py-2 flex items-center text-2xl  leading-snug  hover:opacity-75'
                to='/cart'
              >
                Cart
                <div class='flex relative hover:opacity-75'>
                  <div class='absolute left-4 bottom-3'>
                    {cartItems.length === 0 ? (
                      <p class='flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white'>
                        {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                      </p>
                    ) : (
                      <p class='flex h-2 w-2 items-center justify-center rounded-full bg-blue-500 p-3 text-xs text-white'>
                        {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                      </p>
                    )}
                  </div>
                  <ShoppingCartIcon className='w-6 h-6 me-1 ' />
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
