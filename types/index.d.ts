import { Store } from 'redux';
export { default as useUpdateStore } from './hooks/useUpdateStore';
export { useSelector, Provider } from 'react-redux';
/**
 * create store
 *
 * @param {(Record<string, unknown>)} [initState={}] initial state
 * @param {boolean} [trace=false] enable redux-devtool trace
 * @return {*}  {Store}
 */
export declare const configureStore: (
  initState?: Record<string, unknown>,
  trace?: boolean
) => Store;
/**
 * get app state
 *
 *
 * @param {(string | string[])} [props] prop| props to get in app state, if not set, all props in app will return.
 * @return {*} object
 */
export declare const useAppData: (props?: string | string[]) => Record<string, any>;
export default configureStore;
