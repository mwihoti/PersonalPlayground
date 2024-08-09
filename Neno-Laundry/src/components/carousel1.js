import React, { useState } from 'react'
import laundry1 from '../assets/laundry1.png';
import { Link } from 'react-router-dom';
import {Carousel, Typography, Button } from '@material-tailwind/react'

const imageData = [
    {
        label: "laundry1",
        alt: "Laundry image1",
        img: laundry1

    }
]


function NewCarousel() {





    return (
        <section className='relative mb-0 align-item overflow-hidden'>

            <div className="h-1/2 relative">
                <img src={imageData[0].img} alt={imageData[0].alt} className='mb-0 object-center w-full  h-screen' />
                <div className='absolute inset-0 grid w-full  text-white h-96 place-items-center bg-black/70  text-center'>
                <div className='w-3/4 text-center md:w-2/4'>
                    <Typography variant="h1" color= "white" 
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl">
                        NENO LAUNDRY STORE
                    </Typography>
                    <Typography variant='lead' color="white" className='mb-12 opacity-80'>
                    Welcome to our premier laundry service, where cleanliness meets convenience!
                     At our laundry website, we understand the demands of your busy lifestyle and 
                     the importance of impeccably clean clothes. With state-of-the-art facilities and a commitment to excellence, 
                    we offer a seamless laundry experience tailored to your needs. 
                    </Typography>
                    <div className='flex gap-2 justify-center'>
                       <Button size='lg' color="grey"><Link to={"/about"}>Explore</Link></Button>
                       <Button size='lg' color="grey"><Link to={"/contact"}>Contact us</Link></Button>
                    </div>
                </div>

                   




                </div>


            </div>

        </section>
    )
}

export default NewCarousel