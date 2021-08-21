import React from 'react';
import { useDispatch } from 'react-redux';
import { removeAddress, setSelected } from '../../redux/slices/addressSlice';

const AddressCard = ({ storedAddress, idx, openModal }) => {
  console.log('from here', storedAddress, idx);
  const { name, address1, address2, contact, pincode, state, district } =
    storedAddress;
  const dispatch = useDispatch();

  return (
    <div className="p-6 bg-gray-200 space-y-3 rounded-lg">
      <div className="font-semibold">{`Name: ${name}`}</div>
      <div className="font-normal">{`Address: ${address1} ${address2} ${pincode} ${district} ${state}`}</div>
      <div className="font-normal">{`Contact Details: ${contact}`}</div>
      <div className="space-x-4">
        <button
          className="px-3 py-1 bg-green-200 rounded border-2 border-white"
          onClick={() => {
            const d = { val: storedAddress, id: idx };
            dispatch(setSelected(d));
            openModal();
          }}
        >
          EDIT
        </button>
        <button
          className="px-3 py-1 bg-gray-300 rounded border-2 border-white"
          onClick={() => dispatch(removeAddress(idx))}
        >
          REMOVE
        </button>
      </div>
    </div>
  );
};

export default AddressCard;
