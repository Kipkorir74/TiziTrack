import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext()

export const AuthReducer = (state, action) =>{
    switch (action.type) {
        case 'LOGIN':
            return {
                user: action.payload
            }
            case 'LOGOUT':
                return {
                    user: null
                }
       
        default:
            return state
    }
}

export const AuthContextProvider = ({children}) =>{
// register state
 const [state, dispatch] = useReducer(AuthReducer, {
    user:null
 })

 //check for token in local storage to detrmine of to retain user in login mode
//  or kick them out
 useEffect(()=>{
    //parse the token to an object that we can use in js
    const user = JSON.parse(localStorage.getItem('user'))
    if (user){
        dispatch({type:'LOGIN', payload:user})
    }
    
 }, [])

 console.log("Authcontext state:", state)

 return (
    // value prop set to the object {state, dispatch } avails the current state and the dispacth
    // function to the components that consume this context
    <AuthContext.Provider value={{ ...state, dispatch }}>
        {children}
    </AuthContext.Provider>
)
}