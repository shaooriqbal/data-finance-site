import React from 'react';
import singlePage from '../assets/single.png';
import doublePage from '../assets/double.png';
import triplePage from '../assets/triple.png';


export default function Cards() {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>

        <div className='w-full border rounded-lg shadow-lg flex flex-col p-4 my-4 hover:scale-105 duration-300'>
        <img src={singlePage} alt="single page" className='w-20 bg-white mt-[-3rem] mx-auto'/>
        <h2 className='font-bold text-center text-2xl py-6'>Single User</h2>
        <p className='font-bold text-center text-3xl '>$1000</p>
        <div className='text-center font-medium'>
        <p className='py-2 border-b mx-8 mt-8'>600 GB Storage</p>
        <p className='py-2 border-b mx-8 '>1 User Granted</p>
        <p className='py-2 border-b mx-8 '>Send up to 2 GB</p>
        </div>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto py-2 my-6 text-black'>Start Trail</button>
        
        </div>
        <div className='w-full border rounded-lg shadow-lg flex flex-col p-4 hover:scale-105 duration-300 my-8 md:my-0 bg-gray-100'>
        <img src={doublePage} alt="double page" className='w-20 bg-white mt-[-3rem] mx-auto bg-transparent'/>
        <h2 className='font-bold text-center text-2xl py-6'>Double User</h2>
        <p className='font-bold text-center text-3xl '>$1000</p>
        <div className='text-center font-medium'>
        <p className='py-2 border-b mx-8 mt-8'>3000 GB Storage</p>
        <p className='py-2 border-b mx-8 '>2 User Granted</p>
        <p className='py-2 border-b mx-8 '>Send up to 4 GB</p>
        </div>
        <button className='bg-black w-[200px] rounded-md font-medium mx-auto py-2 my-6 text-[#00df9a]'>Start Trail</button>
        
        </div>
        <div className='w-full border rounded-lg shadow-lg flex flex-col p-4 my-4 hover:scale-105 duration-300'>
        <img src={triplePage} alt="triple page" className='w-20 bg-white mt-[-3rem] mx-auto'/>
        <h2 className='font-bold text-center text-2xl py-6'>Triple User</h2>
        <p className='font-bold text-center text-3xl '>$1000</p>
        <div className='text-center font-medium'>
        <p className='py-2 border-b mx-8 mt-8'>6000 GB Storage</p>
        <p className='py-2 border-b mx-8 '>3 User Granted</p>
        <p className='py-2 border-b mx-8 '>Send up to 6 GB</p>
        </div>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto py-2 my-6 text-black'>Start Trail</button>
        
        </div>

        </div>
    </div>
  )
}
