import React from 'react';
import { Button, nanoid, Space } from 'react-uni-comps';
import { useUpdateStore, useAppData } from '../src';

export default function Name() {
  const updateStore = useUpdateStore();
  const { name = 'wgc' } = useAppData('name');

  return (
    <div>
      <div>useAppData will only re-render when name change</div>
      <Button outlined block onClick={() => updateStore({ name: 'name--' + nanoid() })}>
        {name}
      </Button>
    </div>
  );
}
