import React, { useRef } from 'react';
import { Button } from 'react-uni-comps';
import { useUpdateStore, useAppData } from '../src';

import './App.scss';
import Accordion from 'alcedo-ui/Accordion';

export default function App() {
  const updateStore = useUpdateStore();
  const { list = [1, 2, 3] } = useAppData();

  const ref = useRef();

  return (
    <div>
      <Accordion title="Title" className="accordion-examples" ref={ref}>
        <div className="accordion-examples-content">
          {list.map((item) => (
            <div>list{item}</div>
          ))}
        </div>
      </Accordion>
      <Button
        onClick={() => {
          updateStore({ list: [1, 2, 3, 4, 5, 6] });
          ref.current.resetHeight();
        }}
      >
        add more
      </Button>
    </div>
  );
}
