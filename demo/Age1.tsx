import React from 'react';
import { Input, Space } from 'react-uni-comps';
import { useUpdateStore, useSelector } from '../src';

export default function Age1() {
  const updateStore = useUpdateStore();
  const { age = '' } = useSelector((s) => s.app); // will always re-render

  return (
    <Space direction="vertical" style={{ border: '1px solid #ccc', padding: 24 }}>
      <div>useSelector will always re-render</div>
      <Input value={age} onChange={(v) => updateStore({ age: v })} />
    </Space>
  );
}
