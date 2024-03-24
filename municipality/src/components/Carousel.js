import React from 'react';
import mun from '../assets/d1.jpg'

function Carousel() {
    return (
        <div className='w-full relative'>
            <section className='w-full'>
                <div className='flex justify-center p-2  '>
                    <img src={mun} alt="Carousel Image" className='w-full h-96 object-cover' />
                    
                    
                      <div className='inset-0 absolute place-items-center grid text-white' >
                        <p className='text-4xl uppercase bold'>Municipality Primary school</p>
                        <br/>
                        <div className='border border-black p-4 rounded bg-green-900'>
                        <p className='text-white  '>
                            <h1><em>School Motto:</em></h1>
                            <h3>A Great Place To Learn.</h3>

                        </p>
                        
                        </div>
                        <button className='border p-3 rounded bg-black hover:bg-blue-700'>Contact us</button>


                      </div>
                    </div>


          
            </section>


        </div>
    )
}

export default Carousel