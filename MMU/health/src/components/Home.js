import React from 'react'
import MyCarousel from './carousel';
import Card from './Card';
import HomeDetails from './HomeDetails';
import  NewCarousel from './carousel1';
import HCarousel from './HosCarousel'
function Home() {
  return (
    <div>
        <h1 className='font-bold text-2xl mb-4'> </h1>
        < HCarousel/>
        
        <HomeDetails/>
        
    </div>
  )
}

export default Home