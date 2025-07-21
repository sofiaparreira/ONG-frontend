"use client"
import ContainerInput from '@/components/Input/ContainerInput'
import React from 'react'
import useLoginViewModel from './useLoginViewModel'
import Button from '@/components/Button/Button'

const page = () => {

    const {
        user, setUser, handleLogin
    } = useLoginViewModel()

  return (
    <main className='flex justify-center items-center flex-col h-screen'>
        <div className='w-1/2 items-center space-y-2'>
                <div className='space-y-1 mb-16'>
                    <h1 className='text-xl font-bold'>Login para administração do site</h1>
                    <p className='text-gray-500'>Página somente para pessoas autorizadas</p>
                </div>

            <div className='mb-8'>
                <ContainerInput
                    type='text'
                    label='E-mail'
                    value={user.email}
                    onChange={(e) => {
                        setUser((prev) => ({
                            ...prev,
                            email: e.target.value
                        }))
                    }}
                />
                <ContainerInput
                    type='text'
                    label='Senha'
                    value={user.password}
                    onChange={(e) => {
                        setUser((prev) => ({
                            ...prev,
                            password: e.target.value
                        }))
                    }}
                />
            </div>

            <Button label='Entrar' type='button'   onClick={() => handleLogin(user.email, user.password)}/>
        </div>
      
    </main>
  )
}

export default page
