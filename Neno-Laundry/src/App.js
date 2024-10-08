import React from "react";
import MyCarousel from './components/carousel'
import { Button } from "@material-tailwind/react";
import { TabLaundry } from "./components/Header";
import Contact from "./components/Contact";
import Card from "./components/Card";
import About from "./components/About";
import Footer from "./components/Footer";
import BtCar from "./components/bootstrapcar";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./components/Home";


function App() {
  return (
    <div className="text-center">
      
      <BrowserRouter>
      <TabLaundry />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
         
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
