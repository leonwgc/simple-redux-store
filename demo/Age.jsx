import React from 'react';
import { Space, InputNumber } from 'react-uni-comps';
import { useAppData, useUpdateStore } from '../src';

export default function Age() {
  const updateStore = useUpdateStore();
  const { age = '' } = useAppData('age');

  return (
    <Space direction="vertical" style={{ border: '1px solid #ccc', padding: 24 }}>
      <div>useAppData('age') will only re-render when age change</div>
      <InputNumber placeholder="age" value={age} onChange={(v) => updateStore({ age: v })} />
    </Space>
  );
}
