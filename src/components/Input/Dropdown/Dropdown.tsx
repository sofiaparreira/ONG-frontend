"use client"
import React, { useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'

type OptionType = {
    label: string;
    value: string;
}

interface DropdownProps {
    label: string;
    options: OptionType[];
    selected: OptionType | null;
    onSelect?: (option: OptionType) => void;
}


const Dropdown:React.FC<DropdownProps> = ({selected, options, label, onSelect}) => {

    const [openDropdown, setOpenDropdown] = useState<boolean>(false)

    const toggleDropdown = () => {
        setOpenDropdown(!openDropdown)
    }

    const handleOptionClick = (option: OptionType, e: React.MouseEvent) => {
        e.stopPropagation();
        onSelect?.(option)
        setOpenDropdown(false);
    }


    return (
        <div className='flex flex-col gap-1'>
            
            <label className='text-gray-700 font-medium text-sm' htmlFor="">{label}</label>
            <div className='relative w-full'>
                <button 
                    onClick={toggleDropdown}
                    type='button'
                    className='focus:ring focus:ring-indigo-600 border cursor-pointer border-gray-200 rounded-lg p-3 w-full flex items-center justify-between'>
                <span>{selected ? selected.label : "Selecione uma opção"}</span>
                    <BiChevronDown className={`text-xl text-gray-500 ${openDropdown ? 'rotate-180' : ''}`} />
                </button>

            {openDropdown && (
                <div className='absolute z-20 w-full mt-2 rounded-lg bg-white border border-gray-200 shadow-lg animate-in fade-in-0 zoom-in-95'>
                    <div className='overflow-y-auto max-h-60 flex flex-col'>
                        {options.map((opt) => (
                        <span 
                            onClick={(e) => handleOptionClick(opt, e)}
                            className='px-4 py-3 hover:bg-gray-50 duration-300 cursor-pointer'
                            key={opt.value}
                            >{opt.label}</span>

                        ))}
                    </div>
                </div>
            )}

            </div>
        </div>
    )
}

export default Dropdown
