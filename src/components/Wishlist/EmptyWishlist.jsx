import React from 'react';
import icon from './icon.svg';
import { Link } from 'react-router-dom';

const EmptyWishlist = () => {
  return (
    <div className="w-full h-full flex justify-center pt-12">
      <div className="w-1/3 h-1/2  flex flex-col items-center justify-between">
        <div className="text-xl font-semibold mb-3 text-center">
          YOUR WISHLIST IS EMPTY
        </div>
        <div className="text-gray-400 text-center">
          Add the items you like to your wishlist. Review them anytime and
          easily move them to the cart.
        </div>
        <img src={icon} alt="Empty Wishlist" height="500px" width="500px" />
        <Link to="/Product" className="w-8/12">
          <button className="w-full mt-6 border-pink-300 border-4 p-1 py-2 text-xl font-semibold text-pink-500 hover:text-gray-100 hover:bg-pink-500 hover:border-pink-500">
            CONTINUE SHOPPING
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyWishlist;
