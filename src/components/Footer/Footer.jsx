import React from 'react';
import './Footer.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import waves from './wave.svg'

const Footer = () => {
  return (
    <div className="main-footer flex flex-wrap flex-col justify-center  w-full">
      <img src={waves} alt="waves" className="w-full"  />
      <div className="container flex flex-wrap bg-pink-300 min-w-full ">
        <div className="flex flex-col  items-start mb-5">
          <h1 className="pb-2 text-6xl font-bold">
            <span className="text-pink-500">A</span>sync Store
          </h1>
          <input
            className="py-1 p-2 text-sm bg-white rounded shadow-lg border border-gray-300  mb-3 w-full text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent "
            type="email"
            placeholder="Enter your email"
          />
          <button className=" w-2/4 bg-white text-gray-600 hover:bg-gray-500 hover:text-gray-100 font-semibold py-1 px-1 border border-gray-400 rounded shadow">
            Suscribe
          </button>
        </div>

        <div className="m-5 flex flex-col items-around">
          <h2 className="font-bold text-xl">Contact Us</h2>
          <div className="">
            <li className="list-none">Phone: +1 (0) 000 0000 001</li>
            <li className="list-none">Email: asyncteam@outlook.com</li>
            <li className="list-none">
              Address:1234 Street Name City, AA 99999
            </li>
          </div>
        </div>

        {/* {} */}
        <div className="flex flex-col m-5 justify-center ">
          <p className="yt ">
            <a
              href="https://www.youtube.com/"
              className=" text-gray-900 px-4 py-2 font-semibold  inline-flex items-center space-x-2 rounded"
            >
              <YouTubeIcon fontSize="large" />
            </a>

            <a
              href="https://www.facebook.com/"
              className=" text-gray-900  px-4 py-2 font-semibold inline-flex items-center space-x-2 rounded"
            >
              <FacebookIcon fontSize="large" />
            </a>

            <a
              href="http://www.instagram.com/"
              className="text-gray-900 px-4 py-2 font-semibold  inline-flex items-center space-x-2 rounded"
            >
              <InstagramIcon fontSize="large" />
            </a>

            <a
              href="https://wwww.twitter.com"
              className="text-gray-900 px-4 py-2 font-semibold  inline-flex items-center space-x-2 rounded"
            >
              <TwitterIcon fontSize="large" />
            </a>
          </p>
        </div>
      </div>
      <div className="text-center   bg-pink-300 w-full">
        Copyright © Team Async. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
