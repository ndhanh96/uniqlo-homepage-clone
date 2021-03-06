import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import Footer from './Footer';
import MobileNavbar from './MobileNavbar';
import Navbar from './Navbar';

export const calculateSliderHeight = React.createContext();

// function useWindowSize() {        ///GOT THIS FROM STACKOVERFLOW , CALCULATE WINDOW INNER HEIGHT
//   const [windowHeight, setWindowHeight] = useState(0);
//   useLayoutEffect(() => {
//     function updateHeight() {
//       setWindowHeight(window.innerHeight);
//     }
//     window.addEventListener('resize', updateHeight);
//     updateHeight();
//     return () => window.removeEventListener('resize', updateHeight);
//   }, []);
//   return windowHeight;
// }

function Layout({ children }) {
  const smallbar = useRef();
  const navbar = useRef();
  const [sliderHeight, setSliderHeight] = useState(0);
  const [windowheight, setWindowheight] = useState(0);

  const handleResizeHeight = () => {
    setWindowheight(window.innerHeight);
  };

  useEffect(() => {
    const windowheight = window.innerHeight;

    ///CALCULATE HEIGHT FOR THE MAIN SLIDE
    setSliderHeight(
      windowheight - navbar.current.clientHeight - smallbar.current.clientHeight
    );
  }, []);

  return (
    <div className=''>
      <div
        ref={smallbar}
        id='small-notice-bar'
        className='z-50 flex lg:px-16 xl:px-8 2xl:px-80 py-1 lg:py-2 justify-center lg:justify-between lg:text-xs text-xs xl:text-sm 2xl:text-md bg-zinc-400 lg:bg-zinc-300 tracking-tight w-full relative'
      >
        <div className='text-white lg:text-black text-center' >
          <h3>
            Thuế GTGT áp dụng cho sản phẩm của chúng tôi sẽ giảm 2%, giá tất cả
            sản phẩm đã bao gồm 8% thuế GTGT.
          </h3>
        </div>
        <div className='hidden lg:flex space-x-6'>
          <h3>Trợ giúp</h3>
          <h3>Hệ thống cửa hàng</h3>
          <h3>English|Tiếng Việt</h3>
        </div>
      </div>
      <div ref={navbar} className=' w-full sticky top-0 z-50 '>
        <Navbar />
        <MobileNavbar />
      </div>
      <calculateSliderHeight.Provider value={sliderHeight}>
        {children}
      </calculateSliderHeight.Provider>
      <Footer />
    </div>
  );
}

export default Layout;
