import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { list } from 'postcss';
import DummyBar from './DummyBar';

function Navbar() {
  const [maleExpandedBar, setMaleExpandedBar] = useState(true);
  const [femaleExpandedBar, setFemaleExpandedBar] = useState(true);
  const [kidExpandedBar, setKidExpandedBar] = useState(true);
  const [newbornExpandedBar, setNewbornExpandedBar] = useState(true);

  return (
    <div
      id='navbar'
      className='hidden lg:flex w-full justify-between lg:px-16 xl:px-8 2xl:px-80  uppercase font-semibold items-center bg-white shadow-md shadow-zinc-300/50 relative '
    >
      <div
        id='mainbar'
        className='flex h-fit items-center space-x-8 underline-offset-4 decoration-[3px] 	'
      >
        {/* Logo */}
        <Link href='/'>
          <a>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 90 40'
              width='90'
              height='40'
            >
              <title>ユニクロ｜UNIQLO</title>
              <path fill='red' d='M50 0h40v40H50zM0 0h40v40H0z'></path>
              <g fill='#fff'>
                <path d='M79.48 5.47h2.53v12.64h-2.53zM63.47 13.9a4.21 4.21 0 0 1-8.42 0V5.47h2.53v8.43a1.68 1.68 0 1 0 3.36 0V5.47h2.53zM75.26 34.53h-8.42V21.89h2.53V32h5.89v2.53zM75.26 18.11h-2.53l-3.36-7.22v7.22h-2.53V5.47h2.53l3.36 7.22V5.47h2.53v12.64zM59.26 21.89a4.21 4.21 0 0 0-4.21 4.22v4.21a4.21 4.21 0 0 0 4.21 4.21 4.34 4.34 0 0 0 .82-.07l.86 2.6h2.53l-1.25-3.75a4.2 4.2 0 0 0 1.25-3v-4.2a4.21 4.21 0 0 0-4.21-4.22m1.68 8.43a1.68 1.68 0 1 1-3.36 0v-4.21a1.68 1.68 0 1 1 3.36 0zM80.74 21.89a4.22 4.22 0 0 0-4.22 4.22v4.21a4.21 4.21 0 0 0 8.42 0v-4.21a4.21 4.21 0 0 0-4.21-4.22m1.68 8.43a1.68 1.68 0 0 1-3.37 0v-4.21a1.68 1.68 0 0 1 3.37 0z'></path>
                <g>
                  <path d='M22.74 15.16H34.1v2.52H22.74zM24 5.47h8.84V8H24zM14.74 5.47H7.15V8h5.06v7.16H5.9v2.52h11.36v-2.52h-2.52V5.47zM22.74 22.31v12.22H34.1V22.31zM31.57 32h-6.31v-7.16h6.31zM7.15 22.31l-1.28 6.12h2.52l.76-3.59h5.07L12.73 32H5.14l-.51 2.53h10.11l2.52-12.22H7.15z'></path>
                </g>
              </g>
            </svg>
          </a>
        </Link>
        {/* MAIN BAR */}
        <div
          onMouseEnter={() => setFemaleExpandedBar(false)}
          onMouseLeave={() => setFemaleExpandedBar(true)}
          className='hover:underline decoration-cyan-700 py-6 '
        >
          <Link href='#'>
            <a>nữ</a>
          </Link>
          <DummyBar expandedBar={femaleExpandedBar} />
        </div>
        <div
          onMouseEnter={() => setMaleExpandedBar(false)}
          onMouseLeave={() => setMaleExpandedBar(true)}
          className='hover:underline decoration-cyan-700 py-6'
        >
          <Link href='/test'>
            <a>nam</a>
          </Link>
          <DummyBar expandedBar={maleExpandedBar} />
        </div>
        <div
          onMouseEnter={() => setKidExpandedBar(false)}
          onMouseLeave={() => setKidExpandedBar(true)}
          className='hover:underline decoration-cyan-700 py-6'
        >
          <Link href='#'>
            <a>trẻ em</a>
          </Link>
          <DummyBar expandedBar={kidExpandedBar} />
        </div>
        <div
          onMouseEnter={() => setNewbornExpandedBar(false)}
          onMouseLeave={() => setNewbornExpandedBar(true)}
          className='hover:underline decoration-cyan-700 py-6'
        >
          <Link href='#'>
            <a>trẻ sơ sinh</a>
          </Link>
          <DummyBar expandedBar={newbornExpandedBar} />
        </div>
      </div>
      <div id='userbar' className='flex items-center space-x-10'>
        <form className='flex items-center relative'>
          <label className='hidden'>Search</label>
          <input
            className='border border-gray-400 focus:border-green-800 py-1 px-3 outline-none font-light'
            placeholder='Tìm kiếm theo từ khoá'
          />
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 w-4 right-3 absolute'
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
        </form>
        <Link href='#'>
          <a>
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
                d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
              />
            </svg>
          </a>
        </Link>
        <Link href='#'>
          <a>
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
          </a>
        </Link>
        <Link href='#'>
          <a>
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
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
