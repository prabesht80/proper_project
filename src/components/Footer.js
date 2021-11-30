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
            About Us<span className="flex md:hidden">+</span>
          </span>
          <ul className="mt-3 text-gray-500 hidden md:block">
            <li>About</li>
            <li>Careers</li>
            <li>Business Contact</li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Community</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <span className="text-lg font-medium">Service</span>
          <ul className="mt-3 text-gray-500 hidden md:block">
            <li>Download</li>
            <li>Buy Crypto</li>
            <li>Insititutional Service</li>
            <li>Listing Application</li>
            <li>Market Data</li>
          </ul>
        </div>
        {/* Support */}
        <div>
          <span className="text-lg font-medium">Support</span>
          <ul className="mt-3 text-gray-500 hidden md:block">
            <li>Give Us Feedback</li>
            <li>Support Center</li>
            <li>Submit a request</li>
            <li>Fees</li>
            <li>API Documentation</li>
            <li>Trading Rules</li>
          </ul>
        </div>
        {/* Learn */}
        <div>
          <span className="text-lg font-medium">Learn</span>
          <ul className="mt-3 text-gray-500 hidden md:block">
            <li>Buy Bitcoin</li>
            <li>Buy Etheruem</li>
            <li>Buy Litecoin</li>
            <li>Buy Dogecoin</li>
            <li>Buy SHIB</li>
            <li>Buy Ripple</li>
            <li>Buy Bitcoin Cash</li>
          </ul>
        </div>
        {/* community */}
        <div>
          <span className="text-lg font-medium">Community</span>
          <div className="mt-3 text-gray-500 flex space-x-4">
            <FaTelegramPlane className="h-6 w-5" />
            <FaTwitterSquare className="h-6 w-5" />
            <FaViber className="h-6 w-5" />
            <FaWeibo className="h-6 w-5" />
          </div>
        </div>
      </div>
      {/* crypto @2021 */}
      <div className="mt-2 text-center text-gray-500">CRYPTO @2021</div>
    </div>
  );
};

export default Footer;
