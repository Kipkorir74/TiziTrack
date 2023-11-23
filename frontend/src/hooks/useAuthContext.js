import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";


export const useAuthContext = () => {

    // useContext is a hook that allows functional components to subscribe to context changes
    const context = useContext(AuthContext)
    // If the context is not found, throw an error indicating that the hook must be used within a useAuthContextProvider

    if (!context) {
        throw Error('useAuthContext must be inside a useAuthContextProvider')
    }
    // If the context is found, return the context object

    else {
        return context
    }

}