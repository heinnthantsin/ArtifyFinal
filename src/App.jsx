import React, { useEffect } from "react";
import { TabTitle } from "./utils/GeneralFunctions";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Event from "./pages/Event";
import Artist from "./pages/Artist";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/footer/Footer";
import Navbar1 from "./components/ui/Navbar1";
import ProductDetail from "./pages/ProductDetail";
import ArtistDetail from "./pages/ArtistDetail";
import { Checkout } from "./pages/Checkout";
import Modal from "./components/modal/Modal";

function App() {
  TabTitle("Artify | Home");
  return (
    <>
      <BrowserRouter>
        <header className="mb-4">
          <Navbar1 />
        </header>
        <main className="bg-[#faf8ff] min-h-screen h-auto py-16 px-5 sm:px-10 md:px-14 ">
          <Routes>
            {/* <Route path="/" element={<Navigate to="/" />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/event" element={<Event />} />
            <Route path="/artist" element={<Artist />} />
            <Route path="/artist/:id" element={<ArtistDetail />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
        <Footer />
        <Modal />
      </BrowserRouter>
    </>
  );
}

export default App;
