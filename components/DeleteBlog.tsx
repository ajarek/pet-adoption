'use client'

import { deleteBlog } from '@/lib/action'
import { Button } from './ui/button'
import { Trash2 } from 'lucide-react'

const DeleteBlog = ({ idBlog }: { idBlog: string }) => {
  return (
    <form
      className="text-right"
      action={deleteBlog}
    >
      <input
        type="hidden"
        name="idBlog"
        value={idBlog}
      />

      <Button
        className="px-2 h-8 "
        type="submit"
        variant={'destructive'}
      >
        <Trash2 size={16} />
      </Button>
    </form>
  )
}

export default DeleteBlog
