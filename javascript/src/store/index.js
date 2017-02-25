import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
/* eslint-disable import/no-extraneous-dependencies */
import { composeWithDevTools } from 'remote-redux-devtools';
/* eslint-enable import/no-extraneous-dependencies */
import reducers from '../reducers';
import Config from '../config';


export default function configureStore(initialState, reduxLogger) {
  const middleWares = [];
  if (reduxLogger) {
    middleWares.push(createLogger());
  }
  const enhancer = Config.REMOTE_DEV_TOOLS
    ? composeWithDevTools(applyMiddleware(...middleWares))
    : compose(applyMiddleware(...middleWares));

  const Store = createStore(reducers, initialState, enhancer);

  if (module.hot) {
    module.hot.accept(() => {
      /* eslint-disable global-require */
      const nextRootReducer = require('../reducers').default;
      /* eslint-enable global-require */
      Store.replaceReducer(nextRootReducer);
    });
  }

  return Store;
}

export const store = configureStore({}, Config.REDUX_LOGGER);
