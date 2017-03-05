import { bindActionCreators } from 'redux';
import { increment, decrement, reset, productApi, setFormValue } from './SignUpActions';
import { store } from '../../../store';

const actions = {
  reset,
  increment,
  decrement,
  productApi,
  setFormValue,
};

export default bindActionCreators(actions, store.dispatch);
