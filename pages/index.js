import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react/cjs/react.development';
import Carousel from '../components/Carousel';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [femaleHiddenBar, setFemaleHiddenBar] = useState(false);

  return (
    <div className='basis-full h-full w-full bg-slate-500 relative'>
      <Carousel />
      <div
        id='important-notice'
        className='flex h-60 justify-around items-center mx-8 2xl:mx-80 my-3 border border-slate-200'
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
    </div>
  );
}
