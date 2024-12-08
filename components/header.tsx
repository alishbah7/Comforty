  import Image from 'next/image';
import logo from '../public/images/logo.png';
import Link from 'next/link';
import { Menu } from "lucide-react"; 
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const Header = () => {  
    return (  
        <div>
            <div className="text-center sm:flex sm:justify-between sm:items-center text-white py-2 w-full sm:px-[20px] lg:px-[250px] headerTop">
                <div className='flex gap-[5px] items-center justify-center text-[14px]'>
                    <i className='bx bx-check text-[20px] text-gray-400 font-extralight'></i>
                    <span className="text-gray-300 font-extralight hdText">Free shipping on all orders over $50 </span>
                </div>
                <div className='hidden sm:flex gap-[16px] sm:text-[12px] md:text-[14px]'>
                    <select name="options" className='border-none text-[6px] sm:text-[12px] font-extralight sm:tracking-wider cursor-pointer text-gray-300  headerTop'>
                        <option value="option1">English</option>
                        <option value="option2">Spanish</option>
                        <option value="option3">Arabic</option>
                    </select>
                    <h1 className='hidden sm:block sm:text-[12px] sm:tracking-wider cursor-pointer text-gray-300 font-extralight headerTop'>Faqs</h1>
                    <h1 className='hidden sm:block sm:text-[12px] sm:tracking-wider cursor-pointer text-gray-300 font-extralight headerTop'><i className='bx bx-help-circle'></i> Need Help</h1>
                </div>
            </div>
            <div className='headerSec h-[60px] flex justify-between py-[14px] px-[10px] lg:px-[250px]'>
                <div className='flex gap-[5px]'>
                    <Image src={logo} alt='furniture logo' className='h-[30px] w-[30px]'/>
                    <h1 className='tracking-wider text-[20px]'>Comforty</h1>
                </div>
                <div className='flex gap-[10px]'>
                    <div className='flex gap-[8px] justify-center items-center rounded-md bg-white h-[35px] w-[100px] py-[5px]'>
                        <i className='bx bx-cart text-[20px]'></i>
                        <h1 className='text-[14px] tracking-wide'>Cart</h1>
                        <p className='bg-green-900 hdP'>2</p>
                    </div>
                    <div className='block md:hidden'>
                        <Sheet>
                            <SheetTrigger>
                                <Menu className='block md:hidden w-[30px] h-[25px] mt-[5px]'/>
                            </SheetTrigger>
                            <SheetContent>
                            <div className='block md:hidden'>
                                <nav className='flex flex-col gap-[15px] text-gray-600'>
                                    <Link href={''} className='navHome'>Home</Link>
                                    <Link href={''}>Shop</Link>
                                    <Link href={''}>Products</Link>
                                    <Link href={''}>Pages</Link>
                                    <Link href={''}>About</Link>
                                </nav>
                            </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
            <div className='hidden md:flex justify-between py-[20px] px-[10px] lg:px-[250px] h-[60px] border-b border-gray-300'>
                <nav className='hidden md:flex gap-[20px] text-gray-600'>
                    <Link href={''} className='navHome'>Home</Link>
                    <Link href={''}>Shop</Link>
                    <Link href={''}>Products</Link>
                    <Link href={''}>Pages</Link>
                    <Link href={''}>About</Link>
                </nav>
                <div className='flex gap-[10px]'>
                    <h1 className='text-[16px] text-gray-600'>Contact:</h1>
                    <h1>(808) 555-0111</h1>
                </div>
                
            </div>
        </div> 
    );  
}  

export default Header;