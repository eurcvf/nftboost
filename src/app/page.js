import { SectionCarrousel } from "@/components/section-carrousel";
import { SectionHero } from "@/components/section-hero";

import NFT01 from '@/assets/nfts/01.jpg'
import NFT02 from '@/assets/nfts/02.jpg'
import NFT03 from '@/assets/nfts/03.jpg'
import NFT04 from '@/assets/nfts/04.jpg'

import NFT05 from '@/assets/nfts/05.jpg'
import NFT06 from '@/assets/nfts/06.jpg'
import NFT07 from '@/assets/nfts/07.jpg'
import NFT08 from '@/assets/nfts/08.jpg'

import NFT09 from '@/assets/nfts/09.jpg'
import NFT10 from '@/assets/nfts/10.jpg'
import NFT11 from '@/assets/nfts/11.jpg'
import NFT12 from '@/assets/nfts/12.jpg'

const featureCollections = [
  {
    name: 'Cat #221', 
    thumbnail: NFT01, 
    price: '0.0721', 
    price_brl: '602,02'
  },
  {
    name: 'Snike #2331',
    thumbnail: NFT02, 
    price: '0.0721', 
    price_brl: '602,02'
  },
  {
    name: 'Skull Hatter #2311',
    thumbnail: NFT03,
    price: '0.0721', 
    price_brl: '602,02'
  },
  {
    name: 'Nox #2611',
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
    name: 'Snike #2331',
    thumbnail: NFT02,
    price: '0.0721',
    price_brl: '602,02'
  },
  {
    name: 'Skull Hatter #2311',
    thumbnail: NFT03,
    price: '0.0721',
    price_brl: '602,02'
  },
  {
    name: 'Nox #2611',
    thumbnail: NFT04,
    price: '0.0721',
    price_brl: '602,02'
  },
]

const featureSelections = [
  {
    name: 'Crazy Monkey #131',
    thumbnail: NFT05,
    price: '0.0721',
    price_brl: '602,02'
  },
  {
    name: 'Alien Shooter #2211',
    thumbnail: NFT06,
    price: '0.0721',
    price_brl: '602,02'
  },
  {
    name: 'Yordlee #1221',
    thumbnail: NFT07,
    price: '0.0721',
    price_brl: '602,02'
  },
  {
    name: 'Dragon Cannon #4401',
    thumbnail: NFT08,
    price: '0.0721',
    price_brl: '602,02'
  },
  {
    name: 'Crazy Monkey #131',
    thumbnail: NFT05,
    price: '0.0721',
    price_brl: '602,02'
  },
  {
    name: 'Alien Shooter #2211',
    thumbnail: NFT06,
    price: '0.0721',
    price_brl: '602,02'
  },
  {
    name: 'Yordlee #1221',
    thumbnail: NFT07,
    price: '0.0721',
    price_brl: '602,02'
  },
  {
    name: 'Dragon Cannon #4401',
    thumbnail: NFT08,
    price: '0.0721',
    price_brl: '602,02'
  },
]

const featureTendencies = [
  {
    name: 'Borex #171',
    thumbnail: NFT10,
    price: '0.0721',
    price_brl: '602,02'
  },
  {
    name: 'Durtre #2391',
    thumbnail: NFT11,
    price: '0.0721',
    price_brl: '602,02'
  },
  {
    name: 'Hatter #321',
    thumbnail: NFT12,
    price: '0.0721',
    price_brl: '602,02'
  },
  {
    name: 'Sailor Skull #4431',
    thumbnail: NFT09,
    price: '0.0721',
    price_brl: '602,02'
  },
  {
    name: 'Borex #171',
    thumbnail: NFT10,
    price: '0.0721',
    price_brl: '602,02'
  },
  {
    name: 'Durtre #2391',
    thumbnail: NFT11,
    price: '0.0721',
    price_brl: '602,02'
  },
  {
    name: 'Hatter #321',
    thumbnail: NFT12,
    price: '0.0721',
    price_brl: '602,02'
  },
  {
    name: 'Sailor Skull #4431',
    thumbnail: NFT09,
    price: '0.0721',
    price_brl: '602,02'
  },
]

export default function Home() {
  return (
    <>
      <SectionHero/>
      <SectionCarrousel subtitle="Destaque em Coleções" title="Coleções notáveis" data={featureCollections}/>
      <SectionCarrousel subtitle="Seleção Mensal" title="Destaque do Mês" data={featureSelections}/>
      <SectionCarrousel subtitle="Em Tendência" title="Tendências" data={featureTendencies}/>
    </>
  )
}
