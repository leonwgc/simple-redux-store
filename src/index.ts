import { applyMiddleware, compose, createStore, Store } from 'redux';
import { createHashHistory, createBrowserHistory, createMemoryHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';
export { default as useUpdateStore } from './hooks/useUpdateStore';
export { useSelector, Provider } from 'react-redux';
export { ConnectedRouter } from 'connected-react-router';

let exHistory = null;

//browser,memory,hash
if ('__history__' in window) {
  switch (window['__history__']) {
    case 'browser':
      exHistory = createBrowserHistory();
      break;
    case 'hash':
      exHistory = createHashHistory();
      break;
    case 'memory':
      exHistory = createMemoryHistory();
      break;
    default:
      exHistory = createHashHistory();
      break;
  }
} else {
  exHistory = createHashHistory();
}

export const history: History = exHistory;

let composeEnhancers = compose;

if ('__REDUX_DEVTOOLS_EXTENSION_COMPOSE__' in window) {
  composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({ trace: true });
}

export const configureStore: (preloadedState: Record<string, unknown>) => Store = (
  preloadedState: Record<string, unknown>
) => {
  const store = createStore(
    createRootReducer(exHistory),
    preloadedState,
    composeEnhancers(applyMiddleware(routerMiddleware(exHistory)))
  );

  return store;
};

export default configureStore;
