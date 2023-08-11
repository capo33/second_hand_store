import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import App from "./App";
import CartProvider from "./context/CartProvider";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      {/* <CartProvider chidren={<App />}> */}
        {/* <RouterProvider router={routes} /> */}
        <RouterProvider router={routes} />
        {/* <App /> */}
      {/* </CartProvider> */}
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
