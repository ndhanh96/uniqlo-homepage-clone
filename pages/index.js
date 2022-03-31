import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect } from 'react';
import Carousel from '../components/Carousel';
import Image from 'next/image';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  useEffect(() => {
    const swiper = new Swiper('.end-swiper', {
      modules: [Navigation, Pagination],
      // spaceBetween:0
      loop: true,
      autoplay:{
        delay:1000
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullet',
      },
      // Navigation arrows
      // navigation: {
      //   nextEl: '.next-button',
      //   prevEl: '.back-button',
      // },
    });
    swiper;
  }, []);

  return (
    <div className='basis-full h-full w-full bg-slate-500 relative'>
      <Carousel />
      <div
        id='important-notice'
        className='flex h-60 justify-around items-center mx-8 2xl:mx-80 my-4 border border-slate-200'
      >
        <div className='space-y-4 px-20 '>
          <h1 className='text-2xl font-semibold	'>THÔNG BÁO QUAN TRỌNG</h1>
          <ul className='text-1xl font-medium	underline space-y-3	'>
            <li className='hover:text-gray-400'>
              <Link href='#'>
                - THỜI GIAN GIAO HÀNG DỰ KIẾN TRONG KHOẢNG 7 NGÀY, KHÔNG BAO GỒM
                MỘT SỐ TRƯỜNG HỢP NGOẠI LỆ.
              </Link>
            </li>
            <li className='hover:text-gray-400'>
              <Link href='#'>
                - DO TÌNH HÌNH COVID-19, CHÚNG TÔI KHÔNG THỂ GIAO HÀNG ĐẾN MỘT
                SỐ KHU VỰC. VUI LÒNG XEM TẠI ĐÂY.
              </Link>
            </li>
            <li className='hover:text-gray-400'>
              <Link href='#'>
                - THUẾ SUẤT THUẾ GTGT CHO SẢN PHẨM CỦA CHÚNG TÔI SẼ GIẢM 2%, VÀ
                GIÁ NIÊM YẾT CỦA TẤT CẢ SẢN PHẨM LÀ GIÁ ĐÃ BAO GỒM 8% THUẾ GTGT.
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        id='information-notice'
        className='grid grid-cols-2 space-y-6 mx-8 2xl:mx-80 my-4 border-slate-200 '
      >
        <h1 className='uppercase font-bold  text-4xl col-span-full '>
          information
        </h1>
        <ul className='space-y-3'>
          <li>Hướng Dẫn Mua Sắm</li>
          <li>APP</li>
          <li>Đăng Ký Bản Tin Điện Tử</li>
        </ul>
        <ul className='space-y-3'>
          <li>Đặt Hàng Số Lượng Lớn</li>
          <li>COVID-19</li>
          <li>Tin Tức Uniqlo</li>
        </ul>
      </div>
      <div id='app-offer' className=' mx-8 2xl:mx-80'>
        <h1 className='capitalize col-span-1 py-2 w-fit font-bold text-4xl'>
          ưu đãi từ ứng dụng
        </h1>
        <div className='h-screen end-swiper col-span-1  w-full overflow-hidden relative '>
          <div className='swiper-wrapper h-fit '>
            <div className='h-full swiper-slide'>
              <Image
                layout='fill'
                objectFit='cover'
                objectPosition={'center'}
                src='/end-slider-one.gif'
              />
            </div>
            <div className='h-full swiper-slide'>
              <Image
                layout='fill'
                objectFit='cover'
                objectPosition={'center'}
                src='/end-slider-two.jpg'
              />
            </div>
          </div>
        </div>
        <div className="flex w-full ">
          <button style={{backgroundColor:'red'}} className="py-2 w-full uppercase text-white">
            tải ứng dụng ngay
          </button>
        </div>
      </div>
    </div>
  );
}
