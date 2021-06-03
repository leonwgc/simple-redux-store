import { Reducer } from 'redux';
import { History } from 'history';
export declare const Update = "Update";
declare const createRootReducer: (history: History) => Reducer;
export default createRootReducer;
