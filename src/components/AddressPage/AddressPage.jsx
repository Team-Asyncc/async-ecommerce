import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddressForm from './AddressForm';
import CloseIcon from '@material-ui/icons/Close';
import Modal from 'react-modal';
import { setAllAddress, setSelected } from '../../redux/slices/addressSlice';
import { Link } from 'react-router-dom';
import SelectAddress from './SelectAddress';
import { loadAddresses } from '../../services/addresses';
import { addOrder } from '../../redux/slices/orderSlice';
import { clearCart } from '../../redux/slices/Cartslice';
import toast from 'react-hot-toast';


const customStyles = {
  content: {
    top: '55%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: "20px ",
    border:"none",
    width: "100vw",
    // backgroundColor: "rgba(0,0,0,0.3)",
    background : 'linear-gradient(282.39deg , #e3f3ff 9.07% , #f7e7ef 81% )',
    
    
    
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
  const { storedAddresses } = useSelector((s) => s.addressData);
  console.log('check this', storedAddresses);
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
      className="flex  justify-center w-full "
      style={{ height: 'calc(100vh - 64px)' }}
    >
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal} className="absolute ml-2 mt-2">
          <CloseIcon />
        </button>
        <AddressForm setIsOpen={setIsOpen}/>
      </Modal>

      <div className=" w-10/12">
        <div className="text-2xl w-6/12 font-bold mt-3 px-12">
          Select Delivery Address
        </div>

        <div className="flex flex-col justify-center p-3 h-5/6 sm:flex-row">
          <div className="w-10/12 h-auto px-4 space-y-6 sm:w-7/12">
            {storedAddresses.length === 0 ? (
              <div className="h-24 bg-white rounded-lg text-xl font-normal p-6">
                Nothing here...
              </div>
            ) : (
              <div className="h-5/6 p-3 rounded-lg overflow-y-scroll space-y-2 custom-scroll">
                <SelectAddress
                  availableAddress={storedAddresses}
                  openModal={openModal}
                />
              </div>
            )}
            <div className="w-full flex justify-center">
              <button
                onClick={() => {
                  dispatch(setSelected([]));

                  openModal();
                }}
                className="w-2/5 mt-6 rounded border-pink-300 border-4 p-1 text-xl font-semibold text-pink-500 hover:text-gray-100 hover:bg-pink-500 hover:border-pink-500"
              >
                ADD NEW ADDRESS
              </button>
            </div>
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
                <span className="text-pink-500">
                  -₹ {(totalPrice / 10).toFixed(2)}
                </span>
              </div>
              <div className="font-normal  flex justify-between ">
                <span className="inline-block"> COUPON DISCOUNT:</span>0₹
              </div>
              <div className="font-normal  flex justify-between ">
                <span className="inline-block">Convenience Fee:</span>{' '}
                <span className="text-pink-500">FREE</span>
              </div>
              <div className="font-medium  flex justify-between border-t-2 border-gray-400 pt-5">
                <span className="inline-block">TOTAL AMOUNT:</span>{' '}
                {(totalPrice - totalPrice / 10).toFixed(2)}₹
              </div>
              {storedAddresses.length === 0 ? (
                <button
                  onClick={() => {
                    dispatch(setSelected([]));

                    openModal();
                  }}
                  className="w-full mt-6 rounded p-1 text-2xl font-semibold bg-pink-500 text-gray-100 hover:bg-pink-600 hover:shadow-md"
                >
                  ADD ADDRESS
                </button>
              ) : (
                <Link to="/ordersuccessful" className="flex justify-center">
                  <button
                    className="w-11/12 mt-6 mb-4 rounded p-1 text-2xl font-semibold bg-pink-500 text-gray-100 hover:bg-pink-600 hover:shadow-md"
                    onClick={() => {
                      const cartWithDate = cart.map((item) => {
                        const date = new Date();
                        const dateData = date.toUTCString().slice(0, 17);
                        return { ...item, date: dateData };
                      });
                      toast('Order placed successfully', { icon: '🥰' });
                      dispatch(addOrder(cartWithDate));
                      dispatch(clearCart());
                    }}
                  >
                    PLACE ORDER
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressPage;
