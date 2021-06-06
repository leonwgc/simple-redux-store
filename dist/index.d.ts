import { Store } from 'redux';
export { default as useUpdateStore } from './hooks/useUpdateStore';
export { useSelector, Provider } from 'react-redux';
export declare const configureStore: (preloadedState: Record<string, unknown>) => Store;
export default configureStore;
