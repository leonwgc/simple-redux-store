import { combineReducers, Reducer } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History, LocationState } from 'history';
export const Update = 'Update';

const initstate = {};

const app = (state = initstate, action) => {
  switch (action.type) {
    case Update: {
      return { ...state, ...action.payload };
    }
    default:
      return { ...state };
  }
};

const createRootReducer: (history: History) => Reducer = (history: History<LocationState>) =>
  combineReducers({ router: connectRouter(history), app });

export default createRootReducer;
