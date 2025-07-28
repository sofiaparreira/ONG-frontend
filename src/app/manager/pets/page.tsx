"use client"

import CardPet from '@/components/Card/CardPet'
import React from 'react'
import useGetPetsViewModel from './useGetPetsViewModel'
import Button from '@/components/Button/Button'
import { FaCirclePlus } from 'react-icons/fa6'

const page = () => {

    const {
        pet, deletePet, goToCreate
    } = useGetPetsViewModel();
  return (
     <main className='xl:px-32 lg:px-24 md:px-16 md:py-16 px-5 py-8'>
        <div className='grid xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-3'>
          <h1 className='text-xl font-bold xl:col-span-5 md:col-span-3 sm:col-span-2 max-sm:mb-6'>Nossos Pets</h1>
          <Button label='Cadastrar Pet' type='button' icon={<FaCirclePlus /> } onClick={goToCreate} />
        </div>

        <div className='mt-8 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-8'>
          {pet.map((pet) =>  (
            <CardPet
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
              id={pet.id}
              isManager={true}
              onDelete={() => deletePet(pet.id)}
            />
          ))}
        </div>
    </main>
  )
}

export default page
