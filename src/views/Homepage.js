import React from 'react';
import Hero from '../components/Hero';
import Hero2 from '../components/Hero2';
import Hero3 from '../components/Hero3';

const Homepage = () => {
  return (
    <>
      <Hero />
      <Hero3 />
      <Hero2 />
      <div className="w-16 h-16 flex justify-center items-center sticky bottom-0 float-right bg-yellow-300 mt-96 sm:mt-60 mr-2  rounded-full animate-bounce">
        <img
          alt="open chat"
          src="https://cdn-icons-png.flaticon.com/512/569/569412.png"
          className="h-8 w-8 "
        />
      </div>
    </>
  );
};

export default Homepage;
