// actions/workoutActions.js

export const addCalories = (calories) => ({
    type: 'ADD_CALORIES',
    payload: calories,
  });
  
  export const addMinutes = (minutes) => ({
    type: 'ADD_MINUTES',
    payload: minutes,
  });
  
  export const addWorkouts = (workouts) => ({
    type: 'ADD_WORKOUTS',
    payload: workouts,
  });
  
  export const addCompleted = (completed) => ({
    type: 'ADD_COMPLETED',
    payload: completed,
  });
  