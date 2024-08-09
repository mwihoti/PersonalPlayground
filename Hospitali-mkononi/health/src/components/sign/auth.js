import React from 'react'
import Login from './login'
import SignIn from './signIn'
import { NavLink } from 'react-router-dom';
import { TabLaundry } from '../Header';

function SignPage() {
  return (
    <div>
   
        <h1 className='text-3xl'>Hospitali Mkononi</h1>


  <div className='p-2 underline'>
    <NavLink to='/login'>
      Login
    </NavLink>{" "}
    or {" "}
    <NavLink to='/signin'>
      SignIn
    </NavLink>
    
  </div>
  <Login />
    
    </div>
    
  )
}

export default SignPage