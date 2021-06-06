import { applyMiddleware, compose, createStore, Store } from 'redux';
import createRootReducer from './reducers';
export { default as useUpdateStore } from './hooks/useUpdateStore';
export { useSelector, Provider } from 'react-redux';

let composeEnhancers = compose;

if ('__REDUX_DEVTOOLS_EXTENSION_COMPOSE__' in window) {
  composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({ trace: true });
}

export const configureStore: (preloadedState: Record<string, unknown>) => Store = (
  preloadedState: Record<string, unknown>
) => {
  const store = createStore(
    createRootReducer(),
    preloadedState,
    composeEnhancers(applyMiddleware())
  );

  return store;
};

export default configureStore;
