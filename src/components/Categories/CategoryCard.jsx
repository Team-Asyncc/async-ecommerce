import React from "react";
import CircularCard from "./CircularCard";

const CategoryCard = ({ class_name, category_type }) => {
  return (
    <div className="flex flex-col justify-start mb-3 cursor-pointer">
      <CircularCard class_name={class_name} />
      <div className="text-2xl font-normal text-center">{category_type}</div>
    </div>
  );
};

export default CategoryCard;
