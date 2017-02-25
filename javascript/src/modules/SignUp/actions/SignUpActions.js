import {
  RESET,
  INCREMENT,
  DECREMENT,
} from './SignUpActionTypes';

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const reset = () => ({
  type: RESET,
});
