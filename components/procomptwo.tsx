'use client';
import 'aos/dist/aos.css';  
import Image from 'next/image';
import Link from 'next/link'   
import { urlFor } from '../sanity/lib/image';  
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import * as React from "react"


import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

//--=== FOR CATEGORIES ===--// 
const frameworks = [
    {
        value: "All Products",
        label: "All Products",
    },
    {
        value: "Desk Chair",
        label: "Desk Chair",
    },
    {
        value: "Wooden Chair",
        label: "Wooden Chair",
    },
    {
        value: "Wing Chair", 
        label: "Wing Chair",
    },
]

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

    const [open, setOpen] = React.useState(false);
    const [selectedCategory, setSelectedCategory] = React.useState<string>("All Products");
  
    //--==== FILTER PRODUCTS BASED ON THE SELECTED CATEGORY ===--//
    const filteredProducts = selectedCategory === "All Products" 
      ? products 
      : products.filter((product) => product.category.title === selectedCategory);

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
      <div>
        <div className='container mx-auto my-10 px-[10px] xl:px-[180px]'>
          
          {/*--==== TITLE & CATEGORY SELECTION ====--*/}
          <div className='flex justify-between'>
            <h2 className='text-2xl font-bold text-gray-800 tracking-tighter' data-aos='fade-right'>Products</h2>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild data-aos='fade-right'>
                <Button variant="outline" role="combobox" className="w-[160px] justify-between">
                  {selectedCategory}
                  <ChevronsUpDown className="opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandList>
                    <CommandGroup>
                      {frameworks.map((framework) => (
                        <CommandItem
                          key={framework.value}
                          value={framework.value}
                          onSelect={() => {
                            setSelectedCategory(framework.value);
                            setOpen(false);
                          }}
                        >
                          {framework.label}
                          <Check className={cn("ml-auto", selectedCategory === framework.value ? "opacity-100" : "opacity-0")} />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
  
          {/*--==== PRODUCS ====--*/}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-8'>
            {filteredProducts.map((product) => (
              <div key={product._id} className='overflow-hidden' data-aos='zoom-in'>
                <div className='relative'>
                  {product.badge && (
                    <span className={`absolute top-2 left-2 text-white text-xs py-[5px] px-[8px] w-[45px] rounded-md ${product.badge === 'New' ? 'bg-green-500' : 'bg-orange-500'}`}>
                      {product.badge}
                    </span>
                  )}
                  <Link href={`/details/${product._id}`}>
                    <Image src={urlFor(product.image).url()} alt={product.title} width={300} height={300} />
                  </Link>
                </div>
  
                <div className='flex justify-between p-[10px]'>
                  <div>
                    <h3 className='font-light text-[14px] sm:text-lg sm:tracking-wide text-gray-700'>{product.title}</h3>
                    <div className='flex gap-[10px]'>
                      {product.priceWithoutDiscount && <span className='text-black'> ${product.price}</span>}
                      <p className={`text-black ${product.priceWithoutDiscount ? 'line-through' : ''}`}>
                        ${product.priceWithoutDiscount || product.price}
                      </p>
                    </div>
                  </div>
                  <div>
                    <button onClick={() => addToCart(product)} className="cartBg px-[10px] py-[5px] rounded-md bg-gray-200 hover:bg-[#029FAE] hover:text-white"><i className='bx bx-cart-alt'></i></button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/*--==== POPUP FOR ADD TO CART ====--*/}
        <div className='flex justify-center items-center'>
          <div id="popUp" className="hidden fixed top-5  bg-black text-white px-4 py-2 rounded-md shadow-lg z-50">✅ Item Added to Cart!</div>
        </div>
      </div>
    );
  };
  
export default Products;  