import { useSelector, shallowEqual } from 'react-redux';
import { applyMiddleware, compose, createStore, Store } from 'redux';
import createRootReducer from './reducers';
export { default as useUpdateStore } from './hooks/useUpdateStore';
export { Provider } from 'react-redux';

/**
 * Create store
 *
 * @param {(Record<string, unknown>)} [initState={}] Initial state
 * @param {boolean} [trace=false] Whether enable redux-devtool trace
 * @return {*}  {Store}
 */
export const configureStore = (initState: Record<string, unknown> = {}, trace = false): Store => {
  let composeEnhancers = compose;

  if (trace && typeof window !== 'undefined') {
    if (typeof window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] === 'function') {
      composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({ trace: true });
    }
  }

  const store = createStore(
    createRootReducer(),
    { app: initState },
    composeEnhancers(applyMiddleware())
  );

  return store;
};

type RootState = {
  app: Record<string, unknown>;
};

/**
 * Get app state
 *
 *
 * @param {(string | string[])} [props] Prop| Props to get in app state, if undefined, all props in app will return.
 * @return {*} object
 */
export const useAppData = (props?: string | string[]): Record<string, any> => {
  return useSelector(
    (state: RootState) => {
      const app = state.app || {};

      if (!props) {
        return app;
      }

      if (typeof props === 'string') {
        return { [props]: app[props] };
      }

      if (Array.isArray(props) && props.length > 0) {
        const result = {};
        props.map((f) => (result[f] = app[f]));
        return result;
      }

      return app;
    },
    (left, right) => {
      if (!props) {
        return left === right;
      }

      if (typeof props === 'string') {
        return shallowEqual(left[props], right[props]);
      }

      if (Array.isArray(props) && props.length > 0) {
        for (const f of props) {
          if (!shallowEqual(left[f], right[f])) {
            return false;
          }
        }
      }

      return true;
    }
  );
};
