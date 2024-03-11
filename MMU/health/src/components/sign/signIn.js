import React from 'react';


function SignIn() {
    return (
        <div>


            {/* User SignIn Form */}
            <form>
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
                    <button className='border p-2 bg-blue-600 rounded'> SignIn</button>
                </div>
            </form>
        </div>

     
      
  
  );
}

export default SignIn;
