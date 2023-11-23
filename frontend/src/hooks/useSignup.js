import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { AuthContext } from "../context/AuthContext";

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const signup = async (name, email, password) => {
        setIsLoading(true)
        setError(null)

        const user = {name, email,password}
        const response = await fetch('http://localhost:4000/api/user/signup', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/JSON'
            }
        })
        const json = await response.json()

        if (!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        else {
            //Save user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            // update AuthContext    
            dispatch({type:'LOGIN', payload:json})

            setIsLoading(false)
        }
    }
    return {signup, isLoading, error}
}