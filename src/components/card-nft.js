import Image from "next/image"

import Image01NFT from '@/assets/nfts/01.jpg'
import IconHeart from '@/assets/icon-heart.svg'
import IconVerify from '@/assets/verify.svg'
import IconETH from '@/assets/icon-eth.svg'
import IconClock from '@/assets/icon-clock.svg'

export function CardNFT({ thumbnail, name, price, price_brl }) {
  return (
    <div className="w-full overflow-hidden border max-w-card-nft rounded-2xl border-gray-border-nft bg-gray-area-favorite">
      <div className="relative w-full overflow-hidden h-area-image-nft">
        <Image src={thumbnail} alt='NFT 01' className="object-cover w-full h-full" />
        <div className="absolute z-10 flex items-center gap-2 px-6 py-3 rounded-full top-2 right-2 bg-gray-area-favorite border-gray-border-nft">
          <Image src={IconHeart} alt='Icon Heart'/>
          <small>0</small>
        </div>
      </div>
      <div className="w-full p-4">
        <h4 className="flex items-center gap-1 mb-1 text-xs">Cartoon Collection <Image src={IconVerify} alt="Icon Verify" /></h4>
        <h3 className="mb-4 text-lg/none font-semibold">{name}</h3>

        <div className="flex items-end justify-between mb-4">
          <div className="space-y-1">
            <span className="text-xs text-white text-opacity-70">Preço atual</span>
            <h3 className="flex items-center gap-1 text-lg font-semibold"><Image src={IconETH} alt="Icon ETH" /> {price} BTC</h3>
          </div>
          <h5 className="relative text-xs font-medium bottom-1">R$ {price_brl}</h5>
        </div>

        <button className="w-full py-4 mb-4 text-sm font-semibold transition-all ease-linear rounded-full bg-blue-primary hover:bg-blue-700">Buy now</button>

        <div className="flex items-center gap-1">
          <Image src={IconClock} alt="Icon Clock"/>
          <p className="text-xs">Fim em 4h 8m 22s</p>
        </div>
      </div>
    </div>
  )
}