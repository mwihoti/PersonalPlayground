import React from 'react'
import MyCarousel from './carousel';
import Card from './Card';
import PriceList from './priceList';

function Home() {
  return (
    <div>
        <h1 className='font-bold'>NENO LAUNDRY STORE</h1>
        <MyCarousel />
        <PriceList/>
        
    </div>
  )
}

export default Home