import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import App from "../App";
import Home from "../pages/Home/Home";
import ProductDetails from "../pages/Home/ProductDetails";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='product/:slug' element={<ProductDetails />} />
     </Route>
  )
);

export default routes;