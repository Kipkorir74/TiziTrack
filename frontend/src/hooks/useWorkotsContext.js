import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutsContext = () => {

    // useContext is a hook that allows functional components to subscribe to context changes
    const context = useContext(WorkoutsContext)
    // If the context is not found, throw an error indicating that the hook must be used within a WorkoutsContextProvider

    if (!context) {
        throw Error('useWorkoutsContext must be inside a WorkoutsContextProvider')
    }
    // If the context is found, return the context object

    else {
        return context
    }

}