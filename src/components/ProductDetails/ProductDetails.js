import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../redux/slices/productSlice';
import Loading from '../Loading';
import { Star } from '@material-ui/icons';
import toast from 'react-hot-toast';

import { addItem } from '../../redux/slices/Cartslice';
import { addToWhishlist } from '../../redux/slices/whishlistSlice';

const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
const has_sizes = [`kids' wear`, `women clothing`, 'men clothing', 'footware'];

const ProductDetails = () => {
  const [size, setSize] = useState(null);
  const { currentProduct } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { id } = useParams();

  const cartItems = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [id, dispatch]);

  if (!currentProduct) {
    return <Loading />;
  }

  console.log(currentProduct.category);

  return (
    <div className="w-4/5 mx-auto mt-11 flex">
      <div className="w-2/4 mr-10">
        <img src={currentProduct.img} alt="dfdf" />
      </div>
      <div>
        <div className="w-4/5 border-b pb-4">
          <h2 className="text-2xl font-semibold">{currentProduct.title}</h2>
          <p className="font-normal text-gray-500">
            {currentProduct.description}
          </p>
          <span className="border px-3 py-1 mt-4 inline-flex items-center">
            <span className="text-lg mr-2">{currentProduct.rating}</span>
            <Star className="text-pink-500 text-lg mr-2" />
            <span className="border-l-2 pl-2 text-gray-500">520 ratings</span>
          </span>
        </div>
        <div className="w-4/5 mt-4 flex">
          <h1 className="text-xl mr-3">₹ {currentProduct.price}</h1>
          <span className="text-lg line-through text-gray-500">
            ₹{2 * currentProduct.price}{' '}
          </span>
          <span className="text-lg text-pink-500 ml-3"> (50% OFF) </span>
        </div>

        <div className="mt-4 w-4/5">
          {has_sizes.includes(currentProduct.category) && (
            <div>
              <h1 className="text-xl">SELECT SIZE</h1>
              <div className="flex mt-4">
                {sizes.map((val, idx) => (
                  <div
                    key={idx}
                    className="border mr-2 h-12 w-12 flex justify-center items-center cursor-pointer hover:border-pink-500 font-semibold"
                    onClick={() => setSize(val)}
                    style={{
                      color: val === size ? 'rgb(231,84,128)' : '#000',
                      borderRadius: '50%',
                    }}
                  >
                    {val}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-4">
            <button
              className="bg-pink-500 py-2 px-4 text-lg text-white font-medium rounded mr-2 hover:bg-pink-600"
              onClick={() => {
                let have = cartItems.some(
                  (val) => val.id === currentProduct.id
                );
                if (have) {
                  toast.error('Item already in cart', {
                    icon: '🙄',
                  });

                  return;
                }

                dispatch(addItem({ ...currentProduct, size }));
                toast.success('Item Added to cart', {
                  icon: '😍',
                });
              }}
            >
              Add to Cart
            </button>
            <button
              className="py-2 px-4 text-md border-2 rounded hover:border-pink-400"
              onClick={() => {
                dispatch(addToWhishlist(currentProduct));
                toast.success('Item added to whislist', {
                  icon: '🚀',
                });
              }}
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
