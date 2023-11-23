import { CardCollectors } from "./card-collectors";
import { ContainerGrid } from "./container";
import { TitleSection } from "./title-section";

import Thumb10 from '@/assets/nfts/10.jpg';

const cardCollectors = [
  {
    image: Thumb10,
    name: 'Lorem Ipsum',
    percent: '25',
    price: '0.53456',
  },
  {
    image: Thumb10,
    name: 'Lorem Ipsum',
    percent: '30',
    price: '0.234565',
  },
  {
    image: Thumb10,
    name: 'Lorem Ipsum',
    percent: '25',
    price: '0.53456',
  },
  {
    image: Thumb10,
    name: 'Lorem Ipsum',
    percent: '30',
    price: '0.234565',
  },
  {
    image: Thumb10,
    name: 'Lorem Ipsum',
    percent: '25',
    price: '0.53456',
  },
  {
    image: Thumb10,
    name: 'Lorem Ipsum',
    percent: '30',
    price: '0.234565',
  },
  {
    image: Thumb10,
    name: 'Lorem Ipsum',
    percent: '25',
    price: '0.53456',
  },
  {
    image: Thumb10,
    name: 'Lorem Ipsum',
    percent: '30',
    price: '0.234565',
  },
]

export function SectionCollectors() {
  return (
    <section className="py-10 @laptop:py-28">
      <ContainerGrid>
        <TitleSection subtitle="Colecionadores em Foco" title="Principais colecionadores" />

        <div className="grid grid-cols-1 @tablet:grid-cols-2 gap-x-4 @laptop:gap-x-8 gap-y-4">
          {cardCollectors.map(({ image, name, percent, price }, index) => (
            <CardCollectors key={index} position={index + 1} image={image} name={name} percent={percent} price={price} />
          ))}
        </div>
      </ContainerGrid>
    </section>
  )
}