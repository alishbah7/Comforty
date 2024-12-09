'use client';
import { useEffect } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import  Header  from '@/components/header';
import fp1 from '../../public/images/fp1.png';
import Image from 'next/image';
import Footer from '@/components/footer';

const About = () => {  
    useEffect(() => {
        AOS.init({ duration: 2000, easing: 'ease', delay: 200 });
    }, []);
    return (  
        <div>
            <Header/>
            <div className='w-full flex flex-col md:flex-row  gap-[25px] items-center justify-center text-white py-[40px]'>  
            <div data-aos='zoom-in' className='flex flex-col justify-center items-center gap-[30px] sm:justify-start sm:items-start sm:gap-[0] bg-[#029FAE] w-[250px] sm:w-[450px] h-[300px] sm:h-[400px]'>  
                <h2 className='text-[20px] sm:text-[25px] font-bold sm:pl-[40px] sm:mt-[60px]'>About Us - Comforty</h2>  
                <p className='sm:pl-[40px] text-[12px] sm:mt-[10px] w-[80%] text-center sm:text-start'>  
                    At Comforty, we believe that the right chair can transform your space and elevate your comfort.   
                    Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that   
                    seamlessly blend style with functionality.  
                </p>  
                <button className='bg-teal-100 bg-opacity-20 text-white py-2 px-4 rounded sm:mt-[100px] sm:ml-[40px]'>  
                    View Collection  
                </button>  
            </div>  
            <div data-aos='zoom-in'>  
                <Image  
                    src={fp1}   
                    alt='Stylish chair'   
                    className='w-[250px] sm:w-[450px] h-[300px] sm:h-[400px]'  
                />  
            </div>  
        </div> 

        <div className='w-full flex justify-center text-center items-center mt-[10px]'>
            <h1 className='text-[18px] tracking-normal sm:text-[22px] font-semibold sm:tracking-wide' data-aos='fade-right'>What Makes Our Brand Different</h1>    
        </div> 

        <div className='py-12 text-start flex justify-center items-center'>    
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 w-[80%]'>  
                <div className='shadow-md p-6 flex flex-col items-start h-[200px] bg-gray-100' data-aos='zoom-in'>  
                    <i className='bx bxs-truck text-[25px] mb-[10px] text-[#029FAE]'></i> 
                    <h3 className='text-xl text-[#029FAE] mb-2'>Next day as standard</h3>  
                    <p className='text-[#029FAE] text-[12px]'>  
                        Order before 3pm and get your order the next day as standard.  
                    </p>  
                </div>  
                <div className='shadow-md p-6 flex flex-col items-start h-[200px] bg-gray-100' data-aos='zoom-in'>  
                    <i className='bx bx-check-circle text-[25px] mb-[10px] text-[#029FAE]'></i>  
                    <h3 className='text-xl text-[#029FAE] mb-2'>Made by true artisans</h3>  
                    <p className='text-[#029FAE] text-[12px]'>  
                        Handmade crafted goods made with real passion and craftsmanship.  
                    </p>  
                </div>  
                <div className=' shadow-md p-6 flex flex-col items-start h-[200px] bg-gray-100' data-aos='zoom-in'>  
                    <i className='bx bx-wallet text-[25px] mb-[10px] text-[#029FAE]' ></i>
                    <h3 className='text-xl text-[#029FAE] mb-2'>Unbeatable prices</h3>  
                    <p className='text-[#029FAE] text-[12px]'>  
                        For our materials and quality you won’t find better prices anywhere.  
                    </p>  
                </div>  
                <div className=' shadow-md p-6 flex flex-col items-start h-[200px] bg-gray-100' data-aos='zoom-in'>  
                    <i className='bx bx-recycle text-[25px] mb-[10px] text-[#029FAE]' ></i>  
                    <h3 className='text-xl text-[#029FAE] mb-2'>Recycled packaging</h3>  
                    <p className='text-[12px] text-[#029FAE]'>  
                        We use 100% recycled to ensure our footprint is more manageable.  
                    </p>  
                </div>  
            </div>  
        </div>

        <div className='py-12 px-6 md:px-16 lg:px-24 mb-[40px]'>
            <h2 className='text-[20px] sm:text-2xl text-center md:text-start font-semibold text-gray-800 mb-8' data-aos='fade-right'>Our Popular Products</h2>
            <div className='flex flex-col lg:flex-row justify-center gap-[60px] lg:gap-[20px] items-center w-[100%]'>
                <div className='w-[250px] sm:w-[400px] lg:w-[600px] h-[250px] sm:h-[400px]' data-aos='zoom-in'>
                <Image
                    src='/images/sofa1.png'
                    alt='The Poplar suede sofa'
                    width={400}
                    height={300}
                    className='rounded-md w-[250px] sm:w-[400px] lg:w-[600px] h-[250px] sm:h-[400px]'
                />
                <h3 className='text-lg font-medium text-gray-800'>The Poplar suede sofa</h3>
                <p className='text-gray-600'>$99.00</p>
                </div>
                <div className='w-[250px] sm:w-[400px] lg:w-[300px] h-[250px] sm:h-[400px]' data-aos='zoom-in'>
                <Image
                    src='/images/sofa2.png'
                    alt='The Dandy chair'
                    width={400}
                    height={300}
                    className='rounded-md w-[250px] sm:w-[400px] lg:w-[300px] h-[250px] sm:h-[400px]'
                />
                <h3 className='text-lg font-medium text-gray-800'>The Dandy chair</h3>
                <p className='text-gray-600'>$99.00</p>
                </div>
                <div className='w-[250px] sm:w-[400px] lg:w-[300px] h-[250px] sm:h-[400px]' data-aos='zoom-in'>
                <Image
                    src='/images/sofa3.png'
                    alt='The Dandy chair'
                    width={400}
                    height={300}
                    className='rounded-md w-[250px] sm:w-[400px] lg:w-[300px] h-[250px] sm:h-[400px]'
                />
                <h3 className='text-lg font-medium text-gray-800'>The Dandy chair</h3>
                <p className='text-gray-600'>$99.00</p>
                </div>
            </div>
        </div>

        <Footer/>
    </div>
    );  
};  

export default About;