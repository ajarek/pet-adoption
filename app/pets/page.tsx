'use client'
import { motion } from 'framer-motion'
import CardPet from '@/components/CardPet'
import pets from '@/data/pets.json'

const Pets = () => {
 
  
  return (
    <div className=''>
       <motion.div
        className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8'
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
       
      >
    {pets
    .map((pet) => (
      <CardPet
        key={pet.id}
        {...pet}
      />
    ))}
     </motion.div>
    </div>
  )
}

export default Pets