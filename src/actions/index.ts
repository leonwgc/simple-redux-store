/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Update } from '../reducers';

export const update =
  (dispatch) =>
  (data: Record<string, unknown> | null = {}): void =>
    dispatch({ type: Update, payload: data });
