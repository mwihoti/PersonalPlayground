import React from 'react';
import logo from '../assets/logo.png'

function Header() {
  return (
    <div className='bg-black/5'>
        
        <nav className=' grid '>
        
           

        <ul className='flex gap-32  justify-center'>
        <img src={logo} alt="School logo" className='w-20  '/>
        
            <li className='border  p-3 rounded'><a>Home</a></li>
            <li className='border p-3 rounded'><a>About</a></li>
            <li className='border p-3 rounded'><a>Contact</a></li>
        </ul>
        
        
        
           
        </nav>
    </div>
  )
}

export default Header