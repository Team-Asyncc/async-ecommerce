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
        <button className="h-14 w-96 mt-6 rounded border-pink-300 border-4 p-1 text-3xl font-semibold text-pink-500 hover:text-gray-100 hover:bg-pink-500 hover:border-pink-500">
          CONTINUE SHOPPING
        </button>
      </Link>
    </div>
  );
};

export default OrderSuccess;
