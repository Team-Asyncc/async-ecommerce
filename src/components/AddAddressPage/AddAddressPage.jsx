import React from 'react';
import AddressForm from './AddressForm';

const AddAddressPage = () => {
  return (
    <div className="add-address-page h-screen w-4/6 p-4 flex flex-col items-center">
      <div className="head flex justify-around w-full mb-10">
        <div className="text-2xl font-bold">Select Delivery Address</div>
        <button className="bg-gradient-to-r from-pink-200 to-blue-200 p-2 rounded-md text-md">
          ADD NEW ADDRESS
        </button>
      </div>
      <AddressForm />
      <button className="w-5/12 mt-6 border-pink-300 border-4 p-1 tracking-widest text-3xl font-semibold text-pink-500">
        ADD ADDRESS
      </button>
    </div>
  );
};

export default AddAddressPage;
