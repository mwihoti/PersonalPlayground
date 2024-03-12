import React from 'react'
import { Button, Card, Typography } from '@material-tailwind/react'
import {UserCircleIcon} from "@heroicons/react/24/solid";
import StaticDateTimePickerLandscape from './dateTime'
import logo  from '../assets/hospital.png'
import { NavLink } from 'react-router-dom';
import { TabLaundry } from './Header';


function Book() {
  return (
    <div className='text-center '>
      <TabLaundry />
        
        <Card className='items-center'>
           
                <div className=' items-center'>
                    <img src={logo} alt='healt' className='w-10' />
                </div>
            
             <Typography className='text-3xl font-bold'>
             Hospitali Mkononi 
                    <p>
                Add your details to book appointment with us.

                    </p>                    
              </Typography>  
               <form className='p-2'>
               <h1 className='italic text-xs p-2'>Fill in </h1>
                
               
                <div className='gap-4'>
                  <label>
                    Patient Name
                  </label><br/>
                  <input type='text' className='border m-3 rounded' placeholder='Your Names'/>
                </div>
                <div className='gap-4'>
                  <label>Age</label><br/>
                  <input type='text' className='border m-3 w-40 rounded' placeholder='Your Age'/>
                </div>

                
                <div className='ml-0' >
                  <label>Email </label>
                  <br/>
                  <input type='text' className='border m-3 rounded' placeholder='Email Address'/>
                </div>
                <div className=''> 
                <div >
                  <label>Phone </label>
                  <br/>
                  <input type='text' className='border m-3 rounded' placeholder='+254'/>
                </div>
                <h1 className='font-bold uppercase text-2xl'>Time & date</h1>
                <div>
                  <StaticDateTimePickerLandscape />
                </div>
                </div>
                <div>
                  <label>Select Doctor</label><br/>
                 <select> 
                  <option>Doctor 1</option>

                  </select>
                </div>
                <div className='p-2'>
                  <label>Describe Your symptoms</label>
                  <br/>
                  <textarea className='rounded'></textarea>
                </div>

        </form>

        <div>
          <Button className='mt-3 mb-2'>
            Book Now
          </Button>
          </div>        

          <div>
          <NavLink to='/bot'>
          <h1 className='text-blue'>Checkout our quick doctor</h1>
          </NavLink>
        </div>
       

        </Card>

        
    </div>
  )
}

export default Book