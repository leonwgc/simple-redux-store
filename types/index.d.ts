import { Store } from 'redux';
export { default as useUpdateStore } from './hooks/useUpdateStore';
export { Provider } from 'react-redux';
/**
 * Create store
 *
 * @param {(Record<string, unknown>)} [initState={}] Initial state
 * @param {boolean} [trace=false] Whether enable redux-devtool trace
 * @return {*}  {Store}
 */
export declare const configureStore: (
  initState?: Record<string, unknown>,
  trace?: boolean
) => Store;
/**
 * Get app state
 *
 *
 * @param {(string | string[])} [props] Prop| Props to get in app state, if undefined, all props in app will return.
 * @return {*} object
 */
export declare const useAppData: (props?: string | string[]) => Record<string, any>;
