import React from 'react';
import Carousel from './Carousel';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <div>
      <div className='h-screen flex flex-col'>
        <div
          id='small-notice-bar'
          className='flex px-8 2xl:px-80 py-2 justify-between text-sm bg-zinc-200 tracking-tight w-full '
        >
          <div className=''>
            <div>
              <h3>
                Thuế GTGT áp dụng cho sản phẩm của chúng tôi sẽ giảm 2%, giá tất
                cả sản phẩm đã bao gồm 8% thuế GTGT.
              </h3>
            </div>
          </div>
          <div className='flex space-x-6'>
            <h3>Trợ giúp</h3>
            <h3>Hệ thống cửa hàng</h3>
            <h3>English|Tiếng Việt</h3>
          </div>
        </div>
        <Navbar />
        <Carousel />
      </div>
      {children}
    </div>
  );
}

export default Layout;
