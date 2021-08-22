import deliveryIcon from '../assets/delivery.png';
import couponIcon from '../assets/coupon.png';
import bagIcon from '../assets/uempty_cart.svg';
import { Link } from 'react-router-dom';
import { removeItem, incItem, decItem } from '../redux/slices/Cartslice';
import delIcon from '../assets/delete.png';
import { useDispatch, useSelector } from 'react-redux';
import './cart.scss';
export default function Cart() {
  const dispatch = useDispatch();
  const selectedItem = useSelector((state) => state.cart);
  let totalPrice = 0;
  return (
    <div className="w-screen bg-white-100 cart-main-container">
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
                      totalPrice += item.price * (item.quantity + 1);
                      return (
                        <div className="cart-item" key={idx}>
                          <div className="cart-item-image-container">
                            <img
                              className="cart-item-image"
                              src={item.img}
                              alt="cartImage"
                            />
                          </div>

                          <div>
                            <div className="price-del">
                              <div className="cart-item-title">
                                {item.title}
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
                            </div>
                            <div className="wishlist-container">
                              {item.description.slice(0, 75)}
                            </div>
                            <div className="cart-item-price">
                              <span className="discounted-price">
                                ₹ {item.price * (item.quantity + 1).toFixed(2)}
                              </span>

                              <span className="actual-price">
                                {(
                                  (item.price / 10 + item.price) *
                                  (item.quantity + 1)
                                ).toFixed(2)}
                              </span>

                              <span className="off-span"> (10% off) </span>

                              <div className="qnt-wl">
                                <span>
                                  <span>
                                    QUANTITY :{' '}
                                    <button
                                      className={
                                        item.quantity + 1 === 5
                                          ? 'max inc-btn'
                                          : 'inc-btn'
                                      }
                                      onClick={() => {
                                        dispatch(incItem(item.id));
                                      }}
                                    >
                                      +
                                    </button>
                                    {item.quantity + 1}
                                    <button
                                      className={
                                        item.quantity === 0
                                          ? 'min dec-btn'
                                          : 'dec-btn'
                                      }
                                      onClick={() => dispatch(decItem(item.id))}
                                    >
                                      -
                                    </button>
                                  </span>
                                </span>
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
                    <div className="continue-shoppings">
                      <Link to="/products" style={{ textDecoration: 'none' }}>
                        Continue shopping
                      </Link>
                    </div>
                  </section>
                  <section className="cart-info">
                    <div className="coupon-container rounded-lg">
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

                      <div className="bag-subtotal">
                        <span>Bag subtotal</span>
                        <span>{totalPrice.toFixed(2)}₹</span>
                      </div>
                      <div className="shipping-charge">
                        <span>Shipping charge</span>
                        <span className="free-tag">FREE</span>
                      </div>
                      <div className="product-discount">
                        <span>Discount MRP</span>
                        <span className="free-tag">
                          -{(totalPrice / 10).toFixed(2)}₹
                        </span>
                      </div>
                      <div className="bag-total">
                        <span>Total MRP</span>
                        <span>{totalPrice.toFixed(2)}</span>
                      </div>
                      <div className="save-money">
                        You will save {(totalPrice / 10).toFixed(2)}₹ on this
                        order
                      </div>
                      <button className="text-white rounded-lg bg-pink-600 h-10  text-center mt-4 text-xl place-order">
                        <Link to="/address" style={{ textDecoration: 'none' }}>
                          Place your order
                        </Link>
                      </button>
                    </div>
                  </section>
                </div>
              </div>
            ) : (
              <div>
                <div className="cart-item-container flex justify-around items-around flex-col ">
                  <img src={bagIcon} alt="EmptyBag" className="h-80 w-auto " />
                  <div className="text-2xl">
                    Your bag is empty! Let’s fill it up shall we?
                  </div>
                  <div className="space-x-4">
                    <button className="h-14  bg-red-500 rounded-3xl text-center text-xl font-medium text-white border-2 border-gray-300 px-4 hover:text-red-500 hover:bg-white hover:border-red-500 ">
                      <Link to="/product" style={{ textDecoration: 'none' }}>
                        Continue shopping
                      </Link>
                    </button>
                    <button className="h-14  bg-white rounded-3xl text-center text-xl font-medium text-pink-500 border-2 border-pink-500 px-4 hover:text-white hover:bg-pink-400 hover:border-gray-400 ">
                      <Link to="/Wishlist" style={{ textDecoration: 'none' }}>
                        View saved products
                      </Link>
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
