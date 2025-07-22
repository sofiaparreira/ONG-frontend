import React from 'react'

interface btnProps {
    label: string;
    type: 'submit' | 'button'; 
    onClick?: () => void;
}

const Button:React.FC<btnProps> = ({label, type, onClick}) => {
  return (
    <button 
      onClick={onClick}
      type={type}
      className='px-4 w-full font-medium py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 duration-300 cursor-pointer'>
        {label}
    </button>

  )
}

export default Button;
