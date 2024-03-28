import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import next from '../assets/next.png';
import back from '../assets/back.png';


function Students() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <img src={next} alt="next"/>,
        prevArrow: <img src={back} alt='back'/>
    };
    return (


        <div className='w-3/4 mx-auto bg-white p-5'>

            <div className='mt-20'>
                <Slider {...settings}>
                    {data.map((d) => (
                        <div className='h-[450px] '>
                            <div className='rounded-t-xl h-56 bg-indigo-500 flex justify-center items-center'>
                                <img src={d.img} alt="Student" className='h-44 w-44' />

                            </div>
                            <div className=' bg-white md:flex md:flex-col items-center justify-center p-4 gap-4'>

                                <h1 className='md:text-xl font-semibold'>{d.name}</h1>
                                <h3>{d.response}</h3>
                            </div>

                        </div>

                    ))}
                </Slider>
            </div>




        </div>
    )       
     
}
const data = [
    {
        name: "Makena",
        img: require('../assets/students/makena.png'),
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