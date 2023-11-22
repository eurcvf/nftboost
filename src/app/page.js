import { SectionCarrousel } from "@/components/section-carrousel";
import { SectionHero } from "@/components/section-hero";

import NFT01 from '@/assets/nfts/01.jpg'
import NFT02 from '@/assets/nfts/02.jpg'
import NFT03 from '@/assets/nfts/03.jpg'
import NFT04 from '@/assets/nfts/04.jpg'

const featureCollections = [
  {
    name: 'Cat #221', 
    thumbnail: NFT01, 
    price: '0.0721', 
    price_brl: '602,02'
  },
  {
    name: 'Cat #221', 
    thumbnail: NFT02, 
    price: '0.0721', 
    price_brl: '602,02'
  },
  {
    name: 'Cat #221', 
    thumbnail: NFT03, 
    price: '0.0721', 
    price_brl: '602,02'
  },
  {
    name: 'Cat #221', 
    thumbnail: NFT04, 
    price: '0.0721', 
    price_brl: '602,02'
  },
  {
    name: 'Cat #221', 
    thumbnail: NFT01, 
    price: '0.0721', 
    price_brl: '602,02'
  },
  {
    name: 'Cat #221', 
    thumbnail: NFT02, 
    price: '0.0721', 
    price_brl: '602,02'
  },
  {
    name: 'Cat #221', 
    thumbnail: NFT03, 
    price: '0.0721', 
    price_brl: '602,02'
  },
  {
    name: 'Cat #221', 
    thumbnail: NFT04, 
    price: '0.0721', 
    price_brl: '602,02'
  },
] 

export default function Home() {
  return (
    <>
      <SectionHero/>
      <SectionCarrousel subtitle="Destaque em Coleções" title="Coleções notáveis" data={featureCollections}/>
      <SectionCarrousel subtitle="Seleção Mensal" title="Destaque do Mês" data={featureCollections}/>
      <SectionCarrousel subtitle="Em Tendência" title="Tendências" data={featureCollections}/>
    </>
  )
}
