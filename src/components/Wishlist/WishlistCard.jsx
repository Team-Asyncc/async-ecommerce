import React from 'react';
import image from '../../images/categories-womens-clothing.jpg';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';
import { grey } from 'chalk';

const WishlistCard = () => {
  return (
    <div className="m-4 relative overflow-hidden hover:shadow-sm">
      <div className="w-60">
        <div className="w-60 h-64 overflow-hidden relative">
          <HighlightOffRoundedIcon
            className="absolute left-52 top-2 cursor-pointer"
            color="action"
          />
          <img className="object-scale-down" src={image} />
        </div>
        <div className="px-3 pb-6 py-4 border relative">
          <div className="leading-3">
            <span className="text-lg font-medium truncate inline-block">
              Image-title
            </span>
          </div>
          <span className="text-sm font-semibold">Rs. Price</span>
          <span className="ml-3  text-xs line-through">Rs. Original</span>
          <span className="ml-3 text-red-400 text-xs font-semibold">
            (40% OFF)
          </span>
        </div>
      </div>

      <div>
        <span
          className={`w-full inline-block border text-center cursor-pointer py-1 font-medium bg-pink-500 text-gray-100 hover:bg-pink-600 `}
          onClick={(e) => {}}
        >
          MOVE TO CART
        </span>
      </div>
    </div>
  );
};

export default WishlistCard;
