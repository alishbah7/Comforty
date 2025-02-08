'use client';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {client} from '../../sanity/lib/client';
import Products from '@/components/procomptwo';
import Image from 'next/image';

interface Product {
  _id: string;
  title: string;
  price: number;
  priceWithoutDiscount: number | null;
  badge: string | null;
  image: string;
  description: string;
  inventory: number;
  quantity?: number; // Added quantity field
}
export default function ProductsPage() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    AOS.init({ duration: 2000, easing: 'ease', delay: 200 });

    //--=== FETECHING PRODUCTS FROM SANITY ===--//
    const fetchProducts = async () => {
      const query = `
        *[_type == "products"][]{
          _id,
          title,
          price,
          priceWithoutDiscount,
          "category": category-> {
            _id,
            title
          },
          tags,
          badge,
          image,
          description,
          inventory
        }
      `;
      const result = await client.fetch(query);
      setProducts(result);
      setLoading(false);
    };

    fetchProducts();
  }, []);



  return (
    <div>
      
      {/*--=== PRODUCTS COMPONENT ===--*/}
      {loading ? (
        <div className="text-center py-10 text-[25px] font-semibold">Loading...</div>
      ) : (
        <Products products={products} />
      )}
      {/* <Products products={products} /> */}
      <div className='headerSec py-12 flex flex-col gap-[20px]'>
        <div className='text-center mb-10'>

            {/*--=== TITLE OF NEWSLETTER ===--*/}
            <h2 className='text-lg tracking-normal sm:text-3xl sm:tracking-wide font-bold mb-4' data-aos='fade-right'>
                Or Subscribe To The Newsletter
            </h2>

            {/*--=== EMAIL AND SUBMIT BUTTON ===--*/}
            <div className='flex justify-center' data-aos='fade'>
                <input
                type='email'
                placeholder='Email Address...'
                className='border-b-2 border-black bg-transparent w-[180px] sm:w-[380px] py-2 px-4 focus:outline-none'
                required
                />
                <button className='text-black border-b-2 border-black py-2 px-4 ml-[10px] text-[12px] sm:text-[14px]'>
                SUBMIT
                </button>
            </div>
            
        </div>

        {/*--=== DISCOUNT ON INSTA - TITLE ===--*/}
        <h3
          className='text-lg tracking-normal sm:text-3xl sm:tracking-wider font-semibold text-center mb-6'
          data-aos='fade-right'
        >
          Follow Products And Discounts On Instagram
        </h3>

        {/*--=== DISCOUNT ON INSTA - IMAGES ===--*/}
        <div className='flex flex-wrap justify-center gap-[10px] space-x-1'>
          <Image
            src='/images/catimg2.png'
            alt='Chair 1'
            className='w-32 h-32 object-cover'
            width={200}
            height={200}
            data-aos='zoom-in'
          />
          <Image
            src='/images/catimg1.png'
            alt='Chair 2'
            className='w-32 h-32 object-cover'
            width={200}
            height={200}
            data-aos='zoom-in'
          />
          <Image
            src='/images/fp2.png'
            alt='Chair 3'
            className='w-32 h-32 object-cover'
            width={200}
            height={200}
            data-aos='zoom-in'
          />
          <Image
            src='/images/fp1.png'
            alt='Chair 4'
            className='w-32 h-32 object-cover'
            width={200}
            height={200}
            data-aos='zoom-in'
          />
          <Image
            src='/images/fp3.png'
            alt='Chair 5'
            className='w-32 h-32 object-cover'
            width={200}
            height={200}
            data-aos='zoom-in'
          />
          <Image
            src='/images/catimg3.png'
            alt='Chair 6'
            className='w-32 h-32 object-cover'
            width={200}
            height={200}
            data-aos='zoom-in'
          />
        </div>
        
      </div>
    </div>
  );
}
