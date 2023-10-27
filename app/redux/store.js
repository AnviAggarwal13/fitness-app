// store.js
import { createStore, combineReducers } from 'redux';
import workoutReducer from './workoutReducer';

const rootReducer = combineReducers({
  workout: workoutReducer,
});

const store = createStore(rootReducer);

export default store;
