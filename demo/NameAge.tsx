import React from 'react';
import { useAppData } from '../src';

export default function NameAge() {
  const data = useAppData(['name', 'age']);
  const { name = 'wgc', age = 'age' } = data;

  return (
    <div>
      <div>
        {name}:{age}
      </div>
    </div>
  );
}
