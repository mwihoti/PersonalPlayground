import React from 'react';
import Header from './components/header'
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Carousel from './components/carousel';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  
  return (
    <Router>
    <div className="">
      <header>
         <Header />
      </header>
      
       <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />

       </Routes>
       
    </div>
   <div>
    <Home />
   </div>

    </Router>
    

    
  );
}

export default App;
