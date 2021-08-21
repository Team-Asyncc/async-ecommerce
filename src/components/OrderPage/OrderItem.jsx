import { random } from 'lodash';
import React from 'react';
import DeliveryIcon from '../../images/order-images/deliveredicon.svg';
import RatingStars from './RatingStars';
const OrderItem = ({ item }) => {
  const days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'Sep', 'Oct', 'Dec'];
  return (
    <div className="h-auto  bg-white px-6 py-4 rounded space-y-2">
      <div className="flex justify-start">
        <img src={DeliveryIcon} alt="delivered" className="rounded-t-full" />
        <div className="flex flex-col px-3">
          <div className="text-green-600 text-xl">Delivered</div>
          <div className="text-xl">{`On ${
            days[random(0, days.length - 1)]
          }, ${random(1, 31)} ${month[random(0, month.length - 1)]}`}</div>
        </div>
      </div>
      <div className="bg-gray-200 flex flex-col p-4 rounded text-gray-700">
        <div className="font-semibold text-xl">{item.title}</div>
        <div className="font-normal text-lg">{item.description}</div>
        <div className="text-xl font-medium mt-1">
          <RatingStars />
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
