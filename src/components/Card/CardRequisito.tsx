import React from 'react'

interface CardRequisitoProps {
    children: React.ReactNode;
    
}
const CardRequisito:React.FC<CardRequisitoProps> = ({children}) => {
  return (
    <div className='w-full px-4 py-8 bg-white outline-2 outline-primary-green/10 text-center flex flex-col justify-center items-center space-y-2 shadow-md shadow-gray-200 rounded-xl'>
      {children}
    </div>
  )
}

export default CardRequisito
