import React from 'react'
import { Button, Card, Typography } from '@material-tailwind/react'
import {UserCircleIcon} from "@heroicons/react/24/solid";
import StaticDateTimePickerLandscape from './dateTime'


function Contact() {
  return (
    <div className='text-center '>
        <h1>Contact us</h1>
        <Card className='items-center'>
           
                <div className=' items-center'>
                    <UserCircleIcon className='w-50 h-20' />
                </div>
            
             <Typography className='text-3xl font-bold'>
                    Neno laundry.<br/>
                    <p>
                Add your details to book laundry with us.

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
                <h1 className='font-bold uppercase text-2xl'>Pick a date to bring your Laundry</h1>
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