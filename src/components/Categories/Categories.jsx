import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <div className="categories">
      <div className="text-4xl mb-10 ml-8 font-extrabold">CATEGORIES</div>
      <div className="bg-gradient-to-tr from-pink-100 to-blue-100 bg-opacity-20 min-h-96 w-full rounded-xl flex flex-wrap justify-around items-center p-3">
        <CategoryCard
          class_name="categories-womens-clothing"
          category_type="Women's Clothing"
        />

        <CategoryCard
          class_name="categories-mens-clothing"
          category_type="Men's Clothing"
        />

        <CategoryCard
          class_name="categories-jewellery"
          category_type="Jewellery"
        />

        <CategoryCard
          class_name="categories-electronics"
          category_type="Electronics"
        />
      </div>
    </div>
  );
};

export default Categories;
