import { applyMiddleware, compose, createStore, Store } from 'redux';
import createRootReducer from './reducers';
export { default as useUpdateStore } from './hooks/useUpdateStore';
export { useSelector, Provider } from 'react-redux';

let composeEnhancers = compose;

type Window = {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: ({ trace: boolean }) => void;
};

const win: Window | Record<string, any> = window || {};

if ('__REDUX_DEVTOOLS_EXTENSION_COMPOSE__' in win) {
  composeEnhancers = win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true });
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
