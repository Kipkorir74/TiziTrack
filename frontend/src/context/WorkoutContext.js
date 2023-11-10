import { createContext, useReducer } from "react";

// create a new context called WorkoutsContext using the createContext function
export const WorkoutsContext = createContext()

//the function workouts reducer takes in two parameters and updates state based on the action type
export const workoutsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload
            }

        case 'CREATE_WORKOUT':
            return {
                workouts: [action.payload, ...state.workouts]
            }
        default:
            return state
    }
}


export const WorkoutsContextProvider = ({ children }) => {
//Manage the states based on the workoutsReducer function
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null
    })



    return (
        // value prop set to the object {state, dispatch } avails the current state and the dispacth
        // function to the components that consume this context
        <WorkoutsContext.Provider value={{ state, dispatch }}>
            {children}
        </WorkoutsContext.Provider>
    )
}