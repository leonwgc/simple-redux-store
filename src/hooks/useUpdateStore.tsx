// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { update } from '../actions';

/**
 * 获得更新状态函数
 *
 * @export
 * @return {*}  {(payload: Record<string, unknown>) => void}
 */
export default function useUpdateStore(): (payload: Record<string, unknown>) => void {
  const dispatch = useDispatch();

  return useCallback(
    (payload) => {
      update(dispatch)({ ...payload });
    },
    [dispatch]
  );
}
