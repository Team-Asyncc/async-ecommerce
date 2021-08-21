import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../../redux/slices/productSlice';
import Loading from '../Loading';

import Card from './Card';

const category = ['kids war', 'mes war', 'electronics', 'chill'];

const ProductsList = () => {
  const { products, isLoading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  if (isLoading) return <Loading />;

  return (
    <section className="h-screen">
      <div className="w-5/6 mx-auto mt-10">
        {category.map((val, idx) => (
          <span
            key={idx}
            className="px-2 ml-4 mb-2 rounded-lg bg-red-100 inline-block cursor-pointer"
          >
            {val}
          </span>
        ))}
      </div>
      <div className="mx-auto flex flex-wrap w-5/6">
        {products.map((val, idx) => {
          return <Card val={val} key={idx} />;
        })}
      </div>
    </section>
  );
};

export default ProductsList;
