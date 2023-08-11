import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import App from "../App";
import Home from "../pages/Home/Home";
import ProductDetails from "../pages/Home/ProductDetails";
import Cart from "../components/Cart/Cart";
import CategoryDetails from "../pages/Categories/CategoryDetails";
import Contact from "../pages/Contact/Contact";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route path='' element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="contact" element={<Contact />} />
      <Route path='product/:slug' element={<ProductDetails />} />
      <Route path='category/:slug' element={<CategoryDetails />} />
    </Route>
  )
);

export default routes;
