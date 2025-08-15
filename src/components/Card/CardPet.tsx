import React from 'react';
import Button from '../Button/Button';
import Image from 'next/image';
import { FaPencil, FaTrash, FaHourglassHalf, FaVenusMars, FaRulerVertical } from 'react-icons/fa6';
import { FaCut } from 'react-icons/fa';

interface CardPetProps {
  id: number;
  photo: string;
  name: string;
  age: string;
  gender: string;
  coat: string;
  size: string;
  description: string;
  isNeutered: boolean;
  isVaccinated: boolean;
  isDewormed: boolean;
  isManager?: boolean;
  type: string;
  onDelete?: (id: number) => void;
  onUpdate?: (id: number) => void;
  onClick?: () => void;
}

const CardPet: React.FC<CardPetProps> = ({
  photo,
  name,
  age,
  gender,
  size,
  isManager,
  onDelete,
  onUpdate,
  id,
  type,
  onClick

}) => {
  if (!photo) return null;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URI;

  const photoPath = typeof photo === 'string' ? photo : '';

  const photoUrl = photoPath.startsWith('/uploads/') ? `${baseUrl}${photoPath}` : `${baseUrl}/uploads/${photoPath}`;


  return (
    <div className="text-sm px-3 pb-3 border border-gray-100 shadow-lg shadow-gray-100 rounded-lg ease-in-out transition hover:-translate-y-2 duration-300">
      <div className='flex justify-end gap-2 mb-3'>
        {isManager && (
          <>
            <button
              onClick={() => onDelete?.(id)}
              className='p-2.5 bg-red-100 text-red-600 rounded-full cursor-pointer hover:bg-red-200 duration-300 transition-all'>
              <FaTrash />
            </button>
            <button
              onClick={() => onUpdate?.(id)}
              className='p-2.5 bg-orange-100 text-orange-600 rounded-full cursor-pointer hover:bg-orange-200 duration-300 transition-all'>
              <FaPencil />
            </button>
          </>
        )}
      </div>
      <div>
        <div className="w-full aspect-[4/3] rounded-xl overflow-hidden relative">
          <Image
            src={photoUrl}
            alt={`Foto do pet ${name}`}
            fill
            className="object-cover"
          />
        </div>


      </div>
      <div className="my-4">
        <div className='flex justify-between'>
          <span className="font-semibold border-b-2 py-0.5 border-secondary-green uppercase">
            {name}
          </span>
          <span className='px-3 py-0.5 rounded-full border border-gray-100 bg-gray-50 text-sm text-brown font-medium'>{type}</span>
        </div>

        <div className="mt-4 flex flex-col w-fit gap-2 text-gray-700">
          <span className="flex items-center gap-2">
            <FaHourglassHalf className="text-secondary-green text-xs" />
            <span><strong>Idade:</strong> {age}</span>
          </span>
          <span className="flex items-center gap-2">
            <FaVenusMars className="text-secondary-green" />
            <span><strong>Sexo:</strong> {gender}</span>
          </span>
          <span className="flex items-center gap-2">
            <FaRulerVertical className="text-secondary-green" />
            <span><strong>Porte:</strong> {size}</span>
          </span>

        </div>
      </div>

      <Button onClick={onClick} label="Detalhes" type="button" />
    </div>
  );
};

export default CardPet;
