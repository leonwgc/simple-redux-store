import { useSelector } from 'react-redux';
import { applyMiddleware, compose, createStore, Store } from 'redux';
import createRootReducer from './reducers';
export { default as useUpdateStore } from './hooks/useUpdateStore';
export { useSelector, Provider } from 'react-redux';

/**
 * 创建全局状态
 *
 * @param {(Record<string, unknown>)} [initState={}] 初始状态
 * @param {boolean} [trace=false] redux-devtool追踪
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
 * 取redux状态数据
 *
 * @return {*}  {Record<string, unknown>}
 */
export const useStoreData = (): Record<string, unknown> => {
  return useSelector((state: RootState) => state.app);
};

export default configureStore;
