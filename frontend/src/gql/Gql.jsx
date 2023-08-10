import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  {
    categories {
      id
      category
      image
      slug
    }
  }
`;

export const GET_MAIN_CARDS = gql`
  {
    mainCards {
      image
      description
      title
    }
  }
`;

export const GET_PRODUCTS = gql`
  query {
    products {
      id
      image
      rating
      title
      price
      description
      stock
      onSale
      slug
       category {
        category
       }
    }
  }
`;	

// export const GET_PRODUCT = gql`
//   query($slug: String!) {
//     product(slug: $slug) {
//       id
//       image
//       rating
//       title
//       price
//       description
//       stock
//       onSale
//       slug
//       category
//     }
//   }
// `;