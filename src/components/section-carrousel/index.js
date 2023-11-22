'use client'

import { CardNFT } from "../card-nft";
import { ContainerGrid } from "../container";
import { TitleSection } from "../title-section";

import NFT01 from '@/assets/nfts/01.jpg'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'

export function SectionCarrousel() {
  return (
    <section>
      <ContainerGrid>
        <TitleSection subtitle="Destaque em Coleções" title="Coleções notáveis"/>

        <Swiper
          slidesPerView={4}
          spaceBetween={33}
          speed={800}
          loop={true}
          modules={[Navigation]}
        >
          <SwiperSlide>
            <CardNFT name="Cat #221" thumbnail={NFT01} price="0.0721" price_brl="602,82" />
          </SwiperSlide>
          <SwiperSlide>
            <CardNFT name="Cat #221" thumbnail={NFT01} price="0.0721" price_brl="602,82" />
          </SwiperSlide>
          <SwiperSlide>
            <CardNFT name="Cat #221" thumbnail={NFT01} price="0.0721" price_brl="602,82" />
          </SwiperSlide>
          <SwiperSlide>
            <CardNFT name="Cat #221" thumbnail={NFT01} price="0.0721" price_brl="602,82" />
          </SwiperSlide>
          <SwiperSlide>
            <CardNFT name="Cat #221" thumbnail={NFT01} price="0.0721" price_brl="602,82" />
          </SwiperSlide>
        </Swiper>
      </ContainerGrid>
    </section>
  )
}