import React from 'react';
import { Link } from 'react-router-dom';
import emptyOrder from '../../images/order-images/emptyOrder.svg';

const EmptyOrder = () => {
  return (
    <div className="flex justify-center flex-col items-center space-y-6 mt-10">
      <img src={emptyOrder} alt="empty" className="h-80 w-auto " />
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
        <button className="h-14 w-96 bg-pink-500 rounded-lg text-center text-2xl font-medium text-white ">
          Start Shopping
        </button>
      </Link>
    </div>
  );
};

export default EmptyOrder;
