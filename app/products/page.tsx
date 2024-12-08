'use client';
import { useEffect } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Products from '@/components/procomptwo';
import Image from 'next/image'

const productSlider = [
    {  
      title: 'Library Stool Chair',  
      price: 20,  
      salePrice: null,  
      badge: 'New',  
      image: '/images/fp1.png',
      customClass: 'bg-teal-500 text-white'
    },  
    {  
      title: 'Library Stool Chair',  
      price: 20,  
      salePrice: 30,  
      badge: 'Sales',  
      image: '/images/fp2.png', 
      customClass: 'bg-gray-200 text-black'
  
    },  
    {  
      title: 'Library Stool Chair',  
      price: 20,  
      salePrice: null,  
      badge: '',  
      image: '/images/fp3.png',  
      customClass: 'bg-gray-200 text-black'
    },  
    {  
      title: 'Library Stool Chair',  
      price: 20,  
      salePrice: null,  
      badge: '',  
      image: '/images/fp4.png',  
      customClass: 'bg-gray-200 text-black'
    },  
    {  
      title: 'Library Stool Chair',  
      price: 20,  
      salePrice: null,  
      badge: 'New',  
      image: '/images/catimg2.png',
      customClass: 'bg-teal-500 text-white'
    },  
    {  
      title: 'Library Stool Chair',  
      price: 20,  
      salePrice: 30,  
      badge: 'Sales',  
      image: '/images/exploreimg.png', 
      customClass: 'bg-gray-200 text-black'
  
    },  
    {  
      title: 'Library Stool Chair',  
      price: 20,  
      salePrice: null,  
      badge: '',  
      image: '/images/productsimg1.png',  
      customClass: 'bg-gray-200 text-black'
    },  
    {  
      title: 'Library Stool Chair',  
      price: 20,  
      salePrice: null,  
      badge: '',  
      image: '/images/fp1.png',  
      customClass: 'bg-gray-200 text-black'
    },  
    {  
        title: 'Library Stool Chair',  
        price: 20,  
        salePrice: null,  
        badge: 'New',  
        image: '/images/catimg1.png',
        customClass: 'bg-teal-500 text-white'
      },  
      {  
        title: 'Library Stool Chair',  
        price: 20,  
        salePrice: 30,  
        badge: 'Sales',  
        image: '/images/fp2.png', 
        customClass: 'bg-gray-200 text-black'
    
      },  
      {  
        title: 'Library Stool Chair',  
        price: 20,  
        salePrice: null,  
        badge: '',  
        image: '/images/fp3.png',  
        customClass: 'bg-gray-200 text-black'
      },  
      {  
        title: 'Library Stool Chair',  
        price: 20,  
        salePrice: null,  
        badge: '',  
        image: '/images/catimg3.png',  
        customClass: 'bg-gray-200 text-black'
      },  
    ]; 
export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000, easing: 'ease', delay: 200 });
}, []);
    return (
      <div>
        <Header/>
        <Products products={productSlider}/>
        <div className='headerSec py-12 flex flex-col gap-[20px]'>  
        <div className='text-center mb-10'>  
          <h2 className='text-lg tracking-normal sm:text-3xl sm:tracking-wide font-bold mb-4' data-aos='fade-right'>Or Subscribe To The Newsletter</h2>  
          <div className='flex justify-center' data-aos='fade'>  
            <input  
              type='email'  
              placeholder='Email Address...'  
              className='border-b-2 border-black bg-transparent w-[180px] sm:w-[380px] py-2 px-4 focus:outline-none'  
              required  
            />  
            <button className='text-black border-b-2 border-black py-2 px-4 ml-[10px] text-[12px] sm:text-[14px]'>  
              SUBMIT  
            </button>  
          </div>  
        </div>    
        <h3 className='text-lg tracking-normal sm:text-3xl sm:tracking-wider font-semibold text-center mb-6' data-aos='fade-right'>  
          Follow Products And Discounts On Instagram  
        </h3>  
        <div className='flex flex-wrap justify-center gap-[10px] space-x-1'>  
          <Image src='/images/catimg2.png' alt='Chair 1' className='w-32 h-32 object-cover' width={200} height={200} data-aos='zoom-in'/>  
          <Image src='/images/catimg1.png' alt='Chair 2' className='w-32 h-32 object-cover' width={200} height={200} data-aos='zoom-in'/>  
          <Image src='/images/fp2.png' alt='Chair 3' className='w-32 h-32 object-cover' width={200} height={200} data-aos='zoom-in'/>  
          <Image src='/images/fp1.png' alt='Chair 4' className='w-32 h-32 object-cover' width={200} height={200} data-aos='zoom-in'/>  
          <Image src='/images/fp3.png' alt='Chair 5' className='w-32 h-32 object-cover' width={200} height={200} data-aos='zoom-in'/>  
          <Image src='/images/catimg3.png' alt='Chair 6' className='w-32 h-32 object-cover' width={200} height={200} data-aos='zoom-in'/>  
        </div>  
        </div> 
        <Footer/>
      </div>
    );
  }