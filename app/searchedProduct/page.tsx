'use client'
import { useEffect, useState } from 'react';
import { client } from '../../sanity/lib/client';
import Image from 'next/image';
import Link from 'next/link';
import 'aos/dist/aos.css';
import { urlFor } from '@/sanity/lib/image';

type Product = {
  _id: string;
  title: string;
  price: number;
  priceWithoutDiscount?: number;
  badge?: string;
  image: any;
};

const SearchedProduct = () => {

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  //--==== SEARCH FUNCTIONALITY ====--//
  useEffect(() => {
    const storedCategory = localStorage.getItem('searchedCategory');

    if (storedCategory) {
      client
        .fetch(
          `*[_type == "categories" && title == $storedCategory] {
            _id,
            "products": *[_type == "products" && references(^._id)] {
              _id, title, price, priceWithoutDiscount, badge, image
            }
          }[0]`,
          { storedCategory }
        )
        .then((data) => {
          setFilteredProducts(data?.products || []);
        })
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  //--==== ADD TO CART FUNCTIONALITY ====--//
  const addToCart = (product: Product) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingProductIndex = cart.findIndex((item: Product) => item._id === product._id);

    const productWithImage = {
      ...product,
      image: urlFor(product.image).url(),
    };

    if (existingProductIndex > -1) {
      cart[existingProductIndex].quantity += 1;
    } else {
      cart.push({ ...productWithImage, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new CustomEvent("cartUpdated"));

    const popup = document.getElementById("popUp");
    if (popup) {
      popup.classList.remove("hidden");
      popup.classList.add("block");

      setTimeout(() => {
        popup.classList.remove("block");
        popup.classList.add("hidden");
      }, 1500);
    }
  };

  return (
    <div className="mt-8">

      {/*--==== LOADING ====--*/}
      {loading ? (
        <p className="text-center mt-[-32px] p-[20px]">Loading products...</p>
      ) : filteredProducts.length > 0 ? (

        //--==== SEARCHED PRODUCTS ====--//
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-[10px] xl:px-[180px]">
          {filteredProducts.map((product) => (
            <div key={product._id} className="overflow-hidden" data-aos="zoom-in">
              <div className="relative">

                {/*--==== PRODUCT BADGE ====--*/}
                {product.badge && (
                  <span
                    className={`absolute top-2 left-2 text-white text-xs py-[5px] px-[8px] w-[45px] rounded-md ${
                    product.badge === 'New' ? 'bg-green-500' : 'bg-orange-500'}`}>{product.badge}
                  </span>)}

                {/*--==== IMAGE ====--*/}
                <Link href={`/details/${product._id}`}>
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.title}
                    width={300}
                    height={300}
                  />
                </Link>
              </div>

              <div className="flex justify-between p-[10px]">
                <div>

                  {/*--==== TITLE ====--*/}
                  <h3 className="font-light text-[14px] sm:text-lg sm:tracking-wide text-gray-700">{product.title}</h3>

                  {/*--==== PRICE AND DISCOUNT ====--*/}
                  <div className="flex gap-[10px]">
                    {product.priceWithoutDiscount && ( 
                    <span className="text-black"> ${product.price}</span>)}
                    <p className={`text-black ${product.priceWithoutDiscount ? 'line-through' : ''}`}>${product.priceWithoutDiscount || product.price}</p>
                  </div>

                </div>

                {/*--==== CART ====--*/}
                <div>
                    <button onClick={() => addToCart(product)} className="cartBg px-[10px] py-[5px] rounded-md bg-gray-200 hover:bg-[#029FAE] hover:text-white">
                      <i className="bx bx-cart-alt"></i>
                    </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      ) : (

        //--==== IF NO SEARCHED PRODUCTS EXIST ====--//
        <p className='text-center mt-[-32px] p-[20px]'>No products found</p>
      )}

      {/*--==== POPUP FOR ADD TO CART ====--*/}
      <div className='flex justify-center items-center'>
          <div id="popUp" className="hidden fixed top-5  bg-black text-white px-4 py-2 rounded-md shadow-lg z-50">✅ Item Added to Cart!</div>
        </div>
    </div>
  );
};

export default SearchedProduct;
