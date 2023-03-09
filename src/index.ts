import { useSelector, shallowEqual } from 'react-redux';
import { applyMiddleware, compose, createStore, Store } from 'redux';
import createRootReducer, { rootAppName } from './reducers';
export { default as useUpdateStore } from './hooks/useUpdateStore';
export { Provider } from 'react-redux';

/**
 * Create store
 *
 * @param {(Record<string, unknown>)} [initState={}] Initial state
 * @param {boolean} [trace=false] Whether to enable redux-devtool trace
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

/**
 *  Root state. all global state stored as props of state.app as convension.
 */
export type RootState = {
  [rootAppName]: Record<string, unknown>;
};

/**
 * Equality fn used for inner react-redux useSelector hook
 */
export type EqualityFn = (left: any, right: any) => boolean;

const defaultEqualFnFactory = (props?: string | string[]) => (left, right) => {
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
};

/**
 * Get app state
 * @param props string | string[], props to get in state.app, if not defined , state.app will be returned.
 * @param equalityFn (left: any, right: any) => boolean, By default direct prop of state.app will be shallowly compared. If you need further optimization you can provide your own.
 * @returns state.app object or props you defined in the first param.
 */
export const useAppData = (
  props?: string | string[],
  equalityFn?: EqualityFn
): Record<string, any> => {
  return useSelector((state: RootState) => {
    const app = state[rootAppName] || {};

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
  }, equalityFn || defaultEqualFnFactory(props));
};
