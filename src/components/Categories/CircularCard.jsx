import React from 'react';

const CircularCard = ({ class_name, image }) => {
  return (
    <div
      className={`${class_name} w-80 h-80 lgCustom:w-64 lgCustom:h-64 xlCustom:w-72 xlCustom:h-72 rounded-full mt-4 mb-2 shadow-lg border-8 border-pink-300 border-opacity-75 transform transition duration-500 hover:border-purple-300`}
    ></div>
  );
};

export default CircularCard;
