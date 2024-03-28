import React from 'react';
import logo from '../assets/logo.png';
import pupils from '../assets/d7.jpeg';


function About() {
  return (
    <div className='p-4'>
      <div className=' flex justify-center '>
      <img src={logo} alt="School logo" className='w-50 rounded-full  ml-5 '/> 
      </div>
      <div className='md:flex sm:flex-row gap-32 p-10 border'>
        <h4 className='md:w-3/6 p-4'>Municipality primary school is a mixed day and boarding school. Municipality school is a private sponsored school, which 
          is also pocket ffriendly school. Our aim is to give back to the society, by educating our children to be great people in the society. Municipality primary school was 
          founded in 2004 and since then has been one of the performing schools. We are proud of how far munipality primary school has come and we strive to continue providing quality education.
        </h4> 
        <img src={pupils} alt='Municipality about' className=' md:w-1/5' />
      </div>

      <div className='flex bg-red-800 p-20 text-center gap-10 mt-2 text-white'>
        <div className=''>
          <h2>Our Vision</h2>
          <p>
          "Our school empowers all students to embrace learning, achieve their personal best and build their emotional, social and physical well-being."
          </p>
        </div>
        <div>
          <h2>Our Mission</h2>
          <p>
          "Our Mission is to provide high quality education and childcare in a safe, respectful and inclusive environment that builds a foundation for life-long learning."
          </p>
        </div>
      </div>

      <div>
        <h2>What students says abiut us</h2>
      </div>

    </div>
  )
}

export default About