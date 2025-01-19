'use client';
import { useEffect } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css';  
import Image from 'next/image';
import Link from 'next/link'   
import { urlFor } from '../sanity/lib/image';  

//--=== DEFINING FIELDS ===--// 
interface Product {
  _id: string;
  title: string;
  price: number;
  priceWithoutDiscount: number | null;
  category: {
    _id: string;
    title: string;
  };
  tags: string[];
  badge: string | null;
  image: string;
  description: string;
  inventory: number;
}
 
//--=== DEFINING PRODUCT AS ARRAY ===--// 
interface ProductsProps {  
  products: Product[];  
}   

const Products: React.FC<ProductsProps> = ({ products }) => {

    useEffect(() => {
        AOS.init({ duration: 2000, easing: 'ease', delay: 200 });
    }, []); 

    return (  
        <div>
            <div className='container mx-auto my-10 px-[10px] xl:px-[180px]'>  

                {/*--=== TITLE ===--*/}
                <h2 className='flex justify-center items-center lg:justify-start lg:items-start text-center lg:text-start text-2xl font-bold text-gray-800' data-aos='fade-right'>All Products</h2>  
                
                <div className='flex flex-col justify-center items-center sm:grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-[38px]'>  

                    {/*--=== MAPPING THROUGH PRODUCTS ===--*/}
                    {products.map((product, index) => (  
                    <div key={index} className='overflow-hidden' data-aos='zoom-in'>  

                        {/*--=== BADGE AND IMAGE ===--*/}
                        <div className='relative'>  
                        {product.badge && (  
                            <span className={`absolute top-2 left-2 text-white text-xs py-[5px] px-[8px] w-[45px] rounded-md ${product.badge === 'New' ? 'bg-green-500' : 'bg-orange-500'}`}>  
                            {product.badge}  
                            </span>  
                        )}   
                        <Link href={`/details/${product._id}`}>
                            <Image src={urlFor(product.image).url()} alt={product.title} className='' width={300} height={300} />
                        </Link> 
                        </div>  

                        {/*--=== PRICE AND DISCOUNT ===--*/}
                        <div className='flex justify-between p-[10px]'>  
                            <div>
                                <h3 className='font-light text-lg tracking-wide text-gray-700'>{product.title}</h3>  
                                <div className='flex gap-[10px]'>
                                {product.priceWithoutDiscount && <span className='text-black'> ${product.price}</span>} 
                                <p className={`text-black ${product.priceWithoutDiscount ? 'line-through' : ''}`}>  
                                    ${product.priceWithoutDiscount ? product.priceWithoutDiscount : product.price}  
                                </p>  
                                </div>
                            </div>
                        <div>
                            <Link href=''><button className="cartBg px-[10px] py-[5px] rounded-md text-[20px] bg-gray-200 hover:bg-[#029FAE] hover:text-white"><i className='bx bx-cart-alt'></i></button></Link>  
                        </div>
                        </div>

                    </div>  
                    ))}  
                </div>  
            </div>
        </div>
    );  
};  

export default Products;  