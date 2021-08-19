import React from "react";

const CircularCard = ({ class_name, image }) => {
  return (
    <div className={`${class_name} w-72 h-72 rounded-full mt-4 mb-2`}></div>
  );
};

export default CircularCard;
