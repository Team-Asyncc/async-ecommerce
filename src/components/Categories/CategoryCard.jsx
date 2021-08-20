import React from 'react';
import CircularCard from './CircularCard';

const CategoryCard = ({ class_name, category_type }) => {
  return (
    <div className="flex flex-col items-center mb-3 cursor-pointer font-normal transform transition duration-500 hover:scale-110">
      <CircularCard class_name={class_name} />
      <div className="text-2xl text-center">{category_type}</div>
    </div>
  );
};

export default CategoryCard;
