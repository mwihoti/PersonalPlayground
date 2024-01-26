import React from "react";
import MyCarousel from './components/carousel'
import { Button } from "@material-tailwind/react";
import { TabLaundry } from "./components/Header";
import Card from "./components/Card";

function App() {
  return (
    <div className="text-center">
      <TabLaundry />
      <MyCarousel />
      <Card />

      <div>
        <Button>Dante</Button>
      </div>
     
    </div>
  );
}

export default App;
