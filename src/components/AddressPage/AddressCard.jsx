import React from 'react';
import { Link } from 'react-router-dom';

const AddressCard = ({ storedAddress }) => {
  const { name, address, contact } = storedAddress;

  return (
    <div className="p-6 bg-gray-200 space-y-3 rounded-lg">
      <div className="font-semibold">{`Name: ${name}`}</div>
      <div className="font-normal">{`Address: ${address}`}</div>
      <div className="font-normal">{`Contact Details: ${contact}`}</div>
      <div className="space-x-4">
        <Link to="/addaddress">
          <button className="px-3 py-1 bg-green-200 rounded border-2 border-white">
            EDIT
          </button>
        </Link>
        <button className="px-3 py-1 bg-gray-300 rounded border-2 border-white">
          REMOVE
        </button>
      </div>
    </div>
  );
};

export default AddressCard;
