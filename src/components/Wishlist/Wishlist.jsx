import React from 'react';
import WishlistCard from './WishlistCard';
import { useSelector } from 'react-redux';

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);
  return (
    <div className="wishlist flex flex-wrap py-6 px-24 justify-center">
      {wishlist ? (
        wishlist.map((productObj, index) => {
          <WishlistCard key={index} product={productObj} />;
        })
      ) : (
        <h1>No items</h1>
      )}
    </div>
  );
};

export default Wishlist;
