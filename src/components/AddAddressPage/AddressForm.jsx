import React from 'react';

const AddressForm = () => {
  return (
    <form className="address-form h-5/6 w-5/12 flex flex-col px-6 py-10 bg-blue-100 rounded-lg ">
      <div className="flex flex-col mb-14">
        <input
          type="text"
          placeholder="NAME"
          className="mb-5 px-4 py-2 rounded-md focus:outline-none focus:shadow-lg focus:bg-pink-50"
        />
        <input
          type="tel"
          placeholder="MOBILE NUMBER"
          className="px-4 py-2 rounded-md focus:outline-none focus:shadow-lg focus:bg-pink-50"
        />
      </div>
      <input
        type="text"
        placeholder="ADDESS LINE 1"
        className="mb-5 px-4 py-2 rounded-md focus:outline-none focus:shadow-lg focus:bg-pink-50"
      />
      <input
        type="text"
        placeholder="ADRESS LINE 2"
        className="mb-5 px-4 py-2 rounded-md focus:outline-none focus:shadow-lg focus:bg-pink-50"
      />
      <input
        type="text"
        placeholder="ADDRESS LINE 3"
        className="mb-5 px-4 py-2 rounded-md focus:outline-none focus:shadow-lg focus:bg-pink-50"
      />
      <input
        type="text"
        placeholder="PINCODE"
        className="mb-5 px-4 py-2 rounded-md focus:outline-none focus:shadow-lg focus:bg-pink-50"
      />
      <div className="flex flex-wrap justify-between">
        <input
          type="text"
          placeholder="STATE"
          className="w-5/12 px-4 py-2 rounded-md focus:outline-none focus:shadow-lg focus:bg-pink-50"
        />
        <input
          type="text"
          placeholder="DISTRICT"
          className="w-5/12 px-4 py-2 rounded-md focus:outline-none focus:shadow-lg focus:bg-pink-50"
        />
      </div>
    </form>
  );
};

export default AddressForm;
