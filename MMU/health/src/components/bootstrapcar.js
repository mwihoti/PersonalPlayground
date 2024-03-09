import Carousel from 'react-bootstrap/Carousel';
import laundry1 from '../assets/laundry1.png'
import laundry2 from '../assets/laundry2.png'
import laundry3 from '../assets/laundry3.png'

function BtCar() {
    return (
        <Carousel>
            <Carousel.Item interval={1000} className='h-1/2 rounded-xl'>
                <img src={laundry1} alt="carousel1" className='w-full min-height-24rem object-cover' />
                <Carousel.Caption>
                    <div className='relative h-full w-full'>
                        
                            <div className='w-3/4 text-center md:w-2/4'>
                                <h1
                                    className="mb-4 text-3xl md:text-4xl lg:text-5xl text-black">
                                    NENO LAUNDRY STORE
                                </h1>
                                <h4 variant='lead' color="white" className='mb-12 opacity-80 text-black' >
                                    Welcome to our premier laundry service, where cleanliness meets convenience!
                                    At our laundry website, we understand the demands of your busy lifestyle and
                                    the importance of impeccably clean clothes. With state-of-the-art facilities and a commitment to excellence,
                                    we offer a seamless laundry experience tailored to your needs.
                                </h4>
                            </div>
                       
                    </div>
                </Carousel.Caption>

            </Carousel.Item>
        </Carousel>
    )
}
export default BtCar;