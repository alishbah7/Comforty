'use client';
import { useEffect } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 
import { Swiper, SwiperSlide } from 'swiper/react';  
import 'swiper/css';  
import { Navigation, Pagination, Autoplay } from 'swiper/modules';  
import Image from 'next/image';     

interface Product  {  
    title: string;  
    price: number;  
    salePrice: number | null;  
    badge: string; 
    image: string;  
    customClass: string;  
}; 

interface ProductsProps {  
  products: Product[];  
}   
const Products: React.FC<ProductsProps> = ({ products }) => {
    useEffect(() => {
        AOS.init({ duration: 2000, easing: 'ease', delay: 200 });
    }, []); 
    return (  
        <div>
            <div className='hidden sm:block container mx-auto my-10 sm:px-[100px]'>  
            <h2 className='flex justify-center items-center text-center text-2xl font-bold text-gray-800' data-aos='fade-right'>Our Products</h2>  
            <div className='flex flex-col justify-center items-center sm:grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-[38px]'>  
                {products.map((product, index) => (  
                <div key={index} className='overflow-hidden' data-aos='zoom-in'>  
                    <div className='relative'>  
                    {product.badge && (  
                        <span className={`absolute top-2 left-2 text-white text-xs py-[5px] px-[8px] w-[45px] rounded-md ${product.badge === 'New' ? 'bg-green-500' : 'bg-orange-500'}`}>  
                        {product.badge}  
                        </span>  
                    )}  
                    <Image src={product.image} alt={product.title} className='' width={300} height={300}/>  
                    </div>  
                    <div className='flex justify-between p-[10px]'>  
                        <div>
                            <h3 className='font-light text-lg tracking-wide text-gray-700'>{product.title}</h3>  
                            <div className='flex gap-[10px]'>
                            {product.salePrice && <span className='text-black'> ${product.price}</span>} 
                            <p className={`text-black ${product.salePrice ? 'line-through' : ''}`}>  
                                ${product.salePrice ? product.salePrice : product.price}  
                            </p>  
                            </div>
                    </div>
                    <div>
                        <button className={`cartBg px-[10px] py-[5px] rounded-md text-[20px]  ${product.customClass}`}><i className='bx bx-cart-alt'></i></button>  
                    </div>
                    </div>  
                </div>  
                ))}  
            </div>  
            </div>

            <div className='block sm:hidden container mx-auto my-10 px-5'>  
                    <h2 className='flex justify-center items-center text-center text-2xl font-bold text-gray-800' data-aos='fade-right'>Our Products</h2>  
                    <Swiper  
                        modules={[Navigation, Pagination,  Autoplay]}  
                        spaceBetween={20}  
                        slidesPerView={1}  
                        navigation  
                        pagination={{ clickable: true }}  
                        breakpoints={{  
                            640: {  
                                slidesPerView: 2,  
                                spaceBetween: 20,  
                            },  
                            768: {  
                                slidesPerView: 3,  
                                spaceBetween: 30,  
                            },  
                            1024: {  
                                slidesPerView: 4,  
                                spaceBetween: 30,  
                            },  
                        }} 
                        autoplay={{
                            delay: 1200,
                        }} 
                        loop={true}
                        data-aos='zoom-in'
                    >  
                        {products.map((product, index) => (  
                            <SwiperSlide key={index}>  
                                <div className='overflow-hidden flex flex-col justify-center items-center mt-[30px]'>  
                                    <div className='relative'>  
                                        {product.badge && (  
                                            <span className={`absolute top-2 left-2 text-white text-xs py-[5px] px-[8px] w-[45px] rounded-md ${product.badge === 'New' ? 'bg-green-500' : 'bg-orange-500'}`}>  
                                                {product.badge}  
                                            </span>  
                                        )}  
                                        <Image src={product.image} alt={product.title} className='object-cover' width={300} height={300} />  
                                    </div>  
                                    <div className='flex justify-between w-[260px] p-[10px]'>  
                                        <div>  
                                            <h3 className='font-light text-lg tracking-wide text-gray-700'>{product.title}</h3>  
                                            <div className='flex gap-[10px]'>  
                                                {product.salePrice && <span className='text-black'> ${product.price}</span>}  
                                                <p className={`text-black ${product.salePrice ? 'line-through' : ''}`}>  
                                                    ${product.salePrice ? product.salePrice : product.price}  
                                                </p>  
                                            </div>  
                                        </div>  
                                        <div>  
                                            <button className={`cartBg px-[10px] py-[5px] rounded-md text-[20px] ${product.customClass}`}>  
                                                <i className='bx bx-cart-alt'></i>  
                                            </button>  
                                        </div>  
                                    </div>  
                                </div>  
                            </SwiperSlide>  
                        ))}  
                    </Swiper>  
            </div>  
        </div>
    );  
};  

export default Products;  