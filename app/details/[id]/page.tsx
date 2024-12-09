'use client';
import { useEffect } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: string;
  title: string;
  image: string;
}

const products: Product[] = [
    {
        id:'0',
        title: 'Library Stool Chair',    
        image: '/images/fp1.png',
    },  
    {
        id:'1',
        title: 'Library Stool Chair',   
        image: '/images/fp2.png', 
    },  
    {  
        id:'2',
        title: 'Library Stool Chair',  
        image: '/images/fp3.png',  
    },  
    {  
        id:'3',
        title: 'Library Stool Chair',  
        image: '/images/fp4.png',  
    },  
    {  
        id:'4',
        title: 'Library Stool Chair',   
        image: '/images/catimg2.png',
    },  
    {  
        id:'5',
        title: 'Library Stool Chair',   
        image: '/images/exploreimg.png', 
    },  
    {  
        id:'6',
        title: 'Library Stool Chair',    
        image: '/images/productsimg1.png',  
    },  
    {
        id:'7',
        title: 'Library Stool Chair',   
        image: '/images/fp1.png',  
    },  
    {
        id:'8',
        title: 'Library Stool Chair',    
        image: '/images/catimg1.png',
    },  
    {  
        id:'9',
        title: 'Library Stool Chair',    
        image: '/images/fp2.png', 
    },  
    {  
        id:'10',
        title: 'Library Stool Chair',  
        image: '/images/fp3.png',  
    },  
    {  
        id:'11',
        title: 'Library Stool Chair',  
        image: '/images/catimg3.png',  
    },  
];

export default function ProductDetails({ params }: { params: { id: string } }) {
    const featuredProducts = [  
        {  
            id: 1,  
            title: 'Library Stool Chair',  
            price: '\$99',  
            image: '/images/productsimg1.png',
        },  
        {  
            id: 2,  
            title: 'Library Stool Chair',  
            price: '\$99',  
            image: '/images/fp1.png',  
        },  
        {  
            id: 3,  
            title: 'Library Stool Chair',  
            price: '\$99',  
            image: '/images/catimg3.png',  
        },  
        {  
            id: 4,  
            title: 'Library Stool Chair',  
            price: '\$99',  
            image: '/images/fp3.png',  
        }, 
        {  
            id: 5,  
            title: 'Library Stool Chair',  
            price: '\$99',  
            image: '/images/catimg1.png',  
        }, 
    ];  

    useEffect(() => {
        AOS.init({ duration: 2000, easing: 'ease', delay: 200 });
    }, []);
    const { id } = params;
    const product = products.find((item) => item.id === id);

    if (!product) {
        return (
        <div>
            <Header />
            <div className='text-center py-10'>
            <h1 className='text-2xl font-bold'>Product Not Found</h1>
            </div>
            <Footer />
        </div>
        );
    }
    return (
        <div>
        <Header />
        <div className='flex flex-col xl:flex-row justify-between items-center rounded-md overflow-hidden xl:px-[250px] h-auto xl:h-[80vh] py-[30px] xl:py-[0]'>
            <div className='w-[250px] xl:w-[400px]'>
            <Image
                src={product.image}
                alt={product.title}
                className='w-[250px] xl:w-[400px] h-auto'
                width={400}
                height={400}
                data-aos='zoom-in'
            />
            </div>
            <div>
            <div className='p-6'>
                <div className='border-b border-gray-500 pb-[30px]'>
                <h2 className='text-4xl font-bold text-gray-800 xl:mt-[-60px]' data-aos='fade-left'>
                    Library Stool <br /> Chair
                </h2>
                <p data-aos='fade-left' className='flex items-center justify-center text-lg rounded-full font-semibold text-[11.9px] text-white w-[120px] h-[30px] bg-[#029FAE] mt-[20px]'>
                    $20.00 USD
                </p>
                </div>
                <p className='mt-[30px] text-gray-600' data-aos='fade-up'>
                Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Nullam
                tincidunt erat enim. Lorem ipsum dolor <br /> sit amet, consectetur
                adipiscing elit.
                </p>
                <button data-aos='fade-up' className='flex gap-[1px] mt-4 bg-[#029FAE] text-white py-2 px-4 rounded-md'>
                <i className='bx bx-cart pr-[10px] text-[20px]'></i>
                Add To Cart
                </button>
            </div>
            </div>
        </div>

        <div className='container mx-auto my-10 px-4'>  
            <div className='flex justify-center sm:justify-between items-center mb-6'>  
                <h2 className='text-3xl font-bold text-center sm:text-start tracking-widest uppercase' data-aos='fade-right'>Featured Products</h2>  
                <Link href='/products' className='hidden sm:block font-semibold border-b-2 border-black' data-aos='fade-right'>View all</Link>  
            </div>  
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6'>  
                {featuredProducts.map((product) => (  
                    <div data-aos='zoom-in' key={product.id} className='rounded-lg overflow-hidden group transition duration-300 ease-in-out transform hover:scale-105'>  
                        <Image   
                            src={product.image}   
                            alt={product.title}   
                            width={400}   
                            height={400}   
                            className='w-full h-[250px] group-hover:opacity-80'   
                        />  
                        <div className='flex justify-between mt-[12px]'>  
                            <h3 className='text-lg'>{product.title}</h3>  
                            <p className='text-lg font-bold'>{product.price}</p>  
                        </div>  
                    </div>  
                ))}  
            </div>  
        </div> 
        <div data-aos='fade-up' className='w-full flex justify-center items-center mb-[20px]'>
            <Link href='/products' className='flex sm:hidden justify-center items-center font-semibold rounded-md h-[30px] w-[100px] bg-black text-white'>View all</Link>  
        </div>
        <Footer />         

        </div>
    );
}
