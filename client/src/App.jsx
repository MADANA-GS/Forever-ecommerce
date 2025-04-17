import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cantact from "./pages/Cantact";
import Prouduct from "./pages/Prouduct";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import Collection from "./pages/Collection";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <div className="px-4 sm:px-[6vw] md:px-[7vw] lg:px-[9vw] xl:px-[12vw] 2xl:px-[15vw] ">
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Cantact />} />
        <Route path="/product/:id" element={<Prouduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/colection" element={<Collection />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
