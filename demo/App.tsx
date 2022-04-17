import React from 'react';
import { Space, Button } from 'react-uni-comps';
import Name from './Name';
import Age from './Age';
import Age1 from './Age1';
import NameAge from './NameAge';
import { useUpdateStore } from '../src';

export default function App() {
  const updateStore = useUpdateStore();

  return (
    <Space direction="vertical" size={24}>
      <Name />

      <Age />

      <Button>hello</Button>

      <Age1 />

      <Button onClick={() => updateStore({ age: '20' })}>set age to 20</Button>

      <NameAge />

      <Button onClick={() => updateStore({ name: 'wgc' })}>set name to wgc</Button>
    </Space>
  );
}
