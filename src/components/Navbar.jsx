import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import { AsyncIcon, CartIcon, FavIcon } from './icons/navIcon';
const navigation = [
  { name: 'Product', current: true },
  { name: 'Categories', current: false },
  { name: 'Orders', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <>
      <div className="h-16 w-full"></div>
      <Disclosure
        as="nav"
        className="bg-gray-200 fixed w-full top-0 z-10"
        style={{
          background: 'rgba( 255, 255, 255, 0.20 )',
          backdropFilter: ' blur( 11.5px )',
          boxShadow: '0 2px 10px 0 rgba( 247, 211, 239, 0.37 )',
        }}
      >
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <Link to="/">
                      <AsyncIcon className="hidden lg:block" />
                    </Link>
                    {/*
                        Logo
                    className= */}
                  </div>
                  <div className="hidden lg:flex  sm:flex sm:ml-6">
                    <div className="flex space-x-4 items-center justify-center">
                      {navigation.map((item, idx) => (
                        <Link to={`/${item.name}`} key={idx}>
                          <span
                            key={item.name}
                            className={classNames(
                              'text-black font-medium hover:bg-pink-500 hover:text-white',
                              'px-3 py-2 rounded-md text-lg font-medium'
                            )}
                            // aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center  sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-3">
                  {/* Fav Icon */}
                  <Link
                    to="/Wishlist"
                    className=" p-1 rounded-full text-gray-800 hover:text-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pink-600 focus:ring-white focus:text-pink-500"
                  >
                    <FavIcon />
                  </Link>
                  <Link
                    to="/Cart"
                    className=" p-1 rounded-full text-gray-800 hover:text-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pink-600 focus:ring-white focus:text-pink-500"
                  >
                    {/* Cart Icon */}
                    <CartIcon />
                  </Link>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item, idx) => (
                  <Link to={`/${item.name}`} key={idx}>
                    <span
                      key={item.name}
                      className={classNames(
                        'text-black font-medium bg-gray-200 hover:bg-pink-500 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      // aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
