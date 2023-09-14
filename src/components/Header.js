import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex justify-between items-center'>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTahkq5-kcMdoBqJq8t05i1QjCsfmmh05_hmvwYBOvl&s" alt="" />
      </div>
      <div className='flex gap-10'>
        <div className='flex gap-4'>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <button>Go to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
