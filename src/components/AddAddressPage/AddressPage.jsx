import React from 'react';
import AddressCard from './AddressCard';

const AddressPage = () => {
  const availableAddress = [
    {
      name: ' Product',
      address: ' 28 Avenue, King street, Orgeon',
      contact: '+1 2665442318 ',
    },
  ];
  return (
    <div className="flex items-center justify-center">
      <div className=" w-10/12">
        <div className="text-2xl font-bold ">Select Delivery Address</div>

        <div className="flex">
          <div className="w-5/12 h-auto p-4">
            {availableAddress.length === 0
              ? null
              : availableAddress.map((storedAddress) => {
                  return <AddressCard storedAddress={storedAddress} />;
                })}
            <button className="bg-gradient-to-r from-pink-200 to-blue-200 p-2 rounded-md text-md">
              ADD NEW ADDRESS
            </button>
          </div>
          <div>
            <div className="bg-gray-300 p-3">
              <div className="font-normal text-xl"> TOTAL MRP</div>
              <div className="font-normal text-xl">DISCOUNT ON MRP</div>
              <div className="font-normal text-xl">COUPON DISCOUNT</div>
              <div className="font-normal text-xl">TAXES AND CHARGES</div>
              <div className="font-medium text-xl">TOTAL AMOUNT</div>
            </div>
            <button className="w-full text-white bg-pink-500 rounded">
              ADD TO ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressPage;
