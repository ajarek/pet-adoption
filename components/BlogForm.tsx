'use client'

import { useState } from 'react'
import { Blog } from '@/lib/models'
import { addBlog } from '@/lib/action'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Textarea } from "@/components/ui/textarea"
const BlogForm = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')

  const router = useRouter()

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    const formData: Blog = {
      title,
      image,
      description,
    }

    try {
      await addBlog(formData)
      router.push('/blogs')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-1/2 flex flex-col items-center justify-center p-4 border-2 rounded-sm">
      <div className="flex justify-center p-2">
        <Link href="/">
          <Image
            src="/images/my-logo.png"
            alt="logo"
            width={40}
            height={40}

            className="rounded-full"
          />
        </Link>
      </div>
      <form
        className="w-full  flex flex-col gap-4 p-6   "
        onSubmit={handleSubmit}
      >
        <Input
          type="text"
          placeholder="tytuł"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          type="text"
          placeholder="foto"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Textarea
          placeholder="opis"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Button
          className=""
          type="submit"
        >
          Zapisz Blog
        </Button>
      </form>
    </div>
  )
}

export default BlogForm
