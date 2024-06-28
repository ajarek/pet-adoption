import type { PropsPet } from '@/components/CardPet'
import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import ImageMotion from '@/components/AdoptionMotion'



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
     <ImageMotion   image={image} userName={session?.user?.name || ''} name={name} id={id} group={group || ''} />
    </div>
  )
}

export default Adoption
