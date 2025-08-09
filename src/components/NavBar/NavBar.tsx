import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className='px-8 py-3 bg-primary-green text-white font-medium flex justify-between items-center'>
      <img src="" alt="" />
      <ul className='flex gap-8 items-center'>
        <li className='px-4 cursor-pointer'>Home</li>
        <Link href={'/pets'}>
          <li className='px-4 cursor-pointer'>Adote</li>
        </Link>
        <li className='px-4 cursor-pointer'>Apadrinhamento</li>
        <li className='px-4 cursor-pointer'>Voluntariado</li>
        <li className='px-4 cursor-pointer bg-white text-primary-green rounded-full py-1.5 hover:bg-gray-200 duration-300'>Faça uma doação</li>
      </ul>
    </nav>
  )
}

export default NavBar
