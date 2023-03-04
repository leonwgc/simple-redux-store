import React from 'react';
import { Input, Space } from 'react-uni-comps';
import { useAppData, useUpdateStore } from '../src';

export default function Age1() {
  const updateStore = useUpdateStore();
  const { age } = useAppData();

  return (
    <Space direction="vertical" style={{ border: '1px solid #ccc', padding: 24 }}>
      <div>useAppData() will always re-render</div>
      <Input placeholder="age" value={age} onChange={(v) => updateStore({ age: v })} />
    </Space>
  );
}
