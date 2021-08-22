import React from 'react';
import DeliveryIcon from '../../images/order-images/deliveredicon.svg';
import RatingStars from './RatingStars';
const OrderItem = ({ item, idx }) => {
  return (
    <div className="h-auto  bg-white px-6 py-4 rounded space-y-2">
      <div className="flex justify-start">
        <img src={DeliveryIcon} alt="delivered" className="rounded-t-full" />
        <div className="flex flex-col px-3">
          <div className="text-green-600 text-xl">Delivered</div>
          <div className="text-xl">{`On ${item.date}`}</div>
        </div>
      </div>
      <div className="bg-gray-200 flex flex-col p-4 rounded text-gray-700">
        <div className="font-semibold text-xl">{item.title}</div>
        <div className="font-normal text-lg">{item.description}</div>
        <div className="text-xl font-medium mt-1">
          <RatingStars key={idx} />
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
