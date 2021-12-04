import React from 'react';
import Marquee from './Marquee';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="text-black ">
      <div className=" md:ml-36 md:mr-36 bg-gray-100 rounded-lg">
        <h1 className=" ml-2 text-4xl font-semibold mt-12 md:mt-28  md:text-5xl ">
          Buy & sell Crypto in minutes
        </h1>
        <h2 className=" ml-2 text-left text-xl mt-4 md:mt-8">
          Join in world's largest crypto exchange
        </h2>
        <div className="mt-4 md:mt-8 mb-14 md:mb-28">
          <button className="px-10 py-2 text-xl rounded-lg bg-yellow-400 hover:bg-yellow-300 focus:ring-2 focus:ring-yellow-200 ring-offset-1">
            <Link to="/">Register Now</Link>
          </button>
        </div>
      </div>
      <div>
        <Marquee />
      </div>
    </div>
  );
};

export default Hero;
