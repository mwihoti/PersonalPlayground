import React from 'react'
import { Button, Card, Typography } from '@material-tailwind/react'
import {UserCircleIcon} from "@heroicons/react/24/solid";
import StaticDateTimePickerLandscape from './dateTime'
import logo  from '../assets/med.png'


function Contact() {
  return (
    <div className='text-center '>
        
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
              <input type='text' placeholder=' Name' className='rounded' required/>
            </div>
            <div>
            <label> Your Email</label> <br />
              <input type='text' placeholder=' Email' className='rounded' required/>
              </div>
              <div className=''>
              <label>Subject</label> <br/>
              <input type='text' placeholder='subject' className='rounded'  required/>
            </div>
            <div>
              <label>Message</label> <br/>
              <textarea type="text" required/>
            </div>
            </div>
            
          </form>
          <button className='border p-3 rounded text-black bg-blue-700'>Submit</button>
        </div>
       
    </div>
  )
}

export default Contact