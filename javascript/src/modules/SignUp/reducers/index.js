import {
  RESET,
  INCREMENT,
  DECREMENT,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
} from '../actions/SignUpActionTypes';

export type User = {
  male?: bool,
  image?: string,
  dob?: string,
  email?: string,
  number?: number,
  name?: string,
};

const initialState = {
  count: 0,
  isLoading: false,
  product: [],
  male: true,
  image: null,
  dob: null,
  email: "",
  name: "",
  number: null
};

export default (state = initialState, action) => {
  if (action.type === 'undefined') {
    return state;
  }

  switch (action.type) {
    
    case "FORM_SET_TEXT":
      return {
        ...state,
        [action.field]: action.value,
        error: undefined
      };

    default:
      return state;
  }
}
