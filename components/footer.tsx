'use client';
import { useEffect } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/images/logo.png'
import ftimg from '../public/images/footerimg.png'

const Footer: React.FC = () => {
    useEffect(() => {
        AOS.init({ duration: 2000, easing: 'ease', delay: 200 });
    }, []);  
    return (  
        <div>
            <footer className="bg-white py-8 border-t border-gray-400">  
            <div className="container mx-auto flex flex-col gap-[20px] lg:gap-[0] lg:flex-row justify-between items-start lg:items-center px-[10px] xl:px-4">  
                <div className="flex flex-col gap-[10px] mb-4 md:mb-0" data-aos='zoom-in'>  
                <div className="flex items-center mb-2">  
                    <Image 
                    src={logo} 
                    alt="Comforty Logo"  
                    className="w-8 h-8 mr-2"  
                    width={200}
                    height={200}
                    />  
                    <span className="text-2xl font-semibold text-black">Comforty</span>  
                </div>  
                <p className="text-gray-600 text-[16px]">  
                    Vivamus tristique odio sit amet velit semper,<br /> eu posuere turpis  
                    interdum. <br /> Cras egestas purus.  
                </p>  
                <div className="flex space-x-1 mt-2">  
                    <Link href="#" className="text-gray-600 ftIconLink">  
                        <i className='bx bxl-facebook-circle ftIcons'></i> 
                    </Link>  
                    <Link href="#" className="text-gray-600 ftIconLink">  
                        <i className='bx bxl-twitter ftIcons'></i> 
                    </Link>  
                    <Link href="#" className="text-gray-600 ftIconLink">  
                        <i className='bx bxl-instagram ftIcons' ></i>  
                    </Link>  
                    <Link href="#" className="text-gray-600 ftIconLink">  
                        <i className='bx bxl-pinterest ftIcons' ></i> 
                    </Link>  
                    <Link href="#" className="text-gray-600 ftIconsLink">  
                        <i className='bx bxl-youtube ftIcons' ></i>
                    </Link>  
                </div>  
                </div>  

                <div className='flex flex-col sm:flex-row gp-[20px] sm:gap-[60px] xl:gap-[140px]'>
                    <div className='flex flex-col lg:mt-[-20px]' data-aos='zoom-in'>
                        <h4 className="text-gray-400 mb-[5px]">CATEGORY</h4>  
                        <div className="flex flex-col gap-[10px] mb-4 md:mb-0">  
                        <ul className="text-black text-sm">  
                            <Link href={''} className='hoverLinks hoverLinkSofa'><li className='tracking-wide'>Sofa</li></Link>  
                            <Link href={''} className='hoverLinks hoverLinkArm'><li className='tracking-wide'>Armchair</li></Link>     
                            <Link href={''} className='hoverLinks hoverLinkChair'><li className='tracking-wide'>Wing Chair</li></Link>  
                            <Link href={''} className='hoverLinks hoverLinkChair'><li className='tracking-wide'>Desk Chair</li></Link>  
                            <Link href={''} className='hoverLinks '><li className='tracking-wide'>Wooden Chair</li></Link>  
                            <Link href={''} className='hoverLinks hoverLinkChair'><li className='tracking-wide'>Park Bench</li></Link>  
                        </ul>  
                        </div>  
                    </div>

                    <div className='flex flex-col lg:mt-[-20px]' data-aos='zoom-in'>
                        <h4 className="text-gray-400 mb-[5px]">SUPPORT</h4>  
                        <div className="flex flex-col gap-[10px] mb-4 md:mb-0">  
                        <ul className="text-black text-sm">  
                            <Link href={''} className='hoverLinks hoverLinkhelppolicy'><li className='tracking-wide'>Help & Support</li></Link>   
                            <Link href={''} className='hoverLinks'><li className='tracking-wide'>Terms & Conditions</li></Link>   
                            <Link href={''} className='hoverLinks hoverLinkhelppolicy'><li className='tracking-wide'>Privacy Policy</li></Link>   
                            <Link href={''} className='hoverLinks hoverLinkHelp'><li className='tracking-wide'>Help</li></Link>   
                        </ul>  
                        </div>  
                    </div>
                </div>

                <div className="flex flex-col mb-4 md:mb-0 lg:mt-[-50px]" data-aos='zoom-in'>  
                <h4 className=" text-gray-400">NEWSLETTER</h4>  
                <div className="flex">  
                    <input  
                    type="email"  
                    placeholder="Your email"  
                    className="border border-gray-300 p-2 rounded-md focus:outline-none w-[160px] sm:w-[200px] xl:w-[240px] mt-[10px] h-[35px] sm:h-[40px]"  
                    />  
                    <button className="bg-teal-500 text-white text-[13px] sm:text-[20px] w-[65px] sm:w-[120px] h-[35px] sm:h-[40px] p-1 ml-[8px] sm:ml-[10px] mt-[10px] rounded-md">  
                    Subscribe  
                    </button>  
                </div>  
                <p className="text-gray-600 text-sm mt-[15px]">  
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Nullam tincidunt erat enim.  
                </p>  
                </div>  
            </div>    
            </footer> 

            <div>
                <div className='flex flex-col md:flex-row justify-center items-center md:justify-between md:px-[100px] py-[20px] w-full border-t border-gray-500 bg-white'>
                    <h1 className='text-[12px] sm:text-[15px] text-gray-400 mt-[15px]'>@ 2024 - Designed & Developed by Alishbah</h1>
                    <Image src={ftimg} alt='' className='h-auto w-[120px] sm:w-[160px]' width={200} height={200}/>
                </div>
            </div>


        </div> 
    );  
};  

export default Footer;