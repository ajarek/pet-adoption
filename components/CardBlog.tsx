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
  id: number | string
  title: string
  description?: string
  userId: string
}

const CardBlog = ({ image, title, description, id, userId }: PropsBlog) => {
  return (
    <Card className="px-4 py-2 shadow-lg">
      <Link
        href={`/blog?id=${id}&title=${title}&description=${description}&image=${image}&userId=${userId}`}
      >
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
          <p>{description?.slice(0, 50) + '...'}</p>
        </CardContent>
        <CardFooter>
          <p>
            <span className="text-gray-500">autor: </span>
            {userId}
          </p>
        </CardFooter>
      </Link>
    </Card>
  )
}

export default CardBlog
