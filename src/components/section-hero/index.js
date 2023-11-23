import Image from "next/image";

import IconBoost from '@/assets/icon-boost.svg';

import SmallNFT from '@/assets/nft-small.png';
import SmallDoubleNFT from '@/assets/double-nft.png'
import GooglePlay from '@/assets/google.svg';
import AppleStore from '@/assets/apple.svg';
import { ContainerGrid } from "../container";
import { CardsHero } from "./cards";

export function SectionHero() {
  return (
    <section className="pt-36 bg-hero-pattern bg-no-repeat overflow-hidden">
      <ContainerGrid className="flex flex-col items-center">
        <h3 className="flex flex-col @tablet:flex-row items-center gap-2 text-sm @tablet:text-base @desktop:text-xl mb-3">
          <Image src={IconBoost} alt="Icon Boost"/>
          <span className="text-white text-opacity-70">Adentre um reino de possibilidades infinitas</span>
        </h3>
        <h1 className="@mobile:text-4xl/normal @tablet:text-5xl/normal @desktop:text-7xl/normal text-center font-poppins mb-4">
          Explore um Universo
          <div className="inline-block align-middle mx-2 p-1 bg-white bg-opacity-5 border border-white border-opacity-5 rounded-full w-24 @desktop:w-32">
            <Image src={SmallNFT} alt="Small NFT01" className="w-11"/>
          </div>
          Digital de
          <Image src={SmallDoubleNFT} alt="Small NFT02" className="inline-block w-16 mx-2" />
          Colecionáveis Únicos!
        </h1>
        <p className="w-full @tablet:max-w-content-desc-hero text-center text-sm @desktop:text-xl @tablet:text-base mb-6 @desktop:mb-9">Adentre um reino de possibilidades infinitas e mergulhe nas coleções de NFT, onde a arte, a cultura e a inovação se unem para criar experiências verdadeiramente exclusivas.</p>

        <div className="flex flex-col @tablet:flex-row items-center gap-4">
          <Image src={GooglePlay} alt="Imagem GooglePlay" />
          <Image src={AppleStore} alt="Imagem AppleStore" />
        </div>

        <CardsHero/>

        <div className="w-full border-top border-white border-opacity-5 mt-10 @desktop:mt-9"></div>
      </ContainerGrid>
    </section>
  )
}