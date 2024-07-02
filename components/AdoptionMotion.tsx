'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
const ImageMotion = ({
  image,
  userName,
  name,
  id,
  group,
}: {
  image: string
  userName: string
  name: string
  id: number
  group: string
}) => {
  return (
    <motion.div
      className="flex justify-center  "
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="w-1/4 max-lg:w-1/2 bg-gradient-to-br from-amber-400 via-yellow-900 to-amber-500 p-4 rounded-lg text-white text-xl ">
        <div className="w-full flex justify-center">
          <Image
            src={image}
            alt="pet"
            width={60}
            height={60}
            className="rounded-lg"
          />
        </div>
        <span className="capitalize">{userName} </span>adoptowałeś/aś{' '}
        {group && group === 'koty' ? 'kota' : 'psa'} o imieniu: {name} i id:{' '}
        {id}{' '}
        <p>
          Prosimy o stawienie się w firmie{' '}
          <span className=" underline">Fajny Zwierzak</span> celem podpisania
          umowy i odbioru zwierzaczka.
        </p>
      </div>
    </motion.div>
  )
}

export default ImageMotion
