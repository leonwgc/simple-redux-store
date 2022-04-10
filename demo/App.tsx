import React from 'react';
import { Space, Avatar, Button } from 'react-uni-comps';
import Name from './Name';
import Age from './Age';

export default function App() {
  return (
    <Space direction="vertical" size={24}>
      <Name />

      <Avatar />

      <Age />

      <Button>hello</Button>
    </Space>
  );
}
