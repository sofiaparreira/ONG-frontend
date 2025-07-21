"use client"

import axios from "axios";
import { useState } from "react"

export function useCreatePetViewModel() {
    const [pet, setPet] = useState<PetType>({
        name: "", 
        age: "",
        gender: "", 
        coat: "",
        size: "",
        isNeutered: false,
        isVaccinated: false,
        isDewormed: false,
        description: ""
    });

    const createPet = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();

          const token = localStorage.getItem('token')
          console.log(token, "token")
          if(!token) {
            console.log("Faça login para ter acesso à esta página")
            return
          }

        const body = {
            name: pet.name,
            age: pet.age,
            gender: pet.gender,
            coat: pet.coat,
            size: pet.size,
            isNeutered: pet.isNeutered,
            isVaccinated: pet.isVaccinated,
            isDewormed: pet.isDewormed,
            description: pet.description
        }

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URI}/pet/create`, 
                body,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const data = response.data
            console.log("create pet",data);
        } catch (error: any) {
            console.log(error.message)
        }
    }


    return { pet, setPet, createPet }
}