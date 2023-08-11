import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
 
import { GET_PRODUCT } from "../../gql/Gql";
import Images from "../../assets/images";
import Rating from "../../components/Rating/Rating";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";
import { CartContext } from "../../context/CartProvider";

const ProductDetails = () => {
  const { slug } = useParams();
  const context = useContext(CartContext);
  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { slug },
  });

  const { cartItems, setCartItems } = context;

  const product = data?.product;

  if (loading) return <Loader />;

  if (error) return <Message error={error} />;

  const addToCartHandler = () => {
    const exist = cartItems.find((x) => x.id === product.id);

    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
      localStorage.setItem(
        "cart",
        JSON.stringify([...cartItems, { ...product, qty: 1 }])
      );
    }
  };

  const removeFromCartHandler = () => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist?.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
      localStorage.setItem(
        "cart",
        JSON.stringify(cartItems.filter((x) => x.id !== product.id))
      );
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
      localStorage.setItem(
        "cart",
        JSON.stringify(
          cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
          )
        )
      );
    }
  };

  return (
    <section className='text-gray-700 body-font overflow-hidden bg-white'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='lg:w-4/5 mx-auto flex flex-wrap'>
          <img
            alt='ecommerce'
            className='lg:w-1/2 w-full object-cover object-center rounded border border-gray-200'
            src={Images[product.image]}
          />
          <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
            <h2 className='text-sm title-font text-gray-500 tracking-widest'>
              {product.category.category}
            </h2>
            <h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>
              {product.title}
            </h1>
            <div className='flex mb-4'>
              <Rating
                value={product.rating}
                text={`${product.rating} reviews`}
              />
            </div>
            <p className='leading-relaxed'>{product.description}</p>
            <div className='flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5'>
              <div className='flex ml-6 items-center'>
                <span className='mr-3'>On stock</span>
                <div className='relative'>
                  {product.stock > 0 ? (
                    <button className='bg-gray-200 text-gray-900 rounded inline-flex items-center'>
                      <span className='px-3 py-1'>{product.stock}</span>
                    </button>
                  ) : (
                    <button className='bg-gray-200 text-gray-900 rounded inline-flex items-center cursor-not-allowed'>
                      <span className='px-3 py-1'>0</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className='flex'>
              <span className='title-font font-medium text-2xl text-gray-900'>
                ${product.price}
              </span>
              {cartItems.find((x) => x.id === product.id) ? (
                <button
                  onClick={removeFromCartHandler}
                  className='flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded'
                >
                  Remove from cart
                </button>
              ) : (
                <button
                  onClick={addToCartHandler}
                  className='flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded'
                >
                  Add to cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
