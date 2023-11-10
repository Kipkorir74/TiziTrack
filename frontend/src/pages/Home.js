import React from 'react'
import { useEffect } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkotsContext'

import WorkoutDetail from '../components/workoutDetails'
import WorkoutFomr from '../components/WorkoutFomr'

const Home = () => {
    const {workouts, dispatch} = useWorkoutsContext()

    //The use effect fires only once upon loadng, thus the empty array
    useEffect(() => {
        const retrieveWorkouts = async () => {
            const response = await fetch('http://localhost:4000/api/tizi/')
            const json = await response.json()

            if (response.ok) {
                dispatch({type:'SET_WORKOUTS', payload:json})
            }
            console.log(json);
        }
        
        retrieveWorkouts()
    }, [])
    
    return (
        <div className='home'>
            <div className='workouts'>
                {
                    workouts && workouts.length >0 ?
                    workouts.map((workout) => (
                        
                    <WorkoutDetail key={workout._id} workout= {workout}/>
                       
                    ))
                : "No data available"}
            </div>
            <div>
                <WorkoutFomr/>
            </div>
        </div>
    )
}

export default Home
