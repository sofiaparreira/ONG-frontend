"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react"

export function useCreatePetViewModel() {
  const router = useRouter()
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [pet, setPet] = useState<PetType>({
    id: 0,
    name: "",
    type: "",
    age: "",
    gender: "",
    coat: "",
    size: "",
    isNeutered: false,
    isVaccinated: false,
    isDewormed: false,
    description: "",
    photo: {
      id: 0,
      url: "",
      petId: 0
    }
  });



const createPet = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const token = localStorage.getItem('token');
  if (!token) {
    router.push('/manager/login')
    console.log("Faça login para ter acesso à esta página");
    return;
  }

  if (!photoFile) {
    alert('Envie uma foto do pet!');
    return;
  }

  try {
    const formData = new FormData();
    formData.append('name', pet.name);
    formData.append('age', String(pet.age));
    formData.append('gender', pet.gender);
    formData.append('coat', pet.coat);
    formData.append('size', pet.size);
    formData.append('isNeutered', String(pet.isNeutered));
    formData.append('isVaccinated', String(pet.isVaccinated));
    formData.append('isDewormed', String(pet.isDewormed));
    formData.append('description', pet.description);
    formData.append('type', pet.type); // Não esquece o type!

    formData.append('photo', photoFile);

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URI}/pet/create`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    console.log("create pet", response.data);
    router.push('/manager/pets');
  } catch (error: any) {
    console.log(error.message);
  }
};



  // --- HANDLE PHOTO ---


const handleFileChange = (file: File | null) => {
  if (file) {
    console.log("Arquivo selecionado:", file.name, file.type, file.size, "bytes");
    setPhotoFile(file);
  } else {
    console.log("Nenhum arquivo selecionado.");
    setPhotoFile(null);
  }
};


  console.log(pet.photo)


  return { pet, setPet, setPhotoFile, createPet, handleFileChange }
}