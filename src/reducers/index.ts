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

const createRootReducer: () => Reducer = () => combineReducers({ app });

export default createRootReducer;
