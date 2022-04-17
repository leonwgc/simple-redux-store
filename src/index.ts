/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector, shallowEqual } from 'react-redux';
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
 * 读取app状态
 *
 * @param {(string | string[])} [fileds] 读取的属性, 不传则返回整个app对象,推荐只传组件需要的属性，防止重复渲染
 * @return {*} app对象 / 只包含fields的app对象
 */
export const useAppData = (fileds?: string | string[]): Record<string, any> => {
  return useSelector(
    (state: RootState) => {
      // top-level app state
      const app = state.app || {};

      if (!fileds) {
        return app;
      }

      if (typeof fileds === 'string') {
        return { [fileds]: app[fileds] };
      }

      if (Array.isArray(fileds) && fileds.length > 0) {
        const result = {};
        fileds.map((f) => (result[f] = app[f]));
        return result;
      }

      return app;
    },
    (left, right) => {
      if (!fileds) {
        return left === right;
      }

      if (typeof fileds === 'string') {
        return shallowEqual(left[fileds], right[fileds]);
      }

      if (Array.isArray(fileds) && fileds.length > 0) {
        for (const f of fileds) {
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
