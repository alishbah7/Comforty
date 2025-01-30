'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { client } from '../../../sanity/lib/client';
import Image from 'next/image';
import { urlFor } from '../../../sanity/lib/image'; 

interface Product {
  _id: string;
  title: string;
  price: number;
  priceWithoutDiscount: number | null;
  badge: string | null;
  image: string;
  description: string;
  inventory: number;
}

export default function ProductDetails({ params }: { params: { id: string } }) {

    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const { id } = params;

    useEffect(() => {
        AOS.init({ duration: 2000, easing: 'ease', delay: 200 });

        const fetchProduct = async () => {
        try {
            const query = `
            *[_type == "products" && _id == $id][0] {
                _id,
                title,
                price,
                priceWithoutDiscount,
                badge,
                image,
                description,
                inventory
            }
            `;
            const result = await client.fetch(query, { id });
            setProduct(result);
        } catch (error) {
            console.error("Error fetching product:", error);
        } finally {
            setLoading(false);
        }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold">Loading...</h1>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col xl:flex-row justify-between items-center rounded-md overflow-hidden xl:px-[230px] h-auto xl:h-[80vh] py-[30px] xl:py-[0]">
        <div className="w-[250px] xl:w-[500px]">
          <Image
            src={urlFor(product.image).url()}
            alt={product.title}
            className="w-[250px] xl:w-[500px] h-auto"
            width={400}
            height={400}
            data-aos="zoom-in"
          />
        </div>
        <div>
          <div className="p-[10px] sm:p-6 max-[400px]:w-[280px]">
            <div className="border-b border-gray-500 pb-[30px]">
              <h2 className="text-[30px] font-bold text-gray-800 xl:mt-[-50px]" data-aos="fade-left">{product.title}</h2>
              <p
                data-aos="fade-left"
                className="flex items-center justify-center text-lg rounded-full font-semibold text-[11.9px] text-white w-[120px] h-[30px] bg-[#029FAE] mt-[20px]">${product.price}</p>
            </div>
            <p className="mt-[30px] text-gray-600 w-[380px] max-[400px]:w-[270px]" data-aos="fade-up">
              {product.description}
            </p>
            <button data-aos="fade-up" className="flex gap-[1px] mt-4 bg-[#029FAE] text-white py-2 px-4 rounded-md">
              <i className="bx bx-cart pr-[10px] text-[20px]"></i>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
