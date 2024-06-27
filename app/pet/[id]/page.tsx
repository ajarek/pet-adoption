import Image from 'next/image'
import React from 'react'
import pets from '@/data/pets.json'
import Link from 'next/link'
import { auth } from '@/app/api/auth/auth'

const Pet = async({ params }: { params: { id: string } }) => {
  const session = await auth()
  const { id } = params
  const pet = pets.find((pet) => pet.id === parseInt(id))
  if (!pet) return null

  return (
    <div className="min-h-[calc(100vh-64px]) w-full px-24 max-sm:px-4 py-8 grid grid-cols-2 max-lg:grid-cols-1 gap-8  ">
      <div>
        <Image
          src={pet.image}
          width={1024}
          height={453}
          alt="Profile"
          className=" w-full  h-full  object-cover  "
        />
      </div>
      <div className="flex flex-col justify-start gap-4">
        <h1 className="text-3xl font-bold">{pet.name}</h1>
        <p>
          <span className="text-gray-500">grupa:</span> {pet.group}
        </p>

        <p>
          <span className="text-gray-500">płeć:</span> {pet.gender}
        </p>
        <p>
{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:2766834846. */}
          <span className="text-gray-500">wiek:</span> {pet.age} {pet.age>4 ? 'lat' : 'lata'}
        </p>
        <p>
          <span className="text-gray-500">gatunek:</span> {pet.breed}
        </p>

        <p>
          <span className="text-gray-500">szczepiony:</span>{' '}
          {pet.vaccinated ? 'tak' : 'nie'}
        </p>
        <p>
          <span className="text-gray-500">opis:</span> {pet.description}
        </p>
        {session?(
        <Link
          href={`/adoption?id=${pet.id}&name=${pet.name}&image=${pet.image}&gender=${pet.gender}&age=${pet.age}&breed=${pet.breed}&group=${pet.group}&vaccinated=${pet.vaccinated}&description=${pet.description}`}
          className="bg-blue-500 hover:bg-blue-700 text-white text-center font-bold py-2 px-4 rounded"
        >
          Akceptuję regulamin i adoptuje
        </Link>
        ):(
          <Link href="/register" className="bg-red-500 hover:bg-red-700 text-white text-center font-bold py-2 px-4 rounded">Musisz się zalogować</Link>
        )}
          
      </div>
    </div>
  )
}

export default Pet
