"use client"
import React from 'react'
import Link from 'next/link'
    

function Header() {
  return (
    <div className=''>
      <nav className=' p-10 flex mx-auto'>
        <ul className='flex gap-5 top-0'>
            <li className='font-bold'>
                
                <Link href={`/`}>Home</Link>
                </li>
            <li className='font-bold'>
               
                <Link href={`/products`}>Products</Link>
                </li>
            <li className='font-bold'><a href='/order'>Orders</a></li>


        </ul>
      </nav>
    </div>
  )
}

export default Header
