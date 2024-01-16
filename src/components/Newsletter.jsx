import React from 'react';

export default function Newsletter() {
  return (
    <div className='w-full text-white py-12 px-4 my-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'> 
        <div className='lg:col-span-2 mr-6 py-2'>
            <h1 className='md:text-5xl sm:text-4xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
            <p>Sigup to our Newsletter & stay up to date.</p>
         </div>
        <div className='my-4 mx-2'>
            <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
              <input type="email" placeholder='Enter your Email' className='rounded-md p-3  text-black w-full'/>
              <button className='bg-[#00df9a] text-black rounded-md font-medium p-3 w-[180px] ml-4 my-4'>Notify Me</button>
            </div>
            <p className='text-start'>We care about the protection of your data by all means. Read our <span className='text-[#00df9a]'>Privacy Policy</span></p>
        </div>
        </div>

    </div>
  )
}
