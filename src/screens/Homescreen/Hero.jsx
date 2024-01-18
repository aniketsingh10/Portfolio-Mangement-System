import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-black'>
      <div className='max-w-[800px] w-full h-[80vh] mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#3d403f] font-bold p-2'>
          GROWING WITH FINANCIAL KNOWLEDGE
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Grow with PMS
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Fast, flexible financing for
          </p>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['BTB', 'BTC', 'SASS']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        <button className='bg-[#000000] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;