import React from 'react'
import { NavLink } from 'react-router-dom'

function signIn() {
  return (
    <div>
        <h1>Hospitali Mkononi</h1>

        <div>
            <div>
                <NavLink>
                    Login
                </NavLink>{" "}
                our<NavLink>

                </NavLink>
            </div>

            <form >
                <div>
                    <label>Email Address</label>
                    <input id='email' name='email'  type='text ' placeholder="Email"/>
                </div>
            </form>
        </div>
        
    </div>
  )
}

export default signIn