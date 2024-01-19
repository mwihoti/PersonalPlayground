import React, { useState } from 'react'
import Contact from './Contact'


export default function Home() {
  const [book, setBook] = useState(false);
  const toBook = () => {
    console.log('clicked')
    setBook(true)
  }
  return (
    <div className=''>
      <div className='mt-2 text-3xl w-30 text-center p-5 '>
        <p className='uppercase font-bold underline '>Laundry and cleaning services</p>
      </div>
      <div className='mt-50 m-20 '>

      {!book && (  <button className='p-4 bg-white  rounded  uppercase' onClick={toBook}>BOOK NOW</button>)}
      {book && <Contact />}
      </div>


    
    </div>
  )
}
