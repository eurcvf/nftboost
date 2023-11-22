'use client'
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules'
import { CardNFT } from "./card-nft";

import 'swiper/css'

import NFT01 from '@/assets/nfts/01.jpg'
import IconArrow from '@/assets/arrow.svg'
import Image from "next/image";

export function CarrouselCards({ data }) {
  const swiperRef = useRef();

  return (
    <div className="w-full relative">
      <button className='absolute z-10 top-1/2 -mt-6 -left-6 
      w-12 h-12 bg-blue-primary hover:bg-gray-hover-btn-slide 
      transition-all ease-linear border border-white border-opacity-5 rounded-full hidden
      @desktop:flex items-center justify-center' 
      onClick={() => swiperRef.current?.slidePrev()}>
        <Image src={IconArrow} alt="Icon Arrow"/>
      </button>
      <Swiper
        slidesPerView={4}
        spaceBetween={33}
        speed={800}
        loop={true}
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.3,
            spaceBetween: 24
          },
          640: {
            slidesPerView: 2.5,
            spaceBetween: 24
          },
          1024: {
            slidesPerView: 3.3,
            spaceBetween: 24
          },
          1250: {
            slidesPerView: 4,
            spaceBetween: 32
          }
        }}
        className="!px-3"
      >
        {data.map(({ name, thumbnail, price, price_brl }, index) => (
          <SwiperSlide key={index}>
            <CardNFT name={name} thumbnail={thumbnail} price={price} price_brl={price_brl} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button className='absolute z-10 top-1/2 -mt-6 -right-6 
      w-12 h-12 bg-blue-primary hover:bg-gray-hover-btn-slide 
      transition-all ease-linear border border-white border-opacity-5 rounded-full hidden
      @desktop:flex items-center justify-center rotate-180' 
      onClick={() => swiperRef.current?.slideNext()}>
        <Image src={IconArrow} alt="Icon Arrow"/>
      </button>
    </div>
  )
}