import wishlist from '../assets/wishlist.png';
import deliveryIcon from '../assets/delivery.png';
import { useState, useEffect } from 'react';
import couponIcon from '../assets/coupon.png';
import { loadProducts } from '../redux/slices/productSlice';
import bagIcon from '../assets/bag.png';
import { removeItem, incItem, decItem } from '../redux/slices/Cartslice';
import delIcon from '../assets/delete.png';
import { useDispatch, useSelector } from 'react-redux';
import './cart.scss';
export default function Cart() {
  const dispatch = useDispatch();
  const selectedItem = useSelector((state) => state.cart);
  console.log(selectedItem);
  let totalPrice = 0;
  return (
    <div className="w-screen bg-white-500">
      <div className="cart-nav">My Bag</div>
      <div>
        {1 > 0 ? (
          <div>
            {selectedItem.length > 0 ? (
              <div>
                <div className="off-info">
                  Apply coupon <span className="off-highlight">DEVSNEST10</span>{' '}
                  to avail flat <span className="off-highlight">10%</span> off
                  on your first order{' '}
                </div>
                <div className="devider">
                  <section className="cart-item-field">
                    {selectedItem.map((item, idx) => {
                      totalPrice += item.price;
                      return (
                        <div className="cart-item" key={idx}>
                          <div className="cart-item-image-container">
                            <img
                              className="cart-item-image"
                              src={item.img}
                              alt="cartImage"
                            />
                          </div>
                          <img
                            className="del-icon"
                            src={delIcon}
                            alt="del-Icon"
                            onClick={() => {
                              dispatch(removeItem(item.id));
                              console.log(item.id);
                            }}
                          />
                          <div className>
                            <div className="cart-item-title">{item.title}</div>

                            <div className="cart-item-price">
                              <span className="discounted-price">
                                {' '}
                                ₹ {item.price.toFixed(2)}
                              </span>

                              <span className="actual-price">
                                {(item.price / 10 + item.price).toFixed(2)}
                              </span>

                              <span className="off-span"> (10% off) </span>
                              <div className="qnt-wl">
                                <span>
                                  <span>
                                    Quantity : <button>+</button>
                                    {item.quantity}
                                    <button>-</button>
                                  </span>
                                </span>
                                <div className="wishlist-container">
                                  <img
                                    className="wishlist-icon"
                                    src={wishlist}
                                    alt="wishlist"
                                  />
                                </div>
                              </div>
                              <div className="delivery-info">
                                <img
                                  src={deliveryIcon}
                                  alt="Delivery"
                                  className="delivery-icon"
                                />
                                <div>
                                  Delivery expected 30 august !
                                  <span className="free-tag">FREE</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    <div className="continue-shoppings">Continue shopping</div>
                  </section>
                  <section className="cart-info">
                    <div className="coupon-container">
                      <img
                        src={couponIcon}
                        alt="coupun"
                        className="coupon-icon"
                      />
                      <span>Apply for coupon</span>
                      <input
                        placeholder="apply"
                        className="coupon-input"
                      ></input>
                    </div>
                    <div className="cart-curr-status">
                      <div className="shipping-info">
                        Congratualtions !! your order is eligible for
                        <span className="free-tag"> FREE </span> shipping!
                      </div>
                      <div className="bag-total">
                        <span>Bag total</span>
                        <span>{totalPrice.toFixed(2)}</span>
                      </div>
                      <div className="shipping-charge">
                        <span>Shipping charge</span>
                        <span className="free-tag">FREE</span>
                      </div>
                      <div className="bag-subtotal">
                        <span>Bag subtotal</span>
                        <span>{totalPrice.toFixed(2)}₹</span>
                      </div>
                      <div className="product-discount">
                        <span>Product Discount(s)</span>
                        <span>-{(totalPrice / 10).toFixed(2)}₹</span>
                      </div>
                      <div className="save-money">
                        You will save {(totalPrice / 10).toFixed(2)}₹ on this
                        order
                      </div>
                      <button className="text-white rounded-lg bg-pink-600 h-10 w-96 text-center margin text-xl">
                        Place your order
                      </button>
                    </div>
                  </section>
                </div>
              </div>
            ) : (
              <div>
                <div className="cart-item-container flex justify-around items-center w-auto flex-col ">
                  <img src={bagIcon} alt="EmptyBag" className="inline-block" />
                  <div className="cart-empty-msg">
                    Your bag is empty! Let’s fill it up shall we?
                  </div>
                  <div className="cart-btn">
                    <button className="shopping-btn">Continue shopping</button>
                    <button className="saved-product-btn">
                      View saved Products
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
