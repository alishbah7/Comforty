import BrandsSlider from '@/components/brands';
import TopCategory from '@/components/category';
import ChairGallery from '@/components/explore';
import FeaturedProducts from '@/components/featured';
import Hero from '@/components/hero';
// import Products from '@/components/products';

//--==== FEATURED PRODUCTS ====--//
const products = [  
  {  
    id:"IZ4ZA8avncRcTDvyufZn9m",
    title: 'Library Stool Chair',  
    price: 20,  
    salePrice: null,  
    badge: 'New',  
    image: '/images/fp1.png',
  },  
  {  
    id:"IZ4ZA8avncRcTDvyufZoRc",
    title: 'Library Stool Chair',  
    price: 20,  
    salePrice: 30,  
    badge: 'Sales',  
    image: '/images/fp2.png', 

  },  
  {  
    id:"IZ4ZA8avncRcTDvyufZnya",
    title: 'Library Stool Chair',  
    price: 20,  
    salePrice: null,  
    badge: '',  
    image: '/images/fp3.png',  
  },  
  {  
    id:"aW9ZvtW6d5z6x1Negqe7i7",
    title: 'Library Stool Chair',  
    price: 20,  
    salePrice: null,  
    badge: '',  
    image: '/images/fp4.png',  
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

export default function Home() {
  return (
    <div>
      {/* <Header/> */}
      <Hero/>
      <BrandsSlider/>
      <FeaturedProducts products={products}/>
      <TopCategory categories={categories}/>
      <ChairGallery/>
    </div>
  );
}
