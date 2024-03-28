import React from 'react';
import logo from '../assets/logo.png';
import fb from '../assets/fb.png';
import ig from '../assets/ig.png';
import x from '../assets/x.png';

function Footer() {
  return (
    <footer className='bg-cyan-800 text-white p-5 mt-5 flex items-center justify-center ' >
    <div className='flex  gap-10'>
       <div className='p-4' >
       <img src={logo} className="w-12  mx-auto rounded-xl  " alt='logo'/>
        <h2 className='p-3 text-center'>Municipality primary School</h2>
        <h4 className='text-center'>School based in Mutithi town, along Nairobi-Meru road</h4>
        

        </div> 
        <div className='text-center'>
          <h3 className='underline'>
            More
          </h3>
          <ul className='p-5 flex gap-5'>
            <li><a href='/about' className=''>About</a></li>
            <li><a href='/' className=''>Home</a></li>
            <li><a href='/contact'>Contact</a></li>
          </ul>
        </div>
        <div className='text-center underline'>
          <h4>Socials</h4>
          <ul className='flex justify-center items-center'>
            <li> <img src={x} className="h-20 " alt="x icon" /></li>
            <li> <img src={ig} className="h-20 " alt="ig icon" /></li>
            <li> <img src={fb} className='h-20' alt="fb icon" />
</li>
          </ul>
         
          
          

        </div>
    </div>
    </footer>
  )
}

export default Footer