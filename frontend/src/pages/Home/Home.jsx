import React from "react";
import { useQuery } from "@apollo/client";

import Hero from "./Hero";
import Categories from "./Categories";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";

import { GET_PRODUCTS } from "../../gql/Gql";

const Home = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <Loader />;

  if (error) return <Message message={error.message} />;

  return (
    <div className="container mx-auto">
      <Hero />
      <Categories />
      <Card data={data?.products} />
    </div>
  );
};

export default Home;
