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
      className="address-form  w-11/12 flex flex-col  px-6 py-10 bg-blue-100 rounded-lg "
      onSubmit={(e) => {
        setIsOpen(false);
        e.preventDefault();
      }}
    >
      <div className="flex flex-col mb-14">
        <input
          type="text"
          required
          placeholder="NAME"
          defaultValue={inputs.name}
          className="mb-5 px-4 py-2 rounded-md focus:outline-none focus:shadow-lg focus:bg-pink-50"
          onChange={(e) => {
            setInputs((s) => ({ ...s, name: e.target.value }));
          }}
        />
        <input
          type="tel"
          required
          defaultValue={inputs.mobileno}
          placeholder="MOBILE NUMBER"
          className="px-4 py-2 rounded-md focus:outline-none focus:shadow-lg focus:bg-pink-50"
          onChange={(e) => {
            setInputs((s) => ({ ...s, mobileno: e.target.value }));
          }}
        />
      </div>
      <input
        type="text"
        required
        defaultValue={inputs.address1}
        placeholder="ADDESS LINE 1"
        className="mb-5 px-4 py-2 rounded-md focus:outline-none focus:shadow-lg focus:bg-pink-50"
        onChange={(e) => {
          setInputs((s) => ({ ...s, address1: e.target.value }));
        }}
      />
      <input
        type="text"
        required
        defaultValue={inputs.address2}
        placeholder="ADRESS LINE 2"
        className="mb-5 px-4 py-2 rounded-md focus:outline-none focus:shadow-lg focus:bg-pink-50"
        onChange={(e) => {
          setInputs((s) => ({ ...s, address2: e.target.value }));
        }}
      />

      <input
        type="text"
        required
        defaultValue={inputs.pincode}
        placeholder="PINCODE"
        className="mb-5 px-4 py-2 rounded-md focus:outline-none focus:shadow-lg focus:bg-pink-50"
        onChange={(e) => {
          setInputs((s) => ({ ...s, pincode: e.target.value }));
        }}
      />
      <div className="flex flex-wrap justify-between">
        <input
          type="text"
          required
          defaultValue={inputs.state}
          placeholder="STATE"
          className="w-5/12 px-4 py-2 rounded-md focus:outline-none focus:shadow-lg focus:bg-pink-50"
          onChange={(e) => {
            setInputs((s) => ({ ...s, state: e.target.value }));
          }}
        />
        <input
          type="text"
          required
          defaultValue={inputs.district}
          placeholder="DISTRICT"
          className="w-5/12 px-4 py-2 rounded-md focus:outline-none focus:shadow-lg focus:bg-pink-50"
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
        className="mt-4 border-pink-300 border-4 p-1 tracking-widest text-3xl font-semibold text-pink-500"
      >
        ADD ADDRESS
      </button>
    </form>
  );
};

export default AddressForm;
