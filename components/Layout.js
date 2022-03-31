import React, { useEffect, useRef, useState,useLayoutEffect } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

export const calculateSliderHeight = React.createContext();

function useWindowSize() {        ///GOT THIS FROM STACKOVERFLOW , CALCULATE WINDOW INNER HEIGHT
  const [windowHeight, setWindowHeight] = useState(0);
  useLayoutEffect(() => {
    function updateHeight() {
      setWindowHeight(window.innerHeight);
    }
    window.addEventListener('resize', updateHeight);
    updateHeight();
    return () => window.removeEventListener('resize', updateHeight);
  }, []);
  return windowHeight;
}


function Layout({ children }) {
  const smallbar = useRef();
  const navbar = useRef();
  const [sliderHeight, setSliderHeight] = useState(0); 
  const windowheight = useWindowSize();

  useEffect(() => {
    // const windowheight = window.innerHeight;
    setSliderHeight(windowheight - navbar.current.clientHeight - smallbar.current.clientHeight); ///CALCULATE HEIGHT FOR THE MAIN SLIDE
    console.log(windowheight);
  }, [windowheight]);

  return (
    <div className=''>
      <div
        ref={smallbar}
        id='small-notice-bar'
        className='z-50 flex px-8 2xl:px-80 py-2 justify-between text-sm 2xl:text-md bg-zinc-100 tracking-tight w-full relative'
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
      <div ref={navbar} className=' bg-yellow-800 w-full sticky top-0 z-50 '>
        <Navbar />
      </div>
      <calculateSliderHeight.Provider value={sliderHeight}>
        {children}
      </calculateSliderHeight.Provider>
      <Footer />
    </div>
  );
}

export default Layout;
