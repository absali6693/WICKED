import { combineReducers } from 'redux';
import SignUp from '../modules/SignUp/reducers';

// Import and map reducers with a key here.

const reducers = {
  SignUp,
};

export default combineReducers(reducers);
