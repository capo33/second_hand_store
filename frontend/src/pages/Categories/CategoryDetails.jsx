import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";
import Card from "../../components/Card/Card";

import { GET_CATEGORY } from "../../gql/Gql";

const CategoryDetails = () => {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(GET_CATEGORY, {
    variables: { slug },
  });

  if (loading) return <Loader />;

  if (error) return <Message message={error.message} />;

  return (
    <div className='container mx-auto mt-28'>
      <Card data={data?.category.products} />
    </div>
  );
};

export default CategoryDetails;
