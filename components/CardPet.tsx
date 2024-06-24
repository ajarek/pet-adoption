import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { group } from "console"
import Image from "next/image"
import { Button } from "./ui/button"
  
type PropsPet = {
    image: string
    id:number
    name:string
    group:string
    age:number
    vaccinated:boolean
    breed:string
    gender:string
    description:string
}


const CardPet = ({ image, name, group, age, vaccinated, breed, gender, description, id }: PropsPet) => {
  return (
    <Card className="px-4 py-2 shadow-lg">
  <CardHeader>
    <CardTitle>
      <Image
        src={image}
        width={300}
        height={200}
        alt="Profile"
        className=' w-full  h-full  object-cover  '
      />
    </CardTitle>
   <h1 className="text-2xl font-bold">{name}</h1>
  </CardHeader>
  <CardContent>
    <p>{group}</p>
    <p>{vaccinated?'zasczepiony':'nie zasczepiony'}</p>
    <p>{breed}</p>
    <p>{gender}</p>
    <p>{age}</p>

    <CardDescription>{description}</CardDescription>
  </CardContent>
  <CardFooter>
    <Button>Adoptuj </Button>
  </CardFooter>
</Card>

  )
}

export default CardPet