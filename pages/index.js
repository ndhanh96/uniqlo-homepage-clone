import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useContext } from 'react';
import Carousel from '../components/Carousel';
import Image from 'next/image';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { calculateSliderHeight } from '../components/Layout';

export default function Home() {
  const sliderHeight = useContext(calculateSliderHeight);
  useEffect(() => {
    const swiper = new Swiper('.end-swiper', {
      modules: [Navigation, Pagination, Autoplay],
      // loop: true,
      autoplay: {
        delay: 6000,
        waitForTransition: true,
      },
    });
    swiper;
    console.log('res ' + sliderHeight);
  }, []);

  return (
    <>
      <div style={{ height: sliderHeight }} className='w-full bg-slate-500'>
        <Carousel />
      </div>
      <div
        id='important-notice'
        className='flex bg-gray-200 lg:bg-white justify-around items-center lg:mx-16 xl:mx-8 2xl:mx-80 lg:my-4 border border-slate-300'
      >
        <div className='space-y-4 px-3 md:px-6 lg:px-20 my-4 py-2 lg:py-8 bg-white shadow-md shadow-zinc-500/40 lg:shadow-none '>
          <h1 className='text-2xl font-semibold	'>THÔNG BÁO QUAN TRỌNG</h1>
          <ul className='text-sm lg:text-lg font-medium	underline space-y-3	'>
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
        className='grid grid-cols-2 space-y-6 mx-3 md:mx-6 lg:mx-16 xl:mx-8 2xl:xl:mx-80 my-4 border-slate-200 '
      >
        <h1 className=' uppercase font-bold text-2xl lg:text-4xl col-span-full '>
          information
        </h1>
        <ul className='space-y-3 text-sm lg:text-lg'>
          <li>Hướng Dẫn Mua Sắm</li>
          <li>APP</li>
          <li>Đăng Ký Bản Tin Điện Tử</li>
        </ul>
        <ul className='space-y-3 text-sm lg:text-lg'>
          <li>Đặt Hàng Số Lượng Lớn</li>
          <li>COVID-19</li>
          <li>Tin Tức Uniqlo</li>
        </ul>
      </div>
      <div id='app-offer' className='mx-3 md:mx-6 lg:mx-16 xl:mx-8 2xl:xl:mx-80 '>
        <h1 className='capitalize py-2 w-fit font-bold text-2xl lg:text-4xl'>
          ưu đãi từ ứng dụng
        </h1>
        <div className='h-[300px] lg:h-[500px] end-swiper w-full overflow-hidden'>
          <div className='h-fit swiper-wrapper '>
            <div className='h-full swiper-slide'>
              <Image layout='fill' objectFit='none' src='/end-slider-one.gif' />
            </div>
            <div className='h-full swiper-slide'>
              <Image layout='fill' objectFit='none' src='/end-slider-two.jpg' />
            </div>
          </div>
        </div>
        <div className='flex w-full '>
          <button
            style={{ backgroundColor: 'red' }}
            className='py-2 w-full uppercase text-white shadow-lg shadow-red-400/40'
          >
            tải ứng dụng ngay
          </button>
        </div>
      </div>
    </>
  );
}
