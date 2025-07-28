"use client"

import React from 'react'
import useAllViewModel from './useAllViewModel'
import CardPet from '@/components/Card/CardPet'
import NavBar from '@/components/NavBar/NavBar'

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

  const sizeMap = {
    small: 'Pequeno',
    medium: 'Médio',
    big: 'Grande',
  } as const

  const coatMap = {
    short: 'Curta',
    medium: 'Média',
    long: 'Longa',
  } as const

  type GenderKey = keyof typeof genderMap
  type SizeKey = keyof typeof sizeMap
  type CoatKey = keyof typeof coatMap

  return (
    <>
      <NavBar />
      <main className='px-32 py-16'>
        <h1 className='text-xl font-bold'>Nossos Pets</h1>

        <div className='mt-8 grid grid-cols-4 gap-8'>
          {pet.map((pet) => {
            const genderKey = pet.gender.toLowerCase() as GenderKey
            const sizeKey = pet.size.toLowerCase() as SizeKey
            const coatKey = pet.coat.toLowerCase() as CoatKey

            const genderPT = genderMap[genderKey] || 'Desconhecido'
            const sizePT = sizeMap[sizeKey] || 'Desconhecido'
            const coatPT = coatMap[coatKey] || 'Desconhecido'

            return (
              <CardPet
                key={pet.id}
                id={pet.id}
                name={pet.name}
                gender={genderPT}
                age={pet.age}
                photo={pet.photo}
                coat={coatPT}
                size={sizePT}
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
    </>
  )
}

export default page
