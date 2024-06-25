import CardPet from '@/components/CardPet'
import pets from '@/data/pets.json'

const Pets = () => {
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8'>
    {pets
    .map((pet) => (
      <CardPet
        key={pet.id}
        {...pet}
      />
    ))}

    </div>
  )
}

export default Pets