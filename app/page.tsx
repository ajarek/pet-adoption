import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start ">
      <div className="flex flex-col items-center justify-center w-full  bg-red-400 relative ">
        <Image
          src="/images/baner.jpg"
          width={1024}
          height={453}
          alt="Profile"
          className=' w-full  h-full  object-cover  '
        />
        <div className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] z-10 "></div>
        <h1 className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-primary text-6xl font-bold z-20'>Zaopiekuj się mną</h1>
      </div>
    </main>
  )
}
