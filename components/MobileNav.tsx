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
import { usePathname } from 'next/navigation'

const MobileNav = () => {
  const pathname = usePathname()
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
          href="/about"
          className={`flex items-center  text-xl hover:text-primary ${
            pathname === '/about' ? 'active ' : ''}`}
        >
          O nas
        </Link>
        <Link
          href="/questions"
          className={`flex items-center  text-xl hover:text-primary ${
            pathname === '/questions' ? 'active ' : ''}`}
        >
          Pytania
        </Link>
        <Link
          href="/blogs"
          className={`flex items-center  text-xl hover:text-primary ${
            pathname === '/blogs' ? 'active ' : ''}`}
        >
          Blogi
        </Link>
        <Link
          href="/pets"
          className={`flex items-center  text-xl hover:text-primary ${
            pathname === '/pets' ? 'active ' : ''}`}
        >
          Zwierzęta
        </Link>
        <Link
          href="/contact"
          className={`flex items-center  text-xl hover:text-primary ${
            pathname === '/contact' ? 'active ' : ''}`}
        >
          Kontakt
        </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
