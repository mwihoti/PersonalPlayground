import React, { useState } from 'react'
import { Button } from '@material-tailwind/react'
import StaticDateTimePickerLandscape from './dateTime'
import logo from '../assets/logo.png';

import Card from './Card';


function Contact() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectDate, setSelecteddate] = useState(null);

  function handleSubmit () {
    if (!fname || !lname|| !email || !phone || !setSelecteddate) {
      alert("Please fill in all fields.")
    }
    else {
    setFname('');
    setLname('');
    setEmail('');
    setPhone('');

    alert("Booked successfull")
    }
  }
  return (
    <div className='text-center '>
        
        <card className=' '>
           
                <div className='justify-center flex '>
                    <img src={logo} alt='imglogo'/>
                </div>
            
             <h2 className='text-3xl font-bold uppercase'>
                    Neno laundry Store
                    </h2>
                    <p className='pt-3 underline'>
                Add your details to book laundry day with us.

                    </p>                    
                
               <form className='m-0 p-0 text-center'>
               <h1 className='italic text-xs p-2'>Fill in </h1>
                
               
                <div className='gap-4'>
                  <label>First-Name</label>
                  <input type='text' value={fname} onChange={(e)=>setFname(e.target.value)} className='border m-3' placeholder='first-name' required/>
                </div>
                <div className='gap-4'>
                  <label>Last-Name</label>
                  <input type='text' value={lname} onChange={(e) =>setLname(e.target.value)} className='border m-3' placeholder='last-name ' required/>
                </div>
              
                <div className='gap-4' >
                  <label>Email </label>
                  <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} className='border m-3' placeholder='@gmail.com' required/>
                </div>
                <div className=''> 
                <div >
                  <label>Phone </label>
                  <input type='tel' value={phone} onChange={(e)=>setPhone(e.target.value)} className='border m-3' placeholder='+254' required/>
                </div>
                <h1 className=' uppercase text-2xl pt-2'><strong>Pick a date to bring your Laundry</strong></h1>
                <div>
                  <StaticDateTimePickerLandscape selectDate={selectDate} setSelecteddate={setSelecteddate} />
                </div>
                </div>

        </form>

        <div>
          <Button className='mt-3 mb-2' onClick={handleSubmit}>
            Book Now
          </Button>
          </div>  
          <div className=''>
          <Card />
            </div>  
        
        </card>
        
       
    </div>
  )
}

export default Contact