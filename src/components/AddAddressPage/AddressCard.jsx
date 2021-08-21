import React from 'react';

const AddressCard = (name, address, contact) => {
  return (
    <div className="p-5 bg-gray-300 space-y-3 ">
      <div className="font-medium">{`Name: ${name}`}</div>
      <div className="font-normal">{`Address: ${address}`}</div>
      <div className="font-normal">{`Contact Details: ${contact}`}</div>
      <div className="space-x-4">
        <button className="px-3 py-1 bg-green-200 rounded">EDIT</button>
        <button className="px-3 py-1 bg-gray-200 rounded">REMOVE</button>
      </div>
    </div>
  );
};

export default AddressCard;
