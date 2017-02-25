import { bindActionCreators } from 'redux';
import { increment, decrement, reset, productApi } from './SignUpActions';
import { store } from '../../../store';

const actions = {
  reset,
  increment,
  decrement,
  productApi,
};

export default bindActionCreators(actions, store.dispatch);
