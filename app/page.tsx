import BrandsSlider from '@/components/brands';
import TopCategory from '@/components/category';
import ChairGallery from '@/components/explore';
import FeaturedProducts from '@/components/featured';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Products from '@/components/products';

//--==== FEATURED PRODUCTS ====--//
const products = [  
  {  
    title: 'Library Stool Chair',  
    price: 20,  
    salePrice: null,  
    badge: 'New',  
    image: '/images/fp1.png',
    customClass: 'bg-teal-500 text-white'
  },  
  {  
    title: 'Library Stool Chair',  
    price: 20,  
    salePrice: 30,  
    badge: 'Sales',  
    image: '/images/fp2.png', 
    customClass: 'bg-gray-200 text-black'

  },  
  {  
    title: 'Library Stool Chair',  
    price: 20,  
    salePrice: null,  
    badge: '',  
    image: '/images/fp3.png',  
    customClass: 'bg-gray-200 text-black'
  },  
  {  
    title: 'Library Stool Chair',  
    price: 20,  
    salePrice: null,  
    badge: '',  
    image: '/images/fp4.png',  
    customClass: 'bg-gray-200 text-black'
  },  
]; 

//--==== TOP CATEGORIES ====--//
const categories = [  
  {  
    id: 1,  
    image: '/images/catimg1.png', 
    title: 'Wing Chair',  
    productCount: '3,584',  
  },  
  {  
    id: 2,  
    image: '/images/catimg2.png', 
    title: 'Wooden Chair',  
    productCount: '157',  
  },  
  {  
    id: 3,  
    image: '/images/catimg3.png', 
    title: 'Desk Chair',  
    productCount: '154',  
  },  
];

//--==== PRODUCTS ====--//
const productSlider = [
  {  
    title: 'Library Stool Chair',  
    price: 20,  
    salePrice: null,  
    badge: 'New',  
    image: '/images/fp1.png',
    customClass: 'bg-teal-500 text-white'
  },  
  {  
    title: 'Library Stool Chair',  
    price: 20,  
    salePrice: 30,  
    badge: 'Sales',  
    image: '/images/fp2.png', 
    customClass: 'bg-gray-200 text-black'

  },  
  {  
    title: 'Library Stool Chair',  
    price: 20,  
    salePrice: null,  
    badge: '',  
    image: '/images/fp3.png',  
    customClass: 'bg-gray-200 text-black'
  },  
  {  
    title: 'Library Stool Chair',  
    price: 20,  
    salePrice: null,  
    badge: '',  
    image: '/images/fp4.png',  
    customClass: 'bg-gray-200 text-black'
  },  
  {  
    title: 'Library Stool Chair',  
    price: 20,  
    salePrice: null,  
    badge: 'New',  
    image: '/images/catimg1.png',
    customClass: 'bg-teal-500 text-white'
  },  
  {  
    title: 'Library Stool Chair',  
    price: 20,  
    salePrice: 30,  
    badge: 'Sales',  
    image: '/images/exploreimg.png', 
    customClass: 'bg-gray-200 text-black'

  },  
  {  
    title: 'Library Stool Chair',  
    price: 20,  
    salePrice: null,  
    badge: '',  
    image: '/images/productsimg1.png',  
    customClass: 'bg-gray-200 text-black'
  },  
  {  
    title: 'Library Stool Chair',  
    price: 20,  
    salePrice: null,  
    badge: '',  
    image: '/images/fp1.png',  
    customClass: 'bg-gray-200 text-black'
  },  
]; 

export default function Home() {
  return (
    <div>
      {/* <Header/> */}
      <Hero/>
      <BrandsSlider/>
      <FeaturedProducts products={products}/>
      <TopCategory categories={categories}/>
      <ChairGallery/>
      <Products products={productSlider}/>
      {/* <Footer/> */}
    </div>
  );
}
