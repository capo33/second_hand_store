import React from "react";
import { Link } from "react-router-dom";

import Rating from "../Rating/Rating";
import Images from "../../assets/images";

const Card = ({ data }) => {
  return (
    <div className='grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-8 m-16'>
      {data?.map((product) => (
        <div className=''>
          <Link to={`/product/${product.slug}`}>
            <img
              className='rounded w-full h-80 object-cover object-center  '
              src={Images[product.image]}
              alt='product'
            />
          </Link>
          <div className='px-5 pb-5'>
            <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
              {product.title.substring(0, 30)}...
            </h5>
            <Rating value={product.rating} text={`${product.rating} reviews`} />

            <div className='flex items-center justify-between'>
              <span className='text-3xl font-bold text-gray-900 dark:text-white'>
                €{product.price}
              </span>
              <Link
                to={`/product/${product.id}`}
                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                Add to cart
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
