"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react"

export function useCreatePetViewModel() {
  const router = useRouter()
  const [pet, setPet] = useState<PetType>({
        name: "", 
        age: "",
        gender: "", 
        coat: "",
        size: "",
        isNeutered: false,
        isVaccinated: false,
        isDewormed: false,
        description: "",
        photo: "",
        id: 0
    });

const createPet = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const token = localStorage.getItem('token');
  if (!token) {
    console.log("Faça login para ter acesso à esta página");
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

    if (pet.photo) {
      formData.append('photo', pet.photo);
    }

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
    router.push('/manager/pets')
  } catch (error: any) {
    console.log(error.message);
  }
};



    // --- HANDLE PHOTO ---

const handleFileChange = (file: File | null) => {
  if (file) {
    console.log("Arquivo selecionado:", file.name, file.type, file.size, "bytes");

    setPet((prev) => ({
      ...prev,
      photo: file, 
    }));
  } else {
    console.log("Nenhum arquivo selecionado.");
  }
};


console.log(pet.photo)


    return { pet, setPet, createPet, handleFileChange }
}