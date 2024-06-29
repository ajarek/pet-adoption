import CardBlog from '@/components/CardBlog'
import Link from 'next/link'
import {getBlogs} from '@/lib/action'

const Blog =async () => {
 const newBlogs= await getBlogs()
 
  return (
    <div className="flex flex-col items-center justify-center px-24 py-4 gap-4">
      <div className="flex items-center gap-4">
        <h1 className="text-3xl font-bold">Lista Blogów</h1>
        <Link
          href="/blog-add"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Dodaj Blog
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {newBlogs && newBlogs.map((el:any)=>{
          return(
            <>
            <CardBlog key={el._id}
            id={el._id}
            image={el.image}
            title={el.title}
            description={(el.description).slice(0,50)+'...'}
            
          />
          </>
          )
        })}
       
      
      </div>
    </div>
  )
}

export default Blog
