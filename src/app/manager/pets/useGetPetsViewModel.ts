import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function useGetPetsViewModel() {

    const [pet, setPet] = useState<PetType[]>([])
    const router = useRouter()


    const getPet = useCallback(async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/pet`)
            const data = response.data;
            setPet(data)
        } catch (error) {
            console.log("Erro ao mostrar pets", error);
        }
    }, [])


    // ----- DELETE PET -----
    const deletePet = async (id: number) => {
        const token = localStorage.getItem('token');
        if (!token) {
            console.log("Faça login para ter acesso à esta página");
            return;
        }
        try {
            await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URI}/pet/delete/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            });
            getPet();
        } catch (error: any) {
            console.error("Erro ao deletar pet:", error?.response?.data || error.message);
        }
    };


    // ----- UPDATE PET -----
    const updatePet = async (id: number) => {
        try {
            const response = axios.put(`${process.env.NEXT_PUBLIC_BASE_URI}/pet/update/${id}`, {
                
            })
        } catch (error) {

        }
    }


    const goToCreate = () => {
        router.push('/manager/pets/create')
    }
    useEffect(() => {
        getPet();
    }, [getPet])


    return { pet, deletePet, goToCreate }
}