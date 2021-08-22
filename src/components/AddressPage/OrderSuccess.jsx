import React from 'react';
import { Link } from 'react-router-dom';
import successfulorder from '../../images/order-images/successfulorder.svg';

const OrderSuccess = () => {
  return (
    <div
      className="flex justify-center flex-col items-center space-y-6 "
      style={{ height: 'calc(100vh - 64px)' }}
    >
      <img
        src={successfulorder}
        alt="successfull"
        className="h-80 w-auto "
        style={{
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      />
      <div>
        <div className="text-2xl text-center font-semibold text-gray-600">
          Order Placed Successfully
        </div>
      </div>
      <Link to="/Product">
        <button className="h-14 w-96 bg-white rounded-lg text-center text-2xl font-medium text-pink-400 border-2 border-pink-400 hover:text-white hover:bg-pink-400 hover:border-white ">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
};

export default OrderSuccess;
