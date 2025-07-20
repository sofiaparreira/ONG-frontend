interface PetType {
    name: string;
    age: string;
    gender: 'male' | 'female' | '';
    coat: 'short' | 'medium' | 'big' | ''; //pelagem    
    size: 'small' | 'medium' | 'big' | ''; //porte
    isNeutered: boolean; //é castrado?
    isVaccinated: boolean; 
    isDewormed: boolean; //vermifugado
    description: string;
}