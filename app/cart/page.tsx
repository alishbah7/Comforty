'use client';
import 'aos/dist/aos.css';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Image from 'next/image';

const CartSummary = () => {
  return (
    <div>
      <Header/>
      <div className='flex justify-center items-center px-[20px] sm:px-[0] py-[30px] lg:py[0] h-auto lg:h-[80vh] w-[100%]'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>

          <div className='lg:col-span-2'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6' data-aos='fade-right'>Bag</h2>
            <div className='space-y-6'>

              <div className='flex items-start border-b border-gray-200 pb-6' data-aos='zoom-in'>
                <div className='w-24 h-24 flex-shrink-0'>
                  <Image
                    src='/images/fp3.png'
                    alt='Library Stool Chair'
                    width={96}
                    height={96}
                    className='rounded-md object-cover'
                  />
                </div>
                <div className='flex-1 px-4'>
                  <h3 className='text-[12px] sm:text-lg font-medium text-gray-800'>Library Stool Chair</h3>
                  <div className='mb-[10px]'>
                    <p className='text-[10px] sm:text-sm text-gray-500 '>Ashen Slate/Cobalt Bliss</p>
                    <p className='text-[10px] sm:text-sm text-gray-500'>Size: L &middot; Quantity: 1</p>
                  </div>
                  <div className='flex gap-[10px] text-gray-600'>
                    <i className='bx bx-heart'></i>
                    <i className='bx bx-trash'></i>
                  </div>
                </div>
                <div className='text-right'>
                  <p className='text-[10px] sm:text-sm font-medium text-gray-800'>MRP: $99</p>
                </div>
              </div>

              <div className='flex items-start border-b border-gray-200 pb-6' data-aos='zoom-in'>
                <div className='w-24 h-24 flex-shrink-0'>
                  <Image
                    src='/images/catimg1.png'
                    alt='Library Stool Chair'
                    width={96}
                    height={96}
                    className='rounded-md object-cover'
                  />
                </div>
                <div className='flex-1 px-4'>
                  <h3 className='text-[12px] sm:text-lg font-medium text-gray-800 mb-[10px]'>Library Stool Chair</h3>
                  <div className='mb-[10px]'>
                    <p className='text-[10px] sm:text-sm text-gray-500 '>Ashen Slate/Cobalt Bliss</p>
                    <p className='text-[10px] sm:text-sm text-gray-500'>Size: L &middot; Quantity: 1</p>
                  </div>
                  <div className='flex gap-[10px] text-gray-600'>
                    <i className='bx bx-heart'></i>
                    <i className='bx bx-trash'></i>
                  </div>
                </div>
                <div className='text-right'>
                  <p className='text-[10px] sm:text-sm font-medium text-gray-800'>MRP: $99</p>
                </div>
              </div>
            </div>
          </div>

          <div className='p-6'>
            <h3 className='text-xl font-semibold text-gray-800 mb-4' data-aos='fade-right'>Summary</h3>
            <div className='space-y-4' data-aos='zoom-in'>
              <div className='flex justify-between text-sm text-gray-600'>
                <p>Subtotal</p>
                <p>$198.00</p>
              </div>
              <div className='flex justify-between text-sm text-gray-600'>
                <p>Estimated Delivery & Handling</p>
                <p>Free</p>
              </div>
              <div className='border-t border-gray-200 pt-4 flex justify-between text-lg font-medium text-gray-800'>
                <p>Total</p>
                <p>$198.00</p>
              </div>
            </div>
            <button className='mt-6 w-full bg-[#029FAE] text-white text-center py-3 rounded-full font-medium' data-aos='fade-right'>
              Member Checkout
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default CartSummary;
