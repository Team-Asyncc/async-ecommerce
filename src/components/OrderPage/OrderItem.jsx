import React from 'react';
import DeliveryIcon from '../../images/order-images/deliveredicon.svg';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import RatingStars from './RatingStars';
import { Link } from 'react-router-dom';
const OrderItem = ({ item, idx }) => {
  return (
    <div className="h-auto  bg-white px-6 py-4 rounded ">
      <div className="flex justify-start">
        <img src={DeliveryIcon} alt="delivered" className="rounded-t-full" />
        <div className="flex flex-col px-3">
          <div className="text-green-600 text-xl">Delivered</div>
          <div className="text-xl">{`On ${item.date}`}</div>
        </div>
      </div>
      <div className="flex bg-gray-200 p-3 mt-3 items-center justify-between">
        <div className="flex items-center">
          <img
            src={item.img}
            alt={item.title}
            className="max-h-28 w-auto rounded"
          />

          <div className=" flex flex-col p-4 px-6 rounded text-gray-700">
            <div className="font-semibold text-xl text-gray-900">
              {item.title}
            </div>
            <div className="font-normal text-lg">
              {item.description.slice(0, 50)}
            </div>
            {item.size ? (
              <div className="font-normal text-lg">Size: {item.size}</div>
            ) : null}
            <div className="font-normal text-lg">
              Quantity: {item.quantity + 1}
            </div>
          </div>
        </div>
        <div className="justify-self-end">
          <Link to={`/Product/${item.id}`}>
            <ArrowForwardIosOutlinedIcon
              className="text-green-300 hover:text-green-500 "
              style={{ fontSize: '3rem', height: '5rem' }}
            />
          </Link>
        </div>
      </div>
      <div className="text-xl font-medium border-t-2 border-white  bg-gray-200 p-3">
        <RatingStars key={idx} ratingVal={item.rating} />
      </div>
    </div>
  );
};

export default OrderItem;
