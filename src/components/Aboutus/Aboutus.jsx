import React from 'react';
import good from './qual.svg';
import bike from './bike.svg';
import review from './rating.svg';
import onmywad from './delivered.svg';
import Footer from '../Footer/Footer';
import profile from './undraw_profile_pic_ic5t.svg';

const Aboutus = () => {
  return (
    <>
      <section className="text-gray-900 body-font pt-8">
        <h1 className="text-4xl text-center ">Our Story</h1>
        <div className="container px-5 py-4 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <p className="leading-relaxed text-lg">
              Providing our customers with a sophisticated ecommerce retail
              shopping experience. Our products coupled with a relaxed and
              gourmet atmosphere appeals to a wide variety of customers. With
              top-rated selections in fine quality clothing products, cosmetic
              products,and other accessories, Async Store is committed to
              providing the best merchandise selection at the lowest possible
              prices.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-8 mb-6"></span>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                2.7K
              </h2>
              <p className="leading-relaxed">Visitors</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                1.8K
              </h2>
              <p className="leading-relaxed">Subscribes</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                150
              </h2>
              <p className="leading-relaxed">Orders</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                500
              </h2>
              <p className="leading-relaxed">Products</p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font flex justify-center align-middle">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap justify-center">
            <div className=" xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <div className="w-full">
                <img src={good} alt="flame" />
              </div>

              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Made to Create Good
              </h2>
              <p className="leading-relaxed text-base mb-4">
                We design outdoor products to help you create good moments that
                become lasting memories.
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <div className="w-full ">
                <img src={onmywad} height="5" alt="bus" />
              </div>
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Free Shipping & Returns
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Free shipping and returns on all orders in India.
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <div className="w-full ">
                <img src={review} height={5000} alt="star" />
              </div>

              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                200+ 5 Star Reviews
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Ingenious, quality products designed to last for a long time.
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <div className="w-full ">
                <img src={bike} height={5000} alt="flame" />
              </div>
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                We Deliver Happiness
              </h2>
              <p className="leading-relaxed text-base mb-4">
                We design outdoor products to help you create good moments that
                become lasting memories.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* testimonials */}
      <section className="text-gray-600 body-font">
        <h1 className="text-4xl font-medium title-font text-gray-900 mb-2 text-center">
          Testimonials
        </h1>
        <div className="container px-5 py-14 mx-auto ">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-200 p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-6">
                  I bought for a TShirt for my small sister.Overall design &
                  colours are attractive. Value for money.
                </p>
                <span className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={profile}
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      Swetabh Singh
                    </span>
                    <span className="text-gray-500 text-sm">Customer</span>
                  </span>
                </span>
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-200 p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-6">
                  The jewellery products are very beautiful and afforable.
                </p>
                <span className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={profile}
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      Mohit Singh
                    </span>
                    <span className="text-gray-500 text-sm">Customer</span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Aboutus;
