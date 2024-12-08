import BrandsSlider from "@/components/brands";
import FeaturedProducts from "@/components/featured";
import Header from "@/components/header";
import Hero from "@/components/hero";
// import Image from "next/image";
const products = [  
  {  
    title: "Library Stool Chair",  
    price: 20,  
    salePrice: null,  
    badge: 'New',  
    image: "/images/fp1.png",
  },  
  {  
    title: "Library Stool Chair",  
    price: 20,  
    salePrice: 30,  
    badge: 'Sales',  
    image: "/images/fp2.png",  
  },  
  {  
    title: "Library Stool Chair",  
    price: 20,  
    salePrice: null,  
    badge: null,  
    image: "/images/fp3.png",  
  },  
  {  
    title: "Library Stool Chair",  
    price: 20,  
    salePrice: null,  
    badge: null,  
    image: "/images/fp4.png",  
  },  
]; 
export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <BrandsSlider/>
      <FeaturedProducts products={products}/>
    </div>
  );
}
