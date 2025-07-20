"use client"
import { useState } from "react"

export default function useLoginViewModel() {

    const [user, setUser] = useState<UserType>({
        email: "",
        password: ""
    })
    return {user, setUser}
}