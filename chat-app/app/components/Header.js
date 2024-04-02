import React from 'react'

function Header() {
  return (
    <div className=''>
      <nav className=' p-10 flex mx-auto'>
        <ul className='flex gap-5 top-0'>
            <li className='font-bold'><a href='#'>Home</a></li>
            <li className='font-bold'><a href='#'>Products</a></li>
            <li className='font-bold'><a href='#'>Orders</a></li>


        </ul>
      </nav>
    </div>
  )
}

export default Header
