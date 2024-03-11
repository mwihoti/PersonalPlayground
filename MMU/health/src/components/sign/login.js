import React from 'react';

function Login() {
    return (
        <div>
            {/* User Login Form */}
            <div>
                <form>
                    <div>
                        <label>UserName</label> <br />
                        <input type="text" id="name" placeholder='name' className='border border-black rounded ' />
                    </div>
                    <div>
                        <label>Password</label> <br />
                        <input type="password" id="password" placeholder='password' className='border border-black rounded ' />
                    </div>
                </form>
                <div className='mt-3'>
                    <button className='border p-2 bg-blue-600 rounded'> Login</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
