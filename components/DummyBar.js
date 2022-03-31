import React, { useState, useEffect } from 'react';

function DummyBar({ expandedBar }) {
  // const [hiddenBar, setHiddenBar] = useState(expandedBar);

  // useEffect(() => {
  //   setHiddenBar(expandedBar)

  // }, [expandedBar])

  const shirt = [
    'Tất Cả Áo',
    'Áo Thun',
    'UT (Áo Thun Họa Tiết)',
    'Áo Sơ Mi & Áo Kiểu',
    'Áo Len',
    'Áo Cardigan',
    'Tất Cả Áo Nỉ',
  ];

  const loungwear = [
    'Tất Cả Đồ Mặc Nhà',
    'Đồ Mặc Nhà & Pyjama',
    'Relaco',
    'Bộ Giường Ngủ',
    'Dép Đi Trong Nhà',
    'Phụ Kiện Gia Đình',
  ];

  const outerwear = [
    'Tất Cả Đồ Mặc Ngoài',
    'Áo Khoác (Coat)',
    'Áo Blouson & Hoodie',
    'Áo Khoác (Jacket)',
  ];

  const innerwear = [
    'Tất Cả Đồ Mặc Trong',
    'Áo Ngực Không Gọng',
    'Bra Tops',
    'AIRism',
    'Áo Mặc Trong',
    'Cài Trước',
    'Đồ Lót',
    'HEATTECH',
    'Quần Leggings và Quần Tất',
    'Tất',
  ];

  const hotwear = [
    'Hàng Mới Về',
    'Khuyến Mãi Có Hạn',
    'Sắp Ra Mắt',
    'Tin Tức Nổi Bật',
    'Áo Thun UT',
    'Styling Book',
    'Về LifeWear',
  ];

  const accessories = [
    'Tất Cả Phụ Kiện',
    'Khẩu Trang AIRism',
    'Mũ & Mũ Len',
    'Túi',
    'Ô',
    'Khác',
  ];

  const pants = [
    'Tất Cả Quần',
    'Quần Short',
    'Quần Jeans',
    'Quần Dài',
    'Quần Dài Đến Mắt Cá & Quần Lửng',
    'CHÂN VÁY',
    'Quần Leggings',
    'Quần Váy & Quần Ống Rộng',
    'Quần Tây',
  ];

  const specialCollect = [
    'UNIQLO x Theory',
    'UNIQLO and JW ANDERSON',
    '＋J',
    'INES DE LA FRESSANGE',
    'Uniqlo U',
    'HANA TAJIMA FOR UNIQLO',
    'Uniqlo and Mame Kurogouchi',
    'Bộ Sưu Tập Đặc Biệt',
  ];

  return (
    <div
      hidden={expandedBar}
      className='absolute left-0 top-full w-full z-50 bg-white border border-t-slate-300 '
    >
      <div className='grid grid-cols-5 mx-8 2xl:mx-80 my-8'>
        <div className='col-span-4 grid grid-cols-4	gap-1 2xl:gap-2 normal-case	text-sm font-mono 2xl:tracking-tight'>
          <ul className=''>
            <span className='font-semibold text-lg'>ÁO</span>
            {shirt.map((s, index) => (
              <li key={index} className=' font-thin'>
                {s}
              </li>
            ))}
          </ul>
          <ul className=''>
            <span className='font-semibold text-lg'>SPORT UTILITY WEAR</span>
            <li className=' font-thin '>Sport Utility Wear</li>
          </ul>
          <ul className=' 	'>
            <span className='font-semibold text-lg'>ĐỒ MẶC TRONG</span>
            {innerwear.map((i, index) => (
              <li key={index} className=' font-thin'>
                {i}
              </li>
            ))}
          </ul>
          <ul className=''>
            <span className='font-semibold text-lg'>ĐỒ MẶC NGOÀI</span>
            {outerwear.map((o, index) => (
              <li key={index} className=' font-thin'>
                {o}
              </li>
            ))}
          </ul>
          <ul className=' '>
            <span className='font-semibold text-lg'>
              ĐẦM {encodeURI('&')} JUMPSUIT
            </span>
            <li className=' font-thin'>Đầm {encodeURI('&')} Jumpsuit</li>
          </ul>
          <ul className=' '>
            <span className='font-semibold text-lg'>ĐỒ MẶC NHÀ</span>
            {loungwear.map((l, index) => (
              <li key={index} className=' font-thin'>
                {l}
              </li>
            ))}
          </ul>
          <ul className=''>
            <span className='font-semibold text-lg'>QUẦN</span>
            {pants.map((p, index) => (
              <li key={index} className=' font-thin'>
                {p}
              </li>
            ))}
          </ul>
          <ul className=''>
            <span className='font-semibold text-lg'>PHỤ KIỆN</span>
            {accessories.map((a, index) => (
              <li key={index} className=' font-thin'>
                {a}
              </li>
            ))}
          </ul>
          <ul className='	'>
            <span className='font-semibold text-lg'>ĐỒ BẦU</span>
            <li className=' font-thin'>Đồ Cho Mẹ Bầu</li>
          </ul>
        </div>
        <div className='flex flex-col justify-between flex-wrap normal-case border-l border-zinc-300 pl-8 text-sm 2xl:text-md font-mono tracking-tight'>
          <ul className=' 	'>
            <span className='font-semibold text-lg'>NỔI BẬT</span>
            {hotwear.map((h, index) => (
              <li key={index} className=' font-thin'>
                {h}
              </li>
            ))}
          </ul>
          <ul className=' 	'>
            <span className='font-semibold text-lg'>Bộ Sưu Tập Đặc Biệt</span>
            {specialCollect.map((s, index) => (
              <li key={index} className=' font-thin'>
                {s}
              </li>
            ))}
          </ul>
          <ul className=''>
            <span className='font-semibold text-lg'>Trình Duyệt</span>
            <li className=' font-thin'>Tất Cả Đồ</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DummyBar;
