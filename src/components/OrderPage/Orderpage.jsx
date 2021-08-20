import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllorders } from '../../redux/slices/orderSlice';
import { loadOrders } from '../../services/orders';
import EmptyOrder from './EmptyOrder';
import OrderItem from './OrderItem';

const Orderpage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllorders(loadOrders()));
  }, [dispatch]);
  const orders = useSelector((state) => state.orders);
  console.log(orders);
  return (
    <>
      {orders.length === 0 ? (
        <EmptyOrder />
      ) : (
        <div className="flex justify-center pt-3">
          <div className="h-screen flex flex-col items-center w-3/5 space-y-2">
            <div className="self-start font-medium text-xl">
              Showing All Order
            </div>
            <div className="w-full p-2 bg-gray-200">
              {orders.map((item, idx) => {
                return <OrderItem item={item} key={idx} />;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Orderpage;
