import React from 'react'
import MyCarousel from './carousel';
import Card from './Card';
import PriceList from './priceList';
import  NewCarousel from './carousel1';
function Home() {
  return (
    <div>
        <h1 className='font-bold text-2xl mb-4'>Hospitali Mkononi </h1>
        < NewCarousel/>
        
        <PriceList/>
        
    </div>
  )
}

export default Home