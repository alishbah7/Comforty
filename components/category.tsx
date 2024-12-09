'use client';
import 'aos/dist/aos.css';
import Image from 'next/image'

interface Category {  
  id: number;  
  image: string;  
  title: string;  
  productCount: string;  
}  
interface CategoryCardProps {  
  image: string;  
  title: string;  
  productCount: string;  
}  

const CategoryCard: React.FC<CategoryCardProps> = ({ image, title, productCount }) => {  
  return (  
    <div className='relative rounded-lg overflow-hidden shadow-lg w-[250px] md:w-[350px]'>  
      <Image src={image} alt={title} className='w-[250px] md:w-[350px] h-auto' width={200} height={200}/>  
      <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center p-4'>  
        <h3 className='text-lg font-semibold tracking-wide text-start'>{title}</h3>  
        <p className='text-sm text-start text-gray-300'>{productCount} Products</p>  
      </div>  
    </div>  
  );  
};  

interface CategorySectionProps {  
  categories: Category[];  
}  

const TopCategory: React.FC<CategorySectionProps> = ({ categories }) => {  
  return (  
    <div className='flex flex-col justify-center items-center p-8' >  
      <h2 className='flex justify-center gap-[20px] items-center md:justify-start md:items-start text-xl font-bold mb-4 w-[100%] xl:w-[90%] text-start' data-aos='fade-right'>Top Categories</h2>  
      <div data-aos='zoom-in' className='flex flex-col justify-center items-center xl:grid xl:grid-cols-3 gap-[20px] xl:gap-4 w-[100%] lg:w-[90%]'>  
        {categories.map((category) => (  
          <CategoryCard  
            key={category.id}  
            image={category.image}  
            title={category.title}  
            productCount={category.productCount}  
          />  
        ))}  
      </div>
      </div>  
  );  
};  

export default TopCategory;