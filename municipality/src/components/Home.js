import React from 'react';
import Carousel from './Carousel';
import jn from '../assets/d6.png'
import wy from  '../assets/classlogo.jpeg'

function Home() {
  return (
    <div>
      <Carousel />
      <div className='md:flex'>
        <div className='  mx-auto  p-2 md:w-1/2'>
          <div className='p-2 '>
            <h3 className='text-3xl text-center'>Welcome to Municipality Primary School.</h3>
          </div>


          <div className='border-none shadow-lg  w-4/6 text-wrap  mx-auto p-5'>
            <h4 className='text-2'>
              Welcome to School of future leaders. We are dedicated to create young students to be great leaders of tommorrow
              As our  Municipality motto say is"Municipality is A great place to learn it". We are honored to welcome pupils at this great place.
              Dear parents we welcome you to bring your kinds to us. Our charges are pocket ffriendly with you as a parent. And also a great enviroment for your kind to be.
            </h4>
            
            <img src={wy} alt='join image' className='w-32 mx-auto  p-4' />

          </div>
          
        </div>
    
        
        <div className='md:mr-20 md:w-1/3 '>
        <img src={jn} alt='join image' className='w-28 mx-auto p-4' />

          <h2 className='text-center text-xl underline'>Why Join us ?</h2>
          <h4>
            <ul className=' list-disc list-inside p-5 border-none'>
              <li>Municipality provides a safe and a secure home and high quality education for students.</li>
              <li>Extracurricular activities include competitive sports, music and visual arts, scouting and community voluntary services</li>
              <li>80 pupils sat the most recent K.C.P.E exams. 5% scored over 400 marks and 50% scored over 350 marks.  </li>
              <li>Municipality is a day school and also boarding school</li>
              <li>Municipality Offers good transport services </li>
            </ul>
          </h4>

        </div>
      </div>

      <div>

      </div>
    </div>
  )
}

export default Home