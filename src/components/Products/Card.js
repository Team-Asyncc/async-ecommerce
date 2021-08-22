import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/productList.scss';

// import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addToWhishlist } from '../../redux/slices/whishlistSlice';

const Card = ({ val }) => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="m-4 relative overflow-hidden hover:shadow-sm">
      <Link to={`/Product/${val.id}`}>
        <div
          className="w-56"
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
        >
          <div className="w-56 h-64 overflow-hidden">
            <img className="object-scale-down" src={val.img} alt={val.title} />
          </div>
          <div className="p-3 border relative">
            <div className="leading-3">
              <span className="text-lg font-medium truncate inline-block">
                {val.title.slice(0, 11)}
              </span>
              <span className="text-sm inline-block">
                {val.description.slice(0, 20)}
              </span>
            </div>
            <span className="text-sm font-semibold">Rs. {val.price}</span>
            <span className="ml-3 text-red-400 text-sm">( 50% OFF )</span>
          </div>
        </div>
      </Link>
      <div
        className={`absolute w-56 hover-span py-5 px-2 border-r border-l ${
          visible && 'hover-active'
        }`}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        <span
          className={`w-full inline-block border text-center cursor-pointer py-1 font-medium hover:border-pink-300 `}
          onClick={(e) => {
            dispatch(addToWhishlist(val));
          }}
        >
          Wishlist
        </span>
      </div>
    </div>
  );
};

export default Card;
