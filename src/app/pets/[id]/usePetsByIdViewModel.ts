'use client'

import axios from 'axios'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'



export default function usePetsByIdViewModel() {
  const [pet, setPet] = useState<PetType | null>(null)
  const { id } = useParams()
  const router = useRouter()

  useEffect(() => {
    if (!id) return

    const fetchPet = async () => {
      try {
        const response = await axios.get<PetType>(`http://localhost:3000/pets/${id}`)
        setPet(response.data)
      } catch (err: any) {
        console.log('Pet não encontrado:', err)
      }
    }

    fetchPet()
  }, [id, router]) 

  return { pet }
}
