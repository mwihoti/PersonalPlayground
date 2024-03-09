import React, { useState } from 'react'
import laundry1 from '../assets/laundry1.png'
import laundry2 from '../assets/laundry2.png'
import laundry3 from '../assets/laundry3.png';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const imageData = [
    {
        label: "laundry1",
        alt: "Laundry image1",
        img: laundry1

    },
    {
        label: "laundry2",
        alt: "Laundry image2",
        img: laundry2

    },
    {
        label: "laundry3",
        alt: "Laundry image3",
        img: laundry3

    }
]


function NewCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    function handleNext  ()  {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageData.length)

    }
    function handlePrev () {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + imageData.length)  % imageData.length)
    }

    
   
    return (
        <div className='relative'>
            
<div className="max-w-[50%] overflow-hidden m-auto ">
    <img src={imageData[currentIndex].img} alt={imageData[currentIndex].alt} className='block mx-auto' />
    <div className='absolute inset-0 '>
    <p className='text-center'>{imageData[currentIndex].label}</p>
    <h2 className='m-4'>Neno laundry</h2>
    </div>
<button className='absolute top-1/2 left-4 transform -translate-y-1/2' onClick={handlePrev}>
        <FaArrowLeft />
    </button>
    
    <button className="absolute top-1/2 right-4 transform -translate-y-1/2" onClick={handleNext}>
        <FaArrowRight />
    </button>

</div>
           
        </div>
    )
}

export default NewCarousel