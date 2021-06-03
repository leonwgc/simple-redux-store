// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { update } from '../actions';

export default function useUpdateStore(): (payload: Record<string, unknown> | undefined) => void {
  const dispatch = useDispatch();

  return useCallback(
    (payload) => {
      update(dispatch)({ ...payload });
    },
    [dispatch]
  );
}
