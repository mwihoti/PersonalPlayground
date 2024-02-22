import React, { useState } from 'react'
import laundry1 from '../assets/laundry1.png'
import laundry2 from '../assets/laundry2.png'
import laundry3 from '../assets/laundry3.png'

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
const renderSlide = imageData.map((image) => (
    <div key={image.alt}>
        <img src={image.img} alt={image.alt} />
        <p className='legend'>{image.label}</p>
    </div>
 ))

function mCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    function handleChange  (index)  {
        setCurrentIndex(index)

    }

    
   
    return (
        <div>
            <div>
<Carousel showArrows={true}
autoplay={true}
infiniteLoop={true}
className="max-w-sm"
onChange={handleChange}
selectedItem={imageData[currentIndex]}
>
    {renderSlide} 

</Carousel>
            </div>
        </div>
    )
}

export default mCarousel