import React from 'react';
import { Link } from 'react-router-dom';
import emptyOrder from '../../images/order-images/emptyOrder.svg';

const EmptyOrder = () => {
  return (
    <div
      className="flex justify-center flex-col items-center space-y-5 "
      style={{
        height: 'calc(100vh - 64px)',
      }}
    >
      <img
        src={emptyOrder}
        alt="empty"
        className="h-80 w-auto "
        style={{
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      />
      <div>
        <div className="text-2xl text-center font-semibold text-gray-600">
          You haven't placed any order yet!
        </div>
        <div className="text-xl text-center font-normal text-gray-600">
          Order section is empty. After placing order, You can track them from
          here!
        </div>
      </div>
      <Link to="/Product">
        <button className="h-12 w-80 rounded border-pink-300 border-4 p-1 text-xl font-semibold text-pink-500 hover:text-gray-100 hover:bg-pink-500 hover:border-pink-500">
          START SHOPPING
        </button>
      </Link>
    </div>
  );
};

export default EmptyOrder;
