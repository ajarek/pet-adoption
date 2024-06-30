import Image from 'next/image'
import pets from '@/data/pets.json'
import CardPet from '@/components/CardPet'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-8 ">
      <div className="flex flex-col items-center justify-center w-full  bg-red-400 relative ">
        <Image
          src="/images/baner.jpg"
          width={1024}
          height={453}
          alt="Profile"
          className=" w-full  h-full  object-cover  "
        />
        <div className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] z-10 "></div>
        <h1 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-primary text-6xl max-lg:text-4xl text-center font-bold z-20">
          Zaopiekuj się mną
        </h1>
      </div>
      <div className="flex flex-col items-center  w-full px-12 max-sm:px-4 py-8">
        <div className="flex flex-col items-center   w-full">
          <h2 className="text-3xl text-primary font-bold">
            Nowe zwierzczki do adopcji!
          </h2>
          <p className="font-semibold">
            Poznaj nasze urocze zwierzaki. Czekają na Ciebie.
          </p>
        </div>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8'>
        {pets
        .filter(pet => pet.id === 1 || pet.id === 18 || pet.id === 3)
        .map((pet) => (
          <CardPet
            key={pet.id}
            {...pet}
          />
        ))}

        </div>
      
      </div>
    </main>
  )
}
