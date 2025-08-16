import Link from 'next/link'
import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const NavBar = () => {

  const [isOpenAdoteDropdown, setIsOpenAdoteDropdown] = useState<boolean>(false)

  const toggleOpenAdoteDropdown = () => {
    setIsOpenAdoteDropdown(!isOpenAdoteDropdown)
  }
  return (
    <nav className='px-8 py-3 bg-primary-green text-white flex justify-between items-center'>
      <img src="" alt="" />
      <ul className='flex gap-8 items-center'>
        <li className='px-4 cursor-pointer'><Link href={'/'}>Home</Link></li>
     
          <div className="relative">
            <li onClick={toggleOpenAdoteDropdown} className='px-4 cursor-pointer flex gap-3 items-center justify-center'>Adote <FaChevronDown className='text-sm' /></li>
            
            {isOpenAdoteDropdown && (
            <ul className='rounded-md bg-white absolute z-10 text-gray-900 font-base mt-2 w-40'>
              <li className='py-3 rounded-md cursor-pointer px-4 hover:bg-gray-50'><Link href={'/pets'}>Cães</Link></li>
              <li className='py-3 rounded-md cursor-pointer px-4 hover:bg-gray-50'>Gatos</li>
            </ul>
                    )}
          </div>
        


        <li className='px-4 cursor-pointer'>Voluntariado</li>
        <li className='px-4 cursor-pointer bg-white text-primary-green rounded-full py-1.5 hover:bg-gray-200 duration-300'><Link href={'/doe'}>Faça uma doação</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar
