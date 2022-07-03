## simple-redux-store

简单易用的react-redux状态管理 (easy to use react-redux state management lib)

### 安装 (Installation)

[npm](https://npmjs.org/) / [yarn](https://yarnpkg.com)

    $ npm install --save simple-redux-store
    $ yarn add simple-redux-store

### 特点 (Features)

1. 简单, 一共 4 个 api (easy to use and there're only four APIs)
2. 支持 web / node / taro / 微信小程序等环境 (supports web / node / taro / wechat mini program / and other envs which redux supports)

### Usage

1. 创建 store, 通过 Provider 提供全局 store (Create store and pass it to Provider as globle state)

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, configureStore } from 'simple-redux-store';
import App from './App';

/**
 * create store
 * @param initialState, initial states
 * @param tracing, enable/disable redux-devtool trace
 */
const store = configureStore({ name: 'leonwgc'}, true);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

2.读取状态 (Get gloabal state via useAppData hooks)

```js
import React from 'react';
import { useAppData } from 'simple-redux-store';

export default function App() {
  /**
   * Get global state via useAppData
   */
  const app = useAppData();

  return <div>hello {app.name}</div>;
}
```

3.更新状态 (Set/Update gloabal state via useUpdateStore hooks)

```js
import React from 'react';
import { useUpdateStore, useAppData } from 'simple-redux-store';

export default function App() {
  /**
   * Set global state via useUpdateStore
   */
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
