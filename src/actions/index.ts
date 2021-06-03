/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Update } from '../reducers';

export const update = (dispatch) => (data = {}) => dispatch({ type: Update, payload: data });
