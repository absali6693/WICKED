import { combineReducers } from 'redux';
import count from '../modules/SignUp/reducers';

// Import and map reducers with a key here.

const reducers = {
  count,
};

export default combineReducers(reducers);
