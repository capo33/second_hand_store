import { Outlet } from "react-router-dom";

import Header from "./components/Header/Header";

function App() {
  return (
    <main className='my-0 mx-auto'>
      <Header />
      <Outlet />
    </main>
  );
}

export default App;
