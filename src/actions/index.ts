/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Update } from '../reducers';

export const update =
  (dispatch) =>
  (data: Record<string, unknown> = {}): void =>
    dispatch({ type: Update, payload: data });
