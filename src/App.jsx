import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
