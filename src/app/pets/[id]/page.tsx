"use client"
import React from 'react'
import usePetsByIdViewModel from './usePetsByIdViewModel'
import Image from 'next/image';
import { FaCapsules, FaHeart, FaHourglassHalf, FaRulerVertical, FaScissors, FaShieldDog, FaSyringe, FaUserShield, FaUserSlash, FaVenusMars } from 'react-icons/fa6';
import { FaCut } from 'react-icons/fa';
import NavBar from '@/components/NavBar/NavBar';
import Button from '@/components/Button/Button';
import { GiScalpel } from 'react-icons/gi';

const page = () => {

  const {
    pet
  } = usePetsByIdViewModel();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URI;
  const photoUrl = `${baseUrl}/uploads/${pet.photo}`;

  console.log(pet)


  return (
    <>
      <NavBar />
      <main className='px-32 py-16'>
        <h1 className='font-bold text-2xl mb-8 text-indigo-600'>{pet.name}</h1>
        <div className='grid grid-cols-2 gap-28  items-center'>

          <Image alt='Foto do Pet' height={500} width={500} src={photoUrl} className='rounded-2xl w-full' />
          <div className="flex flex-col justify-between h-full">
            <div className="mt-4 flex flex-col gap-3 text-gray-700">
              <span className="flex items-center gap-2">
                <FaHourglassHalf className="text-indigo-600 text-xs" />
                <span><strong>Idade:</strong> {pet.age}</span>
              </span>
              <span className="flex items-center gap-2">
                <FaVenusMars className="text-indigo-600" />
                <span><strong>Sexo:</strong> {pet.gender}</span>
              </span>
              <span className="flex items-center gap-2">
                <FaRulerVertical className="text-indigo-600" />
                <span><strong>Porte:</strong> {pet.size}</span>
              </span>
              <span className="flex items-center gap-2">
                <FaCut className="text-indigo-600" />
                <span><strong>Pelagem:</strong> {pet.coat}</span>
              </span>
              <span className="flex items-center gap-2">
                <FaScissors className="text-indigo-600" />
                <span><strong>Pelagem:</strong> {pet.coat}</span>
              </span>

              <span className="flex items-center gap-2">
                <FaShieldDog className="text-indigo-600" />
                <span>    
                  <strong>É castrado:</strong> {pet.isNeutered ? 'Sim' : 'Não'}
                </span>
              </span>

              <span className="flex items-center gap-2">
                <FaSyringe className="text-indigo-600" />
                <span>    
                  <strong>É vacinado:</strong> {pet.isVaccinated ? 'Sim' : 'Não'}
                </span>
              </span>

              <span className="flex items-center gap-2">
                <FaCapsules className="text-indigo-600" />
                <span>    
                  <strong>É vermifugado:</strong> {pet.isDewormed ? 'Sim' : 'Não'}
                </span>
              </span>



            </div>

            <div className="mt-6">
              <Button label='Quero adotar' type='button' icon={<FaHeart />} />
              <p className='font-medium text-gray-700 text-sm mt-2'>Ao clicar no botão, você será redirecionado para uma conversa no WhatsApp, onde poderemos te orientar melhor sobre o processo de adoção e tirar todas as suas dúvidas .</p>

            </div>
          </div>

        </div>

        <div>
          <h2 className='mt-16 font-medium'>Descrição</h2>
          <div className='bg-indigo-50 rounded-lg border-l-4 border-indigo-600 p-4 mt-4 first-letter:uppercase'>
            {pet.description}
          </div>

        </div>
      </main>
    </>
  )
}

export default page
