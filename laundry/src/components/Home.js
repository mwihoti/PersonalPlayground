import React, { useState } from 'react';
import Contact from './Contact';
import Carousel from './carousel';
import { Button } from '@material-tailwind/react';


export default function Home() {
  const [book, setBook] = useState(false);
  const toBook = () => {
    console.log('clicked')
    setBook(true)
  }
  return (
    <div className=''>
      <div className='mt-2 text-3xl w-30 text-center p-5 '>
        <p className='uppercase font-bold underline text-5xl text-red-600 '>Laundry and cleaning services</p>
      </div>
      <div className='mt-50 m-20 '>

      {!book && (  <Button className='p-4 bg-blue-800 font-bold rounded uppercase' onClick={toBook}>BOOK NOW</Button>)}
      {book && <Contact />}
      </div>
      <div>
        <Carousel />
        </div>
    
    </div>
  )
}
