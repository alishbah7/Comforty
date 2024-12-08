'use client';
import { useEffect } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import Image from 'next/image';

interface Product  {  
    title: string;  
    price: number;  
    salePrice: number | null;  
    badge: string; 
    image: string;  
    customClass: string;  
}; 

interface FeaturedProductsProps {  
  products: Product[];  
}  

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products }) => {  
  useEffect(() => {
    AOS.init({ duration: 2000, easing: 'ease', delay: 200 });
}, []);
  return (  
    <div className='container mx-auto my-10 px-5 '>  
      <h2 className='flex justify-center items-center text-center sm:text-start sm:block text-2xl font-bold text-gray-800' data-aos='fade-right'>Featured Products</h2>  
      <div className='flex flex-col justify-center items-center sm:grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-5'>  
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
  );  
};  

export default FeaturedProducts;