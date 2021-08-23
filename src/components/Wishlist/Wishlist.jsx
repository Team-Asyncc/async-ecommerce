import React, { useEffect } from 'react';
import WishlistCard from './WishlistCard';
import { useDispatch, useSelector } from 'react-redux';
import EmptyWishlist from './EmptyWishlist';
import { getWishlist } from '../../redux/slices/whishlistSlice';
import { loadWishlist } from '../../services/wishlist';

const Wishlist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWishlist(loadWishlist()));
  }, [dispatch]);

  const wishlist = useSelector((state) => state.wishlist);

  return (
    <div>
      {wishlist.length > 0 ? (
        <div className="w-full flex px-20 py-10">
          <div className="flex flex-col">
            <div className="text-2xl font-semibold mb-5">
              MY WISHLIST {'\u00a0\u00a0'}
              <span className="font-normal">{wishlist.length} items</span>
            </div>
            <div className="wishlist flex flex-wrap">
              {wishlist.map((productObj, index) => {
                return <WishlistCard key={index} productObj={productObj} />;
              })}
            </div>
          </div>
        </div>
      ) : (
        <EmptyWishlist />
      )}
    </div>
  );
};

export default Wishlist;
