'use client';
import { useEffect } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Header from "@/components/header";
import Footer from '@/components/footer';

const FAQs = () => {  
    useEffect(() => {
        AOS.init({ duration: 2000, easing: 'ease', delay: 200 });
    }, []);
    return (  
        <div>
            <Header/>
            <div className="hidden sm:block container mx-auto px-5 my-10">  
                <h2 className="text-3xl font-bold text-center mb-4" data-aos='fade-right'>Questions Looks Here</h2>  
                <p className="text-center text-gray-600 mb-10" data-aos='fade-left'>  
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  
                </p>  
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">  
                    <div className="border rounded-lg p-6 headerSec flex flex-col" data-aos='zoom-in'>  
                        <div className="flex justify-between items-center">  
                            <h3 className="font-semibold text-lg mb-2">What types of chairs do you offer?</h3>  
                            <span className="text-2xl text-gray-500">+</span>  
                        </div>  
                        <p className="text-gray-600">  
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?  
                        </p>  
                    </div>  
                    <div className="border rounded-lg p-6 headerSec flex flex-col" data-aos='zoom-in'>  
                        <div className="flex justify-between items-center">  
                            <h3 className="font-semibold text-lg mb-2">Do your chairs come with a warranty?</h3>  
                            <span className="text-2xl text-gray-500">+</span>  
                        </div>  
                        <p className="text-gray-600">  
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?  
                        </p>  
                    </div>  
                    <div className="border rounded-lg p-6 headerSec flex flex-col" data-aos='zoom-in'>  
                        <div className="flex justify-between items-center">  
                            <h3 className="font-semibold text-lg mb-2">Can I try a chair before purchasing?</h3>  
                            <span className="text-2xl text-gray-500">+</span>  
                        </div>  
                        <p className="text-gray-600">  
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?  
                        </p>  
                    </div>  
                    <div className="border rounded-lg p-6 headerSec flex flex-col" data-aos='zoom-in'>  
                        <div className="flex justify-between items-center">  
                            <h3 className="font-semibold text-lg mb-2">How can we get in touch with you?</h3>  
                            <span className="text-2xl text-gray-500">+</span>  
                        </div>  
                        <p className="text-gray-600">  
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?  
                        </p>  
                    </div>  
                    <div className="border rounded-lg p-6 headerSec flex flex-col" data-aos='zoom-in'>  
                        <div className="flex justify-between items-center">  
                            <h3 className="font-semibold text-lg mb-2">What will be delivered? And When?</h3>  
                            <span className="text-2xl text-gray-500">+</span>  
                        </div>  
                        <p className="text-gray-600">  
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?  
                        </p>  
                    </div>  
                    <div className="border rounded-lg p-6 headerSec flex flex-col" data-aos='zoom-in'>  
                        <div className="flex justify-between items-center">  
                            <h3 className="font-semibold text-lg mb-2">How do I clean and maintain my Comforty chair?</h3>  
                            <span className="text-2xl text-gray-500">+</span>  
                        </div>  
                        <p className="text-gray-600">  
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?  
                        </p>  
                    </div>  
                </div>
            </div>

            <div className='block sm:hidden p-[10px] pt-[30px] headerSec'>
            <h2 className="text-[25px] font-bold text-center mb-4" data-aos='fade-right'>Questions Looks Here</h2>  
                <p className="text-center text-gray-600 mb-10 text-[14px]" data-aos='fade-left'>  
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  
                </p>
            </div>

            <Accordion type="single" collapsible className='block sm:hidden mt-[-40px]'>
                <AccordionItem value="item-1" className='headerSec'>
                    <AccordionTrigger className='p-[20px] font-semibold text-lg' data-aos='zoom-in'>What types of chairs do you offer?</AccordionTrigger>
                    <AccordionContent className='p-[20px]'>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className='headerSec' >
                    <AccordionTrigger className='p-[20px] font-semibold text-lg' data-aos='zoom-in'>Do your chairs come with a warranty?</AccordionTrigger>
                    <AccordionContent className='p-[20px]'>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className='headerSec' >
                    <AccordionTrigger className='p-[20px] font-semibold text-lg' data-aos='zoom-in'>Can I try a chair before purchasing?</AccordionTrigger>
                    <AccordionContent className='p-[20px]'>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className='headerSec' >
                    <AccordionTrigger className='p-[20px] font-semibold text-lg' data-aos='zoom-in'>How can we get in touch with you?</AccordionTrigger>
                    <AccordionContent className='p-[20px]'>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className='headerSec' >
                    <AccordionTrigger className='p-[20px] font-semibold text-lg' data-aos='zoom-in'>How do I clean and maintain my Comforty chair?</AccordionTrigger>
                    <AccordionContent className='p-[20px]'>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6" className='headerSec' >
                    <AccordionTrigger className='p-[20px] font-semibold text-lg' data-aos='zoom-in'>What will be delivered? And When?</AccordionTrigger>
                    <AccordionContent className='p-[20px]'>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                    </AccordionContent>
                </AccordionItem>
            </Accordion> 

            <Footer/>
        </div> 
    );  
};  

export default FAQs;