import CardBlog from '@/components/CardBlog'
import Link from 'next/link'
import React from 'react'

const Blog = () => {
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
        <CardBlog
          image="https://www.padoniavets.com/sites/default/files/field/image/cats-and-dogs.jpg"
          title="Jak hodować psa z kotem?"
          description="Dobrym pomysłem jest oswojenie psiaka z kocim zapachem, np. przez położenie obok legowiska rzeczy pachnącej kotem na kilka dni przed pierwszym kontaktem. Zadbaj także, by kocie futro przejęło trochę Twojego zapachu, co pozwoli psu łatwiej zaakceptować nowe zwierzę."
          id={1}
        />
        <CardBlog
          image="https://www.padoniavets.com/sites/default/files/field/image/cats-and-dogs.jpg"
          title="Jak hodować psa z kotem?"
          description="Dobrym pomysłem jest oswojenie psiaka z kocim zapachem, np. przez położenie obok legowiska rzeczy pachnącej kotem na kilka dni przed pierwszym kontaktem. Zadbaj także, by kocie futro przejęło trochę Twojego zapachu, co pozwoli psu łatwiej zaakceptować nowe zwierzę."
          id={2}
        />
        <CardBlog
          image="https://www.padoniavets.com/sites/default/files/field/image/cats-and-dogs.jpg"
          title="Jak hodować psa z kotem?"
          description="Dobrym pomysłem jest oswojenie psiaka z kocim zapachem, np. przez położenie obok legowiska rzeczy pachnącej kotem na kilka dni przed pierwszym kontaktem. Zadbaj także, by kocie futro przejęło trochę Twojego zapachu, co pozwoli psu łatwiej zaakceptować nowe zwierzę."
          id={3}
        />
        <CardBlog
          image="https://www.padoniavets.com/sites/default/files/field/image/cats-and-dogs.jpg"
          title="Jak hodować psa z kotem?"
          description="Dobrym pomysłem jest oswojenie psiaka z kocim zapachem, np. przez położenie obok legowiska rzeczy pachnącej kotem na kilka dni przed pierwszym kontaktem. Zadbaj także, by kocie futro przejęło trochę Twojego zapachu, co pozwoli psu łatwiej zaakceptować nowe zwierzę."
          id={4}
        />
      </div>
    </div>
  )
}

export default Blog
