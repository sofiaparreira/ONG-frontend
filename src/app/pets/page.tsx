"use client"

import React from 'react'
import useAllViewModel from './useAllViewModel'
import CardPet from '@/components/Card/CardPet';

const page = () => {

  const {
    pet,
    setPet
  } = useAllViewModel();

console.log(pet)
  return (
    <main className='px-32 py-16'>
        <h1 className='text-xl font-bold'>Nossos Pets</h1>

        <div className='mt-8 grid grid-cols-4 gap-8'>
          {pet.map((pet) =>  (
            <CardPet
              id={pet.id}
              key={pet.id}
              name={pet.name}
              gender={pet.gender}
              age={pet.age}
              photo={pet.photo}
              coat={pet.coat}
              size={pet.size}
              description={pet.description}
              isDewormed={pet.isDewormed}
              isVaccinated={pet.isVaccinated}
              isNeutered={pet.isNeutered}
              isManager={false}
            />
          ))}
        </div>



      
    </main>
  )
}

export default page
