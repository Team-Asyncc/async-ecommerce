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
    <form style={ { boxShadow: "0 5px 16px rgba(0,0,0,0.2)" }}
      className="address-form w-4/12   m-auto flex flex-col  px-6 py-10 bg-transparent shadow rounded  "
      onSubmit={(e) => {
        setIsOpen(false);
        e.preventDefault();
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
    >
      <div className="flex flex-col mb-14 ">
        <input
          type="text"
          required
          placeholder="Name"
          defaultValue={inputs.name}
          
          className="mb-5 px-4 py-2 w-full h-12 bg-white text-pink-500 outline-none text-xl rounded shadow"
          onChange={(e) => {
            setInputs((s) => ({ ...s, name: e.target.value }));
          }}
        />
        <input
          type="tel"
          required
          defaultValue={inputs.mobileno}
          placeholder="Mobile Number"
          className="px-4 py-2  w-full h-12 bg-white text-pink-500 outline-none text-xl rounded shadow"
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
        className="mb-5 px-4 py-2  w-full h-12 bg-white text-pink-500 outline-none text-xl rounded shadow"
        onChange={(e) => {
          setInputs((s) => ({ ...s, address1: e.target.value }));
        }}
      />
      <input
        type="text"
        required
        defaultValue={inputs.address2}
        placeholder="Address Line 2"
        className="mb-5 px-4 py-2  w-full h-12 bg-white text-pink-500 outline-none text-xl rounded shadow"
        onChange={(e) => {
          setInputs((s) => ({ ...s, address2: e.target.value }));
        }}
      />

      <input
        type="text"
        required
        defaultValue={inputs.pincode}
        placeholder="Pincode"
        className="mb-5 px-4 py-2 w-full h-12 bg-white text-pink-500 outline-none text-xl rounded shadow"
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
          className="w-5/12 px-4 py-2   h-12 bg-white text-pink-500 outline-none text-xl rounded shadow"
          onChange={(e) => {
            setInputs((s) => ({ ...s, state: e.target.value }));
          }}
        />
        <input
          type="text"
          required
          defaultValue={inputs.district}
          placeholder="District"
          className="w-5/12 px-4 py-2  h-12 bg-white text-pink-500 outline-none text-xl rounded shadow"
          onChange={(e) => {
            setInputs((s) => ({ ...s, district: e.target.value }));
          }}
        />
      </div>
      <button
        onClick={() => {}}
        className=" h-12  mt-6 rounded border-pink-300 border-4 p-1 text-xl font-semibold text-pink-500 hover:text-gray-100 hover:bg-pink-500 hover:border-pink-500 "   
      >
        ADD ADDRESS
      </button>
    </form>
  );
};

export default AddressForm;
