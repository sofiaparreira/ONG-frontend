interface PetPhotoType {
  id: number;
  url: string;

}

interface PetType {
  id: number;
  name: string;
  type: string;
  photo: PetPhotoType;
  age: string;
  gender: string;
  coat: string;
  size: string;
  isNeutered: boolean;
  isVaccinated: boolean;
  isDewormed: boolean;
  description: string;
}
