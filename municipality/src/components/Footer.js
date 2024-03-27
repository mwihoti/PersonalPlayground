import React from 'react'
import logo from '../assets/d4.jpeg'

function Footer() {
  return (
    <footer className='bg-black text-white pt-5 ' >
    <div >
       <div >
       <img src={logo} className="w-10 " alt='logo'/>
        <h2>Municipality</h2>
        

        </div> 
    </div>
    </footer>
  )
}

export default Footer