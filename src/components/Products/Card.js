import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../styles/productList.scss';
import { addToWhishlist } from '../../redux/slices/whishlistSlice';

const Card = ({ val }) => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="m-4 relative overflow-hidden hover:shadow-md">
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
              <span className="text-lg font-medium truncate inline-block w-full">
                {val.title.length > 20 ? (
                  <div>{val.title.slice(0, 21)}...</div>
                ) : (
                  <div>{val.title}</div>
                )}
              </span>
              <span className="text-sm inline-block">
                {val.description.length > 28 ? (
                  <div>{val.description.slice(0, 20)}...</div>
                ) : (
                  <div>{val.description}</div>
                )}
              </span>
            </div>
            <span className="text-md font-semibold">₹ {val.price}</span>
            <span className="ml-3 text-red-400 text-sm">( 50% OFF )</span>
          </div>
        </div>
      </Link>
      <div
        className={`absolute w-56 hover-span py-6 px-2 border-r border-l ${
          visible && 'hover-active'
        }`}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        <span
          className={`w-full inline-block border text-center cursor-pointer py-1 font-normal hover:border-pink-500 hover:text-pink-500`}
          onClick={() => {
            dispatch(addToWhishlist(val));
          }}
        >
          WISHLIST
        </span>
      </div>
    </div>
  );
};

export default Card;
