import { combineReducers, Reducer } from 'redux';
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

export const rootAppName = '__APP__';

const createRootReducer = (): Reducer => combineReducers({ [rootAppName]: app });

export default createRootReducer;
