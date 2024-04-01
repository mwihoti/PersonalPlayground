import React from 'react';
import logo from '../assets/logo.png';
import user from '../assets/users.png'

function Staff() {
  return (
    <div>
      
      <div className='text-center bg-teal-800 p-5'>
      <img src={logo} alt="School logo" className='w-40 rounded-full mx-auto'/> <br/>
      <h3 className='font-bold text-2xl uppercase underline'>Our Staffs</h3>

      </div>
      <div className='flex gap-24 p-5'>
        <img src={user} alt='users' className='rounded ml-10 w-28'/>
        <article className='w-4/6'>
          <h2 className='p-4'>MR.Jack</h2>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
        </article>

      </div>
      <div className=''>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Staff