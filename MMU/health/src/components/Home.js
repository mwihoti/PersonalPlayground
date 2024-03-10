import React from 'react'

import Card from './Card';
import HomeDetails from './HomeDetails';

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