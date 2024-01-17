import React, { useState } from 'react'
import Home from './Home';
import Contact from './Contact';
import About from './About';


  


export default function Header
() {
  const links = ["Home", "About", "Contact"];
  const [activePage, setActivePage] = useState('Home');

  const handleLinkClick = (link) => {
    setActivePage(link);
  };
  return (
    <div >
       <nav className="flex bg-gray-800 p-4 h-20 justify-between items-center ">
        <img src='./logo.png' alt="laundry logo" className='h-10'/>
          <p className='text-yellow-50 ml-4 font-semibold text-2xl mr-auto'>Neno Laundry</p>
          <ul className='flex gap-6 list-none text-2xl text-yellow-50 '>
            {links.map((link)=> (
              <li key={link} className='hover:text-black-30'>
                <a href="#" onClick={() => handleLinkClick(link)}>{link}</a>

              </li>
            ))}
            </ul>
          
        </nav>

        <div>
          {activePage === 'Home' && <Home />}
          {activePage === 'About' && <About />}
          {activePage === 'Contact' && <Contact />}
        </div>
       

    </div>
  )
}

