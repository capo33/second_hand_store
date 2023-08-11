import { Outlet } from "react-router-dom";

import Header from "./components/Header/Header";
import CartProvider from "./context/CartProvider";

function App() {
  return (
    <main className='my-0 mx-auto'>
      <CartProvider
        chidren={
          <>
            <Header />
            <Outlet />
          </>
        }
      />
    </main>
  );
}

export default App;
