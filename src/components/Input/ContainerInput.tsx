"use client"
import React from 'react'

interface InputProps {
    type: string;
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ContainerInput:React.FC<InputProps> = ({label, type}) => {
  return (
    <div className='flex flex-col gap-1'>
      <label className='text-gray-700 font-medium text-sm' htmlFor="">{label}</label>
      <input 
        type={type} 
        className="border border-gray-200 rounded-lg py-3 px-3 w-full outline-none focus:ring focus:ring-indigo-600" />
    </div>
  )
}

export default ContainerInput
