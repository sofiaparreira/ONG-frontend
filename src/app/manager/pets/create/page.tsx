"use client"

import ContainerInput from '@/components/Input/ContainerInput'
import Dropdown from '@/components/Input/Dropdown/Dropdown'
import { useCreatePetViewModel } from './useCreatePetViewModel';

const page = () => {

    const {
        pet, setPet
    } = useCreatePetViewModel();

    const genderOption = [
        { label: 'Fêmea', value: 'famele' },
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
        {label: 'Sim', value: 'true'},
        {label: 'Não', value: 'false'}
    ]


    return (
        <main className='px-32 py-16'>
            <h1 className='text-xl font-bold'>Cadastrar novo pet</h1>

            <form className='my-16 space-y-8 w-2/3'>
                <ContainerInput
                    label='Nome do pet'
                    type='text'
                    onChange={(e) => {
                    return setPet((prev) => ({
                        ...prev,
                        name: e.target.value,
                    }));
                }} />
                <ContainerInput
                    label='Idade'
                    type='text'
                    onChange={(e) => {
                        setPet((prev) => ({
                            ...prev,
                            age: e.target.value
                        }))
                    }}
                />

                <Dropdown
                    label='Sexo'
                    options={genderOption}
                    selected={null}
                />

                <Dropdown
                    label='Pelagem'
                    options={coatOption}
                    selected={null}
                />

                <Dropdown
                    label='Porte'
                    options={sizeOption}
                    selected={null}
                />

                <div className='grid grid-cols-3 gap-3'>
                    <Dropdown
                        label='É castrado (a)?'
                        options={defaultOption}
                        selected={null}
                    />
                    <Dropdown
                        label='É vacinado (a)?'
                        options={defaultOption}
                        selected={null}
                    />
                    <Dropdown
                        label='É vermifugado (a)?'
                        options={defaultOption}
                        selected={null}
                    />
                </div>

                <div className='flex flex-col gap-1'>
                    <label className='text-gray-700 font-medium text-sm' htmlFor="">Descrição</label>
                    <textarea
                        name=""
                        id=""
                        className='border border-gray-200 p-4 rounded-lg max-h-60 outline-none focus:ring focus:ring-indigo-600'>
                    </textarea>
                </div>



            </form>


        </main>
    )
}

export default page
