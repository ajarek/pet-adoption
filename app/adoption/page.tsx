import type {PropsPet} from '@/components/CardPet'

const Adoption = ({searchParams}: {searchParams: PropsPet}) => {
   const{id, name,image,gender,age,breed,group,vaccinated,description}= searchParams
  return (
    <div>Adoptowałeś/aś {group} {name}  id: {id} </div>
  )
}

export default Adoption