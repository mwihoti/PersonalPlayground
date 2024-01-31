import React from "react";
import MyCarousel from './components/carousel'
import { Button } from "@material-tailwind/react";
import { TabLaundry } from "./components/Header";
import Contact from "./components/Contact";
import Card from "./components/Card";


function App() {
  return (
    <div className="text-center">
      <TabLaundry />
    <MyCarousel />
      <Card className=" mt-0"/>
      <Contact />
    

      <div>
        <Button>Dante</Button>
      </div>
     
    </div>
  );
}

export default App;
