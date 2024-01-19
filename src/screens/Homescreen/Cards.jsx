import React from 'react';
import Laptop from '../../assets/images/laptop.jpg';

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 '>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
      <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white'>
              <img className='w-60 mx-auto bg-white' src={Laptop} alt="/" />
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>52 Week Low : 16,828</p>
                  <p className='py-2 border-b mx-8'>52 Week High : 22,124</p>
                  <p className='py-2 border-b mx-8'>Prev. Close : 22,032</p>
              </div>
              <button className='bg-[#000000] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white'>Nifty 50</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white'>
              <img className='w-60 mx-auto bg-white' src={Laptop} alt="/" />
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>52 Week Low : 16,828</p>
                  <p className='py-2 border-b mx-8'>52 Week High : 22,124</p>
                  <p className='py-2 border-b mx-8'>Prev. Close : 22,032</p>
              </div>
              <button className='bg-[#000000] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white'>Nifty 50</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white'>
              <img className='w-60 mx-auto bg-white' src={Laptop} alt="/" />
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>52 Week Low : 16,828</p>
                  <p className='py-2 border-b mx-8'>52 Week High : 22,124</p>
                  <p className='py-2 border-b mx-8'>Prev. Close : 22,032</p>
              </div>
              <button className='bg-[#000000] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white'>Nifty 50</button>
          </div>
      </div>
    </div>
  );
};

export default Cards;