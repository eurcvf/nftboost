import { ContainerGrid } from "./container";

import GooglePlay from '@/assets/google.svg';
import PlayStore from '@/assets/apple.svg';
import Image from "next/image";

export function SectionBanner() {
  return (
    <section>
      <ContainerGrid>
        <div className="w-full h-auto @tablet:h-area-banner bg-banner bg-center bg-cover bg-no-repeat flex flex-col items-center justify-center rounded-xl py-10 @laptop:py-0 px-2 @laptop:px-0">
          <h2 className="text-3xl @tablet:text-5xl/snug @laptop:text-6xl/snug font-poppins text-center mb-4">Abra as Portas para a Próxima Revolução Digital!</h2>
          <p className="text-center text-sm @tablet:text-xl mb-6 max-w-xl">Descubra, adquira e tenha os nfts mais valiosos do Universo Digital. Sua oportunidade, sua história!</p>
          <div className="flex flex-col @tablet:flex-row items-center gap-6">
            <Image src={GooglePlay} alt="Google Play" />
            <Image src={PlayStore} alt="Play Store" />
          </div>
        </div>
      </ContainerGrid>
    </section>
  )
}