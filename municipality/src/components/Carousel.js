import React from 'react';
import mun from '../assets/d1.jpg';
import motto from '../assets/d4.jpeg';
import { Link } from 'react-router-dom';

function Carousel() {
    return (
        <div className='w-full relative '>
            <section className='w-full'>
                <div className='flex justify-center p-2  '>
                    <img src={mun} alt="Carousel Image" className='w-full h-96 object-cover sm:w-auto md:w-full' />
                    
                    
                      <div className='inset-0 absolute place-items-center grid text-white' >
                        <p className='text-xl lg:text-5xl  uppercase bold text-cyan-500 hover:text-black/75 '>Municipality Primary school</p>
                        
                        <div className='border border-black p-4 rounded bg-green-900 '>
                        <p className='text-white  '>
                            <img  src={motto} alt='school motto'  className='mx-auto w-24 p-2 rounded'/>
                            <h1><em>School Motto:</em></h1>
                            <h3>A Great Place To Learn.</h3>

                        </p>
                        
                        </div>
                        <Link to='/contact' >
                        <button className='border p-3 rounded bg-black hover:bg-blue-700 '>Contact us</button>
                        </Link>

                        


                      </div>
                    
                    </div>


          
            </section>


        </div>
    )
}

export default Carousel