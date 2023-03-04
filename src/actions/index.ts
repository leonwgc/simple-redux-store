import type { Dispatch } from 'redux';
import { Update } from '../reducers';

export const update =
  (dispatch: Dispatch) =>
  (payload: Record<string, any> = {}): any =>
    dispatch({ type: Update, payload });
