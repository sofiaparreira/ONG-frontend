import React from 'react';
import Button from '../Button/Button';
import Image from 'next/image';

interface CardPetProps {
  photo: string | File;
  name: string;
  age: string;
  gender: string;
  coat: string;
  size: string;
  description: string;
  isNeutered: boolean;
  isVaccinated: boolean;
  isDewormed: boolean;
}

const CardPet: React.FC<CardPetProps> = ({
  photo,
  name,
  age,
  gender,
  coat,
  size,
  description,
  isNeutered,
  isVaccinated,
  isDewormed,
}) => {
   if (!photo) return null;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URI;
  const photoUrl = `${baseUrl}/uploads/${photo}`;

  console.log(photoUrl)

  return (
    <div className="text-sm p-4 border border-gray-200 shadow-md rounded-lg">
      <div>
        <Image
          src={photoUrl}
          width={300}
          height={300}
          alt={`Foto do pet ${name}`}
        />
      </div>
      <div className="my-4">
        <span className="font-semibold border-b-2 py-0.5 border-indigo-600 uppercase">
          {name}
        </span>

        <div className="mt-4 flex flex-col w-fit gap-1">
          <span>
            <span className="font-medium">Idade:</span> {age}
          </span>
          <span>
            <span className="font-medium">Sexo:</span> {gender}
          </span>
          <span>
            <span className="font-medium">Porte:</span> {size}
          </span>
          <span>
            <span className="font-medium">Pelagem:</span> {coat}
          </span>
        </div>
      </div>

      <Button label="Detalhes" type="button" />
    </div>
  );
};

export default CardPet;
