import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./layouts/Footer";

import Header from "./layouts/Header";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
