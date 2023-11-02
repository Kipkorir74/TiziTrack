import React from 'react'
import { useEffect, useState } from 'react'

const Home = () => {
    const [workouts, setWorkouts] = useState(null);

    //The use effect fires only once upon loadng, thus the empty array
    useEffect(() => {
        const retrieveWorkouts = async () => {
            const response = await fetch('http://localhost:4000/api/tizi/')
            const json = await response.json()

            if (response.ok) {
                setWorkouts(json)
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
                    workouts.map((workout) => {
                        return(
                    <p key={workout._id}>{workout.title}</p>
                        )
                    })
                : "No data available"}
            </div>
        </div>
    )
}

export default Home
