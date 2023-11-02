import React from 'react'
import { useEffect, useState } from 'react'

const Home = () => {
    const [workouts, setWorkouts] = useState(null);

    //The use effect fires only once upon loadng, thus the empty array
    useEffect(() => {
        const retrieveWorkouts = async () => {
            const response = await fetch('/api/tizi/')
            const json = response.json()

            if (response.ok) {
                setWorkouts(json)
            }
        }
        retrieveWorkouts()
    }, [])
    return (
        <div className='home'>
            <div className='workouts'>
                {
                    workouts && workouts.length >0 ?
                    workouts.map((workout) => (
                    <p key={workout._id}>{workout.title}</p>
                ))
                : "No data available"}
            </div>
        </div>
    )
}

export default Home
