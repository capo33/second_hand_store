import React from "react";
import { useQuery } from "@apollo/client";

import Images from "../../assets/images";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";
import { GET_MAIN_CARDS } from "../../gql/Gql";

const Hero = () => {
  const { loading, error, data } = useQuery(GET_MAIN_CARDS);

  if (loading) return <Loader />;

  if (error) return <Message message={error.message} />;
  
  return (
    <div className='bg-slate-100'>
      <div className='text-center p-6 text-5xl flex justify-center flex-wrap items-center gap-6'>
        <h2>
          Find secound hand <br /> items in <br />
          Capo store
        </h2>
        <img src={Images.Vase} alt='vase' className='w-72' />
      </div>
      <main className='flex items-center justify-center flex-wrap text-center'>
        {data?.mainCards.map((card) => (
          <div
            className='bg-white w-72 h-96 shadow-md rounded m-3'
            key={card?.title}
          >
            <div className='w-full h-1/4 p-3'>
              <span className='text-lg font-semibold uppercase tracking-wide hover:text-yellow-600 text-gray-700'>
                {card.title}
              </span>
              <p className='text-gray-600 text-sm leading-5 mt-1'>
                {card.description}
              </p>
            </div>
            <div className='h-3/4'>
              <img
                className='w-full h-full object-cover p-3'
                src={Images[card.image]}
                alt='product'
              />
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Hero;
