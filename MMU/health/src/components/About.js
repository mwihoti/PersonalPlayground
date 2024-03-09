import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import logo from '../assets/med.png'


export default function About() {
  return (
    <section className='text-center border-t'>

      <Card className='items-center' >

        <CardHeader className='mt-3' >
          <img src={logo} alt="Laundry logo"  className='h-20'/>
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" >
            Welcome to Hospitali Mkononi.
          </Typography>

          <div className='text-center'>
            <h1 className=' underline font-bold mt-3'>Our Commitment:</h1>

            <div className='flex flex-col mt-3 mb-5 text-xl'>
              <h1 className=' underline font-bold'> We care about your Health </h1>
              <h4>
                At Neno Laundry, we go beyond just cleaning clothes. We believe in providing a comprehensive service that ensures your<br /> garments
                are treated with the utmost care. From stain removal to meticulous folding, our attention to detail reflects our commitment to quality.
              </h4>
            </div>

            <div className='flex flex-col text-xl mb-5'>
              <h1 className=' underline font-bold'> Quick and Convenient: </h1>
              <h4>
                We understand that time is valuable. That's why we offer a quick turnaround on our services. Our convenient <br />
                online booking system and optional pick-up and delivery services are designed with your busy schedule in mind.
              </h4>
            </div>
            <div className='flex flex-col text-xl mb-5 '>
              <h1 className=' underline font-bold'>Eco-Friendly Practices: </h1>
              <h4>
                Neno Laundry is proud to embrace environmentally friendly practices. We utilize state-of-the-art
                technologies that <br /> not only deliver exceptional cleaning results but also minimize our ecological footprint.
              </h4>
            
            </div>


          </div>

          <Typography variant='h6'>
            <h1 className=' underline font-bold'> Join Us on the Journey</h1>
            Experience laundry like never before. Join us at Neno Laundry and rediscover the joy of clean, fresh, and perfectly folded <br /> clothes. We look forward to becoming your trusted partner in garment care.

            Thank you for choosing Neno Laundry!
          </Typography>


        </CardBody>

      </Card>
    </section>
  )
}
