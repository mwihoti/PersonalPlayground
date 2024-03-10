import React from 'react'
import { NavLink } from 'react-router-dom'

function SignIn() {
  return (
    <div>
        <h1 className='text-3xl'>Hospitali Mkononi</h1>

        <div className='border'>
            <div className='p-2 underline'>
                <NavLink>
                    Login
                </NavLink>{" "}
                or {" "}
                <NavLink>
                    SignIn

                </NavLink>
            </div>

            <form >
            <div className='mb-3'>
                    <label>UserName</label><br/>
                    <input id='name' name='email'  type='text ' placeholder="Name" className=' border border-black rounded'/>
                </div>
                <div className='mb-3'>
                    <label>Email Address</label><br/>
                    <input id='email' name='email'  type='text ' placeholder="Email" className=' border border-black rounded'/>
                </div>
                <div className='mb-3'>
                    <label>Password</label><br/>
                    <input id='password' name='password'  type='password' placeholder="password" className=' border border-black rounded'/>
                </div>

            </form>
            <div>
                <button className='border p-2 bg-blue-600 rounded'> Login</button>
            </div>
        </div>
        
    </div>
  )
}

export default SignIn