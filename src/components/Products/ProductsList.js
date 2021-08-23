import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../../redux/slices/productSlice';
import Footer from '../Footer/Footer';
import Loading from '../Loading';

import Card from './Card';

const ProductsList = () => {
  const { products, isLoading } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [category, setCategory] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  useEffect(() => {
    const createCategory = () => {
      const set = new Set(products.map((val) => val.category.toLowerCase()));
      setCategoryList([...set]);
    };
    if (!isLoading) {
      createCategory();
    }
  }, [isLoading, products]);

  if (isLoading) return <Loading />;
  return (
    <section className="h-screen">
      <div className="w-11/12 mx-auto mt-10 flex flex-wrap justify-around">
        {categoryList.map((val, idx) => (
          <span
            key={idx}
            className={`px-2 ml-4 mb-2 rounded-lg bg-red-100 inline-block cursor-pointer ${
              category.includes(val) && 'bg-pink-300'
            }`}
            onClick={() => {
              const has = category.includes(val);
              if (has) setCategory((s) => s.filter((item) => item !== val));
              else setCategory((s) => [...s, val]);
            }}
          >
            {val}
          </span>
        ))}
      </div>
      <div className="mx-auto flex flex-wrap w-11/12 justify-center">
        {products
          .filter(
            (item) => category.includes(item.category) || category.length === 0
          )
          .map((val, idx) => {
            return <Card val={val} key={idx} />;
          })}
      </div>
      <Footer/>
    </section>
  );
};

export default ProductsList;
