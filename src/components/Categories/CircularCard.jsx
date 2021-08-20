import React from 'react';

const CircularCard = ({ class_name, image }) => {
  return (
    <div
      className={`${class_name} w-80 h-80 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full mt-4 mb-2 shadow-lg`}
    ></div>
  );
};

export default CircularCard;
