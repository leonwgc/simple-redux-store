import { Store } from 'redux';
export { default as useUpdateStore } from './hooks/useUpdateStore';
export { useSelector, Provider } from 'react-redux';
export declare const configureStore: (initState?: {}) => Store;
export default configureStore;
