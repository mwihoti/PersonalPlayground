import React from 'react'
import hos from '../assets/img.png'

import {Carousel, Typography, Button } from '@material-tailwind/react'

function HCarousel() {
  return (
    <section className=''>
        <div className="rounded-xl  mb-0 overflow-hidden h-96">
            
            <div className='relative h-1/2 w-full '>
                <img src={hos} alt="image1" 
                className='w-full  '
                />
                <div className='absolute inset-0 grid  w-full place-items-center bg-black/75'>
                <div className='w-3/4 text-center md:w-2/4'>
                    <Typography variant="h1" color= "white" 
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl">
                        Hospitali Mkononi
                    </Typography>
                    <Typography variant='lead' color="white" className='mb-12 opacity-90'>
                    Welcome to Hospitali Mkononi, where your health is our top priority. With Hospitali Mkononi, you're not just a
                    patient, you're our number one priority customer. Our mission is to provide you with convenient access to top-quality
                     healthcare services right from the comfort of your home. 
                    </Typography>
                    <div className='flex gap-2 justify-center'>
                       <Button size='lg' color="white">Explore</Button>
                       <Button size='lg' color="white">Contact us</Button>
                    </div>
                </div>
                </div>

            </div>
            </div>
            </section>
  )
}

export default HCarousel