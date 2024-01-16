import React, {useState} from 'react';
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai';

export default function Navbar() {

    const [nav,setNav] = useState(false); 
    const handleNav = ()=>{
        setNav(!nav);
    }

  return (
    <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
      <h1 className='font-bold text-3xl  text-[#00df9a]'>
        Data.
      </h1>
    <ul className='md:flex hidden font-bold'>
       <li className='p-4 hover:text-[#00df9a]  cursor-pointer'>Home</li>
       <li className='p-4 hover:text-[#00df9a] cursor-pointer'>Company</li>
       <li className='p-4 hover:text-[#00df9a] cursor-pointer'>Resources</li>
       <li className='p-4 hover:text-[#00df9a] cursor-pointer'>About</li>
       <li className='p-4 hover:text-[#00df9a] cursor-pointer'>Contact</li>
    </ul>
    <div onClick={handleNav} className='block md:hidden'>
   
    {nav ?
    <AiOutlineClose size={20} className='cursor-pointer'/>:
    <AiOutlineMenu size={20} className='cursor-pointer'/>}
     </div>

     <div className={!nav ? 'fixed hidden ':' fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'}>
     <h1 className='font-bold text-3xl  text-[#00df9a]'>
        Data.
      </h1>
     <ul className='uppercase font-bold'>
       <li className='p-4 border-b border-gray-500'>Home</li>
       <li className='p-4 border-b border-gray-500'>Company</li>
       <li className='p-4 border-b border-gray-500'>Resources</li>
       <li className='p-4 border-b border-gray-500'>About</li>
       <li className='p-4 border-b border-gray-500'>Contact</li>
    </ul>
   
    </div>
    </div>
  )
}
