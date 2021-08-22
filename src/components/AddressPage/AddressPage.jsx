import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddressForm from './AddressForm';
import CloseIcon from '@material-ui/icons/Close';
import Modal from 'react-modal';
import { setAllAddress, setSelected } from '../../redux/slices/addressSlice';
import { Link } from 'react-router-dom';
import SelectAddress from './SelectAddress';
import { loadAddresses } from '../../services/addresses';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById('root'));

const AddressPage = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }
  const availableAddress = useSelector((s) => s.addressData.storedAddresses);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const numberOfCartItems = cart.length;
  let totalPrice = 0;
  useEffect(() => {
    dispatch(setAllAddress(loadAddresses()));
  }, [dispatch]);
  cart.forEach((item, idx) => {
    totalPrice += item.price * (item.quantity + 1);
  });
  return (
    <div
      className="flex  justify-center w-full"
      style={{ height: 'calc(100vh - 64px)' }}
    >
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal} className="">
          <CloseIcon />
        </button>
        <AddressForm setIsOpen={setIsOpen} />
      </Modal>

      <div className=" w-10/12">
        <div className="text-2xl w-6/12 font-bold mt-3 px-12">
          Select Delivery Address
        </div>

        <div className="flex flex-col justify-center p-3 h-5/6 sm:flex-row">
          <div className="w-10/12 h-auto px-4 space-y-6 sm:w-7/12">
            {availableAddress.length === 0 ? (
              <div className="h-24 bg-white rounded-lg text-xl font-normal p-6">
                Nothing here...
              </div>
            ) : (
              <div className="h-5/6 p-3 rounded-lg overflow-y-scroll space-y-2 custom-scroll">
                <SelectAddress
                  availableAddress={availableAddress}
                  openModal={openModal}
                />
              </div>
            )}
            <button
              onClick={() => {
                dispatch(setSelected([]));

                openModal();
              }}
              className="ml-3 font-bold  bg-gradient-to-r from-pink-200 to-blue-200 p-2 rounded-md text-md px-5 border-2 border-gray-700 hover:from-blue-200 hover:to-pink-200 transition-all"
            >
              ADD NEW ADDRESS
            </button>
          </div>
          <div className="space-y-3 p-2">
            <div className="bg-white  px-6 py-3 w-96 text-base rounded-lg flex flex-col gap-2">
              <div className=" font-bold text-sm text-gray-700">
                PRICE DETAILS ({`${numberOfCartItems} Items`})
              </div>
              <div className="font-normal  flex justify-between ">
                <span className="inline-block">TOTAL MRP:</span>
                {` ${totalPrice.toFixed(2)}₹`}
              </div>
              <div className="font-normal  flex justify-between ">
                <span className="inline-block"> DISCOUNT ON MRP:</span>
                <span className="text-green-400">
                  -₹ {(totalPrice / 10).toFixed(2)}
                </span>
              </div>
              <div className="font-normal  flex justify-between ">
                <span className="inline-block"> COUPON DISCOUNT:</span>0₹
              </div>
              <div className="font-normal  flex justify-between ">
                <span className="inline-block">Convenience Fee:</span>{' '}
                <span className="text-green-400">FREE</span>
              </div>
              <div className="font-medium  flex justify-between border-t-2 border-gray-400 pt-5">
                <span className="inline-block">TOTAL AMOUNT:</span>{' '}
                {(totalPrice - totalPrice / 10).toFixed(2)}₹
              </div>
              <Link to="/ordersuccessful">
                <button className="w-full text-pink-600 bg-white rounded p-3 border-pink-500 border-2 ">
                  ADD TO ORDER
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressPage;
