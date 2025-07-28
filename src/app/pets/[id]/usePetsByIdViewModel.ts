'use client'

import axios from 'axios'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'



export default function usePetsByIdViewModel() {
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
  const { id } = useParams()
  const router = useRouter()
  

  useEffect(() => {
    if (!id) return

    const fetchPet = async () => {
      try {
        const response = await axios.get<PetType>(`${process.env.NEXT_PUBLIC_BASE_URI}/pet/${id}`)
        const data = response.data
        setPet(data)

        console.log("Deu", data)
      } catch (err: any) {
        console.log('Pet não encontrado:', err)
      }
    }

    fetchPet()
  }, [id, router]) 

  return { pet }
}
