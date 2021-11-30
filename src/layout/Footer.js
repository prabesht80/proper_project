import React from 'react';
import {
  FaTelegramPlane,
  FaTwitterSquare,
  FaViber,
  FaWeibo,
} from 'react-icons/fa';

const Footer = () => {
  return (
    // footer container
    <div className="">
      <div className="p-3 mb-2 border-b-4 flex flex-col justify-evenly md:flex-row">
        {/* About Us */}
        <div>
          <span className="text-lg font-medium">
            About Us<span className="sm:inline block md:hidden">+</span>
          </span>
          <ul className="mt-3 text-gray-500 hidden md:block">
            <li className="pb-2 hover:text-black cursor-pointer">About</li>
            <li className="pb-2 hover:text-black cursor-pointer">Careers</li>
            <li className="pb-2 hover:text-black cursor-pointer">
              Business Contact
            </li>
            <li className="pb-2 hover:text-black cursor-pointer">Terms</li>
            <li className="pb-2 hover:text-black cursor-pointer">Privacy</li>
            <li className="pb-2 hover:text-black cursor-pointer">Community</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <span className="text-lg font-medium">Service</span>
          <ul className="mt-3 text-gray-500 hidden md:block">
            <li className="pb-2 hover:text-black cursor-pointer">Download</li>
            <li className="pb-2 hover:text-black cursor-pointer">Buy Crypto</li>
            <li className="pb-2 hover:text-black cursor-pointer">
              Insititutional Service
            </li>
            <li className="pb-2 hover:text-black cursor-pointer">
              Listing Application
            </li>
            <li className="pb-2 hover:text-black cursor-pointer">
              Market Data
            </li>
          </ul>
        </div>
        {/* Support */}
        <div>
          <span className="text-lg font-medium">Support</span>
          <ul className="mt-3 text-gray-500 hidden md:block">
            <li className="pb-2 hover:text-black cursor-pointer">
              Give Us Feedback
            </li>
            <li className="pb-2 hover:text-black cursor-pointer">
              Support Center
            </li>
            <li className="pb-2 hover:text-black cursor-pointer">
              Submit a request
            </li>
            <li className="pb-2 hover:text-black cursor-pointer">Fees</li>
            <li className="pb-2 hover:text-black cursor-pointer">
              API Documentation
            </li>
            <li className="pb-2 hover:text-black cursor-pointer">
              Trading Rules
            </li>
          </ul>
        </div>
        {/* Learn */}
        <div>
          <span className="text-lg font-medium">Learn</span>
          <ul className="mt-3 text-gray-500 hidden md:block ">
            <li className="pb-2 hover:text-black cursor-pointer">
              Buy Bitcoin
            </li>
            <li className="pb-2 hover:text-black cursor-pointer">
              Buy Etheruem
            </li>
            <li className="pb-2 hover:text-black cursor-pointer">
              Buy Litecoin
            </li>
            <li className="pb-2 hover:text-black cursor-pointer">
              Buy Dogecoin
            </li>
            <li className="pb-2 hover:text-black cursor-pointer">Buy SHIB</li>
            <li className="pb-2 hover:text-black cursor-pointer">Buy Ripple</li>
            <li className="pb-2 hover:text-black cursor-pointer">
              Buy Bitcoin Cash
            </li>
          </ul>
        </div>
        {/* community */}
        <div>
          <span className="text-lg font-medium">Community</span>
          <div className="mt-3 text-gray-500 flex space-x-4 ">
            <FaTelegramPlane className="h-6 w-5 hover:text-gray-800 cursor-pointer" />
            <FaTwitterSquare className="h-6 w-5 hover:text-gray-800 cursor-pointer" />
            <FaViber className="h-6 w-5 hover:text-gray-800 cursor-pointer" />
            <FaWeibo className="h-6 w-5 hover:text-gray-800 cursor-pointer" />
          </div>
        </div>
      </div>
      {/* crypto @2021 */}
      <div className="mt-2 text-center text-gray-500">CRYPTO @2021</div>
    </div>
  );
};

export default Footer;
