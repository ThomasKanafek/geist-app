
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
  ]
  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Dashboard', href: '/' },
    // { id: 2, text: ' ', href: '#' },
    // { id: 3, text: 'Resources', href: '#' },
    // { id: 4, text: 'About', href: '#' },
    // { id: 5, text: 'Contact', href: '#' },
  ];

  

const Navbar = () => {
// State to manage the navbar's visibility
const [nav, setNav] = useState(false);
// Toggle function to handle the navbar's display
const handleNav = () => {
    setNav(!nav);
  };

    return (
        <div className='bg-[#3D3E4B]'>
        <div className='bg-[#3D3E4B] flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        {/* Logo */}
        <div className='w-1/2 text-3xl font-bold text-[#df0000] md:w-1/5'>Geist App</div>
  
  
        {/* Desktop Navigation */}
        <ul className='w-full hidden md:flex'>
          {navItems.map(item => (
            <a href={item.href}>
            <li
              key={item.id}
              className='p-4 hover:bg-[#121316] rounded-xl m-2 cursor-pointer duration-300 hover:text-white'
            >
              {item.text}
            </li></a>
          ))}
        </ul>

    <div className="flex gap-3 items-center py-1.5 px-6 my-auto text-sm tracking-normal text-center text-white whitespace-nowrap hidden md:flex">
      <div className="flex  gap-4 items-center self-stretch my-auto">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd0dfc33c8ad33a3cb51591394bbab87c1473191258672c30fb9f86f1a72e762?placeholderIfAbsent=true&apiKey=c7d02f63ce044a6c84a678051a1175c7" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" alt="" />
        <div className="flexn flex-col self-stretch my-auto w-8">
          <div className="flex items-center px-2 w-8 h-8 bg-gray-600 rounded-full">YB</div>
        </div>
      </div>
    </div>
  
        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
  
        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-[#282833] bg-[#282833] ease-in-out duration-500 shadow-2xl'
              : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
          }
        >
          {/* Mobile Logo */}
          <h1 className='w-full text-3xl font-bold text-[#df0000] m-4'>Geist App</h1>
  
          {/* Mobile Navigation Items */}
          {navItems.map(item => (
            <a href={item.href}>
            <li
              key={item.id}
              className='p-4   hover:bg-[#121316] duration-300 hover:text-white cursor-pointer'
            >
              {item.text}
            </li>
            </a>
          ))}
        </ul>
      </div>
      </div>
    );
    
}


export default Navbar;