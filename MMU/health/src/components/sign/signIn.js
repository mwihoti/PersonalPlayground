import React from 'react';
import { NavLink } from 'react-router-dom';


function SignIn() {
    return (
        <div className='m-0 mt-4'>


            {/* User SignIn Form */}
            <form>
                <h1>Register</h1>
                <div className='mb-3'>
                    <label>UserName</label><br />
                    <input id='name' name='name' type='text ' placeholder="Name" className=' border border-black rounded' />
                </div>
                <div className='mb-3'>
                    <label>Email Address</label><br />
                    <input id='email' name='email' type='text ' placeholder="Email" className=' border border-black rounded' />
                </div>
                <div className='mb-3'>
                    <label>Password</label><br />
                    <input id='password' name='password' type='password' placeholder="password" className=' border border-black rounded' />
                </div>
                <div>
                    <button className='border p-2 bg-blue-600 rounded'> SignIn</button> <br/>
                    <NavLink to='/login'>
                        <h4 className='italic'>Already Registered</h4>
                    </NavLink>
                </div>
            </form>
        </div>

     
      
  
  );
}

export default SignIn;
