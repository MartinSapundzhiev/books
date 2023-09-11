import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';

const Navbar = () => {
  
    const[nav,setnav] = useState(false)

    const toggle = () =>{
        setnav(!nav);
    }

  return (
     <div className='absolute w-full flex justify-between p-4 items-center'> 
        <h1 className='text-white font-bold text-2xl z-20'>Library</h1>
        <HiMenuAlt3 onClick={toggle} size={25} className=' text-white cursor-pointer z-20 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-pink-500 duration-500'/>
        <div className={nav ?'ease-in duration-500 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10': 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'}>
            <ul className='flex flex-col w-full h-full items-center justify-center'>
                <li className='font-bold text-3xl p-8  hover:-translate-y-1 hover:scale-110 hover:text-pink-500 duration-500'>Home</li>
                <li className='font-bold text-3xl p-8  hover:-translate-y-1 hover:scale-110 hover:text-pink-500 duration-500'>Book</li>
                <li className='font-bold text-3xl p-8  hover:-translate-y-1 hover:scale-110 hover:text-pink-500 duration-500'>About</li>
                <li className='font-bold text-3xl p-8  hover:-translate-y-1 hover:scale-110 hover:text-pink-500 duration-500'>Contact</li>
            </ul>
        </div>
     </div>
  );
};

export default Navbar;