 import React from 'react'
 import { useWorkoutsContext } from '../hooks/useWorkotsContext'

//  date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

 const WorkoutDetails = ({workout}) => {

  const {  dispatch } = useWorkoutsContext()
  
  const handleDelete = async () =>{
    const response = await fetch('http://localhost:4000/api/tizi/' + workout._id, {
      method:'DELETE'
    })
    const json = await response.json()

    if (response.ok){
      dispatch({type:'DELETE_WORKOUT', payload:json})
    }
    console.log('Workout ' +workout._id + " deleted")
  }
   return (
     <div className='workout-details'>
      <h4> {workout.title}</h4>
      <p><strong>Load (kg): </strong>{workout.load}</p>
      <p><strong>Reps : </strong>{workout.reps}</p>
      <p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix:true})}</p>
      <span className='material-symbols-outlined' onClick={handleDelete}>Delete</span>
     </div>
   )
 }
 
 export default WorkoutDetails
 