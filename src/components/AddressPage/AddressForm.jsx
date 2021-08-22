import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addAddress,
  setSelected,
  updateAddress,
} from '../../redux/slices/addressSlice';

const AddressForm = ({ setIsOpen }) => {
  const dispatch = useDispatch();
  const selectedAddress = useSelector(
    (state) => state.addressData.selectedAddress
  );
  const [inputs, setInputs] = useState(
    selectedAddress.length !== 0
      ? {
          name: selectedAddress.val.name,
          mobileno: selectedAddress.val.mobileno,
          address1: selectedAddress.val.address1,
          address2: selectedAddress.val.address2,
          pincode: selectedAddress.val.pincode,
          state: selectedAddress.val.state,
          district: selectedAddress.val.district,
        }
      : {
          name: '',
          mobileno: '',
          address1: '',
          address2: '',
          pincode: '',
          state: '',
          district: '',
        }
  );
  return (
    <form
      className="address-form w-11/12  m-auto flex flex-col  px-6 py-10 bg-red-100 shadow-xl rounded "
      onSubmit={(e) => {
        setIsOpen(false);
        e.preventDefault();
      }}
    >
      <div className="flex flex-col mb-14 ">
        <input
          type="text"
          required
          placeholder="Name"
          defaultValue={inputs.name}
          
          className="mb-5 px-4 py-2  w-full h-12 focus:outline-none rounded shadow-md bg-white"
          onChange={(e) => {
            setInputs((s) => ({ ...s, name: e.target.value }));
          }}
        />
        <input
          type="tel"
          required
          defaultValue={inputs.mobileno}
          placeholder="Mobile Number"
          className="px-4 py-2 w-full h-12 focus:outline-none rounded shadow-md bg-white"
          onChange={(e) => {
            setInputs((s) => ({ ...s, mobileno: e.target.value }));
          }}
        />
      </div>
      <input
        type="text"
        required
        defaultValue={inputs.address1}
        placeholder="Address Line 1"
        className="mb-5 px-4 py-2 w-full h-12 focus:outline-none rounded shadow-md bg-white"
        onChange={(e) => {
          setInputs((s) => ({ ...s, address1: e.target.value }));
        }}
      />
      <input
        type="text"
        required
        defaultValue={inputs.address2}
        placeholder="Address Line 2"
        className="mb-5 px-4 py-2 w-full h-12 focus:outline-none rounded shadow-md bg-white"
        onChange={(e) => {
          setInputs((s) => ({ ...s, address2: e.target.value }));
        }}
      />

      <input
        type="text"
        required
        defaultValue={inputs.pincode}
        placeholder="Pincode"
        className="mb-5 px-4 py-2 w-full h-12 focus:outline-none rounded shadow-md bg-white"
        onChange={(e) => {
          setInputs((s) => ({ ...s, pincode: e.target.value }));
        }}
      />
      <div className="flex flex-wrap justify-between">
        <input
          type="text"
          required
          defaultValue={inputs.state}
          placeholder="State"
          className="w-5/12 px-4 py-2  h-12 focus:outline-none rounded shadow-md bg-white"
          onChange={(e) => {
            setInputs((s) => ({ ...s, state: e.target.value }));
          }}
        />
        <input
          type="text"
          required
          defaultValue={inputs.district}
          placeholder="District"
          className="w-5/12 px-4 py-2 h-12 focus:outline-none rounded shadow-md bg-white"
          onChange={(e) => {
            setInputs((s) => ({ ...s, district: e.target.value }));
          }}
        />
      </div>
      <button
        onClick={() => {
          const data = {
            name: inputs.name,
            mobileno: inputs.mobileno,
            address1: inputs.address1,
            address2: inputs.address2,
            pincode: inputs.pincode,
            district: inputs.district,
            state: inputs.state,
          };
          selectedAddress.length !== 0
            ? dispatch(updateAddress({ id: selectedAddress.id, val: data }))
            : dispatch(addAddress(data));
          // setIsOpen(false);
          dispatch(setSelected([]));
        }}
        
        className="mt-4 h-12 bg-pink-400 hover:bg-pink-600 text-white font-bold py-2 px-4  rounded"
      >
        Add Address
      </button>
    </form>
  );
};

export default AddressForm;
