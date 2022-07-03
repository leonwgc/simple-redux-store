import { useSelector, shallowEqual } from 'react-redux';
import { applyMiddleware, compose, createStore, Store } from 'redux';
import createRootReducer from './reducers';
export { default as useUpdateStore } from './hooks/useUpdateStore';
export { useSelector, Provider } from 'react-redux';

/**
 * create store
 *
 * @param {(Record<string, unknown>)} [initState={}] initial state
 * @param {boolean} [trace=false] enable redux-devtool trace
 * @return {*}  {Store}
 */
export const configureStore = (initState: Record<string, unknown> = {}, trace = false): Store => {
  let composeEnhancers = compose;

  if (trace && typeof window !== 'undefined') {
    if ('__REDUX_DEVTOOLS_EXTENSION_COMPOSE__' in window) {
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
 * get app state
 *
 *
 * @param {(string | string[])} [props] prop| props to get in app state, if not set, all props in app will return.
 * @return {*} object
 */
export const useAppData = (props?: string | string[]): Record<string, any> => {
  return useSelector(
    (state: RootState) => {
      // top-level app state
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

export default configureStore;
