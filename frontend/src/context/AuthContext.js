import { createContext, useReducer } from "react";

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
 const [state, dispatch] = useReducer(authReducer, {
    user:null
 })
 console.log("Authcontext state:", state)

 return (
    // value prop set to the object {state, dispatch } avails the current state and the dispacth
    // function to the components that consume this context
    <AuthContext.Provider value={{ ...state, dispatch }}>
        {children}
    </AuthContext.Provider>
)
}