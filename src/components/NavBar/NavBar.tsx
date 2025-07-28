import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className='px-8 py-3 bg-indigo-500 text-white font-medium flex justify-between'>
      <img src="" alt="" />
      <ul className='flex gap-8'>
        <li className='px-4 cursor-pointer'>Home</li>
        <Link href={'/pets'}>
          <li className='px-4 cursor-pointer'>Adote</li>
        </Link>
        <li className='px-4 cursor-pointer'>Apadrinhamento</li>
        <li className='px-4 cursor-pointer'>Voluntariado</li>
        <li className='px-4 cursor-pointer bg-white text-indigo-600 rounded-lg py-1 hover:bg-gray-200 duration-300'>Faça uma doação</li>
      </ul>
    </nav>
  )
}

export default NavBar
