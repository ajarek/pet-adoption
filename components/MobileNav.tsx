'use client'

import { Menu } from 'lucide-react'
import Link from 'next/link'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetHeader,
} from '@/components/ui/sheet'
import Image from 'next/image'

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu size={36} />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="border-none bg-card text-card-foreground  shadow-none lg:hidden"
      >
        <SheetHeader>
          <Link
            href="/"
            className="flex items-center gap-2 max-sm-gap-1"
          >
            <Image
              src="/images/my-logo.png"
              width={40}
              height={40}
              alt="logo"
              className='rounded-sm' 
            />
            <h1 className="font-semibold text-xl text-primary capitalize ">
              Fajny Zwierzak
            </h1>
          </Link>
        </SheetHeader>
        <div className='flex flex-col gap-4 mt-4'>
        <Link
          href="/"
          className="flex items-center  text-xl"
        >
          O nas
        </Link>
        <Link
          href="/"
          className="flex items-center  text-xl"
        >
          Pytania
        </Link>
        <Link
          href="/"
          className="flex items-center  text-xl"
        >
          Blog
        </Link>
        <Link
          href="/"
          className="flex items-center  text-xl"
        >
          Zwierzęta
        </Link>
        <Link
          href="/"
          className="flex items-center  text-xl"
        >
          Kontakt
        </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
