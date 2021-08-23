import React from 'react';
import { Link } from 'react-router-dom';
import frontpage from '../../assets/frontpage.svg';

const Banner = () => {
  return (
    <div className="flex items-center justify-between h-screen">
      <div className="ml-20">
        <p className="text-5xl font-bold mb-3 tracking-wide">
          <span className="text-pink-600">A</span>sync Store
        </p>
        <p className="font-medium tracking-widest text-xl">
          The perfect place to shop
        </p>
        <Link to="/Product">
          <button className="bg-pink-500 text-white rounded-md px-3 py-1 mt-3 border-2 hover:bg-white hover:text-pink-500 hover:border-pink-500">
            Shop now
          </button>
        </Link>
      </div>
      <img src={frontpage} alt="nothing" />
    </div>
  );
};

export default Banner;
