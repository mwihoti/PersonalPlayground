import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import next from '../assets/next.png';
import back from '../assets/back.png';
import student from '../assets/student1.jpg'


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


        <div className='w-3/4 mx-auto bg-white p-20 border '>

            <div className='mt-20 border'>
                <Slider {...settings}>
                    {data.map((students) => (
                        <div className='h-[350px] '>
                            <div className='rounded-t-xl h-32 bg-indigo-500 flex justify-center items-center'>
                                <img src={students.img} alt="Student" className='h-20  w-20 rounded-full' />

                            </div>
                            <div className=' bg-white md:flex md:flex-col items-center justify-center p-4 gap-4'>

                                <h1 className='md:text-xl font-semibold'>{students.name}</h1>
                                <h3>{students.response}</h3>
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
        img: require('../assets/student1.jpg'),
        response: "I love been here at municpality primary school."
    },
    {
        name: "Brandon",
        img: require('../assets/student4.jpg'),
        response: "I like it here cause I like playing football with my classmates. "
    },
    {
        name: "Angela",
        img: require('../assets/student2.jpg'),
        response: "When I am at municipality I feel am at home we are treated well. "
    },
    {
        name: "James",
        img: require('../assets/student3.jpg'),
        response: "Our teachers are good and welcoming. Also we have a funny bus driver."
    },

]
export default Students