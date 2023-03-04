

# 简单好用的 redux 状态管理

### 安装 (Installation)

[npm](https://npmjs.org/) / [yarn](https://yarnpkg.com)

    $ npm install --save simple-redux-store
    $ yarn add simple-redux-store

### 特点

1. 简单, 一共4个api，configureStore用于创建全局状态，Provider组件将store提供给子孙组件，useAppData用于获取store状态，useUpdateStore 用户获取更新store的函数
2. 支持 web/node/taro/微信小程序等环境

### Usage

1. 创建 store, 通过Provider提供全局store
```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, configureStore } from 'simple-redux-store';
import App from './App';

/**
 * Create store
 * @param initialState, Initial states
 * @param tracing, Enable/disable redux-devtool trace
 */
const store = configureStore({ name: 'leonwgc' }, true);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

2.读取状态

```js
import React from 'react';
import { useAppData } from 'simple-redux-store';

export default function App() {
  const app = useAppData();

  return <div>hello {app.name}</div>;
}
```

3.更新状态

```js
import React from 'react';
import { useUpdateStore, useAppData } from 'simple-redux-store';

export default function App() {
  const updateStore = useUpdateStore();

  const { name = 'leonwgc' } = useAppData('name');

  return (
    <div
      onClick={() => {
        updateStore({ name: 'new name' });
      }}
    >
      {app.name}
    </div>
  );
}
```
