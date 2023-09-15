import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='bg-white sticky top-0 w-full shadow-md flex justify-between items-center'>
      <div>
        <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTahkq5-kcMdoBqJq8t05i1QjCsfmmh05_hmvwYBOvl&s" alt="" />
      </div>
      <div className='flex gap-10 font-bold font-serif'>
        <div className='flex gap-4'>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <button className='pr-2'>Go to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
