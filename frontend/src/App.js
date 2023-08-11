import {
  Outlet,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/Home/ProductDetails";
import CartProvider from "./context/CartProvider";

function App() {
  return (
    <main className='my-0 mx-auto'>
      <CartProvider
        chidren={
          <>
            <Header /> <Outlet />
          </>
        }
      />
      {/* <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='product/:slug' element={<ProductDetails />} />
        </Routes>
      </Router> */}
    </main>
  );
}

export default App;
