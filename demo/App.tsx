import React, { useRef, useState } from 'react';
import { findDOMNode } from 'react-dom';
import { Button, styled } from 'react-uni-comps';
import { useUpdateStore, useAppData } from '../src';

import './App.scss';
import Accordion from 'alcedo-ui/Accordion';
import Popover from 'alcedo-ui/Popover';
import TextArea from 'alcedo-ui/TextArea';

const StyledTrigger = styled.div`
  width: 400px;
  height: 200px;
`;

export default function App() {
  const updateStore = useUpdateStore();
  const { list = [1, 2, 3] } = useAppData();

  const [v, setV] = useState(false);

  const ref = useRef();
  const textAreaRef = useRef();

  const [value, setValue] = useState('');

  const onTextChange = (value) => {
    setValue(value);
    if (value) {
      const len = value.length;
      if (value[len - 1] === '{') {
        setV(true);
        return;
      }
    }
    setV(false);
  };

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

      {/* <div
        ref={(el) => (this.trigger0 = findDOMNode(el))}
        className="trigger-area"
        onMouseOver={() => this.show(0)}
      >
        <List data={items} />
      </div> */}

      <StyledTrigger>
        <TextArea
          autoHeight
          value={value}
          style={{ height: 200, width: '100%' }}
          onChange={onTextChange}
          ref={textAreaRef}
        />
      </StyledTrigger>

      <Popover
        theme={Popover.Theme.PRIMARY}
        visible={v}
        // triggerEl={textAreaRef.current}
        onRequestClose={() => setV(false)}
        position={Popover.Position.BOTTOM_LEFT}
        resetPositionWait={0}
      >
        <Accordion title="Title" className="accordion-examples" ref={ref}>
          <div className="accordion-examples-content">
            {list.map((item) => (
              <div
                onClick={() => {
                  const v = value + 'list' + item + '}';
                  setValue(v);
                  setV(false);

                  textAreaRef.current.focus();
                }}
              >
                list{item}
              </div>
            ))}
          </div>
        </Accordion>
      </Popover>
    </div>
  );
}
