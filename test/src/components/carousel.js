import React from 'react'
import laundry1 from '../assets/laundry1.png'
import laundry2 from '../assets/laundry2.png'
import laundry3 from '../assets/laundry3.png'
import {Carousel, Typography, Button } from '@material-tailwind/react'

export default function MyCarousel() {
  return (
   <section className='h-svh'>
        <Carousel className="h-[80%]  rounded-xl  mb-0 overflow-hidden">
            
            <div className='relative h-full w-full '>
                <img src={laundry1} alt="image1" 
                className='w-full object-cover '
                />
                <div className='absolute inset-0 grid  w-full place-items-center bg-black/75'>
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
                       <Button size='lg' color="white">Explore</Button>
                       <Button size='lg' color="white">Contact us</Button>
                    </div>
                </div>
                </div>

            </div>
            <div className='relative h-full w-full'>
                <img src={laundry2} alt="laundry" className=' w-full h-full object-cover'/>
                <div className='absolute inset-0 grid  w-full items-center bg-black/75'>
                    <div className='w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32'>
                        <Typography
                        variant='h1' color='white' className='mb-4 text-3xl md:text-4xl lg:text-5xl'
                        >
                            NENO LAUNDRY STORE

                        </Typography>
                        <Typography
                        variant="lead"
                        color='white'
                        className='mb-12 opacity-80'>
                            Embrace the luxury of time and let us handle the laundry, so you can focus 
                            on what matters most to you.&apos; Experience the epitome of 
                            laundry convenience with our services – because your clothes deserve nothing but the best!
                        </Typography>
                        <div className='flex gap-2'>
                            <Button size='lg' color='white'>Explore</Button>
                            <Button size='lg' color='white'>Contact us</Button>

                        </div>
                    </div>
                </div>
            </div>
            <div className='relative h-full w-full'>
                <img src={laundry3} alt='laundry3'  className='h-full w-full object-cover'/>
                <div className='absolute inset-0 grid h-full w-full bg-black/75'>
                <div className='w-3/4 pl-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32'>
                    <Typography variant='h1' color='white'
                    className='mb-8  text-3xl md:text-4xl lg:text-5xl'
                    >
                        NENO LAUNDRY STORE
                    </Typography>
                    <Typography variant='lead' color='white'>
                    Whether you're a professional with a demanding career, a busy parent juggling multiple 
                    responsibilities, or anyone seeking a hassle-free laundry solution, we've got you covered.
                     Our skilled team employs eco-friendly practices and cutting-edge technology to deliver spotless,
                      fresh-smelling garments every time. 
                    </Typography>
                    <div className='flex gap-2'>
                            <Button size='lg' color='white'>Explore</Button>
                            <Button size='lg' color='white'>Contact us</Button>

                        </div>
                </div>
                </div>

            </div>
            
        </Carousel>
     </section>
   
    
  )
}
