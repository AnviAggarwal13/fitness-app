// reducers/workoutReducer.js

const initialState = {
  totalCalories: 0,
  totalMinutes: 0,
  totalWorkouts: 0,
  totalCompleted: [], // totalCompleted is an array
};

const workoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CALORIES':
      return {
        ...state,
        totalCalories: action.payload,
      };
    case 'ADD_MINUTES':
      return {
        ...state,
        totalMinutes: action.payload,
      };
    case 'ADD_WORKOUTS':
      return {
        ...state,
        totalWorkouts: action.payload,
      };
    case 'ADD_COMPLETED':
      return {
        ...state,
        totalCompleted: action.payload, // Push data into totalCompleted
      };
    default:
      return state;
  }
};

export default workoutReducer;
