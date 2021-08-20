import wishlist from "../assets/wishlist.png";
import deliveryIcon from "../assets/delivery.png";
import { useState, useEffect } from "react";
import couponIcon from "../assets/coupon.png"
import bagIcon from "../assets/bag.png";
import "./cart.scss";
export default function Cart() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const selectedItem = [];
  let totalPrice = 0;
  return (
    <div className="cart-container">
      <div className="cart-nav">My Bag</div>
      <div>
        {data.length > 0 ? (
          <div>
            {selectedItem.length > 0 ? (
              <div>
                <div className="CAO">
                  <span>Cart...</span>
                  <span>Address...</span>
                  <span>Order...</span>
                </div>
                <div className="off-info">
                  Apply coupon <span className="off-highlight">DEVSNEST10</span>{" "}
                  to avail flat <span className="off-highlight">10%</span> off
                  on your first order{" "}
                </div>
                <div className='devider'>
                <section className="cart-item-field">
                  {selectedItem.map((item, idx) => {
                    totalPrice += data[item].price * 69;
                    return (
                      <div className="cart-item">
                        <div className="cart-item-image-container">
                          <img
                            className="cart-item-image"
                            src={data[item].image}
                          />
                        </div>
                        <div>
                        <div className="delivery-info">
                            <img src={deliveryIcon} alt='Delivery' className="delivery-icon"/>
                            <div>Delivery expected 30 august !<span className="free-tag">FREE</span></div>
                          </div>
                          <div className="cart-item-title">
                            {data[item].title}
                          </div>
                          
                          <div className="cart-item-price">
                            ₹ {parseInt(data[item].price * 69)}
                            <span className="actual-price">
                              {parseInt(data[item].price * 79)}
                            </span>
                            <div>Quantity : 1</div>
                            <div className="wishlist-container">
                              <img
                                className="wishlist-icon"
                                src={wishlist}
                                als="wishlist"
                              />
                              <span>Save to wishlist</span>
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
                    <img src={couponIcon} alt="coupun" className="coupon-icon" />
                    <span >check for coupon</span>
                    <input placeholder='apply' className='coupon-input' ></input>
                  </div>
                  <div className="cart-curr-status">
                    <div className="shipping-info">Congratualtions !! your order is eligible for  
                      <span className='free-tag'> FREE </span> shipping!
                    </div>
                    <div className="bag-total">
                      <span>Bag total</span><span>{totalPrice}</span>
                    </div>
                    <div className="shipping-charge">
                      <span>Shipping charge</span><span className="free-tag">FREE</span>
                    </div>
                    <div className="bag-subtotal">
                      <span>Bag subtotal</span><span>{totalPrice}₹</span>
                    </div>
                    <div className="product-discount">
                      <span >Product Discount(s)</span><span>-{parseInt(totalPrice/10)}.00₹</span>
                    </div>
                    <div className="save-money">
                      You will save {parseInt(totalPrice/10)}₹ on this order
                    </div>

                  </div>
                </section>
                </div>

              </div>
            ) : (
              <div>
                <div className="cart-item-container">
                  <img src={bagIcon} alt="EmptyBag" className="empty-bag" />
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
