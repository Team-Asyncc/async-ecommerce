import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllorders } from '../../redux/slices/orderSlice';
import { loadOrders } from '../../services/orders';
import EmptyOrder from './EmptyOrder';
import OrderItem from './OrderItem';

const Orderpage = () => {
  const dispatch = useDispatch();
  const [showAllOrders, setShowAllOrders] = useState(false);
  useEffect(() => {
    dispatch(getAllorders(loadOrders()));
    // setShowAllOrders(false);
  }, [dispatch]);
  const orders = useSelector((state) => state.orders);
  return (
    <>
      {orders.length === 0 ? (
        <EmptyOrder />
      ) : (
        <div className="flex justify-center pt-3 pb-3 min-h-screen">
          <div className="min-h-screen flex flex-col items-center w-4/5 space-y-5 sm:w-3/5">
            <div className="self-start font-medium text-xl">
              Showing All Orders
            </div>
            <div className="w-full p-2 bg-gray-200 space-y-2">
              {showAllOrders
                ? orders.map((item, idx) => {
                    return <OrderItem item={item} key={idx} />;
                  })
                : orders.slice(0, 3).map((item, idx) => {
                    return <OrderItem item={item} key={idx} idx={idx} />;
                  })}
            </div>
            {showAllOrders ? null : (
              <button
                className="w-11/12 rounded border-pink-300 border-4 p-1 text-xl font-semibold text-pink-500 hover:text-gray-100 hover:bg-pink-500 hover:border-pink-500 "
                style={{ padding: '0.3rem 0' }}
                onClick={() => setShowAllOrders((s) => true)}
              >
                SHOW MY OLDER ORDERS
              </button>
            )}
            <div className="text-lg font-normal text-gray-700 text-center">
              Showing 1-1 of 1
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Orderpage;
