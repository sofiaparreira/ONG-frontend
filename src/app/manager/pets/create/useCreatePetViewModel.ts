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
    })


    return { pet, setPet }
}