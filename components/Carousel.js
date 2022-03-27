import Image from 'next/image';
import React from 'react';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  // slidesPerView:'auto',
  // loop:true,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.next-button',
    prevEl: '.back-button',
  },

  // And if we need scrollbar
});

function Carousel() {
  return (
    <div className='basis-full flex h-20 w-full bg-slate-500 relative'>
      <div className='h-full swiper relative'>
        <div className='swiper-wrapper'>
          <div className='flex items-center justify-center py-80 swiper-slide bg-cyan-200 relative '>
            <video
              className='w-auto min-w-full min-h-full max-w-none absolute'
              autoPlay
              loop
              muted
            >
              <source
                src='https://image.uniqlo.com/UQ/ST3/vn/imagesother/UVcut/UUCUTALL.mp4'
                type='video/mp4'
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className='h-full w-full swiper-slide'>
            <Image layout='fill' objectFit='cover' src='/slider-img-one.jpg' />
          </div>
          <div className='swiper-slide h-2/3'>Slide 3</div>
        </div>

        <div className='swiper-scrollbar'></div>
      </div>
      <div
        id='swiper-navigation'
        className='flex justify-between w-full px-10 z-40 absolute bottom-0 text-gray-50 font-bold'
      >
        
        <button className=' flex back-button  py-2 px-3 uppercase z-10'>
          <span>
            {' '}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 mx-3'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </span>
          Trước
        </button>
        <button className='flex next-button  py-2 px-3 uppercase z-10'>
          {' '}
          Tiếp
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 mx-3'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9 5l7 7-7 7'
              />
            </svg>
          </span>
        </button>
        <div className='flex justify-center	items-center swiper-pagination absolute h-full bottom-0 tracking-wider z-0'></div>
      </div>
    </div>
  );
}

export default Carousel;
