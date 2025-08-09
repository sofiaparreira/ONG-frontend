"use client"
import React from 'react'

interface InputProps {
    type: string;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ContainerInput:React.FC<InputProps> = ({label, type, value, onChange}) => {
  return (
    <div className='flex flex-col gap-1'>
      <label className='text-gray-700 font-medium text-sm' htmlFor="">{label}</label>
      <input 
        type={type} 
        value={value}
        onChange={onChange}
        className="border border-gray-200 rounded-lg py-2.5 px-3 w-full outline-none focus:ring focus:ring-primary-green" />
    </div>
  )
}

export default ContainerInput
