import React from 'react'
import { Button, Card, Typography } from '@material-tailwind/react'
import {UserCircleIcon} from "@heroicons/react/24/solid";
import StaticDateTimePickerLandscape from './dateTime'
import logo  from '../assets/med.png'
import { TabLaundry } from "./Header";
import { useState } from 'react';


function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  }
  return (
    <div className='text-center '>
      <TabLaundry />
        
        <h1 className='text-3xl underline font-bold uppercase mb-2'>Hospitali Mkononi</h1>

        <div className=' flex justify-center items-center'>
          <img src={logo} alt='hospital' className='h-40'/>
        </div>
        <div>
          <form className='m-0'>
            <h1 className='italic underline mb-3'>Get in touch</h1>
            <div className=' mb-4'>
            <div >
              <label> Your Name</label> <br />
              <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder=' Name' className='rounded' required />
            </div>
            <div>
            <label> Your Email</label> <br />
              <input value={email} type='text' onChange={(e)=> setEmail(e.target.value)} placeholder=' Email' className='rounded' required />
              </div>
              <div className=''>
              <label>Subject</label> <br/>
              <input value={subject} onChange={(e) => setSubject(e.target.value)} type='text' placeholder='subject' className='rounded'  required />
            </div>
            <div>
              <label>Message</label> <br/>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} type="text" required />
            </div>
            </div>
            
          </form>
          <button className='border p-3 rounded text-black bg-blue-700' type='submit' onClick={handleSubmit}>Submit</button>
        </div>
       
    </div>
  )
}

export default Contact