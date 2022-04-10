import React from 'react';
import { Button, nanoid, Avatar, Space } from 'react-uni-comps';
import { useStoreData, useUpdateStore } from '../src';

export default function Name() {
  const updateStore = useUpdateStore();
  const { name1 = 'name1' } = useStoreData();

  return (
    <Space>
      <Button outlined block onClick={() => updateStore({ name1: 'name1--' + nanoid() })}>
        {name1}
      </Button>
      <Avatar />
    </Space>
  );
}
