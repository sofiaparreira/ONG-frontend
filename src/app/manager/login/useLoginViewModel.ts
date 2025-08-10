"use client"
import axios from "axios"
import { useState } from "react"

export default function useLoginViewModel() {

    const [user, setUser] = useState<UserType>({
        email: "",
        password: ""
    })

    const handleLogin = async (email: string, password: string) => {
        try {
  const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URI}/auth/login`, {
                email, password
            })

            const token = response.data.token;
            localStorage.setItem('token', token);
            console.log('Tokne salvo com sucesso')
        } catch (error) {
            console.error('Erro ao fazer login', error)
        }
    }

    return {user, setUser, handleLogin}
}