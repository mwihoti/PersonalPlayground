import React from 'react'
import logo from '../assets/logo.png'

function Footer() {
  return (
    <footer className='bg-black text-white p-5 mt-5' >
    <div className='flex gap-10'>
       <div className='' >
       <img src={logo} className="w-12  mx-auto rounded-xl  " alt='logo'/>
        <h2 className='p-3'>Municipality primary School</h2>
        <h4>School based in Mutithi town, along Nairobi-Meru road</h4>
        

        </div> 
        <div>
          <h3>
            Information
          </h3>
          <ul className='p-2'>
            <li><a href='/about'>About</a></li>
            <li><a href='/home'>Home</a></li>
            <li><a href=''>Contact</a></li>
          </ul>
        </div>
    </div>
    </footer>
  )
}

export default Footer