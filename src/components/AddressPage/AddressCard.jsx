import React from 'react';
import { useDispatch } from 'react-redux';
import { removeAddress, setSelected } from '../../redux/slices/addressSlice';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
const AddressCard = ({ storedAddress, idx, openModal }) => {
  const { name, address1, address2, pincode, state, district, mobileno } =
    storedAddress;
  const dispatch = useDispatch();

  return (
    <div className="px-4 pl-11 py-4 bg-white space-y-4 rounded-lg rounded-tl-2xl border-2 border-gray-200">
      <div className="font-semibold">{name}</div>
      <div className="font-normal text-sm " style={{ lineHeight: '0.9rem' }}>
        <div>
          {address1} {address2} {district}
        </div>
        {district} {state} {pincode}
      </div>
      <div className="font-normal text-sm" style={{ lineHeight: '0.8rem' }}>
        {'Mobile: '}
        <span className="font-semibold">{mobileno}</span>
      </div>
      <div className="text-sm">
        <FiberManualRecordIcon style={{ fontSize: '0.4rem' }} /> Pay on Delivery
        available
      </div>
      <div className="space-x-4">
        <button
          className="px-3 py-1 text-sm font-normal rounded bg-pink-500 border-2 border-pink-500 text-gray-100 tracking-wide hover:bg-pink-600 hover:border-pink-600"
          onClick={() => {
            const d = { val: storedAddress, id: idx };
            dispatch(setSelected(d));
            openModal();
          }}
        >
          EDIT
        </button>
        <button
          className="px-3 py-1 text-sm font-medium rounded border-2 border-pink-400 text-pink-500 hover:bg-pink-500 hover:text-gray-100 hover:border-pink-500"
          onClick={() => dispatch(removeAddress(idx))}
        >
          REMOVE
        </button>
      </div>
    </div>
  );
};

export default AddressCard;
