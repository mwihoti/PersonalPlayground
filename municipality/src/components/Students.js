import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Students() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        <Slider {...settings}>
        <div className='w-3/4 mx-auto'>
          
                <div className='mt-20'>
                    {data.map((d) => (
                        <div className='h-[450px bg-white'>
                            <div className='rounded-t-xl bg-indigo-500 flex justify-center items-center'>
                                <img src={d.img} alt="Student"/>

                            </div>
                            <div className='flex flex-col items-center justify-center p-4 gap-4'> 

                            <h1 className='text-2xl'>{d.name}</h1>
                            <h3>{d.response}</h3>
                            </div>
                            
                        </div>

                    ))}

                </div>
                <div className=''>

                </div>
         


        </div>
        </Slider>
    )
}
const data = [
    {
        name: "Makena",
        img:  require('../assets/students/makena.png'),
        response: "I love been here at municpality primary school."
    },
    {
        name: "Brandon",
        img: require('../assets/students/brandon.png'),
        response: "I like it here cause I like playing football with students. "
    },
    {
        name: "Angela",
        img: require('../assets/students/makena.png'),
        response: "When I am at municipality I feel am at home we are treated well. "
    },
    {
        name: "James",
        img: require('../assets/students/brandon.png'),
        response: "Our teachers are good and welcoming. Also we have a funny bus driver."
    },

]
export default Students