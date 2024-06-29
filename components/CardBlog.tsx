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

export type PropsBlog = {
  image: string
  id: number|string
  title: string
  description?: string
}

const CardBlog = ({ image, title, description, id }: PropsBlog) => {
  return (
    <Card className="px-4 py-2 shadow-lg">
      <Link href={`/blog/${id}`}>
        <CardHeader>
          <CardTitle>
            <Image
              src={image}
              width={300}
              height={200}
              alt="Profile"
              className="h-[300px] w-full object-cover"
            />
          </CardTitle>
          <h1 className="text-2xl font-bold">{title}</h1>
        </CardHeader>
        <CardContent>
          <p>{description}</p>
        </CardContent>
      </Link>
    </Card>
  )
}

export default CardBlog
