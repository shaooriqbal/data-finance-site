import React from 'react';
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaTwitterSquare

} from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='py-12 px-4 text-gray-300 grid lg:grid-cols-3 gap-8 mx-auto'>
        <div className='text-start ml-20'>
        <h1 className='font-bold text-3xl text-[#00df9a]'>
        Data.
        </h1>
        <p className='py-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        <div className='flex md:w-[75%] my-6 justify-between'>
            <FaFacebookSquare  size={30}/>
            <FaGithubSquare size={30}/>
            <FaInstagramSquare size={30}/>
            <FaTwitterSquare size={30}/>
            <FaDribbbleSquare size={30}/>
        </div>
        </div>
          <div className='lg:col-span-2 flex justify-between max-w-[1240px] lg:mx-[100px] mx-20 mt-8'>
           <div>
            <h6 className='font-medium text-[#00df9a] mb-2'>
                Solutions
            </h6>
            <ul>
                <li className='py-2 text-sm'>Analytics</li>
                <li className='py-2 text-sm'>Marketing</li>
                <li className='py-2 text-sm'>Commerce</li>
                <li className='py-2 text-sm'>Insights</li>
            </ul>
           </div>
           <div>
            <h6 className='font-medium text-[#00df9a] mb-2'>
                Support
            </h6>
            <ul>
                <li className='py-2 text-sm'>Pricing</li>
                <li className='py-2 text-sm'>Documentation</li>
                <li className='py-2 text-sm'>Guide</li>
                <li className='py-2 text-sm'>API Status</li>
            </ul>
           </div>
           <div>
            <h6 className='font-medium text-[#00df9a] mb-2' >
                Company
            </h6>
            <ul>
                <li className='py-2 text-sm'>Blog</li>
                <li className='py-2 text-sm'>Culture</li>
                <li className='py-2 text-sm'>Career</li>
                <li className='py-2 text-sm'>Press</li>
            </ul>
           </div>
           <div>
            <h6 className='font-medium text-[#00df9a] mb-2'>
                Legal
            </h6>
            <ul>
                <li className='py-2 text-sm'>Claim</li>
                <li className='py-2 text-sm'>Policy</li>
                <li className='py-2 text-sm'>Terms</li>
            </ul>
           </div>
          </div>
    </div>
  )
}
