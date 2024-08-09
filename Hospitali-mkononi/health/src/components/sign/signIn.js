import React, { useEffect } from 'react';
import Login from './login'
import { NavLink, useNavigate,  } from 'react-router-dom';
import { useState } from 'react';
import { TabLaundry } from '../Header';
function SignIn() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('')
    const navigate = useNavigate();
    useEffect(() => {
        if(localStorage.getItem("user-info"))
        {
            navigate("/book")
        }
    })


    async function handleRegister() {


        let item = { name, email, password }
        console.warn("Results", item)

        let result = await fetch("http://localhost:8000/api/register", {
            method:"POST",
            body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                
                "Accept": 'application/json'
            }
        }) 
        result =await result.json()
        localStorage.setItem("user-info", JSON.stringify(result))
        navigate('/')
        console.warn("results", result)
    }



    return (
        <div>
           <TabLaundry/> 
            {/* User SignIn Form */}
            <div>
                <form >
                    <h1 className='mb-4 uppercase underline'>Register</h1><br />
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
                    <button className='border p-2 bg-blue-600 rounded' onClick={handleRegister}> Register</button> <br />

                    <NavLink to='/Login'>
                        <h3>Already registered</h3>
                    </NavLink>

                </div>
            </div>
        </div>
    );
}

export default SignIn;
