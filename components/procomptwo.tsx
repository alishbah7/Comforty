'use client';
import 'aos/dist/aos.css';  
import Image from 'next/image';
import Link from 'next/link'     

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
    return (  
        <div>
            <div className='container mx-auto my-10 px-[10px] xl:px-[180px]'>  
            <h2 className='flex justify-center items-center lg:justify-start lg:items-start text-center lg:text-start text-2xl font-bold text-gray-800' data-aos='fade-right'>All Products</h2>  
            <div className='flex flex-col justify-center items-center sm:grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-[38px]'>  
                {products.map((product, index) => (  
                <div key={index} className='overflow-hidden' data-aos='zoom-in'>  
                    <div className='relative'>  
                    {product.badge && (  
                        <span className={`absolute top-2 left-2 text-white text-xs py-[5px] px-[8px] w-[45px] rounded-md ${product.badge === 'New' ? 'bg-green-500' : 'bg-orange-500'}`}>  
                        {product.badge}  
                        </span>  
                    )}  
                    <Link href={`/details/${index}`}>
                        <Image src={product.image} alt={product.title} className='' width={300} height={300} />
                    </Link> 
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
                        <Link href=''><button className={`cartBg px-[10px] py-[5px] rounded-md text-[20px] ${product.customClass}`}><i className='bx bx-cart-alt'></i></button></Link>  
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