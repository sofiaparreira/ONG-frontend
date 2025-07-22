interface PetType {
    id: number;
    name: string;
    photo: File | string;
    age: string;
    gender: string;
    coat: string; //pelagem    
    size: string; //porte
    isNeutered: boolean; //é castrado?
    isVaccinated: boolean; 
    isDewormed: boolean; //vermifugado
    description: string;
}