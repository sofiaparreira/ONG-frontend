import axios from "axios"
import { get } from "http"
import { useCallback, useEffect, useState } from "react"

export default function useMainViewModel() {

    const chave_pix = "36278602000152"
    const [showTooltip, setShowTooltip] = useState<boolean>(false)
    const [pets, setPets] = useState<PetType[]>([]);

    const handleCopyPix = async () => {
        try {
            await navigator.clipboard.writeText(chave_pix)
            setShowTooltip(true)
            setTimeout(() => setShowTooltip(false), 400)
        } catch (error:unknown) {
            console.log("Erro ao copiar", error)
        }
    }


    const getPets = useCallback(async () => {
        try {
            const response = await axios.get<PetType[]>(`${process.env.NEXT_PUBLIC_BASE_URI}/pet/`);
            const data = response.data;
            console.log(data)
            setPets(data.slice(0,4));
        } catch (error) {
           console.log("Erro mostrar pets") 
        }
    },[])

    useEffect(() => {
        getPets()
    })

    return {showTooltip, handleCopyPix, pets, setPets}
}