'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Links = () => {
  const pathname = usePathname()
  return (
    <div className="max-lg:hidden w-full flex items-center justify-between  ">
      <Link
        href="/"
        className="flex items-center gap-2 max-sm-gap-1"
      >
        <Image
          src="/images/my-logo.png"
          width={40}
          height={40}
          alt="logo"
          className="rounded-sm"
        />
        <h1 className="font-semibold text-xl text-primary capitalize ">
          Fajny Zwierzak
        </h1>
      </Link>

      <div className="flex items-center gap-8 mr-4 ">
        <Link
          href="/about"
          className={`flex items-center  text-xl hover:text-primary ${
            pathname === '/about' ? 'active ' : ''
          }`}
        >
          O nas
        </Link>
        <Link
          href="/questions"
          className={`flex items-center  text-xl hover:text-primary ${
            pathname === '/questions' ? 'active ' : ''
          }`}
        >
          Pytania
        </Link>
        <Link
          href="/blogs"
          className={`flex items-center  text-xl hover:text-primary ${
            pathname === '/blogs' ? 'active ' : ''
          }`}
        >
          Blogi
        </Link>
        <Link
          href="/pets"
          className={`flex items-center  text-xl hover:text-primary ${
            pathname === '/pets' ? 'active ' : ''
          }`}
        >
          Zwierzęta
        </Link>
        <Link
          href="/contact"
          className={`flex items-center  text-xl hover:text-primary ${
            pathname === '/contact' ? 'active ' : ''
          }`}
        >
          Kontakt
        </Link>
      </div>
    </div>
  )
}

export default Links
