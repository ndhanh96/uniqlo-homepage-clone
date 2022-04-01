import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <div className='flex flex-wrap bg-zinc-100 mt-4'>
      <div className='hidden lg:grid grid-cols-5 gap-x-2 xl:gap-x-14 w-full lg:mx-16 xl:mx-8 2xl:xl:mx-80 my-12 capitalize'>
        <ul>
          <span className='text-base font-semibold'>Về Uniqlo</span>
          <li>Thông tin</li>
          <li>Danh sách cửa hàng</li>
        </ul>
        <ul className='captalize'>
          <span className='text-base font-semibold'>Trợ giúp</span>
          <li>FAQ</li>
          <li>chính sách trả hàng</li>
          <li>chính sách bảo mật</li>
          <li>Tiếp cận</li>
        </ul>
        <ul className='captalize'>
          <span className='text-base font-semibold '>tài khoản</span>
          <li>tư cách thành viên</li>
          <li>hồ sơ</li>
          <li>coupons</li>
        </ul>
        <ul className='captalize'>
          <span className='text-base font-semibold'>Bản tin điện tử</span>
          <li>
            Đăng ký ngay và là người đầu tiên nắm được thông tin khi có mặt hàng
            mới, khuyến mãi, các sự kiện sắp diễn ra tại cửa hàng và nhiều thông
            tin hữu ích khác.
          </li>
          <li className='underline uppercase font-bold text-base'>
            ĐĂNG KÝ NGAY
          </li>
        </ul>
        <div id='social-tab'>
          <p className='text-base font-semibold'>Tài khoản xã hội UNIQLO</p>
          <div className='flex space-x-2'>
            <svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'>
              <path fill='#7d7d7d' d='M0 0h40v40H0z' />
              <path
                fill='#fff'
                d='M17.72 31.29v-9.88h-3.36v-3.73h3.37v-2.92c0-3.29 2-5.22 4.94-5.22a27.15 27.15 0 0 1 3 .17v3.55h-2.15c-1.6 0-1.9.79-1.9 1.91v2.52h3.88l-.5 3.72h-3.38v9.88z'
              />
            </svg>
            <svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'>
              <path fill='#7d7d7d' d='M0 0h40v40H0z' />
              <g fill='#fff'>
                <path d='M20 11c2.94 0 3.28 0 4.44.06a6.07 6.07 0 0 1 2 .38 3.64 3.64 0 0 1 2.09 2.09 6.07 6.07 0 0 1 .38 2C29 16.71 29 17.06 29 20s0 3.29-.06 4.45a6.07 6.07 0 0 1-.38 2 3.64 3.64 0 0 1-2.09 2.09 6.07 6.07 0 0 1-2 .38C23.28 29 22.94 29 20 29s-3.29 0-4.45-.06a6.07 6.07 0 0 1-2-.38 3.64 3.64 0 0 1-2.09-2.09 6.07 6.07 0 0 1-.38-2C11 23.28 11 22.94 11 20s0-3.28.06-4.44a6.07 6.07 0 0 1 .38-2 3.64 3.64 0 0 1 2.09-2.09 6.07 6.07 0 0 1 2-.38C16.71 11 17.06 11 20 11m0-2c-3 0-3.36 0-4.54.07a8.08 8.08 0 0 0-2.67.51 5.61 5.61 0 0 0-3.22 3.22 8.08 8.08 0 0 0-.51 2.67C9 16.64 9 17 9 20s0 3.36.07 4.54a8.08 8.08 0 0 0 .51 2.67 5.61 5.61 0 0 0 3.22 3.22 8.08 8.08 0 0 0 2.67.51C16.64 31 17 31 20 31s3.36 0 4.53-.07a8.08 8.08 0 0 0 2.67-.51 5.61 5.61 0 0 0 3.22-3.22 8.08 8.08 0 0 0 .51-2.67C31 23.36 31 23 31 20s0-3.36-.07-4.53a8.08 8.08 0 0 0-.51-2.67 5.61 5.61 0 0 0-3.22-3.22 8.08 8.08 0 0 0-2.67-.51C23.36 9 23 9 20 9' />
                <path d='M20 14.35A5.65 5.65 0 1 0 25.65 20 5.65 5.65 0 0 0 20 14.35m0 9.31A3.67 3.67 0 1 1 23.67 20 3.67 3.67 0 0 1 20 23.67m7.19-9.54a1.32 1.32 0 1 1-1.32-1.32 1.32 1.32 0 0 1 1.32 1.32' />
              </g>
            </svg>
            <svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'>
              <path fill='#7d7d7d' d='M0 0h40v40H0z' />
              <path
                d='M31.15 15.45a4.92 4.92 0 0 0-.9-2.26 3.25 3.25 0 0 0-2.28-1C24.78 12 20 12 20 12s-4.78 0-8 .23a3.25 3.25 0 0 0-2.28 1 4.92 4.92 0 0 0-.9 2.26 34.41 34.41 0 0 0-.23 3.68v1.73a34.41 34.41 0 0 0 .23 3.68 4.92 4.92 0 0 0 .9 2.26 3.86 3.86 0 0 0 2.51 1c1.86.11 7.77.16 7.77.16s4.78 0 8-.24a3.25 3.25 0 0 0 2.28-1 4.92 4.92 0 0 0 .9-2.26 34.45 34.45 0 0 0 .23-3.68v-1.69a34.45 34.45 0 0 0-.26-3.68zM17.65 23v-6.44l6.15 3.21z'
                fill='#fff'
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        id='language'
        className='hidden lg:block lg:mx-16 xl:mx-8 2xl:xl:mx-80 basis-full'
      >
        <p>
          English | <span className='font-bold'>Tiếng Việt</span>
        </p>
      </div>

      <div id='mobile-footer' className='lg:hidden w-full px-6 mt-8'>
        <ul className='w-full uppercase font-semibold border-t-2 border-zinc-600'>
          <li className='py-4 border-b border-zinc-400'>hồ sơ</li>
          <li className='py-4 border-b border-zinc-400'>danh sách cửa hàng</li>
          <li className='py-4 border-b border-zinc-400'>tin tức điện tử</li>
          <li className='py-4 border-b border-zinc-400'>chính sách trả hàng</li>
          <li className='py-4 border-b border-zinc-400'>chính sách bảo mật</li>
          <li className='py-4 border-b border-zinc-400'>điều khoản sử dụng</li>
          <li className='py-4 border-b border-zinc-400'>faq</li>
          <li className='py-4 border-b border-zinc-400'>thông tin</li>
          <li className='py-4 border-b border-zinc-400'>
            <p className=''>tài khoản mạng xã hội</p>
            <div className='flex space-x-8 mt-2'>
              <div className=' h-10 w-10 relative'>
                <Image layout='fill' objectFit='fill' src='/facebook.svg' />
              </div>
              <div className=' h-10 w-10 relative'>
                <Image layout='fill' objectFit='fill' src='/instagram.svg' />
              </div>
              <div className=' h-10 w-10 relative'>
                <Image layout='fill' objectFit='fill' src='/youtube.svg' />
              </div>
            </div>
          </li>
          <li className='py-4 border-b border-zinc-400'>tiếp cận</li>
          <li className='py-4 border-b font-normal border-zinc-400'>english<span className='font-semibold border-l-2 border-zinc-500 pl-2 ml-2'>tiếng việt</span></li>
        </ul>
      </div>

      <div
        id='sub-footer'
        className='px-6 lg:px-16 xl:px-8 2xl:xl:px-80 mt-4 w-full lg:border-t-[1px] border-zinc-300 text-sm'
      >
        <div className='flex h-auto items-center justify-center lg:justify-between mb-3 lg:mb-0 text-zinc-500 '>
          <p className='text-xs lg:text-sm'>
            BẢN QUYỀN THUỘC CÔNG TY TNHH UNIQLO. BẢO LƯU MỌI QUYỀN.
          </p>
          <div className='hidden lg:flex space-x-3 underline py-5'>
            <Link href='#'>
              <a>Điều khoản sử dụng</a>
            </Link>
            <Link href='#'>
              <a>Chính sách bảo mật</a>
            </Link>
          </div>
        </div>
        <p>Tên công ty: UNIQLO VIETNAM CO., LTD</p>
        <p>
          Giấy chứng nhận đăng ký doanh nghiệp số: 0315304731, đăng ký lần đầu
          ngày 02/10/2018, đăng ký thay đổi lần thứ ba ngày 23/09/2019
        </p>
        <p>
          Địa chỉ trụ sở doanh nghiệp: Tầng 26, Tòa nhà Trụ Sở Điều Hành Và
          Trung Tâm Thương Mại Viettel, 285 Cách Mạng Tháng Tám, Phường 12, Quận
          10, Thành phố Hồ Chí Minh
        </p>
        <p>Để được giải đáp thắc mắc, vui lòng truy cập trang FAQ/Trợ giúp</p>
        <p>Giờ làm việc: 9:00 - 18:00 (Thứ Hai - Chủ Nhật)</p>
        <div id='checkedmark' className='h-20 w-36 relative'>
          <Image layout='fill' objectFit='contain' src='/checkmark.png' />
        </div>
      </div>
    </div>
  );
}

export default Footer;
