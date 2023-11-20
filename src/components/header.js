import Image from "next/image";
import Link from "next/link";

import { ContainerGrid } from "./container";

import Logo from '@/assets/logo.svg'
import IconMenu from '@/assets/icon-hamburger.svg'

export function Header() {
  return (
    <header className="py-6">
      <ContainerGrid className="flex items-center justify-between">
        <Image src={Logo} alt="Logo NFTBoost" className="max-w-logo-mobile"/>

        <div className="hidden @tablet:flex">
          <nav>
            <Link href='#'>Download</Link>
            <Link href='#'>NFTs</Link>
            <Link href='#'>Rank</Link>
            <Link href='#'>FAQ</Link>
          </nav>

          <button>Conectar carteira</button>
        </div>

        <button className="w-10 h-10 flex items-center justify-center border border-white border-opacity-5 rounded bg-white bg-opacity-5 @laptop:hidden">
          <Image src={IconMenu} alt="Icon Menu" />
        </button>
      </ContainerGrid>
    </header>
  )
}