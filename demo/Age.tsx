import React from 'react';
import { Button, nanoid, Input, Space } from 'react-uni-comps';
import { useStoreData, useUpdateStore } from '../src';

export default function Name2() {
  const updateStore = useUpdateStore();
  const { name2 = 'name2', val = '' } = useStoreData();

  return (
    <Space direction="vertical">
      <Input value={val} onChange={(v) => updateStore({ val: v })} />
      <Button outlined block onClick={() => updateStore({ name2: 'name2--' + nanoid() })}>
        {name2}
      </Button>
    </Space>
  );
}
