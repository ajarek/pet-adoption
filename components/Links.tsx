import Image from 'next/image'
import Link from 'next/link'

const Links = () => {
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
          className='rounded-sm' 
        />
        <h1 className="font-semibold text-xl text-primary capitalize ">Fajny Zwierzak</h1>
      </Link>
      <div className='flex items-center gap-8 mr-4 '>
        <Link
          href="/"
          className="flex items-center  text-xl hover:text-primary"
        >
          O nas
        </Link>
        <Link
          href="/"
          className="flex items-center  text-xl hover:text-primary"
        >
          Pytania
        </Link>
        <Link
          href="/blogs"
          className="flex items-center  text-xl hover:text-primary"
        >
          Blogi
        </Link>
        <Link
          href="/pets"
          className="flex items-center  text-xl hover:text-primary"
        >
          Zwierzęta
        </Link>
        <Link
          href="/"
          className="flex items-center  text-xl hover:text-primary"
        >
          Kontakt
        </Link>
        </div>
    </div>
  )
}

export default Links
