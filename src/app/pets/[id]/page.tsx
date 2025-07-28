"use client"
import React from 'react'
import usePetsByIdViewModel from './usePetsByIdViewModel'
import Image from 'next/image';

const page = () => {

  const {
    pet
  } = usePetsByIdViewModel();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URI;
  const photoUrl = `${baseUrl}/uploads/${pet.photo}`;

  console.log(photoUrl)


  return (
    <div className='flex justify-between px-32 py-24'>
      <span>
        <h1 className='font-bold text-2xl mb-12'>{pet.name}</h1>
        <Image alt='Foto do Pet' height={500} width={500} src={photoUrl} className='roud' />
      </span>

      <div>

      </div>
    </div>
  )
}

export default page
