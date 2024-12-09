'use client';
import 'aos/dist/aos.css';
import Image from 'next/image';  
import heroImage from '../public/images/heroImg.png';  
import Link from 'next/link' 

const Hero = () => {  
  return (  
    <div className='bg-white w-full flex justify-center items-center' >
    <section className='flex flex-col lg:flex-row items-center justify-between px-[50px] bg-gray-100 w-[100%] lg:w-[65%] h-auto lg:h-[75vh]'>  
      <div className='lg:max-w-md z-10 pt-[40px] lg:pt-[0]'>  
        <h1 className='text-[12px] mb-2 text-gray-700 uppercase tracking-wide' data-aos='fade-down'>Welcome to Chairy</h1>  
        <h2 className='text-[35px] sm:text-[40px] font-bold mb-4 text-gray-800 leading-[1.2]' data-aos='fade-right'>  
          Best Furniture <br /> Collection For Your  <br /> Interior.  
        </h2>  
        <button className='heroBtn flex gap-[10px] text-white py-2 px-4 rounded' data-aos='fade-up'>  
          <Link href={''}>Shop Now</Link> 
          <i className='bx bx-right-arrow-alt pt-[4px]' ></i>
        </button>  
      </div>  
      <div className='pt-[40px] '>  
        <Image src={heroImage} alt='Chair' className='h-auto w-[300px]' data-aos='zoom-in'/>  
      </div>  
    </section>  
    </div>
  );  
};  

export default Hero;