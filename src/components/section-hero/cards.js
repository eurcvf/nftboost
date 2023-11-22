import CardsLeft from '@/assets/cards-left.png'
import CardsRight from '@/assets/cards-right.png'
import Image from 'next/image'

export function CardsHero() {
  return (
    <div className='relative w-area-cards-mobile @desktop:w-full h-area-cards-mobile @desktop:h-area-cards-desktop mt-12 @desktop:mt-20'>
      <Image src={CardsLeft} alt='Cards Left' className='absolute top-0 left-8 w-1/2 z-10'/>
      <Image src={CardsRight} alt='Cards Right' className='absolute top-0 right-8 w-1/2'/>
    </div>
  )
}