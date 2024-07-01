'use client'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { updateBlog } from '@/lib/action'
import { Textarea } from '@/components/ui/textarea'
const EditBlog = ({
  searchParams,
}: {
  searchParams: {
    id: string | number
    title: string
    description: string
    image: string
    userId: string
  }
}) => {
  const {id, title, description, image, userId}=searchParams
  return (
    <div className="flex flex-col items-center justify-center px-24 py-4 gap-4 max-lg:px-4">
     
      <h1 className="text-xl ">Edycja Blogu id:{id}</h1>
      <form
        className="w-full  flex flex-col gap-4 p-6   "
        action={async (formData)=>{
          await updateBlog(formData)
        }}
      >
        <input
          type="hidden"
          name="blogId"
          value={id}
        />
        <input
          type="hidden"
          name="userId"
          value={userId}
        />
        <Input
          type="text"
          placeholder="tytuł"
          name="title"
          defaultValue={title}
        />
        <Input
          type="text"
          placeholder="foto"
          name="image"
          defaultValue={image}
        />
        <Textarea
          placeholder="opis"
          name="description"
          defaultValue={description}
        />
       <div className='flex self-end gap-4' >
       <Button
          className=""
          type="submit"
        >
          Zapisz Zmiany
        </Button>
        <Link href="/blogs">
        <Button className="bg-blue-500">Wróć</Button>
      </Link>
       </div>
       
      </form>
    </div>
  )
}

export default EditBlog
