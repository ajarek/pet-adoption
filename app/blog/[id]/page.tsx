import React from 'react'

const BlogId = ({params}:{params:{id:string}}) => {
  return (
    <div>BlogId {params.id}</div>
  )
}

export default BlogId