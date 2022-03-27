import React from 'react';
import Carousel from './Carousel';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <div>
      <div className='h-screen flex flex-col'>
        <Navbar />
        <Carousel />
      </div>
      {children}
    </div>
  );
}

export default Layout;
