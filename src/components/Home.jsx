import React, { useEffect } from 'react';
import Categories from './Categories/Categories';
import { useDispatch } from 'react-redux';
import { loadProducts } from '../redux/slices/productSlice';
import ItemsDisplay from './LandingPageItems/LandingPageItems';
import Footer from './Footer/Footer';
import Banner from './LandingPageItems/Banner';


const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
    
      <Banner />
      <Categories />
      <ItemsDisplay />
      <Footer />
    </div>
  );
};

export default Home;
