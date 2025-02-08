'use client';
import { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import Image from 'next/image';
import logo from '../public/images/logo.png';
import Link from 'next/link';
import { Menu } from 'lucide-react'; 
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Search } from "lucide-react";

const Header = () => {  

    //--==== CART QUANTITY FUNCTIONALITY ====--//
    const [cartQuantity, setCartQuantity] = useState(0);
    const calculateCartQuantity = () => {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const totalQuantity = cart.reduce(
          (sum: number, item: { quantity: number }) => sum + (item.quantity || 0),
          0
        );
        setCartQuantity(totalQuantity);
    };
    useEffect(() => {
        calculateCartQuantity();
    
        const handleCartUpdate = () => calculateCartQuantity();
        window.addEventListener('cartUpdated', handleCartUpdate);
    
        return () => {
          window.removeEventListener('cartUpdated', handleCartUpdate);
        };
      }, []);
    
    //--=== CLOSING SHEET ON CLICKING LINKS ===--//
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const closeSheet = () => {
    setIsSheetOpen(false);
    };

    return (  
        <div className='overflow-hidden'>

            {/*--==== TOP BAR ====--*/}
            <div className='text-center sm:flex sm:justify-between sm:items-center text-white py-2 w-full sm:px-[20px] lg:px-[250px] headerTop'>
                {/*--==== SHIPPING ====--*/}
                <div className='flex gap-[5px] items-center justify-center text-[14px]' data-aos='fade-down'>
                    <i className='bx bx-check text-[20px] text-gray-400 font-extralight'></i>
                    <span className='text-gray-300 font-extralight hdText'>Free shipping on all orders over $50 </span>
                </div>

                {/*--==== LANGUAGES, FAQS AND HELP ====--*/}
                <div className='hidden sm:flex gap-[16px] sm:text-[12px] md:text-[14px]' data-aos='fade-down'>
                    <select name='options' className='border-none text-[6px] sm:text-[12px] font-extralight sm:tracking-wider cursor-pointer text-gray-300  headerTop'>
                        <option value='option1'>English</option>
                        <option value='option2'>Spanish</option>
                        <option value='option3'>Arabic</option>
                    </select>
                    <Link href='/faqs'><h1 className='hidden sm:block sm:text-[12px] sm:tracking-wider cursor-pointer text-gray-300 font-extralight headerTop'>Faqs</h1></Link>
                    <h1 className='hidden sm:block sm:text-[12px] sm:tracking-wider cursor-pointer text-gray-300 font-extralight headerTop'><i className='bx bx-help-circle'></i> Need Help</h1>
                </div>
            </div>

            {/*--==== MIDDLE BAR ====--*/}
            <div className='headerSec h-[60px] flex justify-between py-[14px] px-[10px] lg:px-[250px]'>
                {/*--==== LOGO ====--*/}
                <div className='flex gap-[5px]' data-aos='fade-right'>
                    <Image src={logo} alt='furniture logo' className='h-[30px] w-[30px]'/>
                    <h1 className='tracking-wider text-[20px]'>Comforty</h1>
                </div>

                <div className='flex gap-[10px]' data-aos='fade-left'>
                    {/*--==== CART ====--*/}
                    <Link href={'/cart'}>
                    <div className='flex gap-[8px] justify-center items-center rounded-md bg-white h-[35px] w-[100px] py-[5px]'>
                        <i className='bx bx-cart text-[20px]'></i>
                        <h1 className='text-[14px] tracking-wide'>Cart</h1>
                        <p className='bg-green-900 hdP'>{cartQuantity}</p>
                    </div>
                    </Link>

                    {/*--==== NAV BAR FOR SMALL SCREENS ====--*/}
                    <div className='block md:hidden'>
                        <Sheet  open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                            <SheetTrigger>
                                <Menu className='block md:hidden w-[30px] h-[25px] mt-[5px]'/>
                            </SheetTrigger>
                            <SheetContent>
                            <div className='block md:hidden'>
                                <div className='flex gap-[5px] mt-[40px] mb-[20px]'>
                                    <Image src={logo} alt='furniture logo' className='h-[30px] w-[30px]'/>
                                    <h1 className='tracking-wider text-[20px]'>Comforty</h1>
                                </div>
                                <nav className='flex flex-col gap-[15px] text-gray-600'>
                                    <Link href={'/'} className='navHome' onClick={closeSheet}>Home</Link>
                                    <Link href={'/products'} onClick={closeSheet}>Shop</Link>
                                    <Link href={'/products'} onClick={closeSheet}>Products</Link>
                                    <Link href={'/contact'} onClick={closeSheet}>Contact</Link>
                                    <Link href={'/about'} onClick={closeSheet}>About</Link>
                                    <Link href={'/faqs'} onClick={closeSheet}>Faqs</Link>
                                    <div className="flex items-center bg-gray-100 rounded-full px-4 py-3">
                                        <input
                                            type="text"
                                            placeholder="Search Anything"
                                            className="bg-transparent focus:outline-none text-sm text-black w-full"
                                            id="categorySearchInput2"
                                        />
                                        <Link
                                        onClick={() => {
                                            const searchInputElement = document.getElementById('categorySearchInput2') as HTMLInputElement | null;
                                          
                                            if (searchInputElement) {
                                              let searchValue = searchInputElement.value.trim();
                                              
                                              //--==== TITLE CASE ====--//
                                              searchValue = searchValue
                                                .toLowerCase()
                                                .replace(/\b\w/g, char => char.toUpperCase());
                                              
                                              localStorage.setItem('searchedCategory', searchValue);
                                            } else {
                                              console.error("Search input element not found.");
                                            }
                                          }}
                                        href={'/searchedProduct'}><Search onClick={closeSheet} className="text-black w-5 h-5 cursor-pointer" /></Link>
                                    </div>
                                </nav>
                            </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>

            {/*--==== THIRD BAR ====--*/}
            <div className='hidden md:flex justify-between py-[20px] px-[10px] lg:px-[250px] h-[60px] border-b border-gray-300'>
                {/*--==== NAVBAR ====--*/}
                <nav className='hidden md:flex gap-[20px] text-gray-600' data-aos='fade-right'>
                    <Link href={'/'} className='navHome'>Home</Link>
                    <Link href={'/products'}>Shop</Link>
                    <Link href={'/products'}>Products</Link>
                    <Link href={'/contact'}>Contact</Link>
                    <Link href={'/about'}>About</Link>
                </nav>

                {/*--==== SEARCH BAR ====--*/}
                <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-3" data-aos='fade-left'>
                    <input
                        type="text"
                        placeholder="Search Anything"
                        className="bg-transparent focus:outline-none text-sm text-black w-full"
                        id="categorySearchInput"
                    />
                    <Link
                    onClick={() => {
                        const searchInputElement = document.getElementById('categorySearchInput') as HTMLInputElement | null;
                      
                        if (searchInputElement) {
                          let searchValue = searchInputElement.value.trim();
                          
                          //--==== TITLE CASE ====--//
                          searchValue = searchValue
                            .toLowerCase()
                            .replace(/\b\w/g, char => char.toUpperCase());
                          
                          localStorage.setItem('searchedCategory', searchValue);
                        } else {
                          console.error("Search input element not found.");
                        }
                      }}
                    href={'/searchedProduct'}><Search className="text-black w-5 h-5 cursor-pointer" /></Link>
                </div>
            </div>
        </div> 
    );  
}  

export default Header;