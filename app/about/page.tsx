
import Image from 'next/image'

const About = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-8 ">
    <div className="flex flex-col items-center justify-center w-full  bg-red-400 relative ">
      <Image
        src="/images/baner2.jpg"
        width={1024}
        height={453}
        alt="Profile"
        className=" w-full  h-full  object-cover  "
      />
      <div className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.4)] z-10 "></div>
      <h1 className="absolute top-[20%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-primary text-6xl max-lg:text-4xl text-center font-bold z-20">
        Azyl Adopcyjny 
      </h1>
    </div>
    </main>
  )
}

export default About