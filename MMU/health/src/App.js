import React from "react";

import { Button } from "@material-tailwind/react";

import Contact from "./components/Contact";
import Card from "./components/Card";
import About from "./components/About";
import Footer from "./components/Footer";
import BtCar from "./components/bootstrapcar";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./components/Home";
import User from "./components/User";
import Book from "./components/Book";
import SignIn from "./components/sign/signIn";
import Login from "./components/sign/login";
import HealthBot from './components/HealthBot'
import Protected from './components/Protected'
import MyBook from "./components/MyBook";


function App() {
  return (
    <div className="text-center">
      
      <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<Home/>}/>

          <Route path="contact" element={<Contact/>} />

          <Route path="about" element={<Protected Cmp={About }/>} />
          <Route path="user" element={<User />} />
          <Route path="book" element={<Protected Cmp={Book}/>} />
          <Route path="login" element={<Login />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="bot" element={<Protected Cmp={HealthBot}/>} />
          <Route path="myBook" element={<MyBook />} />


       
         
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
