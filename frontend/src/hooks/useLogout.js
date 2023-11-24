import { useAuthContext } from "./useAuthContext"
import { useWorkoutsContext } from "./useWorkotsContext"

export const useLogout = () => {
    const {dispatch} = useAuthContext ()
    const {dispatch:workoutsDispatch} = useWorkoutsContext ()

    const logout = () => {
        // Remove user from local storage
        localStorage.removeItem("user")

        //dispatch logout action
        dispatch({type:"LOGOUT"})
        workoutsDispatch({type:'SET_WORKOUTS', payload:null})

    }
    return {logout}
}