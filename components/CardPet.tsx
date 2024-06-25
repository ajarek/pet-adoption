import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

export type PropsPet = {
  image: string
  id: number
  name: string
  group?: string
  age: number
  vaccinated?: boolean
  breed?: string
  gender: string
  description?: string
}

const CardPet = ({
  image,
  name,
  group,
  age,
  vaccinated,
  breed,
  gender,
  description,
  id,
}: PropsPet) => {
  return (
    <Card className="px-4 py-2 shadow-lg">
      <CardHeader>
        <CardTitle>
          <Image
            src={image}
            width={300}
            height={200}
            alt="Profile"
            className="w-full  h-full  object-cover"
          />
        </CardTitle>
        <h1 className="text-2xl font-bold">{name}</h1>
      </CardHeader>
      <CardContent>
        <p>
          <span className="text-gray-500">płeć:</span> {gender}
        </p>
        <p>
          <span className="text-gray-500">wiek:</span> {age}
        </p>
      </CardContent>
      <CardFooter>
        <Link
          href={`/pet/${id}`}
          className="px-4 py-1 bg-primary rounded-sm hover:bg-primary/90"
        >
          Adoptuj
        </Link>
      </CardFooter>
    </Card>
  )
}

export default CardPet
