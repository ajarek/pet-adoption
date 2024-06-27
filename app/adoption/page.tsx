import type { PropsPet } from '@/components/CardPet'
import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'
import Image from 'next/image'



const Adoption = async ({ searchParams }: { searchParams: PropsPet }) => {
  const session = await auth()
  if (!session) {
    redirect('/')
  }

  const {
    id,
    name,
    image,
    gender,
    age,
    breed,
    group,
    vaccinated,
    description,
  } = searchParams

 
  

  return (
    <div className='min-h-[calc(100vh-64px)] w-full flex justify-center items-center '>
      <div className='w-1/4 bg-gradient-to-br from-amber-400 via-yellow-900 to-amber-500 p-4 rounded-lg text-xl '>
        
       <div className='w-full flex justify-center'>
        <Image src={image} alt='pet' width={60} height={60} className='rounded-lg'/>
       </div>
      <span className="capitalize">{session.user?.name} </span>adoptowałeś/aś{' '}
      {group === 'koty' ? 'kota' : 'psa'} o imieniu: {name} i id: {id}{' '}
      <p>Prosimy o stawienie się w firmie 'Fajny Zwierzak' celem podpisania umowy i odbioru  zwierzaczka.</p>
      </div>

    </div>
  )
}

export default Adoption
