"use client"

import ContainerInput from '@/components/Input/ContainerInput'
import Dropdown from '@/components/Input/Dropdown/Dropdown'
import { useCreatePetViewModel } from './useCreatePetViewModel';
import Button from '@/components/Button/Button';

const page = () => {

    const {
        pet, setPet, createPet
    } = useCreatePetViewModel();

    const genderOption = [
        { label: 'Fêmea', value: 'female' },
        { label: 'Macho', value: 'male' }
    ]

    const coatOption = [
        { label: 'Curta', value: 'short' },
        { label: 'Média', value: 'medium' },
        { label: 'Grande', value: 'big' }
    ]

    const sizeOption = [
        { label: 'Pequeno', value: 'small' },
        { label: 'Médio', value: 'medium' },
        { label: 'Grande', value: 'big' },
    ]

    const defaultOption = [
        { label: 'Sim', value: 'true' },
        { label: 'Não', value: 'false' }
    ]

    console.log("pet", pet)


    return (
        <main className='px-32 py-16'>
            <h1 className='text-xl font-bold'>Cadastrar novo pet</h1>

            <form onSubmit={createPet} className='my-16 space-y-8 w-3/4'>
                <ContainerInput
                    label='Nome do pet'
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
                        className='border text-sm border-gray-200 p-4 rounded-lg max-h-60 h-60 outline-none focus:ring focus:ring-indigo-600'>
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
