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
 * 读取app状态
 *
 * @param {(string | string[])} [fileds] 读取的属性, 不传则返回整个app对象,推荐只传组件需要的属性，防止重复渲染
 * @return {*} app对象 / 只包含fields的app对象
 */
export declare const useAppData: (fileds?: string | string[]) => Record<string, any>;
export default configureStore;
