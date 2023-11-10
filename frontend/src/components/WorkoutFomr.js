import React, { useState } from 'react'

const WorkoutFomr = () => {
    const [title, setTitle] = useState('')
    const [reps, setReps] = useState('')
    const [load, setLoad] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async(e) =>{
        e.preventDefault()

        const workout = {title, load, reps}

        const response = await fetch ('http://localhost:4000/api/tizi/',{
            method:'POST',
            body:JSON.stringify(workout),
            headers: {
                'Content-type': 'application/JSON'
            }
        })
        const json = await response.json()

        if (!response.ok){
            setError(json.error)
        }
        else {
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            console.log('new workout added', json)
        }
    }

    return (
        <div>
            <form className='create'  onSubmit={handleSubmit}>
                <h3>Add New Workout</h3>
                <label>Tizi title</label>
                <input
                    type='text'
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                />

                <label>Load (in kg)</label>
                <input
                    type='text'
                    value={load}
                    onChange={(e) => {
                        setLoad(e.target.value)
                    }}
                />

                <label>Reps</label>
                <input
                    type='text'
                    value={reps}
                    onChange={(e) => {
                        setReps(e.target.value)
                    }}
                />
                <button>Add Workout</button>
                {error && <div className='error'>{error}</div>}

            </form>
        </div>
    )
}

export default WorkoutFomr