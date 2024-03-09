import React from 'react'
import { Button, Card, Typography } from '@material-tailwind/react'
import {UserCircleIcon} from "@heroicons/react/24/solid";
import StaticDateTimePickerLandscape from './dateTime'
import logo  from '../assets/hospital.png'


function Contact() {
  return (
    <div className='text-center '>
        
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
               <form>
               <h1 className='italic text-xs p-2'>Fill in </h1>
                <div className='flex justify-center'>
               
                <div className='gap-4'>
                  <label>First-Name</label>
                  <input type='text' className='border m-3' placeholder='first-name'/>
                </div>
                <div className='gap-4'>
                  <label>Last-Name</label>
                  <input type='text' className='border m-3' placeholder='last-name'/>
                </div>

                </div> 
                <div className='ml-0' >
                  <label>Email </label>
                  <input type='text' className='border m-3' placeholder='@gmail.com'/>
                </div>
                <div className=''> 
                <div >
                  <label>Phone </label>
                  <input type='text' className='border m-3' placeholder='+254'/>
                </div>
                <h1 className='font-bold uppercase text-2xl'>Time & date</h1>
                <div>
                  <StaticDateTimePickerLandscape />
                </div>
                </div>

        </form>

        <div>
          <Button className='mt-3 mb-2'>
            Book Now
          </Button>
          </div>        

        </Card>
       
    </div>
  )
}

export default Contact