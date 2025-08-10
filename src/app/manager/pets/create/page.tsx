"use client"

import ContainerInput from '@/components/Input/ContainerInput'
import Dropdown from '@/components/Dropdown/Dropdown'
import { useCreatePetViewModel } from './useCreatePetViewModel';
import Button from '@/components/Button/Button';
import PhotoUploadInput from '@/components/Input/PhotoUploadInput';

const page = () => {

    const {
        pet, setPet, createPet, handleFileChange
    } = useCreatePetViewModel();

    const genderOption = [
        { label: 'Fêmea', value: 'Fêmea' },
        { label: 'Macho', value: 'Macho' }
    ]

    const coatOption = [
        { label: 'Curta', value: 'Curta' },
        { label: 'Média', value: 'Média' },
        { label: 'Grande', value: 'Grande' }
    ]

    const sizeOption = [
        { label: 'Pequeno', value: 'Pequeno' },
        { label: 'Médio', value: 'Médio' },
        { label: 'Grande', value: 'bGrandeig' },
    ]

    const defaultOption = [
        { label: 'Sim', value: 'true' },
        { label: 'Não', value: 'false' }
    ]


    return (
        <main className='px-32 py-16'>
            <h1 className='text-xl font-bold'>Cadastrar novo pet</h1>
            <p className='text-gray-500 text-sm'>Preencha as informações abaixo para cadastrar um novo pet no sistema</p>

            <form onSubmit={createPet} className='my-12 space-y-8 w-3/4'>

               <div className='grid grid-cols-2 gap-4'>
  <button
    onClick={() => setPet(prev => ({ ...prev, type: 'Cachorro' }))}
    className={`rounded-lg py-3 w-full cursor-pointer transition
      ${pet.type === 'Cachorro' ? 'bg-blue-500 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
  >
    Cachorro
  </button>

  <button
    onClick={() => setPet(prev => ({ ...prev, type: 'Gato' }))}
    className={`rounded-lg py-3 w-full cursor-pointer transition
      ${pet.type === 'Gato' ? 'bg-blue-500 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
  >
    Gato
  </button>
</div>

                <ContainerInput
                    label='Nome'
                    type='text'
                    value={pet.name}
                    onChange={(e) => {
                        setPet((prev) => ({
                            ...prev,
                            name: e.target.value,
                        }));
                    }} />

                <ContainerInput
                    label='Idade'
                    type='text'
                    value={pet.age}
                    onChange={(e) => {
                        setPet((prev) => ({
                            ...prev,
                            age: e.target.value
                        }))
                    }}
                />

                <div className='flex flex-col gap-1'>
                    <label className='text-gray-700 font-medium text-sm' htmlFor="">Foto</label>
                    <PhotoUploadInput onFileChange={handleFileChange} />
                </div>



                <div className='grid grid-cols-3 gap-3 pt-8 border-t border-gray-200'>
                    <Dropdown
                        label="Sexo"
                        options={genderOption}
                        selected={genderOption.find(opt => opt.value === pet.gender) || null}
                        onSelect={(option) => {
                            setPet((prev) => ({
                                ...prev,
                                gender: option.value as 'male' | 'female',
                            }));
                        }} />
                    <Dropdown
                        label='Pelagem'
                        options={coatOption}
                        selected={coatOption.find(opt => opt.value === pet.coat) || null}
                        onSelect={(option) => {
                            setPet((prev) => ({
                                ...prev,
                                coat: option.value as 'short' | 'medium' | 'large'
                            }))
                        }}
                    />
                    <Dropdown
                        label='Porte'
                        options={sizeOption}
                        selected={sizeOption.find(opt => opt.value === pet.size) || null}
                        onSelect={(option) => {
                            setPet((prev) => ({
                                ...prev,
                                size: option.value as 'small' | 'medium' | 'big'
                            }))
                        }}
                    />
                </div>

                <div className='grid grid-cols-3 gap-3'>
                    <Dropdown
                        label='É castrado (a)?'
                        options={defaultOption}
                        selected={
                            defaultOption.find(
                                (opt) => String(opt.value) === String(pet.isNeutered)
                            ) || null
                        }
                        onSelect={(option) => {
                            setPet((prev) => ({
                                ...prev,
                                isNeutered: option.value === 'true',
                            }))
                        }}
                    />

                    <Dropdown
                        label='É vacinado (a)?'
                        options={defaultOption}
                        selected={
                            defaultOption.find(
                                (opt) => String(opt.value) === String(pet.isVaccinated)
                            ) || null
                        }
                        onSelect={(option) => {
                            setPet((prev) => ({
                                ...prev,
                                isVaccinated: option.value === 'true',
                            }))
                        }}
                    />
                    <Dropdown
                        label='É vermifugado (a)?'
                        options={defaultOption}
                        selected={
                            defaultOption.find(
                                (opt) => String(opt.value) === String(pet.isDewormed)
                            ) || null
                        }
                        onSelect={(option) => {
                            setPet((prev) => ({
                                ...prev,
                                isDewormed: option.value === 'true',
                            }))
                        }}
                    />
                </div>

                <div className='flex flex-col gap-1'>
                    <label className='text-gray-700 font-medium text-sm' htmlFor="">Descrição</label>
                    <textarea
                        name=""
                        id=""
                        onChange={(e) => {
                            setPet((prev) => ({
                                ...prev,
                                description: e.target.value
                            }))
                        }}
                        className='border text-sm border-gray-200 p-4 rounded-lg max-h-60 h-60 outline-none focus:ring focus:ring-primary-green'>
                    </textarea>
                </div>


                <div className="grid grid-cols-3">
                    <div className="col-start-3 flex justify-end">
                        <Button label="Cadastrar" type="submit" />
                    </div>
                </div>



            </form>


        </main>
    )
}

export default page
