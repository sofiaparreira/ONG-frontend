import React from 'react';

interface BtnProps {
  label: string;
  type: 'submit' | 'button';
  onClick?: () => void;
  icon?: React.ReactNode; // Ícone opcional
}

const Button: React.FC<BtnProps> = ({ label, type, onClick, icon }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className='px-4 w-full font-medium py-2.5 bg-primary text-white rounded-lg bg-indigo-600 hover:bg-indigo-700 duration-300 cursor-pointer flex items-center justify-center gap-3'
    >
      {icon && <span className="text-lg">{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
