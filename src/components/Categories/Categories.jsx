import React from 'react';
import { Link } from 'react-scroll';

import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <div className="categories">
      <div className="text-4xl mb-10 ml-8 font-extrabold">CATEGORIES</div>
      <div className="bg-gradient-to-r from-pink-100 to-blue-100 bg-opacity-20 min-h-96 w-full rounded-xl grid grid-cols-1 sm:grid-cols-2  lgCustom:grid-cols-4 p-3">
        <Link to="1" spy={true} smooth={true}>
          <CategoryCard
          class_name="categories-mens-clothing"
          category_type="Men's Clothing"
        />
        </Link>

        <Link to="0" spy={true} smooth={true}>
          <CategoryCard
          class_name="categories-womens-clothing"
          category_type="Women's Clothing"
        />
        </Link>
        
        <Link to="2" spy={true} smooth={true}>
          <CategoryCard
          class_name="categories-kids-wear"
          category_type="Kids Wear"
        />
        </Link>
        
        <Link to="3" spy={true} smooth={true}>
          <CategoryCard
          class_name="categories-footwear"
          category_type="Footwear"
        />
          
        </Link>
        
        <Link to="5" spy={true} smooth={true}>
          <CategoryCard
          class_name="categories-electronics"
          category_type="Electronics"
        />

        </Link>
        
        <Link to="7" spy={true} smooth={true}>
          <CategoryCard
          class_name="categories-cosmetics"
          category_type="Cosmetics"
        />

        </Link>
        

        <Link to="4" spy={true} smooth={true}>
          <CategoryCard
          class_name="categories-accessories"
          category_type="Accessories"
        />
        </Link>
        
        <Link to="6" spy={true} smooth={true}>
          <CategoryCard
          class_name="categories-home-decor"
          category_type="Home Decor"
          />

        </Link>
        
      </div>
     
    </div>
  );
};

export default Categories;

// flex flex-wrap justify-around items-center
