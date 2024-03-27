import Header from './components/Header';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Admin from './components/Admin';
import Staffs from './components/Staff';
import Footer from './components/Footer';

function App() {
  return (
    <div className="">
      
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/admin' element={<Admin />}/>
        <Route path='/staff' element={<Staffs />} />
      </Routes>
        <Footer />
      </BrowserRouter>
 

    </div>
  );
}

export default App;
