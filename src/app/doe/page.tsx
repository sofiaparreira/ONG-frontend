import NavBar from '@/components/NavBar/NavBar'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <main>
        <NavBar />

        <section className='px-48 py-16'>
            <Image className='w-full object-cover' src={'/image_doe.png'} alt='' width={500} height={500} />
            <h1 className='text-primary-green text-2xl font-bold'>Ajude nossa missão</h1>
            <p className='text-sm text-gray-600'>Sua doação ajuda a comprar ração, pagar vacinas e garantir o bem-estar dos nossos animais. Qualquer valor faz diferença!</p>
        </section>

        <section className='px-48'>
            <h2 className='text-xl font-bold'>Como sua doação faz diferença:</h2>
            <div className="gri grid-cols-3 gap-8">
                <div className='p-4 rounded-lg border border-gray-200'>
                    <h3 className='font-semibold'>Com R$ 20,00</h3>
                </div>
            </div>
        </section>
      
    </main>
  )
}

export default page
