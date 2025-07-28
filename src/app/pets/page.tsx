"use client"

import React from 'react'
import useAllViewModel from './useAllViewModel'
import CardPet from '@/components/Card/CardPet'

const page = () => {
  const {
    pet,
    setPet,
    goToDetail
  } = useAllViewModel()

  const genderMap = {
    female: 'Feminino',
    male: 'Masculino',
  } as const

  type GenderKey = keyof typeof genderMap

  return (
    <main className='px-32 py-16'>
      <h1 className='text-xl font-bold'>Nossos Pets</h1>

      <div className='mt-8 grid grid-cols-4 gap-8'>
        {pet.map((pet) => {
          const genderKey = pet.gender.toLowerCase() as GenderKey
          const genderPT = genderMap[genderKey] || 'Desconhecido'

          return (
            <CardPet
              key={pet.id}
              id={pet.id}
              name={pet.name}
              gender={genderPT}
              age={pet.age}
              photo={pet.photo}
              coat={pet.coat}
              size={pet.size}
              description={pet.description}
              isDewormed={pet.isDewormed}
              isVaccinated={pet.isVaccinated}
              isNeutered={pet.isNeutered}
              isManager={false}
              onClick={() => goToDetail(pet.id)}
            />
          )
        })}
      </div>
    </main>
  )
}

export default page
