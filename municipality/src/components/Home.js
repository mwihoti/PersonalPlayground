import React from 'react';
import Carousel from './Carousel';
import jn from '../assets/d6.png'

function Home() {
  return (
    <div>
      <Carousel />
      <div className='flex'>
        <div className='  mx-auto  p-2 w-1/2'>
          <div className='p-2 '>
            <h3 className='text-3xl text-center'>Welcome to Municipality Primary School.</h3>
          </div>


          <div className='border-none shadow-lg  w-4/6 text-wrap  mx-auto'>
            <h4 className='text-2'>
              Welcome to School of future leaders. We are dedicated to create young students to be great leaders of tommorrow
              As our  Municipality motto say is"Municipality is A great place to learn it". We are honored to welcome pupils at this great place.
              Dear parents we welcome you to bring your kinds to us. Our charges are pocket ffriendly with you as a parent. And also a great enviroment for your kind to be.
            </h4>
            <img src={jn} alt='join image' className='w-24 mx-auto p-4' />

          </div>

        </div>
        <div className='mr-20'>
          <h2>Why Join us</h2>
          <h4>
            <ul>
              <li>Municipality provides a safe and a secure home and high quality education for students.</li>
              <li>Extracurricular activities include competitive sports, music and visual arts, scouting and community voluntary services</li>
              <li>80 pupils sat the most recent K.C.P.E exams. 5% scored over 400 marks and 50% scored over 350 marks.  </li>
            </ul>
          </h4>

        </div>
      </div>
    </div>
  )
}

export default Home