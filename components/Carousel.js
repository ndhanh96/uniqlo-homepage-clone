import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Carousel() {
  const videoRef = useRef();
  useEffect(() => {
    videoRef.current.defaultMuted = true;
  });
  useEffect(() => {
    const swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination],
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      // Navigation arrows
      navigation: {
        nextEl: '.next-button',
        prevEl: '.back-button',
      },
    });

    return () => {
      swiper;
    };
  }, []);

  return (
    <>
      <div className='h-full swiper'>
        <div className='swiper-wrapper'>
          <div className=' swiper-slide bg-cyan-200'>
            <div className='h-full w-full  bg-blue-200 relative'>
              <video
                ref={videoRef}
                className='h-full w-full absolute object-cover z-10'
                autoPlay
                loop
                playsInline
                muted
                preload="metadata"
              >
                <source src='/mainvideo.mp4' type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className='h-full swiper-slide'>
            <Image
              
              priority
              layout='fill'
              objectFit='cover'
              src='/slider-img-two.jpg'
            />
          </div>
          <div className='h-full swiper-slide'>
            <Image
              
              layout='fill'
              objectFit='cover'
              src='/slider-img-three.jpg'
            />
          </div>
          <div className='h-full swiper-slide'>
            <Image
              priority
              layout='fill'
              objectFit='cover'
              src='/slider-img-one.jpg'
            />
          </div>
        </div>
      </div>
      <div
        id='swiper-navigation'
        className='flex justify-between w-full px-2 md:px-10 z-30 absolute bottom-0 text-gray-50 font-bold'
      >
        <button className=' flex back-button py-2 px-3 uppercase z-40'>
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
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </span>
          Trước
        </button>
        <button className='flex next-button py-2 px-3 uppercase z-40'>
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
        <div className='flex justify-center	items-center swiper-pagination absolute h-full top-0  tracking-wider z-0'></div>
      </div>
    </>
  );
}

export default Carousel;
