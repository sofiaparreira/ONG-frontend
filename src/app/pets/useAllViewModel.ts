"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react"

export default function useAllViewModel() {

    const [pet, setPet] = useState<PetType[]>([])
    const router = useRouter()

    const getPet = useCallback( async () => {

        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/pet`)

            const data = response.data;
            setPet(data)

            
        } catch (error) {
            console.log("Erro ao mostrar pets", error);
        }
    },[])

    const goToDetail = (id: number) => {
    router.push(`/pets/${id}`);
}


    useEffect(() => {
        getPet();
    },[getPet])

    return {pet, setPet, goToDetail}
}