import { Store } from 'redux';
export { default as useUpdateStore } from './hooks/useUpdateStore';
export { useSelector, Provider } from 'react-redux';
export { ConnectedRouter } from 'connected-react-router';
export declare const history: History;
export declare const configureStore: (preloadedState: Record<string, unknown>) => Store;
export default configureStore;
