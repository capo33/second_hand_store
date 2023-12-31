import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

import "./rating.css";

// Rating component
const Rating = ({ value, text }) => {
  return (
    <div className='flex items-center mt-2.5 mb-5'>
      <span className='text-yellow-400'>
        {value >= 1 ? (
          <FaStar />
        ) : value >= 0.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span className='text-yellow-400'>
        {value >= 2 ? (
          <FaStar />
        ) : value >= 1.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span className='text-yellow-400'>
        {value >= 3 ? (
          <FaStar />
        ) : value >= 2.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span className='text-yellow-400'>
        {value >= 4 ? (
          <FaStar />
        ) : value >= 3.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span className='text-yellow-400'>
        {value >= 5 ? (
          <FaStar />
        ) : value >= 4.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span className='ml-2 text-gray-600'>{text && text}</span>
    </div>
  );
};

export default Rating;