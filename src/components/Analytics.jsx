import React from 'react';
import lapi from '../assets/laptop.jpg';

export default function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
         <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img src={lapi} alt='laptop' className='w-[500px] mx-auto py-4'/>
           <div className='flex flex-col justify-center items-center'>
            <p className='text-[#00df9a] font-bold py-2 text-xl'>DATA ANALYTICS DASHBOARD</p>
            <h1 className='text-2xl md:text-4xl sm:text-3xl font-bold py-2'>Manage Data Analytics Centrally</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <button className=' bg-black text-[#00df9a] w-[200px] rounded-md font-medium mx-auto py-2 my-6'>Get Started</button>
           
           </div>
         </div>
    </div>
  )
}
