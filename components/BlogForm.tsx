import { addBlog } from '@/lib/action'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Textarea } from '@/components/ui/textarea'
import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'
const BlogForm = async () => {
  const session = await auth()
  if (!session) {
    redirect('/register')
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
        action={addBlog}
      >
        <input
          type="hidden"
          name="userId"
          value={session.user?.email || ''}
        />
        <Input
          type="text"
          placeholder="tytuł"
          name="title"
        />
        <Input
          type="text"
          placeholder="foto"
          name="image"
        />
        <Textarea
          placeholder="opis"
          name="description"
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
