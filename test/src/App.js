import React from "react";
import MyCarousel from './components/carousel'
import { Button } from "@material-tailwind/react";

function App() {
  return (
    <div className="text-center">
      <MyCarousel />
      <div>
        <Button>Dante</Button>
      </div>
     
    </div>
  );
}

export default App;
