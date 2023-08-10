import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCartIcon,
  Bars4Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Header = ({ fixed }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className='sticky top-0 flex flex-wrap items-center justify-between px-2 py-3 bg-amber-400 text-black'>
      <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
        <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
          <Link
            className='text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap'
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
              <Bars4Icon className='w-6 h-6' />
            ) : (
              <XMarkIcon className='w-6 h-6' />
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
                <i className='fab fa-facebook-square text-2xl leading-lg opacity-75'></i>
                Store
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='px-3 py-2 flex items-center text-2xl  leading-snug  hover:opacity-75'
                to='/'
              >
                <i className='fab fa-twitter text-2xl leading-lg  opacity-75'></i>
                Tweet
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='px-3 py-2 flex items-center text-2xl  leading-snug  hover:opacity-75'
                to='/'
              >
                <ShoppingCartIcon className='w-6 h-6 me-1' /> Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;