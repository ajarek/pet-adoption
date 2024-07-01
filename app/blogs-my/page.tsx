import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'
import { getBlogs } from '@/lib/action'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import DeleteBlog from '@/components/DeleteBlog'

const MyBlogs = async () => {
  const session = await auth()
  if (!session) {
    redirect('/register')
  }
  const userId = session.user?.email
  const newBlogs = await getBlogs()
  const myBlogs = newBlogs?.filter((el: any) => el.userId === userId)

  return <div className="flex flex-col items-center justify-center px-24 py-4 gap-4 max-lg:px-4 ">

    <h1 className="text-2xl font-semibold">Moje Blogi:</h1>
    <div>
        {myBlogs?.map((el: any) => {
          return (
            <div className='flex items-center gap-4' key={el._id}>
            <Link href={`/blog?id=${(el._id).toString()}&title=${el.title}&description=${el.description}&image=${el.image}&userId=${el.userId}`}  className=" w-full flex items-center gap-4 border-2 border-black p-4">
                <Image src={el.image} alt={el.title} width={30} height={30} />
              <h2>{el.title}</h2>
              <p>{el.description.slice(0, 50)+'...'}</p>
            </Link>
            <Link href={`/editBlog?id=${(el._id).toString()}&title=${el.title}&description=${el.description}&image=${el.image}&userId=${el.userId}`} className='flex items-center justify-center px-4 bg-blue-500 h-8 rounded-sm hover:bg-blue-600'>Edytuj</Link>
            <DeleteBlog  idBlog={(el._id).toString()} />
            </div>
          )
        })}
    </div>
    
    </div>
}

export default MyBlogs
