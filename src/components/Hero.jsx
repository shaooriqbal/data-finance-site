import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <div className='text-white max-w-[800px] my-[200px] w-full  flex flex-col text-center mx-auto '>
        <p className='text-[#00df9a] font-bold px-2 text-xl'>GROWING WITH DATA ANALYTICS</p>
    <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-2'>Grow with data. </h1>
    <div className='flex justify-center'>
        <p className='md:text-5xl sm:text-4xl text-xl font-bold md:py-4 mr-3'>Fast,flexible financing for </p> 
        <TypeAnimation className='mt-33 md:text-5xl sm:text-4xl text-xl font-bold md:py-4'
      sequence={[
        'BTB',
        1000,
        'BTC',
        1000,
        'SAAS',
        1000,
        'PAAS.',
        1000
      ]}
      wrapper="span"
      speed={20}
      repeat={Infinity}
    />
    </div>
    <p className='md:text-2xl pt-1  text-xl font-bold text-gray-500 md:pl-4 pl-2'>
     Monitor you data analytics for BTC,BTB,Saas & Paas platforms.
    </p>
     <button className='bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto py-2 my-8 text-black'>Get Started</button>
    </div>
  )
}
