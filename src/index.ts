import { applyMiddleware, compose, createStore, Store } from 'redux';
import createRootReducer from './reducers';
export { default as useUpdateStore } from './hooks/useUpdateStore';
export { useSelector, Provider } from 'react-redux';

let composeEnhancers = compose;

if (typeof window !== 'undefined') {
  if ('__REDUX_DEVTOOLS_EXTENSION_COMPOSE__' in window) {
    composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({ trace: true });
  }
}

export const configureStore = (initState = {}): Store => {
  const store = createStore(
    createRootReducer(),
    { app: initState },
    composeEnhancers(applyMiddleware())
  );

  return store;
};

export default configureStore;
