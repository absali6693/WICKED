import {
  RESET,
  INCREMENT,
  DECREMENT,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
} from '../actions/SignUpActionTypes';

const initialState = {
  count: 0,
  isLoading: false,
  product: [],
};

function Count(state = initialState, action) {
  if (action.type === 'undefined') {
    return state;
  }

  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };

    case DECREMENT:
      return { count: state.count - 1 };

    case GET_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        product: action.data,
      };

    case GET_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    case RESET:
      return initialState;

    default:
      return state;
  }
}

export default Count;
