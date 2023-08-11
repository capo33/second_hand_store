import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import Images from "../../assets/images";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";

import { GET_CATEGORIES } from "../../gql/Gql";

const Categories = () => {
  const { loading, error, data } = useQuery(GET_CATEGORIES);

  if (loading) return <Loader />;

  if (error) return <Message message={error.message} />;

  return (
    <div className='grid justify-center items-center sm:grid-cols-4 gap-3 m-10 container mx-auto'>
      {data?.categories.map((category) => (
        <div
          className='bg-teal-500 shadow-md rounded-lg p-3 max-w-full'
          key={category.id}
        >
          <Link to={`/category/${category.slug}`}>
            <img
              className='h-40 rounded mx-auto'
              src={Images[category.image]}
              alt='category'
            />
            <p className='text-gray-600 text-center mt-2 text-2xl'>
              {category.category}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Categories;
