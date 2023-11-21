import Image from "next/image";
import Link from "next/link";

import { ContainerGrid } from "./container";

import Logo from '@/assets/logo.svg'
import IconMenu from '@/assets/icon-hamburger.svg'

const itemsNav = [
  'Download',
  'NFTs',
  'Rank',
  'FAQ'
]

export function Header() {
  return (
    <header className="py-6">
      <ContainerGrid className="flex items-center justify-between">
        <Image src={Logo} alt="Logo NFTBoost" className="max-w-logo-mobile"/>

        <div className="hidden @tablet:flex flex-1 max-w-nav-header items-center justify-between">
          <nav className="flex items-center gap-12">
            {itemsNav.map((item, index) => (
              <Link href='#' key={index} className="font-medium font-inter hover:text-blue-primary transition-all ease-linear">{item}</Link>
            ))}
          </nav>

          <button className="bg-blue-primary py-3 px-7 rounded-full font-medium hover:bg-blue-700 transition-all ease-linear">Conectar carteira</button>
        </div>

        <button className="w-10 h-10 flex items-center justify-center border border-white border-opacity-5 rounded bg-white bg-opacity-5 @laptop:hidden">
          <Image src={IconMenu} alt="Icon Menu" />
        </button>
      </ContainerGrid>
    </header>
  )
}