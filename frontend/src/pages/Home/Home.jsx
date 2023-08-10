import React from "react";
import { useQuery } from "@apollo/client";

import Hero from "./Hero";
import Categories from "./Categories";
import Card from "../../components/Card/Card";
import { GET_PRODUCTS } from "../../gql/Gql";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";

const Home = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <Loader />;

  if (error) return <Message message={error.message} />;

  return (
    <>
      <Hero />
      <Categories />
      <Card data={data?.products} />
    </>
  );
};

export default Home;
