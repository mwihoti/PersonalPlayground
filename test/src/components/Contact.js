import React from 'react'
import { Card, CardHeader, Typography } from '@material-tailwind/react'
import {UserCircleIcon} from "@heroicons/react/24/solid";
import StaticDateTimePickerLandscape from './dateTime'

function Contact() {
  return (
    <div className='text-center '>
        <h1>Contact us</h1>
        <Card>
            <CardHeader>
                <div>
                    <UserCircleIcon className='w-50 h-20 justify-center' />
                </div>
            </CardHeader>
             <Typography>
                    Neno laundry.<br/>
                    <p>
                Add your details to book your laundry day with us.

                    </p>                    
              </Typography>  
               <form>
               <h1 className='italic text-xs'>Fill in </h1>
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

        </Card>
       
    </div>
  )
}

export default Contact