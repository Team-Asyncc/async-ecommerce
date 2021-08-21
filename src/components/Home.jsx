import React, { useEffect } from 'react';
import Categories from './Categories/Categories';
import { useSelector, useDispatch } from 'react-redux';
import { loadProducts } from '../redux/slices/productSlice';
import AddAddressPage from './AddAddressPage/AddAddressPage';
import ItemsDisplay from './LandingPageItems/LandingPageItems';

// import { getAllProducts, getSpecificProduct } from '../services/products';

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(loadProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(state);
  return (
    <div>
      <header className="App-header">
        <p className="bg-red-300 p-3 rounded">ECOMMERCE WEBSITE</p>
      </header>
      <Categories />
      <ItemsDisplay/>
      <AddAddressPage />
      
      
    </div>
  );
};

export default Home;
