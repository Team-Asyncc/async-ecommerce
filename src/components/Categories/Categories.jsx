import React from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <div className="categories">
      <div className="text-4xl mb-10 ml-8 font-extrabold">CATEGORIES</div>
      <div className="bg-gradient-to-r from-pink-100 to-blue-100 bg-opacity-20 min-h-96 w-full rounded-xl grid grid-cols-1 sm:grid-cols-2  lgCustom:grid-cols-4 p-3">
        <CategoryCard
          class_name="categories-mens-clothing"
          category_type="Men's Clothing"
        />

        <CategoryCard
          class_name="categories-womens-clothing"
          category_type="Women's Clothing"
        />

        <CategoryCard
          class_name="categories-kids-wear"
          category_type="Kids Wear"
        />
        <CategoryCard
          class_name="categories-footwear"
          category_type="Footwear"
        />

        <CategoryCard
          class_name="categories-electronics"
          category_type="Electronics"
        />

        <CategoryCard
          class_name="categories-cosmetics"
          category_type="Cosmetics"
        />
        <CategoryCard
          class_name="categories-accessories"
          category_type="Accessories"
        />

        <CategoryCard
          class_name="categories-home-decor"
          category_type="Home Decor"
        />
      </div>
    </div>
  );
};

export default Categories;

// flex flex-wrap justify-around items-center
