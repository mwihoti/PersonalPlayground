import React from 'react';
import SignIn from './signIn';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { TabLaundry } from '../Header';

function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [ email, setEmail ] = useState('')
    const navigate = useNavigate();

    async function handleLogin () {
        {/*event.preventDefault();
        try{
            await axios.post('/login', {name, password});
            name("");
            setPassword("");
            navigate("/");

        }catch(e){
            console.log(e);

        }*/
       
        let item={name, email, password}
    console.warn(item)

  
    }
    }

    return (
        <div>
         
            {/* User Login Form */}
            <div>
                <form > 
                    <h1 className='mb-4 uppercase underline'>Login</h1>
                    <div>
                        <label>UserName</label> <br />
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='name' className='border border-black rounded ' />
                    </div>
                     <div>
                        <label>email</label> <br />
                        <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' className='border border-black rounded ' />
                    </div>
                    <div>
                        <label>Password</label> <br />
                        <input type="password" id="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} className='border border-black rounded ' />
                    </div>
                </form>
                <div className='mt-3'>
                    <button className='border p-2 bg-blue-600 rounded' onClick={handleLogin}> Login</button> <br />
                    
                    <NavLink to='/signin'>
                    <h3>Click here to register</h3>
                    </NavLink>

                </div>
            </div>
        </div>
    );
}

export default Login;
