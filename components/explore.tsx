'use client';
import { useEffect } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import Image from 'next/image'; 
import fp3 from '../public/images/fp3.png';
import fp4 from '../public/images/fp4.png';
import fp1 from '../public/images/fp1.png';
import exploreimg from '../public/images/exploreimg.png'
import exploreimg2 from '../public/images/exploreimg2.png'



const ChairGallery: React.FC = () => {  
  useEffect(() => {
    AOS.init({ duration: 2000, easing: 'ease', delay: 200 });
}, []);
  return (  
    <div className='flex justify-center items-center mt-[40px]'>
    <div className='flex justify-center items-center flex-col xl:flex-row md:gap-6 p-6 w-[90%]'>  
      <div className='flex-shrink-0'>  
        <div className='h-[510px] flex flex-col xl:flex-row gap-[30px] items-center justify-center'> 
        <h2 className='flex xl:hidden justify-center items-center text-center font-bold tracking-wide text-[25px]' data-aos='fade-right'>Explore New & Popular Styles</h2>
          <Image src={exploreimg2} alt='' className='h-[500px] hidden xl:block' data-aos='fade-right'/> 
          <Image   
              src={fp3}   
              alt='Chair 1'   
              width={300}   
              height={300}  
              className='h-[400px] sm:h-[520px] w-full rounded-none'  
              data-aos='fade-up'
            /> 
        </div>  
      </div>  
      <div className='grid grid-cols-2 md:grid-cols-2 gap-4 flex-grow mt-[20px] xl:mt-[0]'>  
        <div>  
          <Image   
            src={fp4}   
            alt='Chair 1'   
            width={400}   
            height={400}  
            className='h-[180px] sm:h-[250px] w-full'  
            data-aos='zoom-in'
          />  
        </div>  
        <div>  
          <Image   
            src={fp1}   
            alt='Chair 2'   
            width={400}   
            height={400}  
            className='h-[180px] sm:h-[250px] w-full'  
            data-aos='zoom-in'
          />  
        </div>  
        <div>  
          <Image   
            src={exploreimg}  
            alt='Chair 3'   
            width={400}   
            height={400}  
            className='h-[180px] sm:h-[250px] w-full'  
            data-aos='zoom-in'
          />  
        </div>  
        <div>  
          <Image   
            src={fp1}   
            alt='Chair 4'   
            width={400}   
            height={400}  
            className='h-[180px] sm:h-[250px] w-full' 
            data-aos='zoom-in'
          />  
        </div>  
      </div>  
    </div>  
    </div>
  );  
};  

export default ChairGallery;