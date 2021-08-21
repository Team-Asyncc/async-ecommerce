import React from 'react';
import { useSelector } from 'react-redux';
import AddressCard from './AddressCard';

const AddressPage = () => {
  const availableAddress = [
    {
      name: ' Product',
      address: ' 28 Avenue, King street, Orgeon',
      contact: '+1 2665442318 ',
    },
    {
      name: ' Product',
      address: ' 28 Avenue, King street, Orgeon',
      contact: '+1 2665442318 ',
    },
    {
      name: ' Product',
      address: ' 28 Avenue, King street, Orgeon',
      contact: '+1 2665442318 ',
    },
    {
      name: ' Product',
      address: ' 28 Avenue, King street, Orgeon',
      contact: '+1 2665442318 ',
    },
  ];
  const cart = useSelector((state) => state.cart);
  const numberOfCartItems = cart.length;
  let totalPrice = 0;
  cart.forEach((item, idx) => {
    totalPrice += item.price * (item.quantity + 1);
  });
  return (
    <div
      className="flex  justify-center w-full"
      style={{ height: 'calc(100vh - 64px)' }}
    >
      <div className=" w-10/12">
        <div className="text-2xl w-6/12 font-bold mt-3 px-12">
          Select Delivery Address
        </div>

        <div className="flex flex-col justify-center p-3 h-5/6 sm:flex-row">
          <div className="w-10/12 h-auto px-4 space-y-6 sm:w-7/12">
            <div className="h-5/6 p-3 rounded-lg overflow-y-scroll space-y-2 custom-scroll">
              {availableAddress.length === 0
                ? null
                : availableAddress.map((storedAddress) => {
                    return <AddressCard storedAddress={storedAddress} />;
                  })}
            </div>
            <button className="ml-3 font-bold  bg-gradient-to-r from-pink-200 to-blue-200 p-2 rounded-md text-md px-5 border-2 border-gray-700 ">
              ADD NEW ADDRESS
            </button>
          </div>
          <div className="space-y-3 p-2">
            <div className="bg-white  px-6 py-3 w-96 text-base rounded-lg flex flex-col gap-2">
              <div className=" font-bold text-sm text-gray-700">
                PRICE DETAILS ({`${numberOfCartItems} Items`})
              </div>
              <div className="font-normal  flex justify-between ">
                <span className="inline-block">TOTAL MRP:</span>
                {` ${totalPrice.toFixed(2)}₹`}
              </div>
              <div className="font-normal  flex justify-between ">
                <span className="inline-block"> DISCOUNT ON MRP:</span>
                <span className="text-green-400">
                  -₹ {(totalPrice / 10).toFixed(2)}
                </span>
              </div>
              <div className="font-normal  flex justify-between ">
                <span className="inline-block"> COUPON DISCOUNT:</span>0₹
              </div>
              <div className="font-normal  flex justify-between ">
                <span className="inline-block">Convenience Fee:</span>{' '}
                <span className="text-green-400">FREE</span>
              </div>
              <div className="font-medium  flex justify-between border-t-2 border-gray-400 pt-5">
                <span className="inline-block">TOTAL AMOUNT:</span>{' '}
                {(totalPrice / 10).toFixed(2)}₹
              </div>
              <button className="w-full text-pink-600 bg-white rounded p-3 border-pink-500 border-2 ">
                ADD TO ORDER
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressPage;
