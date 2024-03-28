import React from 'react';
import logo from '../assets/logo.png'

function Header() {
  return (
    <div className='bg-black/5 '>
        
        <nav className=' md:w-full '>
         
       

        <ul className='flex  p-2  ' >
        <img src={logo} alt="School logo" className='w-20 ml-5 '/> 
            <li className=' mx-auto p-3 sm:p-1 rounded hover:text-xl'><a href='/'>Home</a></li>
            <li className=' mx-auto p-3 sm:p-1 rounded hover:text-xl'><a href='/about'>About</a></li>
            <li className=' p-3 sm:p-1 mx-auto rounded hover:text-xl'><a href="/contact">Contact</a></li>
            <li className=' p-3 sm:p-1  mr-20 rounded hover:text-xl'><a href='/staff'>Staffs</a></li>
         
           
        </ul>
        
        
        
           
        </nav>
    </div>
  )
}

export default Header