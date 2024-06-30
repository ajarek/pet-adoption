import Image from 'next/image'
import React from 'react'

 const BlogId = ({searchParams}:{searchParams:{id:string, title:string, description:string, image:string, userId:string}}) => {

  return (
    <div className='w-full grid grid-cols-2 max-lg:grid-cols-1 gap-4 px-24 py-12 max-sm:px-4'>
      
        <div className='flex flex-col justify-center items-center'>

          <Image src={searchParams.image} width={400} height={300} alt='Profile' />
        </div>
        <div className='flex flex-col justify-center items-start gap-2 max-lg:px-4'>

          <h1 className='text-2xl font-bold '>{searchParams.title}</h1>
          <p>{searchParams.description}</p>
          <p><span className='text-gray-500'>autor: </span>{searchParams. userId}</p>
        </div>
      
       </div>
  )
}

export default BlogId