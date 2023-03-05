import { Store } from 'redux';
export { default as useUpdateStore } from './hooks/useUpdateStore';
export { Provider } from 'react-redux';
/**
 * Create store
 *
 * @param {(Record<string, unknown>)} [initState={}] Initial state
 * @param {boolean} [trace=false] Whether to enable redux-devtool trace
 * @return {*}  {Store}
 */
export declare const configureStore: (initState?: Record<string, unknown>, trace?: boolean) => Store;
/**
 *  Root state. all global state stored as props of state.app as convension.
 */
export declare type RootState = {
    app: Record<string, unknown>;
};
/**
 * Equality fn used for inner react-redux useSelector hook
 */
export declare type EqualityFn = (left: any, right: any) => boolean;
/**
 * Get app state
 * @param props string | string[], props to get in state.app, if not defined , state.app will be returned.
 * @param equalityFn (left: any, right: any) => boolean, By default direct prop of state.app will be shallowly compared. If you need further optimization you can provide your own.
 * @returns state.app object or props you defined in the first param.
 */
export declare const useAppData: (props?: string | string[], equalityFn?: EqualityFn) => Record<string, any>;
