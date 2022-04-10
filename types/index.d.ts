import { Store } from 'redux';
export { default as useUpdateStore } from './hooks/useUpdateStore';
export { useSelector, Provider } from 'react-redux';
/**
 * 创建全局状态
 *
 * @param {(Record<string, unknown>)} [initState={}] 初始状态
 * @param {boolean} [trace=false] redux-devtool追踪
 * @return {*}  {Store}
 */
export declare const configureStore: (
  initState?: Record<string, unknown>,
  trace?: boolean
) => Store;
/**
 * 取redux状态数据
 *
 * @return {*}  {Record<string, unknown>}
 */
export declare const useStoreData: () => Record<string, unknown>;
export default configureStore;
