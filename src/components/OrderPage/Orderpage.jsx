import React from 'react';
import EmptyOrder from './EmptyOrder';
import OrderItem from './OrderItem';
const item = {
  id: 1,
  title: 'Full Sleeves Tee',
  description:
    '18 to 24 Months, Navy Blue round neck tee with back button and sequinned rainbow detailing',
  price: 400,
  img: 'https://cdn.fcglcdn.com/brainbees/images/products/438x531/8615268a.webp',
  type: ['top', 'shirt', 'kids', 'girls', 'boys'],
  category: "kids' wear",
  inCart: false,
  quantity: 0,
  rating: 3,
};
const Orderpage = () => {
  const empty = false;
  return (
    <>
      {empty ? (
        <EmptyOrder />
      ) : (
        <div className="flex justify-center pt-3">
          <div className="h-screen flex flex-col items-center w-3/5 space-y-2">
            <div className="self-start font-medium text-xl">
              Showing All Order
            </div>
            <div className="w-full p-2 bg-gray-200">
              <OrderItem item={item} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Orderpage;
