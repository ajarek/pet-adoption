'use client'

import { deleteBlog } from '@/lib/action'
import { Button } from './ui/button'

const DeleteBlog = ({ idBlog }: { idBlog: string }) => {
 
  return (
    <form
      className='text-right'
      action={deleteBlog}
    >
      <input
        type='hidden'
        name='idBlog'
        value={idBlog}
      />

      <Button
        className='h-8 '
        type='submit'
       
      >
        Usuń
      </Button>
    </form>
  )
}

export default DeleteBlog