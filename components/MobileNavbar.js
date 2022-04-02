import React from 'react';

function MobileNavbar() {
  return (
    <div className='lg:hidden bg-white border-b border-zinc-400'>
      <div className='flex justify-between px-3 md:px-6 py-3 w-full '>
        <div id='logo'>
          <svg xmlns='http://www.w3.org/2000/svg' width='90' height='40'>
            <path fill='red' d='M50 0h40v40H50zM0 0h40v40H0z' />
            <path
              d='M79.48 5.47h2.53v12.64h-2.53zM63.47 13.9a4.21 4.21 0 0 1-8.42 0V5.47h2.53v8.43a1.68 1.68 0 1 0 3.36 0V5.47h2.53zm11.79 20.63h-8.42V21.89h2.53V32h5.89v2.53zm0-16.42h-2.53l-3.36-7.22v7.22h-2.53V5.47h2.53l3.36 7.22V5.47h2.53v12.64zm-16 3.78a4.21 4.21 0 0 0-4.21 4.22v4.21a4.21 4.21 0 0 0 4.21 4.21 4.34 4.34 0 0 0 .82-.07l.86 2.6h2.53l-1.25-3.75a4.2 4.2 0 0 0 1.25-3v-4.2a4.21 4.21 0 0 0-4.21-4.22m1.68 8.43a1.68 1.68 0 1 1-3.36 0v-4.21a1.68 1.68 0 1 1 3.36 0zm19.8-8.43a4.22 4.22 0 0 0-4.22 4.22v4.21a4.21 4.21 0 0 0 8.42 0v-4.21a4.21 4.21 0 0 0-4.21-4.22m1.68 8.43a1.68 1.68 0 0 1-3.37 0v-4.21a1.68 1.68 0 0 1 3.37 0zM22.74 15.16H34.1v2.52H22.74zM24 5.47h8.84V8H24zm-9.26 0H7.15V8h5.06v7.16H5.9v2.52h11.36v-2.52h-2.52V5.47zm8 16.84v12.22H34.1V22.31zM31.57 32h-6.31v-7.16h6.31zM7.15 22.31l-1.28 6.12h2.52l.76-3.59h5.07L12.73 32H5.14l-.51 2.53h10.11l2.52-12.22H7.15z'
              fill='#fff'
            />
          </svg>
        </div>
        <div id='mobile-navbar' className='flex space-x-2 capitalize text-xs'>
          <div className='flex flex-col items-center'>
            <button>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </button>
            <p>tìm kiếm</p>
          </div>
          <div className='flex flex-col items-center'>
            <button>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                />
              </svg>
            </button>
            <p>yêu thích</p>
          </div>
          <div className='flex flex-col items-center'>
            <button>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                />
              </svg>
            </button>
            <p>xe đẩy</p>
          </div>
          <div className='flex flex-col items-center'>
            <button>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
            <p>danh mục</p>
          </div>
        </div>
      </div>
      <div id="sub-bar" className="flex w-full py-3 border-t border-zinc-400">
        <button className='w-full uppercase'>home</button>
        <button className='w-full uppercase'>nữ</button>
        <button className='w-full uppercase'>nam</button>
        <button className='w-full uppercase'>trẻ em</button>
        <button className='w-full uppercase'>trẻ sơ sinh</button>
      </div>
    </div>
  );
}

export default MobileNavbar;
