import React from 'react';
import { FcCustomerSupport, FcNews, FcFaq, FcLineChart } from 'react-icons/fc';

const Hero2 = () => {
  return (
    <div>
      {/* Get in Touch */}
      <div>
        <h1 className="text-3xl font-medium ml-2 md:ml-36 mt-16">
          Get in touch. Stay in touch
        </h1>
        <div className="flex flex-col md:flex-row justify-around content-center ml-2 md:ml-16 lg:ml-16 mr-8 mt-8">
          <div className="w-48 hover:bg-gray-200 rounded-lg p-2 cursor-pointer">
            <FcCustomerSupport className="h-24 w-16" />
            <p className="text-lg font-medium mb-2">24/7 Support</p>
            <p className="text-gray-700">Got a problem? Just get in touuch.</p>
          </div>
          <div className="w-40 hover:bg-gray-200 rounded-lg p-2 cursor-pointer">
            <FcNews className="h-24 w-16" />
            <p className="text-lg font-medium mb-2">Crypto Blog</p>
            <p className="text-gray-700">
              News and updated from the crypto world.
            </p>
          </div>
          <div className=" w-40 hover:bg-gray-200 rounded-lg p-2 cursor-pointer">
            <FcFaq className="h-24 w-16" />
            <p className="text-lg font-medium mb-2">Community</p>
            <p className="text-gray-700">
              Crypto is global. Join the discussion.
            </p>
          </div>
          <div className=" w-40 hover:bg-gray-200 rounded-lg p-2 cursor-pointer">
            <FcLineChart className="h-24 w-16" />
            <p className="text-lg font-medium mb-2">Careers</p>
            <p className="text-gray-700">
              Help build the future of technology. Start your new career.
            </p>
          </div>
        </div>
      </div>

      {/* start Trading */}
      <div className="relative bg-gray-100 w-full h-48 mt-12">
        <div
          className="absolute mt-8"
          style={{
            textAlign: 'center',
            top: '50%',
            left: '0',
            right: '0',
            margin: 'auto',
            transform: 'translateY(-50%)',
          }}
        >
          <h1 className="text-3xl font-semibold mb-6 ">Start trading now</h1>
          <div className="">
            <button className="px-8 py-2 m-4 text-lg rounded-lg bg-gray-300 hover:bg-yellow-300">
              Register Now
            </button>
            <button className="px-8 py-2 text-lg rounded-lg bg-gray-300 hover:bg-yellow-300 ">
              Trade Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
