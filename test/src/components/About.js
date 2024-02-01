import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import logo from '../assets/logo.png'
   

export default function About() {
  return (
    <section className='text-center'>
        <h1>Neno Laundry</h1>
        <Card className='items-center' >
            <CardHeader >
                <img  src={logo} alt="Laundry logo"/>
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" >
                Welcome to Neno Laundry, where we redefine the way you experience laundry services. <br/>
                 At Neno, we understand that your clothes deserve the best care, and we're here to provide just that.
                </Typography>
                <Typography className='mt-2 text-center text-wrap'>
                   
                    
                         <div className='text-center'>
                            <h1 className=' underline font-bold'>Our Commitment:</h1>
                            <br />
                            <ul className='list-inside'>
                                <li className='text-wrap'>
                               <h1 className=' underline font-bold'> Quality Beyond Clean:<br /> </h1>
                               <h4>
At Neno Laundry, we go beyond just cleaning clothes. We believe in providing a comprehensive service that ensures your garments
 are treated with the utmost care. From stain removal to meticulous folding, our attention to detail reflects our commitment to quality.
                                </h4>
                                </li>
                                <li>
                               <h1 className=' underline font-bold'> Quick and Convenient:<br/> </h1>
                               <h4>
We understand that time is valuable. That's why we offer a quick turnaround on our services. Our convenient
 online booking system and optional pick-up and delivery services are designed with your busy schedule in mind.
                                </h4>
                                </li>
                                <li>
                                <h1 className=' underline font-bold'>Eco-Friendly Practices:<br/> </h1>
                                <h4>
Neno Laundry is proud to embrace environmentally friendly practices. We utilize state-of-the-art
 technologies that not only deliver exceptional cleaning results but also minimize our ecological footprint.
                                </h4>
                                </li>
                            </ul>
                         </div>

                </Typography>
                <Typography>
                <h1 className=' underline font-bold'> Join Us on the Journey</h1>
Experience laundry like never before. Join us at Neno Laundry and rediscover the joy of clean, fresh, and perfectly folded clothes. We look forward to becoming your trusted partner in garment care.

Thank you for choosing Neno Laundry!
                </Typography>
                

            </CardBody>

        </Card>
    </section>
  )
}
