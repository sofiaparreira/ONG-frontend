import React from 'react';

interface BtnProps {
  label: string;
  type: 'submit' | 'button';
  onClick?: () => void;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

const Button: React.FC<BtnProps> = ({ label, type, onClick, prefix, suffix }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="px-5 w-full font-medium py-3 bg-primary-green text-white rounded-full duration-300 cursor-pointer flex items-center justify-center gap-3"
    >
      {prefix && <span className="text-lg">{prefix}</span>}
      {label}
      {suffix && <span className="text-lg">{suffix}</span>}
    </button>
  );
};

export default Button;
