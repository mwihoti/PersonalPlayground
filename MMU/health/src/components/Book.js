import React, { useState } from 'react'
import { Button, Card, Typography } from '@material-tailwind/react'
import {UserCircleIcon} from "@heroicons/react/24/solid";
import StaticDateTimePickerLandscape from './dateTime'
import logo  from '../assets/hospital.png'
import { NavLink } from 'react-router-dom';
import { TabLaundry } from './Header';


function Book() {
  const [name, setName] = useState("");
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [time, setTime] = useState(new Date());
  const [description, setDescription] = useState('');

  async function bookApp () {
    console.warn(name, age, email, phone, time, description);
    const formData = new FormData();
    formData.append('name', name);
    formData.append('age', age );
    formData.append('email', email );
    formData.append('description', description );
    const formattedTime = new Date(time.getTime() - (time.getTimezoneOffset() * 60000)).toISOString();
  formData.append('time', formattedTime);
    formData.append('phone', phone);


    let result = await fetch("http://localhost:8000/api/book", {
      method: "POST",
      body: formData
    });
    alert("You have successfully book your apointment")
  }
 
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
                  <input type='text'  value={name} onChange={(e)=> setName(e.target.value)}className='border m-3 rounded' placeholder='Your Names'/>
                </div>
                <div className='gap-4'>
                  <label>Age</label><br/>
                  <input type='text' value={age} onChange={(e)=> setAge(e.target.value)} className='border m-3 w-40 rounded' placeholder='Your Age'/>
                </div>

                
                <div className='ml-0' >
                  <label>Email </label>
                  <br/>
                  <input type='text' value={email} onChange={(e)=> setEmail(e.target.value)} className='border m-3 rounded' placeholder='Email Address'/>
                </div>
                <div className=''> 
                <div >
                  <label>Phone </label>
                  <br/>
                  <input type='text' value={phone} onChange={(e)=> setPhone(e.target.value)} className='border m-3 rounded' placeholder='+254'/>
                </div>
                <h1 className='font-bold uppercase text-2xl'>Time & date</h1>
                <div>
                  <StaticDateTimePickerLandscape value={time} onChange={(newTime)=> setTime(newTime)}/>
                </div>
                </div>
                <div>
                  <label>Select Doctor</label><br/>
                 <select> 
                  <option>Doctor 1</option>

                  </select>
                </div>
                <div className='p-2'>
                  <label>describe Your symptoms</label>
                  <br/>
                  <textarea className='rounded' value={description} onChange={(e)=> setDescription(e.target.value)}></textarea>
                </div>

        </form>
        <div>

        <div>
          <Button className='mt-3 mb-2' onClick={bookApp}>
            Book Now
          </Button>
          </div>  
          <div>
            <NavLink to='/myBook'>
          <Button className='mt-3 mb-2' >
            My Bookings
          </Button>
          </NavLink>
          </div>  

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