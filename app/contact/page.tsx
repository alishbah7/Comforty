'use client';
import { useEffect } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 2000, easing: 'ease', delay: 200 });
    }, []);   
  return (  
    <div>
        <div className='max-w-4xl mx-auto p-5'>  
        <h2 className='text-3xl font-bold text-center mb-4' data-aos='fade-right'>Get In Touch With Us</h2>  
        <p className='text-center mb-6 text-gray-400' data-aos='fade-right'>  
            For More Information About Our Product & Services. Please Feel Free To Drop Us <br /> 
            An Email. Our Staff Always There To Help You Out. Do Not Hesitate!  
        </p>  

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>  
            <div className='bg-white sm:pl-[100px] pt-[30px]' data-aos='zoom-in'>  
            <h3 className='text-[25px] font-semibold mb-2 flex items-start'>  
                <span className='material-icons mr-2'><i className='bx bx-current-location sm:pr-[20px]'></i></span> Address  
            </h3>  
            <p className='sm:pl-[55px] text-[14px]'>236 5th SE Avenue, New <br /> York NY10000, United <br /> States</p>  
            
            <h3 className='text-[25px] font-semibold mt-4 flex items-start'>  
                <span className='material-icons mr-2' ><i className='bx bxs-phone sm:pr-[20px]'></i></span> Phone  
            </h3>  
            <p className='sm:pl-[55px] text-[14px]'>Mobile: +(84) 546-6789</p>  
            <p className='sm:pl-[55px] text-[14px]'>Hotline: +(84) 456-6789</p>  

            <h3 className='text-[25px] font-semibold mt-4 flex items-start'>  
                <span className='material-icons mr-2'><i className='bx bxs-time-five sm:pr-[20px]' ></i></span> Working Time  
            </h3>  
            <p className='sm:pl-[55px] text-[14px]'>Monday-Friday: 9:00 - <br /> 22:00</p>  
            <p className='sm:pl-[55px] text-[14px]'>Saturday-Sunday: 9:00 - <br /> 21:00</p>  
            </div>  

            <form className='flex flex-col gap-[10px] bg-white p-[10px] sm:p-6' data-aos='zoom-in'>  
            <div className='mb-4'>  
                <label className='block text-gray-700 font-semibold mb-[10px]' htmlFor='name'>Your name</label>  
                <input  
                className='w-full h-[60px] mt-1 px-3 py-2 border border-gray-400 rounded-lg focus:outline-none'  
                type='text'  
                id='name'  
                placeholder='Abc'  
                required  
                />  
            </div>  

            <div className='mb-4'>  
                <label className='block text-gray-700 font-semibold mb-[10px]' htmlFor='email'>Email address</label>  
                <input  
                className='w-full h-[60px] mt-1 px-3 py-2 border border-gray-400 rounded-lg focus:outline-none'  
                type='email'  
                id='email'  
                placeholder='Abc@def.com'  
                required  
                />  
            </div>  

            <div className='mb-4'>  
                <label className='block text-gray-700 font-semibold mb-[10px]' htmlFor='subject'>Subject</label>  
                <input  
                className='w-full h-[60px] mt-1 px-3 py-2 border border-gray-400 rounded-lg focus:outline-none'  
                type='text'  
                id='subject'  
                placeholder='This is optional'  
                />  
            </div>  

            <div className='mb-4'>  
                <label className='block text-gray-700 font-semibold mb-[10px]' htmlFor='message'>Message</label>  
                <textarea  
                className='w-full h-[100px] mt-1 px-3 py-2 border border-gray-400 rounded-lg focus:outline-none'  
                id='message'  
                rows={4}  
                placeholder='Hi! I’d like to ask about...'  
                ></textarea>  
            </div>  

            <button  
                type='submit'  
                className='w-[140px] bg-[#029FAE]  text-white font-bold py-2 rounded'  
            >  
                Submit  
            </button>  
            </form>  
        </div>  
        </div> 
        <div className='flex justify-center items-center'>
            <div className='md:bg-gray-100 w-[80%] py-[60px]'>  
                <div className='container mx-auto flex flex-col gap-[40px] md:gap-[0]  md:flex-row justify-around items-center'>  
                    <div className='flex gap-[10px] items-center justify-center h-[100px] w-[250px] text-left bg-gray-100 p-[10px] md:px-[0] rounded-md' data-aos='zoom-in'>  
                        <i className='bx bx-trophy text-[50px]' ></i>
                        <div className='flex flex-col'>
                            <span className='text-[15px] sm:text-lg font-semibold'>High Quality</span>  
                            <p className='text-[12px] sm:text-[20px] text-gray-600'>crafted from top materials</p>  
                        </div>
                    </div>  

                    <div className='flex gap-[10px] text-left items-center justify-center h-[100px] w-[250px] bg-gray-100 p-[10px] md:px-[0] rounded-md' data-aos='zoom-in'>  
                        <i className='bx bx-badge-check text-[50px]'></i>
                        <div className='flex flex-col'>
                            <span className='text-[15px] sm:text-lg font-semibold'>Warranty Protection</span>  
                            <p className='text-[12px] sm:text-[20px] text-gray-600'>Over 2 years</p>
                        </div>
                    </div>  

                    <div className='flex gap-[10px] text-left items-center justify-center h-[100px] w-[250px] bg-gray-100 p-[10px] md:px-[0] rounded-md' data-aos='zoom-in'>  
                        <i className='bx bx-support text-[50px] ml-[-28px]'></i>  
                    <div className='flex flex-col'> 
                        <span className='text-[15px] sm:text-lg font-semibold'>24 / 7 Support</span>  
                        <p className='text-[12px] sm:text-[20px] text-gray-600'>Dedicated support</p>  
                    </div>
                    </div>  
                </div>  
            </div>
        </div> 
    </div>
  );  
};  

export default Contact;