import React from "react";
import MyCarousel from './components/carousel'
import { Button } from "@material-tailwind/react";
import { TabLaundry } from "./components/Header";
import Contact from "./components/Contact";
import Card from "./components/Card";
import About from "./components/About";
import Footer from "./components/Footer";
import BtCar from "./components/bootstrapcar";


function App() {
  return (
    <div className="text-center">
      <TabLaundry />
    <MyCarousel />
      <Card className=" mt-0"/>
      <div>
      <Contact />
      </div>
      <About />
      <Footer />
     
    </div>
  );
}

export default App;
